import { createApp } from 'vue';
import 'bootstrap';
import App from './App.vue';
import router from './router';

import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);

app.use(router).mount('#app');
