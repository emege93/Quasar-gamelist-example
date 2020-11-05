<template>
 <div class="row rowFilter">
   <div class="col-12 col-sm-12 col-md-4 col-lg-2 filterText">
       <q-input v-model="search" label="Filtro por titlulo" placeholder="'Metal Gear' Por ejemplo" />
   </div>
   <div class="col-12 col-sm-12 col-md-4 col-lg-3 filterSelect">
     <q-select v-model="genres" :options="genresOptions" label="Filtro por genero" placeholder="Seleccione genero"
     option-value="id" option-label="name" emit-value map-options></q-select>
   </div>
    <div class="col-12 col-sm-12 col-md-2 col-lg-3 filterSelect">
      <q-input v-model="fecha" label="Fecha" readOnly>
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="range" range></q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
   <div class="col-5 col-sm-5 col-md-4 col-lg-4 filterButton">
       <q-btn color="secondary" icon-right="settings_backup_restore" label="limpiar" @click="limpiar" />
       <q-btn color="primary" icon-right="search" label="Buscar" @click="buscarEnComponente" />
   </div>
 </div>
</template>

<script>
export default {
  name: 'GamesListFilter',
  data () {
    return {
      range: null,
      search: null,
      genres: null,
      genresOptions: null,
      date: null,
      fecha: ''
    }
  },
  created () {
    this.loadGenres()
  },
  watch: {
    range: function (val) {
      this.date = val.from.replaceAll('/', '-') + ',' + val.to.replaceAll('/', '-')
      var dateFrom = new Date(val.from)
      var dateTo = new Date(val.to)
      this.fecha += dateFrom.getDate() + '/' + (dateFrom.getMonth() + 1) + '/' + dateFrom.getFullYear()
      this.fecha += ' - ' + dateTo.getDate() + '/' + (dateTo.getMonth() + 1) + '/' + dateTo.getFullYear()
    }
  },
  methods: {
    limpiar () {
      this.date = null
      this.genres = null
      this.search = null
      this.fecha = ''
      this.range = null
      this.buscarEnComponente()
    },
    buscarEnComponente () {
      this.$emit('filtrar', this.search, this.genres, this.date)
    },
    async loadGenres () {
      var url = 'https://api.rawg.io/api/genres?page_size=99'
      await this.$axios.get(url).then((response) => {
        this.genresOptions = response.data.results
      }).catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
      console.log(this.genresOptions)
    }
  }
}
</script>
