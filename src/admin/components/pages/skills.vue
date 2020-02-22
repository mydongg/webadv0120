<template lang="pug">
    section.skills
      .skills__inner
      .wrapper
        .title
          .sectionTitle.sectionTitle--grey.sectionTitle--smol Блок "Обо мне"
          .skills__addbtn
            a.addb(
              href="#"
              @click.prevent="formActive=true"
              )
              .plus.plus--smol
                .plus__inner  +
              .addb__text Добавить группу
        .skills__mainfield
          //- незаполненный итем
          .skills__item(
            v-if="formActive"
          )
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
                        @click="releaseError"
                        )
                    .input__error
                      .errorInput Заполните поле
                  .confirm
                    button.confirm__button(href="#" type="submit")
                      svg(class="confirm__svg confirm__svg--yes" preserveAspectRatio="none")
                        use(xlink:href="sprite.svg#tick")
                    button.confirm__button(
                      href="#"
                      type="reset"
                      )
                      svg(class="confirm__svg confirm__svg--no" preserveAspectRatio="none")
                        use(xlink:href="sprite.svg#remove")
              .skillblock__body
                ul.currentskills
                form.addskill(
                  @submit.prevent
                )
                  .addskill__name
                    input.inputtext(type="text" placeholder="Новый навык")
                    .addskill__error
                      .errorform Заполните поле
                  .addskill__perc
                    input.inputtext(type="text" maxlength="3") 
                    .addskill__error
                      .errorform Заполните поле
                  .addskill__submit.addskill__submit--disabled
                    a.addb(
                      
                    )
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
        title: '',
        formActive: false
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
        addNewCategory(e){
          if(!this.title){
            const formElems = e.target.elements;
            for (let index = 0; index < formElems.length; index++) {
                let currentItem = formElems[index];
                    if(currentItem.tagName == 'INPUT' && currentItem.value==""){
                        currentItem.classList.add('input--error');
                }
            }
          } else {
            this.addCategory(this.title);
            this.formActive=false;
          }

        },
        releaseError(e){
            e.target.classList.remove('input--error');
        }
    }
} 
</script>

<style lang="postcss" scoped>

.input__error{
  position: absolute;
  display: none;
  white-space: nowrap;
}

.input--error{
    +.input__error{
        display: block;
    }
}

.errorInput{
    font-size: 14px;
    padding: 10px;
    background-color: #cd1515;
    pointer-events: none;
    z-index: 10;
    &:before{
        content: '';
        position: absolute;
        left: 50%;
        top: -70%;
        transform: translateX(-50%);
        border: 15px solid transparent;
        border-bottom: 15px solid #cd1515;
        pointer-events: none;
    }
}
</style>