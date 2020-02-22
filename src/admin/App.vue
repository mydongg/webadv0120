<template lang="pug">
.admin(
  @drop.prevent
  @dragover.prevent
)
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
  .error(v-if="errorMessage") {{errorMessage}}
  .update(v-if="updateMessage") {{updateMessage}}
</template>


<script>
import skillsPage from './components/pages/skills';
import worksPage from './components/pages/works';
import reviewsPage from './components/pages/reviews';
import { mapActions, mapState } from 'vuex';

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
      // костыль 80 уровня, так и не понял как правильно отловить this.$route.path
      currentPage: window.location.hash.slice(1)
    }
  },
  components: {
    skillsPage, worksPage, reviewsPage
  },
  computed: {
    ...mapState('errors', {
      errorMessage: state => state.error,
      updateMessage: state => state.update
    })
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


.admin{
  position: relative;
}

.error{
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px;
    background-color: #cd1515;
    text-transform: uppercase;
    font-weight: 700;
}

.update{
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px;
  background-color: rgb(75,177,50);
  text-transform: uppercase;
  font-weight: 700;
}


</style>

