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
          a.header__exit(href="#") Выйти
  //- гор.навигация
  .nav__outer
    .wrapper
      nav.nav
        ul.nav__list
          li.nav__item.nav__item--current
            a.nav__link(href="#") Обо мне
          li.nav__item
            a.nav__link(href="#") Работы
          li.nav__item
            a.nav__link(href="#") Отзывы
  //- обо мне
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
              form.addlist#addlist
                .addlist__header
                  .addlist__input
                    input.inputtext(type="text" placeholder="Название новой группы")
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
  //- работы
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
  //- отзывы
  section.reviews
    .reviews__inner
    .wrapper
      .title
        .sectionTitle.sectionTitle--grey.sectionTitle--smol Блок "Отзывы"
      .reviews__mainfield
        form.addreview
          .addreview__header
            .addreview__title Новый отзыв
          .addreview__body
            .addreview__left
                .addreview__avatar
                  .avatar
                    img.avatar__img(src="../images/content/user.jpg")
                .addreview__selectavatar
                  a.reset(href="#") Добавить фото
            .addreview__right
              .addreview__about
                .addreview__field
                  .addreview__fieldtitle Имя автора
                  .addwork__input
                    input.inputtext
                .addreview__field
                  .addreview__fieldtitle Титул автора
                  .addwork__input
                    input.inputtext
              .addreview__text
                  .addreview__fieldtitle Отзыв
                  textarea.inputfield
              .addreview__controls
                .addreview__reset
                  a.reset Отмена
                .addreview__submit
                  button.submit Сохранить
        ul.reviews__list
          .reviews__item
            .plusblock
              .plusblock__plus +
              .plusblock__round
                .plusblock__text Добавить
          li.reviews__item
            .review
              .review__header
                .avatar.avatar--smol
                  img.avatar__img(src="../images/content/user.jpg")
                .review__author
                  .review__name Владимир Сабанцев
                  .review__occ Преподаватель
              .review__body
                .review__text Lorem ipsum, dolor sit amet consectetur adipisicing elit. At iusto, rerum, nam ab alias praesentium minus voluptate repellendus vero sequi ipsa? Odit accusamus earum asperiores.
                .review__controls
                  .review__change
                      a.controlbutton(href="#")
                        .controlbutton__text Править
                        .controlbutton__icon
                          svg(class="controlbutton__svg controlbutton__svg--change" preserveAspectRatio="none")
                            use(xlink:href="sprite.svg#pencil")
                  .review__delete
                    a.controlbutton(href="#")
                      .controlbutton__text Удалить
                      .controlbutton__icon
                        svg(class="controlbutton__svg controlbutton__svg--remove" preserveAspectRatio="none")
                          use(xlink:href="sprite.svg#remove")

</template>


<style lang="postcss">
@import '../styles/admin.pcss';
</style>

