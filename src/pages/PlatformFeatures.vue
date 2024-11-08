<!-- views/PlatformFeatures.vue -->
<template>
  <div class="platform-features-container">
    <router-link to="/" class="back-button">Назад</router-link> <!-- Кнопка "Назад" -->

    <h1 class="title">Новые функции платформы</h1>
    <p class="description">Описание новых возможностей платформы...</p>

    <div class="features-list">
      <div class="feature-card">
        <h2 class="feature-title">Функция 1</h2>
        <p class="feature-details">Описание функции 1...</p>
      </div>
      <div class="feature-card">
        <h2 class="feature-title">Функция 2</h2>
        <p class="feature-details">Описание функции 2...</p>
      </div>
      <div class="feature-card">
        <h2 class="feature-title">Функция 3</h2>
        <p class="feature-details">Описание функции 3...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.platform-features-container {
  padding: 20px;
  margin: 20px;
  position: relative; /* Для позиционирования кнопки "Назад" */
  height: 75vh;
}

.back-button {
  position: absolute; /* Абсолютное позиционирование для размещения кнопки "Назад" */
  left: 160px; /* Отступ слева */
  top: 20px; /* Отступ сверху */
  font-size: 1.3rem; /* Размер шрифта для кнопки */
  color: #e0e0e0; /* Цвет текста */
  text-decoration: none; /* Убираем подчеркивание */
  cursor: pointer; /* Указываем, что это кликабельный элемент */
  transition: color 0.3s; /* Плавный переход цвета */
}

.back-button:hover {
  color: #38b2ac; /* Темнее на ховере */
}

.title {
  text-align: center;
  color: #e0e0e0; /* Серый цвет для заголовка */
  font-size: 2.5rem; /* Увеличенный размер шрифта для заголовка */
  margin-bottom: 10px; /* Отступ снизу */
}

.description {
  text-align: center;
  color: #e0e0e0; /* Серый цвет для описания */
  font-size: 1.2rem; /* Размер шрифта для описания */
  margin-bottom: 15px; /* Отступ снизу */
}

.features-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Отступы между карточками */
}

.feature-card {
  background-color: #f0f0f0; /* Прозрачный фон для карточек */
  border-radius: 8px;
  padding: 15px; /* Увеличенные отступы */
  width: 80%; /* Ширина карточек */
  max-width: 500px; /* Максимальная ширина карточек */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Тень для карточек */
}

.feature-title {
  color: #38b2ac; /* Цвет заголовка функции */
  font-size: 1.5rem; /* Размер шрифта для заголовка функции */
  margin-bottom: 8px; /* Отступ снизу */
}

.feature-details {
  color: #718096; /* Более светлый серый для описания функции */
  font-size: 1rem; /* Размер шрифта для описания функции */
}
</style>
