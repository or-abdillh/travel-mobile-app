import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        name: "home",
        path: "/",
        component: () => import("@/pages/Home.vue")
    }
]

export const route = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
