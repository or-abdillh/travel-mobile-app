import { createApp } from "vue"
import App from "@/App.vue"
import { route } from "@/router/route"

import "@/style.css"

createApp(App).use(route).mount('#app')
