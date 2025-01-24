import App from '@/App.vue'
import router from '@/router'
import { createApp } from 'vue'
import i18n from './language'
import '@/styles/index.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
