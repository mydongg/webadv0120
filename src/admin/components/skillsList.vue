<template lang="pug">
        .skillblock
              form.addlist(
                v-if="!this.editmode"
              )
                .addlist__header
                  .addlist__title {{cat.category}}
                  .confirm
                    button.confirm__button(
                      href="#" 
                      @click.prevent="chmode"
                      )
                      svg(class="confirm__svg " preserveAspectRatio="none")
                        use(xlink:href="sprite.svg#pencil")
              form.addlist(
                v-else
                @submit.prevent="updateExistedCategory"
              )
                .addlist__header
                  .addlist__input
                    input.inputtext(
                      v-model="editedCategory.category"
                      @click="releaseError"
                    )
                    .input__error
                      .errorInput Заполните поле
                  .confirm
                    button.confirm__button(
                    )
                      svg(class="confirm__svg confirm__svg--yes" preserveAspectRatio="none")
                        use(xlink:href="sprite.svg#tick")
                    button.confirm__button(
                        @click.prevent="deleteExistedCategory(cat.id)"
                    )
                      svg(class="confirm__svg confirm__svg--no" preserveAspectRatio="none")
                        use(xlink:href="sprite.svg#remove") 
              .skillblock__body
                ul.currentskills
                  li.currentskills__item(
                      v-for="sk in cat.skills"
                      :key="sk.id"
                  )
                    skillsItem(
                      :sk="sk"
                    )  
                form.addskill(
                    @submit.prevent="addInputSkill"
                    :class={blocked: loading}
                )
                  .addskill__name
                    input.inputtext(type="text" placeholder="Новый навык" v-model="skill.title" @click="releaseError")
                    .input__error
                      .errorform Заполните поле
                  .addskill__perc
                    input.inputtext(type="text" maxlength="3" v-model="skill.percent" @click="releaseError")
                    .input__error
                      .errorform Заполните поле
                  button.addskill__submit(
                      type="submit"
                      :disabled="loading" 
                  )
                    a.addb(href="#")
                      .plus
                        .plus__inner +
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            loading: false,
            editmode: false,
            editedCategory: {...this.cat},
            skill: {
                title: "",
                percent: 0, 
                category: this.cat.id
            }
        }
    },
    components: {
      skillsItem: () => import('./skillsItem')
    },
    props: {
        cat: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    methods: {
        ...mapActions('categories', ['deleteCategory', 'updateCategory']),
        ...mapActions('skillsList', ['addSkill']),
        ...mapActions('errors', ['setUpdate']),
        deleteExistedCategory(id){
          if(confirm('Удалить категорию?')){
            this.deleteCategory(id);
          } else {
            this.setUpdate('Действие отменено');
          }
        },
        updateExistedCategory(e){
            if(!this.editedCategory.category){
              const formElems = e.target.elements;
              for (let index = 0; index < formElems.length; index++) {
                let currentItem = formElems[index];
                    if(currentItem.tagName == 'INPUT' && currentItem.value==""){
                        currentItem.classList.add('input--error');
                }
              }
            } else {
              this.updateCategory(this.editedCategory);
              this.chmode();
            }

        },
        async addInputSkill(e){
            this.loading = true;
            if(!this.skill.title || !this.skill.name){
              const formElems = e.target.elements;
              for (let index = 0; index < formElems.length; index++) {
                let currentItem = formElems[index];
                    if(currentItem.tagName == 'INPUT' && currentItem.value==""){
                        currentItem.classList.add('input--error');
                }
              }
            } else {
              try{
                await this.addSkill(this.skill);
                this.skill.title = "";
                this.skill.percent = 0;
              } catch(error){

              } finally {
                this.loading = false;
              }      
            }   
        },
        chmode(){
          this.editmode = !this.editmode;
        },
        releaseError(e){
            e.target.classList.remove('input--error');
        }
    }
}
</script>