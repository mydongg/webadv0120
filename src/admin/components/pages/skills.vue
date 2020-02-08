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
                    input.inputtext(type="text" placeholder="%")
                    .addskill__error
                      .errorform Заполните поле
                  .addskill__submit
                    a.addb(href="#")
                      .plus
                        .plus__inner +
          //- готовый итем
          .skills__item
            .skillblock
              form.addlist
                .addlist__header
                  .addlist__title Frontend
                  .confirm
                    button.confirm__button(href="#" type="submit")
                      svg(class="confirm__svg " preserveAspectRatio="none")
                        use(xlink:href="sprite.svg#pencil")

              .skillblock__body
                ul.currentskills
                  li.currentskills__item
                    .currentskills__name Git
                    .currentskills__perc 100
                    .curentskills__control
                      button.confirm__button(href="#")
                        svg(class="confirm__svg" preserveAspectRatio="none")
                          use(xlink:href="sprite.svg#trash")
                      button.confirm__button(href="#")
                        svg(class="confirm__svg" preserveAspectRatio="none")
                          use(xlink:href="sprite.svg#pencil")
                  li.currentskills__item
                    .currentskills__name JavaScript
                    .currentskills__perc 50
                    .curentskills__control
                      button.confirm__button(href="#")
                        svg(class="confirm__svg" preserveAspectRatio="none")
                          use(xlink:href="sprite.svg#trash")
                      button.confirm__button(href="#")
                        svg(class="confirm__svg" preserveAspectRatio="none")
                          use(xlink:href="sprite.svg#pencil")
                form.addskill
                  .addskill__name
                    input.inputtext(type="text" placeholder="Новый навык")
                    .addskill__error
                      .errorform Заполните поле
                  .addskill__perc
                    input.inputtext(type="text" placeholder="%")
                    .addskill__error
                      .errorform Заполните поле
                  .addskill__submit
                    a.addb(href="#")
                      .plus
                        .plus__inner +
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data: () => ({
        title: ''
    }),
    methods: {
        ...mapActions("categories", ["addCategory"]),
        addNewCategory(){
            this.addCategory(this.title)
        }
    }
}
</script>