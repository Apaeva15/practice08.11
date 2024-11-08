<template>
  <footer class="bg-gradient-to-r from-blue-800 to-teal-600 text-white py-4 bottom-0 w-full">
    <div class="container mx-auto text-center">
      <div class="footer-content">
        <h2 class="text-lg font-bold">Logo</h2>
        <p>© 2024 Logo. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
/* Градиентный фон для футера */
footer {
  background: linear-gradient(to right, rgba(94, 138, 134, 1), #38b2ac);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Небольшая тень */
}

/* Уменьшаем ширину футера и добавляем отступы по бокам */
.footer-content {
  max-width: 1200px; /* Максимальная ширина футера */
  height: 50px;
  margin: 0 auto; /* Центрируем футер */
  padding: 0 20px; /* Отступы по бокам */
}
</style>
