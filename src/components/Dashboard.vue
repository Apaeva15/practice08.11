<template>
  <div class="w-full flex flex-col items-center mb-8">
    <h1 class="text-white text-3xl font-semibold mb-6 mt-8 text-center">Актуальные соревнования</h1>

    <!-- Filters Section -->
    <div class="filters-container mb-4">
      <h2 class="text-teal-400 font-semibold mb-2">Фильтры по типу соревнований:</h2>
      <div class="flex1 justify-start mb-4 space-x-4">
        <button @click="filterCompetitions('Хакатон')" class="filter-button">Хакатоны</button>
        <button @click="filterCompetitions('CTF')" class="filter-button">CTF</button>
        <button @click="resetFilter" class="filter-button">Все</button>
      </div>
      <!-- Date filter input -->
      <div class="flex justify-start">
        <input type="date" v-model="filterDate" @change="filterByDate" class="date-input" />
      </div>
    </div>

    <!-- Competition Cards Section -->
    <div class="flex flex-wrap justify-center w-full">
      <CompetitionCard
        v-for="(competition, index) in filteredCompetitions"
        :key="index"
        :title="competition.title"
        :type="competition.type"
        :date="competition.date"
        :progress="competition.progress"
        :ranking="competition.ranking"  
        :completedTasks="competition.completedTasks"
        class="card mx-1"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompetitionCard from './CompetitionCard.vue';

export default defineComponent({
  components: {
    CompetitionCard,
  },
  setup() {
    const competitions = ref([
      { title: 'Хакатон 2024', type: 'Хакатон', date: '2024-11-12', progress: 30, ranking: 2, completedTasks: 15 },
      { title: 'CTF 2024', type: 'CTF', date: '2024-12-15', progress: 50, ranking: 1, completedTasks: 30 },
      { title: 'Конкурс по веб-разработке', type: 'Конкурс', date: '2025-01-20', progress: 70, ranking: 3, completedTasks: 25 },
      { title: 'Алгоритмическая олимпиада', type: 'Олимпиада', date: '2025-03-05', progress: 10, ranking: 5, completedTasks: 5 },
      { title: 'Соревнование по ИИ', type: 'Соревнование', date: '2025-04-25', progress: 90, ranking: 1, completedTasks: 45 },
      { title: 'Хакатон по безопасности', type: 'Хакатон', date: '2025-05-30', progress: 0, ranking: 4, completedTasks: 0 },
    ]);

    const filteredCompetitions = ref(competitions.value);
    const filterDate = ref('');

    const filterCompetitions = (type: string) => {
      filteredCompetitions.value = competitions.value.filter(comp => comp.type === type);
    };

    const resetFilter = () => {
      filteredCompetitions.value = competitions.value;
    };

    const filterByDate = () => {
      if (filterDate.value) {
        filteredCompetitions.value = competitions.value.filter(comp => comp.date >= filterDate.value);
      } else {
        filteredCompetitions.value = competitions.value;
      }
    };

    return {
      competitions,
      filteredCompetitions,
      filterDate,
      filterCompetitions,
      resetFilter,
      filterByDate,
    };
  },
});
</script>

<style scoped>
/* Styling for the title */
.text-teal-500 {
  color: #D1D5DB;
  
}

.text-teal-400{
  max-width: 1500px;
  width: 86vw;
  color: #f7fafc;
}
.flex1 {
  max-width: 1500px;
  width: 86vw;
}
/* Styling for filter buttons */
.filter-button {
  background-color: #4fd1c5;
  color: #f7fafc;
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter-button:hover {
  background-color: #38b2ac;
}

/* Styling for the date input */
.date-input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  margin-top: 10px;
}

/* Card styling for layout */
.card {
  width: 300px;
  background-color: #f7fafc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  color: #4FD1C5;
}
</style>
