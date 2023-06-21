import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import components from './shared'
import router from './router/routes'

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})

app.use(router).mount('#app')
