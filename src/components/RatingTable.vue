<template>
  <table class="min-w-full border border-teal-500 mt-4">
    <thead>
      <tr class="bg-teal-500">
        <th class="p-2 text-left">Участник</th>
        <th class="p-2 text-left">Очки</th>
        <th class="p-2 text-left">Специальность</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="participant in participants" :key="participant.name" class="bg-gray-300 border-b border-gray-500">
        <td class="p-2">{{ participant.name }}</td>
        <td class="p-2">{{ participant.points }}</td>
        <td class="p-2">{{ participant.specialty }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default {
  data() {
    return {
      participants: [
        { name: 'Иван Иванов', points: 100, specialty: 'Студент' },
        { name: 'Мария Петрова', points: 150, specialty: 'Преподаватель' },
        // Добавьте больше участников
      ],
    };
  },
};
</script>

<style scoped>

</style>
