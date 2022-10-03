import {createRouter, createWebHistory} from "vue-router";
import Login from "@/components/pages/publicPages/login/Login";
import Chat from "@/components/pages/privatePages/chat/Chat";

const routes = [
    {path: '/login', component: Login},
    {path: '/chat', component: Chat}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;