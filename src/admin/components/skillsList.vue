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
                    )
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
                    input.inputtext(type="text" placeholder="Новый навык" v-model="skill.title")
                    .addskill__error
                      .errorform Заполните поле
                  .addskill__perc
                    input.inputtext(type="text" maxlength="3" v-model="skill.percent")
                    .addskill__error
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
        deleteExistedCategory(id){
            this.deleteCategory(id);
        },
        updateExistedCategory(){
            this.updateCategory(this.editedCategory);
            this.chmode();
        },
        async addInputSkill(){
            this.loading = true;
            try{
              await this.addSkill(this.skill);
              this.skill.title = "";
              this.skill.percent = 0;
            } catch(error){

            } finally {
              this.loading = false;
            }      
        },
        chmode(){
          this.editmode = !this.editmode;
        }
    }
}
</script>



<style lang="postcss" scoped>

</style>