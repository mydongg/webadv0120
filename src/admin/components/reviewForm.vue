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
                    @click="releaseError"
                    accept="image/png, image/jpeg"
                  )
                  .input__error
                    .errorInput Загрузите изображение
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
                      @click="releaseError"
                    )
                    .input__error
                            .errorInput Заполните поле
                .addreview__field
                  .addreview__fieldtitle Титул автора
                  .addwork__input
                    input.inputtext(
                      v-model="review.occ"
                      @click="releaseError"
                    )
                    .input__error
                            .errorInput Заполните поле
              .addreview__text
                  .addreview__fieldtitle Отзыв
                  textarea.inputfield(
                    v-model="review.text"
                    @click="releaseError"
                  )
                  .input__error
                      .errorInput Заполните поле
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
    ...mapActions('errors', ['setError']),
    handleFile(event){
      const file = event.target.files[0];
      if(file.size > 1536000) {
        this.setError('Изображение слишком большого размера');
      } else {
        this.review.photo = file;
        this.renderImageFile(file);
      }

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
    submitDependsOnAction(e){
        if(!this.review.photo || !this.review.author || !this.review.occ || !this.review.text){
          const formElems = e.target.elements;
          for (let index = 0; index < formElems.length; index++) {
              let currentItem = formElems[index];
              currentItem.classList.remove('input--error');
              if((currentItem.tagName == 'INPUT' || currentItem.tagName == "TEXTAREA") && !currentItem.value){
                  currentItem.classList.add('input--error');
              }
              if(currentItem.type=="file" && this.renderedPhoto){
                currentItem.classList.remove('input--error');
              }
          }
        } else {
          if(this.reviewAction === "add"){
              this.addReview(this.review);
          } else {
              this.updateReview(this.review); 
          }
          this.setAction("");
        }
    },
    releaseError(e){
        e.target.classList.remove('input--error');
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

.addreview__selectavatar{
  position: relative;
  .input__error{
    left: 50%;
    transform: translateX(-50%);
    bottom: -40px;
  }
}

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
    color: #fff;
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