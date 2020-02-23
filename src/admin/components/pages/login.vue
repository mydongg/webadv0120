<template lang="pug">
    
.login
    .login__inner
        .login__form
            form.auth(
                @submit.prevent="loginSubmit"
            )
                a.auth__exit(
                    href="/"
                )
                    svg(class="auth__exit-svg" preserveAspectRatio="none")
                                use(xlink:href="sprite.svg#remove")
                h2.auth__title Авторизация
                .auth__block
                    .auth__block-title Логин
                    .auth__block-field.usersvg
                        input.auth__block-input(
                            type="text"
                            v-model="user.name"
                            @click="releaseError"
                        )
                        .auth__block-error
                            .errorInput Заполните поле
                .auth__block
                    .auth__block-title Пароль
                    .auth__block-field.keysvg
                        .auth__block-icon
                        input.auth__block-input(
                            type="password"
                            v-model="user.password"
                            @click="releaseError"
                        )
                        .auth__block-error
                            .errorInput Заполните поле
                .auth__submit
                    button.button Отправить
    .error(v-if="errorMessage") {{errorMessage}}

</template>

<script>
import $axios from '../../requests';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    data: () => ({
        user: {
            name: '',
            password: ''
        }
    }),
    computed: {
        ...mapState('errors', {
            errorMessage: state => state.error
        })
    },
    methods: {
        ...mapActions('errors', ['setError']),
        loginSubmit(e){
            if (!this.user.name || !this.user.password) {
                const formElems =  e.target.elements;
                for (let index = 0; index < formElems.length; index++) {
                    let currentItem = formElems[index];
                    if(currentItem.tagName == 'INPUT' && currentItem.value==""){
                        currentItem.classList.add('input--error');
                    }
                }
            } else {
                try{
                    $axios.post("login", this.user).catch(error =>{
                        this.setError(error.response.data.error);
                    }).then(response => {
                        localStorage.setItem("token", response.data.token);
                        this.$router.replace('/');
                        this.setError('');
                    });
                }
                catch(error){
                    throw new Error(
                        console.warn(error)
                    )
                }
            }
        },
        releaseError(e){
            e.target.classList.remove('input--error');
        }
    }
}
</script>

<style lang="postcss" scoped>
.login{
    position: fixed;
    overflow: hidden;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-image: url('../../../images/content/train.jpg');
    background-size: cover;

    &__inner{
        width: 100%;
        height: 100%;
        background-color: rgba(#2d3c4e, 0.9);
    }

    &__form{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        padding: 60px 80px;

    }
}

.auth{
    font-weight: 600;
    color: #414c63;
    position: relative;
    &__exit{
        position: absolute;
        right: -80px;
        top: -60px;
        padding: 15px;
        margin: 15px;
        cursor: pointer;
    }

    &__exit-svg{
        height: 20px;
        width: 20px;
        fill: #414c63;
    }

    &__title{
        font-size: 36px;
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
    }

    &__block{
        margin-bottom: 40px;
    }

    &__block-field{
        position: relative;

        &::after{
            content: "";
            display: block;
            position: absolute;
            height: 1px;
            width: 100%;
            bottom: 0;
            left: 0;
            background-color: #414c63;
        }

        &:hover{
            &::after{
                background-color: #ff9a00;
            }
        }

        &.usersvg{
            &::before{
                background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 482.9 482.9' fill='%23626364' style='enable-background:new 0 0 482.9 482.9;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5 c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6 c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2z M164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4 c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0 c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z'/%3E%3Cpath d='M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3 c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7 c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41 c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56 c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8 c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3 c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3 C447,415.5,446.9,388.8,446.8,383.6z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
            }
        }

        &.keysvg{
            &::before{
                background-image: url("data:image/svg+xml,%3Csvg fill='%23414c63' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M334.974,0c-95.419,0-173.049,77.63-173.049,173.049c0,21.213,3.769,41.827,11.211,61.403L7.672,399.928 c-2.365,2.366-3.694,5.573-3.694,8.917v90.544c0,6.965,5.646,12.611,12.611,12.611h74.616c3.341,0,6.545-1.325,8.91-3.686 l25.145-25.107c2.37-2.366,3.701-5.577,3.701-8.925v-30.876h30.837c6.965,0,12.611-5.646,12.611-12.611v-12.36h12.361 c6.964,0,12.611-5.646,12.611-12.611v-27.136h27.136c3.344,0,6.551-1.329,8.917-3.694l40.121-40.121 c19.579,7.449,40.196,11.223,61.417,11.223c95.419,0,173.049-77.63,173.049-173.049C508.022,77.63,430.393,0,334.974,0z M334.974,320.874c-20.642,0-40.606-4.169-59.339-12.393c-4.844-2.126-10.299-0.956-13.871,2.525 c-0.039,0.037-0.077,0.067-0.115,0.106l-42.354,42.354h-34.523c-6.965,0-12.611,5.646-12.611,12.611v27.136H159.8 c-6.964,0-12.611,5.646-12.611,12.611v12.36h-30.838c-6.964,0-12.611,5.646-12.611,12.611v38.257l-17.753,17.725H29.202v-17.821 l154.141-154.14c4.433-4.433,4.433-11.619,0-16.051s-11.617-4.434-16.053,0L29.202,436.854V414.07l167.696-167.708 c0.038-0.038,0.067-0.073,0.102-0.11c3.482-3.569,4.656-9.024,2.53-13.872c-8.216-18.732-12.38-38.695-12.38-59.33 c0-81.512,66.315-147.827,147.827-147.827S482.802,91.537,482.802,173.05C482.8,254.56,416.484,320.874,334.974,320.874z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M387.638,73.144c-26.047,0-47.237,21.19-47.237,47.237s21.19,47.237,47.237,47.237s47.237-21.19,47.237-47.237 S413.686,73.144,387.638,73.144z M387.638,142.396c-12.139,0-22.015-9.876-22.015-22.015s9.876-22.015,22.015-22.015 s22.015,9.876,22.015,22.015S399.777,142.396,387.638,142.396z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
            }
        }

        &::before{
            content: "";
            display: block;
            position: absolute;
            top: 15px;
            left: 0;
            height: 30px;
            width: 30px;
            background-size: cover;
        }
        

    }

    &__block-input{
        position: relative;
        background: transparent;
        border: 0;
        font-size: 18px;
        padding: 15px 0 15px 40px;
        outline: none;
        line-height: 1.5;
        width: 100%;   
    }

    &__block-title{
        padding-left: 40px;
        color: rgba(65, 76, 99, 0.302);
    }

    &__block-error{
        display: none;
        position: absolute;
        left:50%;
        transform: translateX(-50%);
        z-index: 10;
        color: #fff;
    }

    /* триггер отображения ошибки */

    .input--error{
        +.auth__block-error{
            display: block;
        }
    }
}

@media screen and (max-width: 480px) {
    .login__form{
        height: 100%;
        width: 100%;
    }

    .auth{
        padding-top: 100px;
    }

    .button{
        padding: 35px;
        width: 100%;
    }

    .auth__exit{
        right: -30px;
        top: -30px;
    }
  }

</style>
