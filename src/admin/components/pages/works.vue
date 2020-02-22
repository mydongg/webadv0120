<template lang="pug">
section.works
    .works__inner
    .wrapper
      .title
        .sectionTitle.sectionTitle--grey.sectionTitle--smol Блок "Работы"
      .works__mainfield
          works-form(
            v-if="workAction"
          )
          ul.works__list
            .works__item
              .plusblock(
                @click="changeFormItem"
              )
                .plusblock__plus +
                .plusblock__round
                  .plusblock__text Добавить
            li.works__item(
              v-for="work in works"
            )
              works-item(
                :work="work"
              )
</template>


<script>
import { mapActions, mapState } from 'vuex';
import "babel-polyfill";

export default {
  components: {
    worksForm: () => import("../worksForm"),
    worksItem: () => import("../worksItem")
  },
  computed: {
    ...mapState('works', {
      workAction: state => state.worksAction,
      works: state => state.works,
      worksAction: state => state.worksAction
    })
  },
  methods: {
    ...mapActions('works', ['fetchWorks', 'setAction']),
    async changeFormItem(){
      await this.setAction('');
      this.setAction('add');
    }
  },
  created(){
    this.fetchWorks();
  }
}
</script>


<style lang="postcss" scoped>

</style>