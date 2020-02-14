<template lang="pug">
section.works
    .works__inner
    .wrapper
      .title
        .sectionTitle.sectionTitle--grey.sectionTitle--smol Блок "Работы"
      .works__mainfield
        form.addwork
          .addwork__header
            .addwork__title Редактирование работы
          .addwork__body
            .addwork__left
              .selectimage
                .selectimage__content
                  .selectimage__text Перетащите или загрузите для загрузки изображения
                  .selectimage__button
                    button.submit Загрузить
            .addwork__right
              .addwork__field
                label.addwork__fieldtitle Название
                .addwork__input
                  input.inputtext(type="text")
              .addwork__field
                label.addwork__fieldtitle Ссылка
                .addwork__input
                  input.inputtext(type="text")
              .addwork__field
                label.addwork__fieldtitle Описание
                .addwork__textarea
                  textarea.inputfield(type="text")
              .addwork__field
                label.addwork__fieldtitle Добавление тега
                .addwork__input
                  input.inputtext(type="text" )
              .addwork__tags
                .tag
                  .tag__name JavaScript
                  a.tag__delete
                    svg(class="tag__svg" preserveAspectRatio="none")
                        use(xlink:href="sprite.svg#remove")
                .tag
                  .tag__name HTML
                  a.tag__delete
                    svg(class="tag__svg" preserveAspectRatio="none")
                        use(xlink:href="sprite.svg#remove")
              .addwork__control
                .addwork__reset 
                  button.reset Отмена
                .addwork__submit
                  button.submit Сохранить
        ul.works__list
          .works__item
            .plusblock
              .plusblock__plus +
              .plusblock__round
                .plusblock__text Добавить
          li.works__item
            .work
              .work__top
                .work__tags
                  .tag
                    .tag__name JavaScript
                  .tag
                    .tag__name HTML
                  .tag
                    .tag__name CSS


              .work__bottom
                .work__title Сайт школы образования
                .work__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad sint rerum repudiandae quidem porro maiores a quibusdam vitae aperiam.
                .work__link
                  a.reset.reset--np(href="#") https://google.com
                .work__controls
                  .work__change
                    a.controlbutton(href="#")
                      .controlbutton__text Править
                      .controlbutton__icon
                        svg(class="controlbutton__svg controlbutton__svg--change" preserveAspectRatio="none")
                          use(xlink:href="sprite.svg#pencil")
                  .work__delete
                    a.controlbutton(href="#")
                      .controlbutton__text Удалить
                      .controlbutton__icon
                        svg(class="controlbutton__svg controlbutton__svg--remove" preserveAspectRatio="none")
                          use(xlink:href="sprite.svg#remove")    
</template>


<script>
import PictureInput from 'vue-picture-input'

export default {
  components: {
    PictureInput
  },
  methods: {
    onChange(image){
      
    }
  }
}
</script>


<style lang="postcss" scoped>

</style>