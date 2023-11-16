import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from 'vue-query'

import { FocusPlugin } from '@/shared/plugins'

import App from './app/App.vue'
import { router } from './app/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.use(FocusPlugin)

app.mount('#app')
