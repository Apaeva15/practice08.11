<!-- views/HackathonDetails.vue -->
<template>
  <div class="hackathon-details-container">
    <router-link to="/" class="back-button">Назад</router-link> <!-- Заменили стрелку на слово "Назад" -->
    <div class="content">
      <h1 class="title">Завершение Хакатона 2024</h1>
      <p class="description">Подробная информация о завершении соревнования...</p>
      
      <div class="details-card">
        <h2>Основные моменты:</h2>
        <ul class="highlights">
          <li>Дата проведения: 2024-11-12</li>
          <li>Место: Конференц-зал XYZ</li>
          <li>Награды для победителей</li>
          <li>После соревнования — нетворкинг-сессия</li>
        </ul>
      </div>

      <router-link to="/registration">
        <button class="register-button">Зарегистрироваться на следующий Хакатон</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.hackathon-details-container {
  display: flex; /* Используем flexbox для выравнивания */
  padding: 40px; /* Увеличиваем отступ внутри контейнера */
  margin: 20px auto; /* Центрируем блок с автоматическими отступами */
  max-width: 1000px; /* Увеличиваем максимальную ширину контейнера */
  position: relative; /* Для позиционирования кнопки "Назад" */
  height: 75vh;
}

.back-button {
  position: absolute; /* Абсолютное позиционирование для размещения текста "Назад" */
  left: -50px; /* Отступ слева */
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

.content {
  flex: 1; /* Позволяем содержимому занимать доступное пространство */
  text-align: center; /* Центрируем текст */
}

.title {
  color: #e0e0e0; /* Серый цвет заголовка */
  font-size: 2.5rem; /* Размер шрифта для заголовка */
  margin-bottom: 16px; /* Отступ снизу */
}

.description {
  color: #e0e0e0; /* Серый цвет для описания */
  font-size: 1.2rem; /* Размер шрифта для описания */
  margin-bottom: 20px; /* Отступ снизу */
}

.details-card {
  background-color: #ffffff; /* Белый фон для карточки с деталями */
  border-radius: 12px; /* Увеличиваем радиус углов карточки */
  padding: 20px; /* Увеличиваем отступ внутри карточки */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Увеличиваем тень для карточки */
  margin-bottom: 20px; /* Отступ снизу */
  width: 90%; /* Увеличиваем ширину карточки */
  display: inline-block; /* Позволяем задать размеры карточки */
}

.highlights {
  list-style-type: none; /* Убираем маркеры списка */
  padding: 0; /* Убираем отступы */
  text-align: left; /* Выравниваем текст по левому краю */
}

.highlights li {
  padding: 8px 0; /* Отступы между элементами списка */
  border-bottom: 1px solid #e2e8f0; /* Легкая граница для разделения элементов */
}

.register-button {
  background-color: #F6AD55; /* Бирюзовая кнопка */
  color: white; /* Белый текст */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s; /* Плавный переход цвета */
  font-size: 1rem; /* Размер шрифта для кнопки */
}

.register-button:hover {
  background-color: #d09246; /* Темнее на ховере */
}
</style>
