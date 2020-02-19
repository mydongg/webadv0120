<template lang="pug">
          form(
              @submit.prevent="submitForm"
          ).addwork
            .addwork__header
              .addwork__title Редактирование работы
            .addwork__body
              .addwork__left
                .selectimage(
                    v-cloak
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
                        )
                .addwork__field
                  label.addwork__fieldtitle Ссылка
                  .addwork__input
                    input.inputtext(
                        type="text"
                        v-model="work.link"
                        )
                .addwork__field
                  label.addwork__fieldtitle Описание
                  .addwork__textarea
                    textarea.inputfield(
                        type="text"
                        v-model="work.description"
                        )
                .addwork__field
                  label.addwork__fieldtitle Добавление тега
                  .addwork__input
                    input.inputtext(
                        type="text"
                        @keydown.enter.prevent="addTech"
                        )
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
                        @click.prevent="setActionNull"
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
    methods: {
        ...mapActions('works', ['addWork', 'setAction']),
        handleFile(event){
            const file = event.target.files[0];
            this.work.photo = file;
            this.renderImageFile(file);
        },
        handleDroppedFile(event){
            const file = event.dataTransfer.files[0];
            this.work.photo = file;
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
        addTech(e){
            const adaptedTag = e.target.value.trim();
            this.work.techs.push(adaptedTag);
        },
        removeTech(removedTag){
            const adaptedTag = removedTag.trim()
            this.work.techs = this.work.techs.filter(tech => tech != adaptedTag)
        },
        submitForm(){
            console.log(this.work);
            this.addWork(this.work);
        },
        setActionNull(){
            this.setAction('');
        }
    }
}
</script>

<style lang="postcss" scoped>

.selectimage{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transition: background-color .3s;
    &:hover{
        background-color: rgba(65,76,99,.502);
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

</style>