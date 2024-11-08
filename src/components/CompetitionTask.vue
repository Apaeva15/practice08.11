<template>
  <div class="bg-dark-blue p-6">
    <h1 class="text-teal-5001 font-bold text-3xl mb-4">Описание задачи соревнования</h1>
    
    <div class="bg-gray-200 p-4 mb-4">
      <h2 class="text-teal-400 font-semibold mb-2">Полное описание:</h2>
      <p class="text-gray-700 mb-4">Здесь будет полное описание задачи, цели и требований.</p>
      <div class="flex justify-between">
        <span class="text-teal-400 font-semibold">Время до завершения:</span>
        <span class="text-teal-500 font-bold">{{ formattedRemainingTime }}</span>
      </div>
    </div>

    <h2 class="text-teal-400 font-semibold mb-2">Чат:</h2>
    <div class="bg-gray-200 p-4 mb-4">
      <div class="messages">
        <div class="message" v-for="(msg, index) in messages" :key="index">
          <span class="text-teal-500">{{ msg.user }}:</span> {{ msg.text }}
        </div>
      </div>
      <input type="text" v-model="newMessage" placeholder="Введите сообщение..." class="p-2 mb-2 w-full" />
      <button @click="sendMessage" class="bg-teal-500 text-white p-2 rounded">Отправить</button>
    </div>

    <h2 class="text-teal-400 font-semibold mb-2">Форма загрузки проектов:</h2>
    <div class="bg-gray-200 p-4 mb-4">
      <label class="text-teal-400 font-semibold">Загрузить файлы (код, изображение, документация):</label>
      <input type="file" @change="handleFileUpload" multiple class="p-2 mb-2 w-full" />
    </div>

    <button @click="uploadFiles" class="bg-teal-500 text-white p-2 rounded">Загрузить проект</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, computed } from 'vue';

export default defineComponent({
  setup() {
    const remainingTime = ref(30 * 60); // Устанавливаем 30 минут в секундах
    const messages = ref([{ user: 'Светлана', text: 'Когда заканчивается конкурс?' }]);
    const newMessage = ref('');
    
    const projectFiles = ref({
      code: null as File | null,
      image: null as File | null,
      documentation: null as File | null
    });

    let timerInterval: ReturnType<typeof setInterval>;

    const formattedRemainingTime = computed(() => {
      const minutes = Math.floor(remainingTime.value / 60);
      const seconds = remainingTime.value % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    });

    const startTimer = () => {
      timerInterval = setInterval(() => {
        if (remainingTime.value > 0) {
          remainingTime.value--;
        } else {
          clearInterval(timerInterval);
        }
      }, 1000);
    };

    const sendMessage = () => {
      if (newMessage.value) {
        messages.value.push({ user: 'Вы', text: newMessage.value });
        newMessage.value = '';
      }
    };

    const handleFileUpload = (event: Event) => {
      const files = (event.target as HTMLInputElement).files;
      if (files) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (file.name.endsWith('.js') || file.name.endsWith('.py') || file.name.endsWith('.java')) {
            projectFiles.value.code = file;
          } else if (file.type.startsWith('image/')) {
            projectFiles.value.image = file;
          } else if (file.name.endsWith('.pdf') || file.name.endsWith('.docx')) {
            projectFiles.value.documentation = file;
          }
        }
      }
    };

    const uploadFiles = () => {
      if (projectFiles.value.code || projectFiles.value.image || projectFiles.value.documentation) {
        alert('Файлы успешно загружены!');
        projectFiles.value = { code: null, image: null, documentation: null }; // Очистка полей после загрузки
      } else {
        alert('Пожалуйста, выберите файлы для загрузки.');
      }
    };

    onMounted(() => {
      startTimer();
    });

    onBeforeUnmount(() => {
      clearInterval(timerInterval);
    });

    return {
      remainingTime,
      messages,
      newMessage,
      sendMessage,
      handleFileUpload,
      uploadFiles,
      formattedRemainingTime,
      projectFiles,
    };
  },
});
</script>

<style scoped>
.bg-dark-blue {
  width: 90%;
  
}
.text-teal-5001{
  color: #f7fafc;
  text-align: center;
}

.bg-gray-200 {
  background-color: #f7fafc;
  border-radius: 5px;
}

.text-teal-500 {
  color: #38b2ac;
}

.text-teal-400 {
  color: #38b2ac;
}
</style>
