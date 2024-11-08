<template>
  <div class="text-light-gray p-4 flex flex-col items-center">
    <h1 class="text-white text-3xl font-semibold mb-6 mt-8 text-center">Новости и обновления</h1>
    <div class="flex flex-wrap justify-center space-x-4 w-full mb-8">
      <NewsCard class="card" title="Завершение Хакатона 2024" description="Подробности о завершении соревнования." link="/news/hackathon" />
      <NewsCard class="card" title="Новые функции платформы" description="Ознакомьтесь с новыми функциями." link="/news/features" />
      <NewsCard class="card" title="Предстоящие мероприятия" description="Не пропустите наши следующие мероприятия." link="/news/events" />
    </div>

    <div class="w-full flex flex-col items-center mb-8">
      <h1 class="text-white text-3xl font-semibold mb-6 mt-8 text-center">Ближайшие соревнования</h1>

      <div class="filters-container mb-4">
        <span class="text-white font-semibold mb-2">Фильтры:</span>
        <div class="flex justify-start mb-4 space-x-4">
          <button @click="filterCompetitions('Хакатон')" class="filter-button">Хакатоны</button>
          <button @click="filterCompetitions('CTF')" class="filter-button">CTF</button>
          <button @click="resetFilter" class="filter-button">Все</button>
        </div>
        <div class="flex justify-start">
          <input type="date" v-model="filterDate" @change="filterByDate" class="date-input" />
        </div>
      </div>

      <div class="flex flex-wrap justify-center w-full">
        <CompetitionCardItem
          v-for="competition in filteredCompetitions"
          :key="competition.id"
          :title="competition.title"
          :type="competition.type"
          :date="competition.date"
          :remaining-time="competition.remainingTime"
          @participate="handleParticipation(competition.id)"
          :is-participating="competition.isParticipating"
          class="card mx-1"
        />
      </div>

      <div v-if="isUploading" class="upload-form bg-gray-300 p-4 rounded mt-4">
        <h2 class="text-teal-400 font-semibold mb-2">Загрузить проект</h2>
        <div class="mb-2">
          <label class="block text-teal-500">Код проекта:</label>
          <textarea v-model="projectCode" class="p-2 border border-gray-400 rounded w-full" rows="5"></textarea>
        </div>
        <div class="mb-2">
          <label class="block text-teal-500">Изображение проекта:</label>
          <input type="file" @change="handleImageUpload" class="p-2 border border-gray-400 rounded w-full" />
        </div>
        <div class="mb-2">
          <label class="block text-teal-500">Документация:</label>
          <input type="file" @change="handleDocumentationUpload" class="p-2 border border-gray-400 rounded w-full" />
        </div>
        <button @click="submitProject" class="bg-teal-500 text-white p-2 rounded mt-2">Отправить проект</button>
        <button @click="cancelUpload" class="bg-gray-500 text-white p-2 rounded mt-2 ml-2">Отменить</button>
      </div>

      <!-- Вставка компонента ParticipantRanking -->
      <ParticipantRanking />
      <CompetitionTask />
    </div>
    
  </div>
  
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue';
import NewsCard from '../components/NewsCard.vue';
import CompetitionCardItem from '../components/CompetitionCardItem.vue';
import ParticipantRanking from '../components/ParticipantRanking.vue';
import CompetitionTask from '../components/CompetitionTask.vue'; 

export default defineComponent({
  components: {
    NewsCard,
    CompetitionCardItem,
    ParticipantRanking,
    CompetitionTask, 
  },
  
  setup() {
    const competitions = ref([
      { id: '1', title: 'Хакатон 2024', type: 'Хакатон', date: '2024-11-22', remainingTime: '', isParticipating: false },
      { id: '2', title: 'CTF 2024', type: 'CTF', date: '2024-12-15', remainingTime: '', isParticipating: false },
      { id: '3', title: 'Хакатон по безопасности', type: 'Хакатон', date: '2024-10-30', remainingTime: '', isParticipating: false },
      { id: '4', title: 'AI Хакатон', type: 'Хакатон', date: '2025-01-10', remainingTime: '', isParticipating: false },
      { id: '5', title: 'Web Security CTF', type: 'CTF', date: '2024-12-05', remainingTime: '', isParticipating: false },
      { id: '6', title: 'Machine Learning Competition', type: 'Хакатон', date: '2025-02-01', remainingTime: '', isParticipating: false },
    ]);

    const filterType = ref('');
    const filterDate = ref('');
    const isUploading = ref(false);
    const projectCode = ref('');
    const projectImage = ref<File | null>(null);
    const projectDocumentation = ref<File | null>(null);
    let timer: ReturnType<typeof setInterval>;

    const filteredCompetitions = computed(() => {
      return competitions.value.filter(competition => {
        const matchesType = filterType.value ? competition.type === filterType.value : true;
        const matchesDate = filterDate.value ? competition.date >= filterDate.value : true;
        return matchesType && matchesDate;
      });
    });

    const updateRemainingTimes = () => {
      competitions.value.forEach(competition => {
        const eventDate = new Date(competition.date).getTime();
        const currentTime = new Date().getTime();
        const distance = eventDate - currentTime;

        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          competition.remainingTime = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
        } else {
          competition.remainingTime = 'Соревнование началось!';
        }
      });
    };

    const handleParticipation = (id: string) => {
      const competition = competitions.value.find(comp => comp.id === id);
      if (competition) {
        competition.isParticipating = !competition.isParticipating;
        const statusMessage = competition.isParticipating 
          ? 'Вы успешно приняли участие в соревновании!' 
          : 'Вы отменили участие в соревновании!';
        alert(statusMessage);

        if (competition.isParticipating) {
          isUploading.value = true;
        }
      }
    };

    const filterCompetitions = (type: string) => {
      filterType.value = type;
    };

    const resetFilter = () => {
      filterType.value = '';
      filterDate.value = '';
    };

    const filterByDate = () => {};

    const handleImageUpload = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0] || null;
      projectImage.value = file;
    };

    const handleDocumentationUpload = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0] || null;
      projectDocumentation.value = file;
    };

    const submitProject = () => {
      alert('Проект успешно загружен!');
      projectCode.value = '';
      projectImage.value = null;
      projectDocumentation.value = null;
      isUploading.value = false;
    };

    const cancelUpload = () => {
      projectCode.value = '';
      projectImage.value = null;
      projectDocumentation.value = null;
      isUploading.value = false;
    };

    onMounted(() => {
      updateRemainingTimes();
      timer = setInterval(updateRemainingTimes, 1000);
    });

    onBeforeUnmount(() => {
      clearInterval(timer);
    });

    return {
      competitions,
      filterType,
      filterDate,
      isUploading,
      projectCode,
      submitProject,
      cancelUpload,
      handleParticipation,
      filterCompetitions,
      resetFilter,
      filterByDate,
      handleImageUpload,
      handleDocumentationUpload,
      filteredCompetitions,
    };
  },
});
</script>




<style scoped>
.text-light-gray {
  color: #d3d3d3;
}

.card {
  width: 60vw;
  max-width: 600px;
  min-height: 150px;
  background-color: #ffffff;
  color: #333;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 4px; /* небольшой отступ сверху */
  
}

/* Контейнер для фильтров */
.filters-container {
max-width: 1500px;
width: 82vw;
color: #d1d5db;
}

.filter-button {
  background-color: rgb(79, 209, 197);
  color: #f7fafc;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter-button:hover {
  background-color: #38b2ac;
}

.date-input {
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
}




.upload-form {
  background-color: #e2e8f0;
}
</style>
