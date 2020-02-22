<template lang="pug">
          form(
              @submit.prevent="submitDependsOnAction"
          ).addwork
            .addwork__header
              .addwork__title Редактирование работы
            .addwork__body
              .addwork__left
                .selectimage#selectimage(
                    @drop.prevent="handleDroppedFile"
                    @dragover.prevent
                    :style="{backgroundImage: `url(${renderedPhoto})`}"
                )
                  .selectimage__content(
                      v-if="!renderedPhoto"
                  )
                    .selectimage__text Перетащите или загрузите для загрузки изображения
                    .selectimage__button
                      input(
                          type="file"
                          @change="handleFile"
                          name="inputWorkPreview"
                          id="inputWorkPreview"
                      ).submit--hidden
                      .input__error
                        .errorInput Загрузите изображение
                      label(
                          for="inputWorkPreview"
                      ).submit Загрузить
                  .selectimage__content(
                      v-else
                  )
                    .selectimage__text.selectimage__text--white Перетащите или загрузите для изменения изображения
                    .selectimage__button
                      input(
                          type="file"
                          @change="handleFile"
                          name="inputWorkPreview"
                          id="inputWorkPreview"
                      ).submit--hidden
                      label(
                          for="inputWorkPreview"
                      ).submit Изменить
              .addwork__right
                .addwork__field
                  label.addwork__fieldtitle Название
                  .addwork__input
                    input.inputtext(
                        type="text"
                        v-model="work.title"
                        @click="releaseError"
                        )
                    .input__error
                        .errorInput Заполните поле 
                .addwork__field
                  label.addwork__fieldtitle Ссылка
                  .addwork__input
                    input.inputtext(
                        type="text"
                        v-model="work.link"
                        @click="releaseError"
                        )
                    .input__error
                        .errorInput Заполните поле 
                .addwork__field
                  label.addwork__fieldtitle Описание
                  .addwork__textarea
                    textarea.inputfield(
                        type="text"
                        v-model="work.description"
                        @click="releaseError"
                        )
                    .input__error
                        .errorInput Заполните поле 
                .addwork__field
                  label.addwork__fieldtitle Добавление тега
                  .addwork__input
                    input.inputtext(
                        type="text"
                        @keydown.enter.prevent="addTech"
                        @click="releaseError"
                        )
                    .input__error
                        .errorInput Добавьте теги
                .addwork__tags
                  .tag(
                      v-for="tag in work.techs"
                  )
                    .tag__name {{tag}}
                    a.tag__delete(
                        @click="removeTech(tag)"
                    )
                      svg(class="tag__svg" preserveAspectRatio="none")
                          use(xlink:href="sprite.svg#remove")
                .addwork__control
                  .addwork__reset 
                    button(
                        @click.prevent="setAction('')"
                    ).reset Отмена
                  .addwork__submit
                    button.submit Сохранить 
</template>


<script>
import { mapActions, mapState } from 'vuex';
export default {
    data(){
        return {
            renderedPhoto: "",
            work: {
                title: "",
                techs: [],
                photo: {},
                link: "",
                description: ""
            }
        }
    },
    computed: {
        ...mapState('works', {
            worksAction: state => state.worksAction,
            worksItemToUpdate: state => state.worksItemToUpdate
        })
    },
    methods: {
        ...mapActions('works', ['addWork', 'setAction', 'updateWork']),
        ...mapActions('errors', ['setError']),
        handleFile(event){
            const file = event.target.files[0];
            if(file.size > 1536000) {
                this.setError('Изображение слишком большого размера');
            } else {
                this.work.photo = file;
                this.renderImageFile(file);
            }
        },
        handleDroppedFile(event){
            const file = event.dataTransfer.files[0];
            if(file.size > 1536000) {
                this.setError('Изображение слишком большого размера');
            } else {
                this.work.photo = file;
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
        addTech(e){
            if(!e.target.value){
                e.target.classList.add('input--error');
            } else{
                e.target.classList.remove('input--error');
                const adaptedTag = e.target.value.trim();
                e.target.value = "";
                this.work.techs.push(adaptedTag);
            }
            
        },
        releaseError(e){
            e.target.classList.remove('input--error');
        },
        removeTech(removedTag){
            const adaptedTag = removedTag.trim()
            this.work.techs = this.work.techs.filter(tech => tech != adaptedTag)
        },
        submitDependsOnAction(e){
            if(!this.work.title || !this.work.techs || !this.work.photo || !this.work.link || !this.work.description){
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
                if(this.worksAction === "add"){
                    this.addWork(this.work);
                } else {
                    this.updateWork(this.work); 
                }
                this.setAction("");
            }
        }
    },
    mounted() {
        if(this.worksAction == 'update'){
            this.work = this.worksItemToUpdate;
            this.renderedPhoto = "https://webdev-api.loftschool.com/"+ this.worksItemToUpdate.photo;
        }
    }
}
</script>

<style lang="postcss" scoped>

.addwork__field{
    position: relative;
}


.selectimage{
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transition: background-color .3s;
    &:hover{
        background-color: rgba(65,76,99,.502);
    }
    &--empty{
        .selectImage__error{
            display: block;
        }
    }

    .input__error{
        bottom: -50px;
    }
}

.selectimage__text--white{
    color: #fff;
}

.submit{
    cursor: pointer;
}

.submit--hidden{
    visibility: hidden;
    position: absolute;
}

.input__error{
  position: absolute;
  display: none;
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
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