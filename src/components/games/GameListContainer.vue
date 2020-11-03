<template>
  <div class="gameListContainer">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 imageListColumn">
              <img :src="game.background_image" alt="juego">
          </div>
          <div class="col-12 col-sm-12 col-md-8 col-lg-8 infoListColumn">
              <div class="row gameListTitle">
                  <div class="col-12">
                      {{game.name}}
                  </div>
              </div>
              <div class="row gameListInfo">
                  <div class="col-12">
                    <q-icon name="event"></q-icon> Lanzamiento: {{game.released}}
                  </div>
              </div>
              <div class="row gameListInfo">
                  <div class="col-12">
                      <q-icon name="av_timer"></q-icon> Tiempo de juego: {{game.playtime}}
                  </div>
              </div>
              <div class="row gameListInfo">
                  <div class="col-12">
                      <q-icon name="create"></q-icon> Metacritic: {{game.metacritic}}
                  </div>
              </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameListContainer',
  props: {
    game: {
      type: Object,
      required: true
    }
  }
}
</script>
