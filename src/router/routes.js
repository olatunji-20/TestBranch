const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about-us', component: () => import('pages/AboutUs.vue') },
      { path: '/features-and-pricing', component: () => import('pages/FeaturesPricing.vue') },
      { path: '/contact-us', component: () => import('pages/ContactUs.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/signup', component: () => import('pages/Signup.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
