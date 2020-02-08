import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import skillsPage from './components/pages/skills';
import worksPage from './components/pages/works';
import reviewsPage from './components/pages/reviews';
import loginPage from './components/pages/login';

const routes =[
    {
        path: '/',
        component: skillsPage
    },
    {
        path: '/works',
        component: worksPage
    },
    {
        path: '/reviews',
        component: reviewsPage
    },
    {
        path: '/login',
        component: loginPage
    }
];


const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
    next();
  });

export default router;