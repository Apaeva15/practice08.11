<!-- components/NewsCard.vue -->
<template>
  <div class="border border-teal-500 p-4 rounded-lg mb-4 bg-white">
    <h2 class="text-teal-500 font-bold text-xl">{{ title }}</h2>
    <p class="text-gray-300">{{ description }}</p>
    <!-- Проверьте, что link передается как :to="link" -->
    <router-link :to="link" class="text-orange-300 mt-2 inline-block hover:text-orange-500">Подробнее</router-link>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true, // Убедитесь, что title является обязательным свойством
    },
    description: {
      type: String,
      required: true, // Убедитесь, что description является обязательным свойством
    },
    link: {
      type: String,
      required: true, // Убедитесь, что link является обязательным свойством
    },
  },
};
</script>

<style scoped>
.bg-white {
  background-color: white; /* Установите белый фон для карточек */
  border: 3px solid #38b2ac;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Тень для карточек */
}

.text-orange-300 {
  color: rgba(227, 182, 78, 1); /* Цвет для текста кнопки "Подробнее" */
  font-weight: 600
}

.hover\:text-orange-500:hover {
  color: rgb(207, 157, 42); /* Цвет текста кнопки "Подробнее" при наведении */
}
</style>
