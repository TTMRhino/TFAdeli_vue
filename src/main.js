import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"
import store from '@/store'
import paginate from "vuejs-paginate-next";
import VueCookies from 'vue-cookies'


/** Global variables */
export const BASE_URL = 'http://tfadeli-api.local/'
export const URL = 'http://tfadeli-api.local/api/v1/'

const app = createApp(App)


app
    .use(router)
    .use(store)
    .use(paginate)
    .use(VueCookies)
    .mount('#app')