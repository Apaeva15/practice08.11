<!-- components/CompetitionCardItem.vue -->
<template>
  <div class="bg-gray-200 p-4 m-2 rounded-lg shadow">
    <h2 class="text-teal-500 font-bold">{{ title }}</h2>
    <p class="text-teal-400">{{ type }}</p>
    <p class="text-teal-400">Дата: {{ date }}</p>
    <p class="text-teal-400">Осталось времени: <span class="text-teal-500">{{ remainingTime }}</span></p>
    <button @click="participate" class="bg-orange-500 text-white p-2 rounded">
      {{ isParticipating ? 'Отменить участие' : 'Принять участие' }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true, // Указывает, что это свойство обязательно
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    remainingTime: {
      type: String,
      required: true,
    },
    isParticipating: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['participate'],
  setup(props, { emit }) {
    const participate = () => {
      emit('participate', props.title);
    };

    return {
      participate,
    };
  },
});
</script>

<style scoped>
.bg-gray-200 {
  background-color: #f7fafc; /* Светло-серый фон карточки */
}

.bg-orange-500 {
  background-color: #f6ad55; /* Светло-оранжевые кнопки */
}
</style>
