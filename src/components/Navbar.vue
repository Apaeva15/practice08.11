<template>
  <nav class="p-4 bg-gradient-to-r from-teal-600 to-blue-700 text-white shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">Logo</h1>
      <div class="flex space-x-6">
        <router-link to="/" class="nav-link">Главная</router-link>
        <router-link to="/dashboard" class="nav-link">Панель студента</router-link>    
        <router-link to="/admin" class="nav-link">Панель администратора</router-link>
        <router-link to="/organizer" class="nav-link">Панель организатора</router-link>
        <router-link to="/registration" class="nav-link">Регистрация</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
/* Основной фон и стиль заголовка */
nav {
  background: linear-gradient(to right, #38b2ac, rgba(94, 138, 134, 1)); /* Плавный переход от бирюзового к синему */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Небольшая тень */
}

/* Стиль для заголовка */
h1 {
  color: #fff;
  font-weight: bold;
}

/* Общий стиль для ссылок */
.nav-link {
  position: relative;
  font-weight: 500;
  color: #f7fafc; /* Светло-серый цвет текста */
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #d1fae5; /* Светло-бирюзовый на ховере */
}

/* Подсветка текущей активной страницы */
.nav-link.router-link-exact-active {
  font-weight: bold;
  color: rgb(251, 211, 141); /* Акцент на активной ссылке */
}

/* Добавляем подчеркивание при наведении */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: rgba(227, 182, 78, 1); /* Подчеркивание активной ссылки */
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
