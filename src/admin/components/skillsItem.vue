<template lang="pug">
    .currentskills__itemInner(v-if="!this.editmode")
                    .currentskills__name {{sk.title}}
                    .currentskills__perc {{sk.percent}}
                    .curentskills__control
                        .currentskills__control
                            button.confirm__button(
                                @click="deleteCurrentSkill(sk)"
                            )
                                svg(class="confirm__svg" preserveAspectRatio="none")
                                    use(xlink:href="sprite.svg#trash")
                            button.confirm__button(
                                @click="chmode()"
                            )
                                svg(class="confirm__svg" preserveAspectRatio="none")
                                    use(xlink:href="sprite.svg#pencil")

    form.currentskills__itemInner(
        v-else
        @submit.prevent="applyChange"
        )
                    .currentskills__nameInput
                        input.inputtext(
                            v-model="editedSkill.title"
                            @click="releaseError"
                        )
                        .input__error
                            .errorInput Заполните поле
                    .currentskills__percInput
                        input.inputtext(
                            v-model="editedSkill.percent"
                            maxlength="3"
                            @click="releaseError"
                        )
                        .input__error
                            .errorInput Заполните поле
                    .curentskills__control
                        .currentskills__control
                            button.confirm__button(
                            )
                                svg(class="confirm__svg confirm__svg--yes" preserveAspectRatio="none")
                                    use(xlink:href="sprite.svg#tick")
                            button.confirm__button(
                                @click.prevent="discardChange"
                            )
                                svg(class="confirm__svg confirm__svg--no" preserveAspectRatio="none")
                                    use(xlink:href="sprite.svg#remove") 
      
</template>



<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            editmode: false,
            editedSkill: {...this.sk}
        }
    },
    props: {
        sk: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    methods: {
        ...mapActions('skillsList', ['updateSkill','deleteSkill']),
        ...mapActions('errors', ['setUpdate']),
        deleteCurrentSkill(skill){
            if(confirm('Удалить скилл?')){
                this.deleteSkill(skill);
            } else {
                this.setUpdate('Действие отменено');
            }
        },
        chmode(){
            this.editmode = !this.editmode;
        },
        applyChange(e){
            if(!this.editedSkill.title || !this.editedSkill.percent){
                const formElems = e.target.elements;
                for (let index = 0; index < formElems.length; index++) {
                    let currentItem = formElems[index];
                    if(currentItem.tagName == 'INPUT' && (!currentItem.value)){
                        currentItem.classList.add('input--error');
                    }
                }
            } else {
                try{
                    this.updateSkill(this.editedSkill);
                } catch(error){
                    
                } finally {
                    this.chmode();
                }
            }

        },
        discardChange(){
            this.editedSkill = {...this.sk};
            this.chmode();
        },
        releaseError(e){
            e.target.classList.remove('input--error');
        }
    }
}
</script>



<style lang="postcss" scoped>

.currentskills__nameInput{
    position: relative;
}

.input__error{
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
}

</style>