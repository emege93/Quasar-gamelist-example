<template>
 <div class="row rowFilter">
   <div class="col-9 filterText">
       <q-input v-model="search" label="Filtro por titlulo" placeholder="'Metal Gear' Por ejemplo" />
   </div>
   <div class="col-3 filterButton">
       <q-btn color="primary" icon-right="search" label="Buscar" @click="buscar" />
   </div>
 </div>
</template>

<script>
export default {
  name: 'GamesListFilter'
}
</script>
