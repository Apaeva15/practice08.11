import { defineStore } from 'pinia';

// Определяем магазин с именем 'main'
export const useMainStore = defineStore('main', {
  state: () => ({
    user: null,
    competitions: [],
  }),
  actions: {
    setUser(user: any) {
      this.user = user; // Установка пользователя
    },
    
  },
});
