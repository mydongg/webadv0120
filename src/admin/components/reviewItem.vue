<template lang="pug">
            .review
              .review__header
                .avatar.avatar--smol(
                    :style="{backgroundImage: `url(https://webdev-api.loftschool.com/${reviewItem.photo})`}"
                )
                .review__author
                  .review__name {{reviewItem.author}}
                  .review__occ {{reviewItem.occ}}
              .review__body
                .review__text {{reviewItem.text}}
                .review__controls
                    .review__change
                        a.controlbutton(
                            @click.prevent="updateThisReview"
                        )
                            .controlbutton__text Править
                            .controlbutton__icon
                                svg(class="controlbutton__svg controlbutton__svg--change" preserveAspectRatio="none")
                                    use(xlink:href="sprite.svg#pencil")
                    .review__delete
                        a.controlbutton(
                            @click.prevent="deleteThisReview"
                        )
                            .controlbutton__text Удалить
                            .controlbutton__icon
                                svg(class="controlbutton__svg controlbutton__svg--remove" preserveAspectRatio="none")
                                    use(xlink:href="sprite.svg#remove")     
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        reviewItem: {
            photo: "",
            author: "",
            occ: "",
            text: "",
            id: 0
        }
    },
    methods: {
        ...mapActions('reviews', ['deleteReview', 'setAction', 'setItemToUpdate']),
        deleteThisReview(){
            this.deleteReview(this.reviewItem.id);
        },
        updateThisReview(){
            this.setAction('update');
            let itemToUpdate = Object.assign({}, this.reviewItem);
            this.setItemToUpdate(itemToUpdate);
        }
    }
}
</script>


<style lang="postcss" scoped>

.avatar{
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>>