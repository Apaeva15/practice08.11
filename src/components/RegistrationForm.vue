<template> 
<div class="bl">
  <div class="bg-gray-200 p-4 rounded-lg max-w-sm mx-auto mt-8"> <!-- Добавлен mt-8 для отступа сверху -->
    <router-link to="/" class="text-gray-600 inline-block mb-4">Назад</router-link> <!-- Кнопка назад -->
    <h1 class="text-teal-500 font-bold text-xl mb-3">Регистрация</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="name" placeholder="Имя" class="p-2 mb-2 w-full" required />
      <input type="email" v-model="email" placeholder="Email" class="p-2 mb-2 w-full" required />
      <input type="email" v-model="confirmEmail" placeholder="Подтверждение Email" class="p-2 mb-2 w-full" required />
      <input type="password" v-model="password" placeholder="Пароль" class="p-2 mb-2 w-full" required />
      
      <div class="mb-3">
        <label class="block text-gray-700 mb-1">Выберите роль:</label>
        <label class="inline-flex items-center mr-2">
          <input type="radio" v-model="role" value="student" class="mr-1" required />
          Студент
        </label>
        <label class="inline-flex items-center">
          <input type="radio" v-model="role" value="teacher" class="mr-1" required />
          Преподаватель
        </label>
      </div>

      <button type="submit" class="bg-teal-500 text-gray-200 p-2 rounded w-full">Зарегистрироваться</button>
    </form>

    <div class="mt-3">
  <p class="text-gray-600">Или зарегистрируйтесь с помощью:</p>
  <button @click="loginWithSocial('google')" class="bg-white border border-gray-300 text-gray-700 p-2 rounded w-full mt-1">
    Войти через Google
  </button>
  <button @click="loginWithSocial('facebook')" class="bg-white border border-gray-300 text-gray-700 p-2 rounded w-full mt-1">
    Войти через Facebook
  </button>
</div>

    <router-link to="/login" class="text-gray-600 mt-3 inline-block">Уже есть аккаунт? Вход</router-link>
  </div></div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth, googleProvider, facebookProvider, signInWithPopup } from '../firebaseConfig';


export default {
  setup() {
    const name = ref('');
    const email = ref('');
    const confirmEmail = ref('');
    const password = ref('');
    const role = ref('student');
    const router = useRouter();

    const register = () => {
      if (name.value && email.value && password.value && email.value === confirmEmail.value) {
        console.log('Регистрация:', { name: name.value, email: email.value, password: password.value, role: role.value });
        alert('Регистрация прошла успешно!');
        router.push('/login');
      } else {
        alert('Пожалуйста, заполните все поля корректно и убедитесь, что email совпадают.');
      }
    };

    const loginWithSocial = async (provider: 'google' | 'facebook') => {
      try {
        const chosenProvider = provider === 'google' ? googleProvider : facebookProvider;
        const result = await signInWithPopup(auth, chosenProvider);
        console.log('Вход выполнен:', result.user);
        alert('Вход выполнен успешно!');
        router.push('/dashboard'); // Перенаправление на главную страницу после успешного входа
      } catch (error) {
        console.error(`Ошибка входа через ${provider}:`, error);
        alert(`Ошибка входа через ${provider}`);
      }
    };

    return { name, email, confirmEmail, password, role, register, loginWithSocial };
  },
};
</script>

<style scoped>
.bl{height: 100vh;}
.bg-teal-500{
  background-color: #F6AD55;
  color: #ffffff;
}
.bg-teal-500:hover {
  background-color: #d09246; /* Темнее на ховере */
}
</style>
