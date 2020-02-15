import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import skillsPage from './components/pages/skills';
import worksPage from './components/pages/works';
import reviewsPage from './components/pages/reviews';
import loginPage from './components/pages/login';

import store from "./store"

import axios from "axios";

const guard = axios.create({
    baseURL: 'https://webdev-api.loftschool.com/'
})

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
        component: loginPage,
        meta: {
            public: true
        }
    }
];


const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
    const isPublicRoute = to.matched.some(route => route.meta.public);
    const isUserLoggedIn = store.getters["user/userIsLoggedIn"];

    if(isPublicRoute===false && isUserLoggedIn===false){
        const token = localStorage.getItem('token');
        guard.defaults.headers['Authorization'] = `Bearer ${token}`;

        // Запрос к серверу за получением user
        // Вернет ошибку, если не будет токена
        // и перенаправит на страницу логина
        guard.get("user").catch(response => {
            router.replace('/login');
            localStorage.clear();
        }).then(response => {
            store.commit("user/SET_USER", response.data.user); 
            next();   
        });
    } else{
        next();
    }

  });

export default router;