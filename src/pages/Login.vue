<template>
  <div class="block">
    <div class="bg-gray-200 p-6 rounded-lg max-w-sm mx-auto mt-8">
      <router-link to="/" class="text-gray-600 inline-block mb-4">Назад</router-link>
      <h1 class="text-teal-500 font-bold text-2xl mb-4">Вход</h1>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" class="p-2 mb-4 w-full" />
        <input type="password" v-model="password" placeholder="Пароль" class="p-2 mb-4 w-full" />
        <button type="submit" class="bg-teal-500 text-gray-200 p-2 rounded">Войти</button>
      </form>
      <router-link to="/registration" class="text-gray-600 mt-4 inline-block">Еще нет аккаунта? Регистрация</router-link>
    </div></div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const router = useRouter();
  
      const login = () => {
        if (email.value && password.value) {
          console.log('Вход:', { email: email.value, password: password.value });
          alert('Вход выполнен успешно!');
          router.push('/dashboard'); // Перенаправление на панель управления после успешного входа
        } else {
          alert('Пожалуйста, заполните все поля.');
        }
      };
  
      return { email, password, login };
    },
  };
  </script>
  
  <style scoped>
  .bg-teal-500{
    background-color: #F6AD55;
    color: #ffffff;
  }
  .bg-teal-500:hover {
  background-color: #d09246; /* Темнее на ховере */
}
.block{
  height: 565px;
}
  </style>
  