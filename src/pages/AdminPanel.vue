<template>
  <div class="bg-dark-blue p-6">
    <h1 class="text-teal-500 text-3xl mb-4">Панель администратора</h1>

    <!-- Список соревнований -->
    <div class="mb-6">
      <h2 class="text-teal-400 font-semibold mb-2">Список соревнований:</h2>
      <div v-for="competition in competitions" :key="competition.id" class="bg-gray-200 p-4 mb-4 rounded">
        <h3 class="text-teal-500">{{ competition.title }}</h3>
        <p>Тип: {{ competition.type }}</p>
        <p>Дата: {{ competition.date }}</p>
        <button @click="editCompetition(competition)" class="bg-teal-500 text-white p-2 rounded">Редактировать</button>
        <button @click="removeCompetition(competition.id)" class="bg-red-500 text-white p-2 rounded ml-2">Удалить</button>
      </div>
    </div>

    <!-- Форма редактирования -->
    <div v-if="isEditing" class="bg-gray-300 p-4 rounded">
      <h2 class="text-teal-400 font-semibold mb-2">Редактировать соревнование:</h2>
      <input v-model="newCompetition.title" placeholder="Название" class="p-2 mb-2 w-full" />
      <input v-model="newCompetition.type" placeholder="Тип" class="p-2 mb-2 w-full" />
      <input v-model="newCompetition.date" placeholder="Дата" class="p-2 mb-2 w-full" />
      <button @click="saveCompetition" class="bg-teal-500 text-white p-2 rounded">Сохранить</button>
      <button @click="cancelEdit" class="bg-gray-500 text-white p-2 rounded ml-2">Отменить</button>
    </div>

    <!-- Форма создания нового соревнования -->
    <div class="mt-6 bg-gray-300 p-4 rounded" v-if="isCreating">
      <h2 class="text-teal-400 font-semibold mb-2">Создание нового соревнования:</h2>
      <input v-model="newCompetition.title" placeholder="Название" class="p-2 mb-2 w-full" />
      <input v-model="newCompetition.type" placeholder="Тип" class="p-2 mb-2 w-full" />
      <input v-model="newCompetition.date" placeholder="Дата" class="p-2 mb-2 w-full" />
      <button @click="createCompetition" class="bg-teal-500 text-white p-2 rounded">Создать</button>
      <button @click="cancelCreate" class="bg-gray-500 text-white p-2 rounded ml-2">Отменить</button>
    </div>

    <!-- Кнопка для создания нового соревнования -->
    <div class="mt-4">
      <button @click="startCreating" class="bg-teal-500 text-white p-2 rounded">Создать новое соревнование</button>
    </div>

    <!-- Управление пользователями -->
    <div class="mt-8">
      <h2 class="text-teal-400 font-semibold mb-2">Управление пользователями:</h2>
      <button @click="moderateUsers" class="bg-teal-500 text-white p-2 rounded">Модерация участников</button>
      <button @click="viewAchievements" class="bg-teal-500 text-white p-2 rounded ml-2">Просмотр достижений</button>
    </div>

    <!-- Оценка проектов -->
    <div class="mt-8">
      <h2 class="text-teal-400 font-semibold mb-2">Оценка проектов:</h2>
      <button @click="evaluateProjects" class="bg-teal-500 text-white p-2 rounded">Оценить проекты</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// Определяем интерфейс для соревнования
interface Competition {
  id: string;
  title: string;
  type: string;
  date: string;
}

// Определяем интерфейс для участника
interface Participant {
  id: string;
  name: string;
  achievements: string[];
}

export default defineComponent({
  setup() {
    // Список соревнований
    const competitions = ref<Competition[]>([
      { id: '1', title: 'Хакатон 2024', type: 'Хакатон', date: '2024-11-12' },
      { id: '2', title: 'CTF 2024', type: 'CTF', date: '2024-12-15' },
    ]);

    // Список участников
    const participants = ref<Participant[]>([
      { id: '1', name: 'Иван Иванов', achievements: ['1 место в хакатоне 2023', 'Участник CTF 2022'] },
      { id: '2', name: 'Анна Петрова', achievements: ['2 место в хакатоне 2022'] },
    ]);

    const isEditing = ref(false);
    const isCreating = ref(false); // Флаг для отображения формы создания соревнования
    const newCompetition = ref<Competition>({ id: '', title: '', type: '', date: '' });
    const editingId = ref<string | null>(null); // Чтобы отслеживать, какое соревнование редактируется

    const editCompetition = (competition: Competition) => {
      newCompetition.value = { ...competition }; // Заполнение полей для редактирования
      isEditing.value = true; // Устанавливаем режим редактирования
      editingId.value = competition.id; // Сохраняем id редактируемого соревнования
    };

    const saveCompetition = () => {
      if (editingId.value) {
        const index = competitions.value.findIndex(comp => comp.id === editingId.value);
        if (index !== -1) {
          competitions.value[index] = { ...newCompetition.value, id: editingId.value }; // Обновляем соревнование
        }
      }
      cancelEdit(); // Выходим из режима редактирования и сбрасываем форму
    };

    const cancelEdit = () => {
      isEditing.value = false; // Выход из режима редактирования
      newCompetition.value = { id: '', title: '', type: '', date: '' }; // Сброс формы
      editingId.value = null; // Сброс id
    };

    const startCreating = () => {
      isCreating.value = true; // Включаем режим создания
      newCompetition.value = { id: '', title: '', type: '', date: '' }; // Сброс формы
    };

    const createCompetition = () => {
      // Создание нового соревнования
      const newId = (competitions.value.length + 1).toString();
      competitions.value.push({ ...newCompetition.value, id: newId }); // Добавление нового соревнования
      cancelCreate(); // Выходим из режима создания
    };

    const cancelCreate = () => {
      isCreating.value = false; // Выход из режима создания
      newCompetition.value = { id: '', title: '', type: '', date: '' }; // Сброс формы
    };

    const removeCompetition = (id: string) => {
      competitions.value = competitions.value.filter(comp => comp.id !== id);
    };

    // Модерация участников
    const moderateUsers = () => {
      alert('Модерация участников:\n' + participants.value.map(p => p.name).join('\n'));
      // Здесь можно добавить логику для модерации участников, например, смену статуса
    };

    // Просмотр достижений участников
    const viewAchievements = () => {
      const achievementsList = participants.value.map(p => `${p.name}: ${p.achievements.join(', ')}`).join('\n');
      alert('Достижения участников:\n' + achievementsList);
    };

    // Оценка проектов
    const evaluateProjects = () => {
      // Логика для оценки проектов (например, выставление оценок и публикация результатов)
      alert('Оценка проектов завершена!'); // Здесь можно заменить на реальную логику
    };

    return {
      competitions,
      editCompetition,
      removeCompetition,
      newCompetition,
      isEditing,
      isCreating,
      saveCompetition,
      cancelEdit,
      startCreating,
      createCompetition,
      cancelCreate,
      moderateUsers,
      viewAchievements,
      evaluateProjects,
    };
  },
});
</script>

<style scoped>

.bg-dark-blue h1 {
 color: #e2e8f0;
 justify-content: center;
 text-align: center;
}
.bg-red-500{
  background-color: rgba(246, 173, 85, 1);
}
.bg-gray-200 {
  background-color: #f7fafc; /* Светло-серый фон для карточек */
}

.bg-gray-300 {
  background-color: #e2e8f0; /* Цвет для формы редактирования */
}

.text-teal-500 {
  color: #4fd1c5; /* Бирюзовый цвет текста */
}

.text-teal-400 {
  color: #D1D5DB; 
}
.bg-dark-blue{
  width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>
