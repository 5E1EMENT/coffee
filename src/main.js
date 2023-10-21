import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const COFFEE_DATA_API = 'https://random-data-api.com/api/'
const PICTURES_API = 'https://loremflickr.com/500/500/'

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$api = COFFEE_DATA_API
app.config.globalProperties.$pictures = PICTURES_API

pinia.use(({ store }) => {
    store.$api = app.config.globalProperties.$api;
    store.$pictures = app.config.globalProperties.$pictures;

});
app.use(pinia)

app.mount('#app')
