<template lang="pug">
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
                    img.avatar__img(src="../../../images/content/nophoto.png")
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
                  img.avatar__img(src="../../../images/content/user.jpg")
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