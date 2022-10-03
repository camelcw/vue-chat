import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import {components} from "@/components/components";
import store from "@/store/store";
import Vue3Material from 'vue3-material';
import './assets/tailwind.css'


const app = createApp(App)

components.forEach(component => app.component(component.name, component))

app.use(router).use(Vue3Material).use(store).mount('#app')
