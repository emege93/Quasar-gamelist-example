<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          QGames App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="q-pa-md">
      <div class="row">
        <div class="col-1 col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-10 col-sm-10 col-md-10 col-lg-10">
          <router-view />
        </div>
        <div class="col-1 col-sm-1 col-md-1 col-lg-1"></div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Inicio',
    caption: 'Pagina de inicio',
    icon: 'favorite',
    link: '/#/'
  },
  {
    title: 'Info',
    caption: 'Pagina de info',
    icon: 'favorite',
    link: '/#/info'
  },
  {
    title: 'Contacto',
    caption: 'Pagina de contacto',
    icon: 'favorite',
    link: '/#/info/contacto'
  },
  {
    title: 'Juegos',
    caption: 'Pagina de juegos',
    icon: 'games',
    link: '/#/games'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
