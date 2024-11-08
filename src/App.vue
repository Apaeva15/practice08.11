<!-- App.vue -->
<template>
  <div class="main-container">
    <Navbar /> <!-- Добавляем навигационное меню -->
    <router-view /> <!-- Отображает текущую страницу в зависимости от маршрута -->
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>

</style>
