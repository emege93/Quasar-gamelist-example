
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/info',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'info', component: () => import('pages/info.vue') },
      { path: 'contacto', name: 'contacto', component: () => import('pages/contacto.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'inicio', component: () => import('pages/info.vue') }
    ]
  },
  {
    path: '/games',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'games', component: () => import('pages/games/gamesIndex.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
