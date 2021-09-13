import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Main style
import '@/assets/css/style.min.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
