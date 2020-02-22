<template lang="pug">
              .work
                .work__top(
                     :style="{backgroundImage: `url(https://webdev-api.loftschool.com/${work.photo})`}"
                )
                  .work__tags
                    .tag(
                      v-for="tag in work.techs.split(',')"
                    )
                      .tag__name {{tag}}
                .work__bottom
                  .work__title {{work.title}}
                  .work__desc {{work.description}}
                  .work__link
                    a.reset.reset--np(href="#") {{work.link}}
                  .work__controls
                    .work__change
                      a.controlbutton(
                        @click='updateThisWork'
                      )
                        .controlbutton__text Править
                        .controlbutton__icon
                          svg(class="controlbutton__svg controlbutton__svg--change" preserveAspectRatio="none")
                            use(xlink:href="sprite.svg#pencil")
                    .work__delete
                      a.controlbutton(
                          @click="deleteThisWork"
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
        work: {
            id: 0,
            title: "",
            techs: "",
            photo: "",
            link: "",
            description: ""
        }
    },
    methods: {
        ...mapActions('works', ['deleteWork', 'setAction', 'setItemToUpdate']),
        deleteThisWork(){
          this.deleteWork(this.work.id);
        },
        updateThisWork(){
          this.setAction('update');
          let itemToUpdate = Object.assign({}, this.work);
          itemToUpdate.techs = itemToUpdate.techs.split(',');
          this.setItemToUpdate(itemToUpdate);
        }
    }
}
</script>

<style lang="postcss" scoped>

.work__top{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

</style>