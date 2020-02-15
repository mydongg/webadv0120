<template lang="pug">
.admin
  //- шапка
  .header__outer
    .wrapper
      header.header
        .header__left
          .header__user
            .avatar.avatar--smol
              img.avatar__img(src="../images/content/user.jpg")
            .header__username Станислав Савиных
          .header__name Панель управления
        .header__right
          a.header__exit(
            href="#"
            @click.prevent="logoutUser"
          ) Выйти
  //- гор.навигация
  .nav__outer
    .wrapper
      nav.nav
        ul.nav__list
          li.nav__item(
            v-for="page in pages"
            :class="{'nav__item--current': page.path===currentPage}"
            )
            a.nav__link(@click='selectActivePage(page.path)') {{page.name}}
  router-view
  
</template>


<script>
import skillsPage from './components/pages/skills';
import worksPage from './components/pages/works';
import reviewsPage from './components/pages/reviews';
import { mapActions } from 'vuex';

export default {
  data(){
    return {
      pages: [
        {
          name: 'Обо мне',
          path: '/'
        },
        {
          name: 'Работы',
          path: '/works'
        },
        {
          name: 'Отзывы',
          path: '/reviews'
        }
      ],
      currentPage: this.$router.currentRoute.path
    }
  },
  components: {
    skillsPage, worksPage, reviewsPage
  },
  methods: {
    ...mapActions("user", ['logout']),
    selectActivePage(path){
      if(this.currentPage != path){
        this.$router.push(path);
        this.currentPage = path;
      }
    },
    logoutUser(){
      this.logout();
      this.$router.replace("/login")
    }
  }
}
</script>

<style lang="postcss">
@import '../styles/admin.pcss';
</style>

