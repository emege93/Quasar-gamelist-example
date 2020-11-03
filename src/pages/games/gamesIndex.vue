<template>
  <q-page class="q-pa-md">
      <div class="row rowTitle">
        <div class="col-12">
            <h3>Juegos</h3>
        </div>
      </div>
      <gameListFilter :search="search"/>
      <div class="row" v-if="gamesList !== null">
        <div class="col-12">
            <div v-for="(game) in gamesList" :key="game.id">
                <gameListContainer :game="game"/>
            </div>
        </div>
      </div>
      <div class="row rowTitle">
            <div class="col-12">
                <q-btn color="primary" label="Cargar" @click="loadMore" class="full-width"/>
            </div>
      </div>
      <q-inner-loading class="loading" :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
  </q-page>
</template>

<script>
import gameListContainer from 'components/games/GameListContainer'
import gameListFilter from 'components/games/GamesListFilter'

export default {
  name: 'GamesIndex',
  components: {
    gameListContainer,
    gameListFilter
  },
  data () {
    return {
      gamesList: null,
      page: 1,
      visible: false,
      search: null
    }
  },
  created () {
    this.loadGames()
  },
  methods: {
    async buscar () {
      this.page = 1
      this.gamesList = null
      this.loadGames()
    },
    async loadMore () {
      this.page++
      this.loadGames()
    },
    async loadGames () {
      this.visible = true
      var url = 'https://api.rawg.io/api/games?page_size=20'
      if (this.page !== null) {
        url += '&page=' + this.page
      }
      if (this.search !== null) {
        url += '&search=' + this.search
      }
      await this.$axios.get(url).then((response) => {
        if (this.gamesList !== null) {
          this.gamesList.push(...response.data.results)
        } else {
          this.gamesList = response.data.results
        }
      }).catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
      this.visible = false
    }
  }
}
</script>
