import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"
import ShoptPage from "@/pages/ShopPage"
import DetailPage from "@/pages/DetailPage"
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
    {
        path: '/shop',
        name: 'ShoptPage',
        component: ShoptPage
    },
    {
        path: '/detail/:id',
        name: 'DetailPage',
        component: DetailPage
    },
]
const scrollBehavior = (to, from, savedPosition) => {
    return savedPosition || { top: 0, left: 0 }
}

const router = createRouter({
    // mode: 'history',
    history: createWebHistory(process.env.BASE_URL),
    //base: process.env.BASE_URL,
    routes,
    scrollBehavior

})

export default router