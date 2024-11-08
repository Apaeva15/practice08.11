// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Registration from '../pages/Registration.vue';
import Dashboard from '../pages/Dashboard.vue';

import AdminPanel from '../pages/AdminPanel.vue';
import HackathonDetails from '../pages/HackathonDetails.vue';
import PlatformFeatures from '../pages/PlatformFeatures.vue';
import UpcomingEvents from '../pages/UpcomingEvents.vue';
import Login from '../pages/Login.vue';
import RegistrationForm from '../components/RegistrationForm.vue';

import CompetitionTask from '../components/CompetitionTask.vue';
import OrganizerPanel from '../pages/OrganizerPanel.vue';
const routes = [
  { path: '/', component: Home},
  { path: '/news/hackathon', component: HackathonDetails, name: 'HackathonDetails' },
  { path: '/news/features', component: PlatformFeatures, name: 'PlatformFeatures' },
  { path: '/news/events', component: UpcomingEvents, name: 'UpcomingEvents' },
  { path: '/registration', component: Registration },
  { path: '/dashboard', component: Dashboard },

  {path: '/organizer', component: OrganizerPanel},
  { path: '/admin', component: AdminPanel },
  { path: '/login', component: Login },
  {path: '/registration/:type/:date',name: 'Registration',component: RegistrationForm,},
  
  {path: '/competition-task', name: 'CompetitionTask', component: CompetitionTask,},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
