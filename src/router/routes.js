const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/ListCocktail.vue') },
      { path: 'createCocktail', component: () => import('@/pages/CreateCocktail.vue') },
      { path: 'viewCocktail/:id', component: () => import('@/pages/ViewCocktail.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
