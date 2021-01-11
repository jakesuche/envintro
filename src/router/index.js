import Vue from "vue";
import Router from "vue-router";
import HomePage from '@/components/pages/HomePage'
import DefaultPage from '@/components/pages/DefaultPage'
import NavBar from "@/components/shared/NavBar";
import AuthLogin from '@/components/pages/AuthLogin'

Vue.use(Router)



const router = new Router({
    routes:[
        {
            path:"/",
            name:"root",
            redirect:"/dashboard"
        },
        {
            path:"/dashboard",
            name:"DashBaord",
            component: DefaultPage

        },
        {
            path:"/login",
            name:"login",
            component:AuthLogin

        }
    ],
    mode:"history"
})


export default router