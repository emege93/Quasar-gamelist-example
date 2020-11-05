<template>
  <q-page class="q-pa-md">
        <div class="q-pa-md q-gutter-sm">
            <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el label="Juegos" icon="games" />
            </q-breadcrumbs>
        </div>
      <div class="row rowTitle">
        <div class="col-12">
            <h3>Juegos</h3>
        </div>
      </div>
        <q-expansion-item
          class="shadow-1 overflow-hidden expansionItemCustom"
          icon="search"
          label="Filtros"
          header-class="bg-primary text-white"
          expand-icon-class="text-white"
        >
          <q-card>
            <q-card-section>
                    <gameListFilter @filtrar="buscar"/>
            </q-card-section>
          </q-card>
        </q-expansion-item>
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
      search: null,
      genre: null,
      date: null
    }
  },
  created () {
    this.loadGames()
  },
  methods: {
    async buscar (searchString, genreId, dateString) {
      this.date = dateString
      this.genre = genreId
      this.search = searchString
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
      if (this.genre !== null) {
        url += '&genres=' + this.genre
      }
      if (this.date !== null) {
        url += '&dates=' + this.date
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
