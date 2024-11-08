<template>
  <div class="bg-dark-blue p-6">
    <h1 class="text-teal-500 font-bold text-3xl mb-4">Рейтинг участников</h1>
    
    <div class="mb-4">
      <input type="text" v-model="searchTerm" placeholder="Поиск участников..." class="p-2 mb-4 w-full" />
      <button @click="filterParticipants" class="filter-button">Фильтровать</button>
    </div>

    <table class="w-full table-auto">
      <thead>
        <tr class="bg-teal-500 text-gray-200">
          <th class="p-2">Имя</th>
          <th class="p-2">Очки</th>
          <th class="p-2">Специальность</th>
          <th class="p-2">Изменение</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(participant, index) in filteredParticipants" :key="index" class="bg-gray-200">
          <td class="p-2">{{ participant.name }}</td>
          <td class="p-2">{{ participant.points }}</td>
          <td class="p-2">{{ participant.specialization }}</td>
          <td class="p-2">
            <span :class="{'text-green-500': participant.change > 0, 'text-red-500': participant.change < 0}">
              {{ participant.change > 0 ? '▲' : participant.change < 0 ? '▼' : '-' }} {{ Math.abs(participant.change) }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const participants = ref([
      { name: 'Иван Иванов', points: 150, specialization: 'Студент', change: 5 },
      { name: 'Петр Петров', points: 145, specialization: 'Студент', change: -2 },
      { name: 'Светлана Сидорова', points: 140, specialization: 'Преподаватель', change: 3 },
      { name: 'Алексей Алексеев', points: 130, specialization: 'Студент', change: 0 },
      { name: 'Мария Маркова', points: 120, specialization: 'Преподаватель', change: 10 },
      { name: 'Анна Андреева', points: 110, specialization: 'Студент', change: -1 },
      { name: 'Дмитрий Дмитриев', points: 100, specialization: 'Студент', change: 4 },
      { name: 'Елена Еленова', points: 90, specialization: 'Преподаватель', change: 2 },
      { name: 'Кирилл Кириллов', points: 80, specialization: 'Студент', change: -3 },
      { name: 'Ольга Ольгова', points: 70, specialization: 'Студент', change: 1 },
    ]);

    const searchTerm = ref('');
    const filteredParticipants = ref(participants.value);

    const filterParticipants = () => {
      if (searchTerm.value) {
        filteredParticipants.value = participants.value.filter(participant => 
          participant.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
      } else {
        filteredParticipants.value = participants.value;
      }
    };

    return {
      searchTerm,
      filteredParticipants,
      filterParticipants,
    };
  },
});
</script>

<style scoped>
.bg-dark-blue {
  width: 90%;
  margin-top: 60px;
}
.bg-dark-blue h1{
  color: #f7fafc;
  justify-content: center;
  text-align: center;
}

.filter-button {
  background-color: #4fd1c5; /* Бирюзовые кнопки */
  color: #f7fafc; /* Светло-серый текст */
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter-button:hover {
  background-color: #38b2ac; /* Темнее на ховере */
}

.table-auto {
  border-collapse: collapse;
  width: 100%;
  border-radius: 5px; /* Закругленные углы для всей таблицы */
  overflow: hidden;
}

.table-auto th, .table-auto td {
  border: 1px solid #ddd;
  padding: 8px;
  
}

.table-auto th {
  background-color: #4fd1c5;
  color: #f7fafc;
}

.bg-gray-200 {
  background-color: #ffffff; /* Updated row color */
}

.text-green-500 {
  color: #38a169; /* Зеленый цвет для положительных изменений */
}

.text-red-500 {
  color: #e53e3e; /* Красный цвет для отрицательных изменений */
}
.mb-4{
  border-radius: 5px;
}

</style>
