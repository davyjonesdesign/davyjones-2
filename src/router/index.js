import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide-down' }
    },
    {
      path: '/work',
      name: 'work',
      meta: { transition: 'slide-up' },
      component: () => import('../views/WorkView.vue')
    },
    {
      path: '/work/:alias',
      name: 'WorkDetails',
      meta: { transition: 'slide-left' },
      component: () => import('../components/WorkDetails.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { transition: 'slide-up' },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/connect',
      name: 'connect',
      meta: { transition: 'slide-up' },
      component: () => import('../views/ConnectView.vue')
    },
    {
      path: '/:catchAll(.*)',
      meta: { transition: 'slide-up' },
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

// Reset scroll position on route change
router.beforeEach((to, from, next) => {
  const scrollingDiv = document.getElementById('main-wrapper');

  if (scrollingDiv) {
    scrollingDiv.scrollTop = 0;
  }

  next();
});

export default router
