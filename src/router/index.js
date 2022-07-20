import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/Landing.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue'),
      },
      {
        path: 'portfolio',
        component: () => import('../views/Portfolio.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
