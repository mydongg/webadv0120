<template lang="pug">
section.reviews
    .reviews__inner
    .wrapper
      .title
        .sectionTitle.sectionTitle--grey.sectionTitle--smol Блок "Отзывы"
      .reviews__mainfield
        review-form(
          v-if="reviewAction"
        )
        ul.reviews__list
          .reviews__item
            .plusblock(
              @click="changeFormItem"
            )
              .plusblock__plus +
              .plusblock__round
                .plusblock__text Добавить
          li.reviews__item(
            v-for="reviewItem in reviews"
          )
            review-item(
              :reviewItem="reviewItem"
              :key="reviewItem.id"
            )
</template>

<script>
import { mapActions, mapState } from 'vuex';
import "babel-polyfill";

export default {
  data() {
    return {

    }
  },
  components: {
    reviewForm: () => import("../reviewForm"),
    reviewItem: () => import("../reviewItem")
  },
  computed: {
    ...mapState("reviews",{
      reviews: state => state.reviews,
      reviewAction: state => state.reviewAction
    })
  },
  methods: {
    ...mapActions('reviews', ['fetchReviews', 'setAction']),
    async changeFormItem(){
      await this.setAction('');
      this.setAction('add');
    }
  },
  created() {
    this.fetchReviews();
  },
}
</script>


<style lang="postcss" scoped>


/* Анимация появления отзыва */


</style>