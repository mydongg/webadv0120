<template lang="pug">
        form.addreview(
          @submit.prevent="submitDependsOnAction"
        )
          .addreview__header
            .addreview__title Новый отзыв
          .addreview__body
            .addreview__left
                .addreview__avatar
                  .avatar(
                    :style="{backgroundImage: `url(${renderedPhoto})`}"
                  )
                    img.avatar__img(
                      src="../../images/content/nophoto.png"
                      :class="{filled: renderedPhoto.length}"
                      )
                .addreview__selectavatar
                  input.reset--hidden(
                    name="inputFileAvatar"
                    id="inputFileAvatar"
                    type="file"
                    @change="handleFile"
                  )
                  label.reset.reset--download(
                    for="inputFileAvatar"
                  ) Добавить фото
            .addreview__right
              .addreview__about
                .addreview__field
                  .addreview__fieldtitle Имя автора
                  .addwork__input
                    input.inputtext(
                      v-model="review.author"
                    )
                .addreview__field
                  .addreview__fieldtitle Титул автора
                  .addwork__input
                    input.inputtext(
                      v-model="review.occ"
                    )
              .addreview__text
                  .addreview__fieldtitle Отзыв
                  textarea.inputfield(
                    v-model="review.text"
                  )
              .addreview__controls
                .addreview__reset
                  a.reset(
                    @click="setAction('')"
                  ) Отмена
                .addreview__submit
                  button.submit Сохранить  
</template>

<script>
import { mapActions, mapState} from 'vuex';

export default {
  data() {
    return {
      renderedPhoto: "",
      review: {
        photo: {},
        author: "",
        occ: "",
        text: ""
      }
    }
  },
  computed: {
      ...mapState("reviews", {
          reviewAction: state => state.reviewAction,
          reviewItemToUpdate: state => state.reviewItemToUpdate
      })
  },
  methods: {
    ...mapActions('reviews', ['addReview', 'fetchReviews', 'updateReview', 'setAction']),
    handleFile(event){
      const file = event.target.files[0];
      this.review.photo = file;
      this.renderImageFile(file);
    },
    renderImageFile(file){
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.renderedPhoto = reader.result;
        }
      } catch (error) {
        
      }
    },
    submitDependsOnAction(){
        if(this.reviewAction === "add"){
            this.addReview(this.review);
        } else {
            this.updateReview(this.review); 
        }
        this.setAction("");
    }
  },
  mounted() {
    if(this.reviewAction === "update"){
      this.review = this.reviewItemToUpdate;
      this.renderedPhoto = "https://webdev-api.loftschool.com/"+ this.reviewItemToUpdate.photo;
      
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

.filled{
  display: none;
}

.reset--download{
  cursor: pointer; 
}

.reset--hidden{
  visibility: hidden;
  position: absolute;
}
</style>