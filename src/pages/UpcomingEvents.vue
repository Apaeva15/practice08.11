<!-- views/UpcomingEvents.vue -->
<template>
  <div class="upcoming-events-container">
    <router-link to="/" class="back-button">Назад</router-link> <!-- Добавленная кнопка "Назад" -->
    
    <h1 class="title">Предстоящие мероприятия</h1>
    <p class="description">Подробности о предстоящих мероприятиях...</p>
    <div class="events-list">
      <div class="event-card">
        <h2 class="event-title">Мероприятие 1</h2>
        <p class="event-details">Дата: 2024-11-20</p>
        <p class="event-description">Краткое описание мероприятия 1...</p>
      </div>
      <div class="event-card">
        <h2 class="event-title">Мероприятие 2</h2>
        <p class="event-details">Дата: 2024-12-05</p>
        <p class="event-description">Краткое описание мероприятия 2...</p>
      </div>
      <div class="event-card">
        <h2 class="event-title">Мероприятие 3</h2>
        <p class="event-details">Дата: 2024-12-15</p>
        <p class="event-description">Краткое описание мероприятия 3...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.upcoming-events-container {
  padding: 20px;
  margin: 20px;
  position: relative; /* Для позиционирования кнопки "Назад" */
  height: 75vh;
}

.back-button {
  position: absolute; /* Абсолютное позиционирование для размещения текста "Назад" */
  left: 160px; /* Отступ слева */
  top: 20px; /* Отступ сверху */
  font-size: 1.3rem; /* Размер шрифта для текста */
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
  color: #e0e0e0; /* Темно-синий цвет для заголовка */
  font-size: 2.5rem; /* Увеличенный размер шрифта для заголовка */
  margin-bottom: 10px; /* Отступ снизу */
}

.description {
  text-align: center;
  color: #e0e0e0; /* Серый цвет для описания */
  font-size: 1.2rem; /* Размер шрифта для описания */
  margin-bottom: 15px; /* Отступ снизу */
}

.events-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Отступы между карточками */
}

.event-card {
  /* Убрали белый фон */
  background-color: #f0f0f0; /* Прозрачный фон для карточек */
  border-radius: 8px;
  padding: 10px;
  width: 80%; /* Ширина карточек */
  max-width: 500px; /* Максимальная ширина карточек */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Тень для карточек */
}

.event-title {
  color: #38b2ac; /* Цвет заголовка мероприятия */
  font-size: 1.5rem; /* Размер шрифта для заголовка мероприятия */
  margin-bottom: 8px; /* Отступ снизу */
}

.event-details {
  color: #4a5568; /* Серый цвет для деталей мероприятия */
  font-size: 1rem; /* Размер шрифта для деталей */
  margin-bottom: 8px; /* Отступ снизу */
}

.event-description {
  color: #718096; /* Более светлый серый для описания */
  font-size: 0.9rem; /* Размер шрифта для описания */
}
</style>
