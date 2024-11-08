<template>
    <div class="bg-dark-blue p-6">
      <h1 class="text-teal-5000 text-3xl mb-4">Панель организатора</h1>
  
      <div class="mb-6">
        <h2 class="text-teal-400 font-semibold mb-2">Загрузка заданий:</h2>
        <input type="file" @change="handleFileUpload" class="bg-gray-300 p-2 mb-2 w-full" />
        <button @click="uploadFile" class="bg-teal-500 text-white p-2 rounded">Загрузить</button>
      </div>
  
      <div class="mb-6">
        <h2 class="text-teal-400 font-semibold mb-2">Чат с участниками:</h2>
        <div class="bg-gray-200 p-4 mb-4">
          <div class="messages">
            <div class="message" v-for="(msg, index) in messages" :key="index">
              <span class="text-teal-500">{{ msg.user }}:</span> {{ msg.text }}
            </div>
          </div>
          <input type="text" v-model="newMessage" placeholder="Введите сообщение..." class="p-2 mb-2 w-full" />
          <button @click="sendMessage" class="bg-teal-500 text-white p-2 rounded">Отправить</button>
        </div>
      </div>
  
      <div class="mb-6">
        <h2 class="text-teal-400 font-semibold mb-2">Оценка проектов:</h2>
        <button @click="evaluateProjects" class="bg-teal-500 text-white p-2 rounded">Оценить проекты</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const messages = ref([{ user: 'Светлана', text: 'Когда будет результат?' }]);
      const newMessage = ref('');
  
      const sendMessage = () => {
        if (newMessage.value) {
          messages.value.push({ user: 'Вы', text: newMessage.value });
          newMessage.value = '';
        }
      };
  
      const handleFileUpload = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0]; // Получаем первый загруженный файл
  
        if (file) {
          console.log('Загружен файл:', file.name);
          // Логика для обработки загруженного файла, например, отправка на сервер
        }
      };
  
      const uploadFile = () => {
        // Логика для загрузки файла
        alert('Файл загружен!');
      };
  
      const evaluateProjects = () => {
        // Логика для оценки проектов
        alert('Оценка проектов завершена!');
      };
  
      return {
        messages,
        newMessage,
        sendMessage,
        handleFileUpload,
        uploadFile,
        evaluateProjects,
      };
    },
  });
  </script>
  
  <style scoped>
  .bg-dark-blue {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: 80vh;
  }
  .bg-gray-200 {
    background-color: #f7fafc; /* Светло-серый фон для карточек */
    border-radius: 5px;
  }
  .bg-gray-300{
    border-radius: 5px;
  }
  .text-teal-5000 {
    color: #f7fafc; /* Бирюзовый цвет текста */
    text-align: center;
  }
  .text-teal-400 {
    color: #D1D5DB; /* Темнее бирюзовый цвет текста */
  }
  </style>
  