<template>
  <div class="bg-white shadow-md rounded-lg p-4 m-4 w-64">
    <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
    <p class="text-gray-700">Тип: {{ type }}</p>
    <p class="text-gray-700">Дата: {{ date }}</p>
    <p class="text-gray-700">Прогресс: {{ progress }}%</p> <!-- Отображение прогресса -->
    <p class="text-gray-700">Место в рейтинге: {{ ranking }}</p> <!-- Отображение места в рейтинге -->
    <p class="text-gray-700">Завершенные задачи: {{ completedTasks }}</p> <!-- Отображение завершенных задач -->
    
    <button @click="register" class="bg-teal-500 text-white mt-4 p-2 rounded">
      Зарегистрироваться
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    title: String,
    type: String,
    date: String,
    progress: {
      type: Number,
      required: true,
    },
    ranking: {
      type: Number,
      required: true,
    },
    completedTasks: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const router = useRouter();

    const register = () => {
      router.push('/registration');
    };

    return {
      register,
    };
  },
});
</script>

<style scoped>
  .bg-teal-500{
    background-color: #F6AD55;
    color: #ffffff;
  }
  .bg-teal-500:hover {
  background-color: #d09246; /* Темнее на ховере */
}
</style>

