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
      { path: '/signup', component: () => import('pages/Signup.vue') },
      { path: '/terms-of-use', component: () => import('pages/TermsUse.vue') },
      { path: '/privacy-policy', component: () => import('pages/PrivacyPolicy.vue') },
      { path: '/accessibility', component: () => import('pages/Accessibility.vue') },
    ]
  },
  {
    path: '/certifications',
    component: () => import('layouts/CertLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/certificate/Certification.vue') },
      { path: '/analytics', component: () => import('src/pages/certificate/Analytics.vue') },
      { path: '/account', component: () => import('src/pages/certificate/Account.vue') },
      { path: '/groups-and-members', component: () => import('src/pages/certificate/GroupsMembers.vue') }
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
