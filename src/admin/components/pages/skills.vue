<template lang="pug">
    section.skills
      .skills__inner
      .wrapper
        .title
          .sectionTitle.sectionTitle--grey.sectionTitle--smol Блок "Обо мне"
          .skills__addbtn
            a.addb(href="#")
              .plus.plus--smol
                .plus__inner  +
              .addb__text Добавить группу
        .skills__mainfield
          //- незаполненный итем
          .skills__item
            .skillblock
              form(
                  @submit.prevent="addNewCategory"
              ).addlist
                .addlist__header
                  .addlist__input
                    input.inputtext(
                        type="text" 
                        placeholder="Название новой группы"
                        v-model="title"
                        )
                    .addlist__error
                      .errorform Заполните поле
                  .confirm
                    button.confirm__button(href="#" type="submit")
                      svg(class="confirm__svg confirm__svg--yes" preserveAspectRatio="none")
                        use(xlink:href="sprite.svg#tick")
                    button.confirm__button(href="#" type="reset")
                      svg(class="confirm__svg confirm__svg--no" preserveAspectRatio="none")
                        use(xlink:href="sprite.svg#remove")
              .skillblock__body
                ul.currentskills
                form.addskill
                  .addskill__name
                    input.inputtext(type="text" placeholder="Новый навык")
                    .addskill__error
                      .errorform Заполните поле
                  .addskill__perc
                    input.inputtext(type="text" maxlength="3") 
                    .addskill__error
                      .errorform Заполните поле
                  .addskill__submit
                    a.addb(href="#")
                      .plus
                        .plus__inner +
          //- готовый итем
          .skills__item(v-for="cat in categories" :key="cat.id")
            skills-list(
              :cat="cat"
            )

</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data: () => ({
        title: ''
    }),
    components: {
      skillsList: () => import('../skillsList')
    },
    computed: {
      ...mapState("categories", {
        categories: state => state.categories
      })
    },
    created() {
      this.fetchCategories();
    },
    methods: {
        ...mapActions("categories", ["addCategory", "fetchCategories" ]),
        addNewCategory(){
            this.addCategory(this.title)
        }
    }
} 
</script>