import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"
import { createRouter, createWebHistory } from 'vue-router'

//Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/contacts',
        name: 'ContactPage',
        component: ContactPage
    },
]


const router = createRouter({
    // mode: 'history',
    history: createWebHistory(process.env.BASE_URL),
    //base: process.env.BASE_URL,
    routes
})

export default router