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

    .currentskills__itemInner(v-else)
                    .currentskills__nameInput
                        input.inputtext(
                            v-model="editedSkill.title"
                        )
                    .currentskills__percInput
                        input.inputtext(
                            v-model="editedSkill.percent"
                        )
                    .curentskills__control
                        .currentskills__control
                            button.confirm__button(
                                @click="applyChange"
                            )
                                svg(class="confirm__svg confirm__svg--yes" preserveAspectRatio="none")
                                    use(xlink:href="sprite.svg#tick")
                            button.confirm__button(
                                @click="discardChange"
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
        deleteCurrentSkill(skill){
            this.deleteSkill(skill);
        },
        chmode(){
            this.editmode = !this.editmode;
        },
        applyChange(){
            this.updateSkill(this.editedSkill);
            this.chmode();
        },
        discardChange(){
            this.editedSkill = {...this.sk};
            this.chmode();
        }
    }
}
</script>



<style lang="postcss" scoped>

</style>