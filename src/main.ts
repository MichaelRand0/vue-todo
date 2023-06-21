import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import components from './shared'
import router from './router/routes'
import directives from './directives'

const app = createApp(App)

directives.forEach((directive) => {
  app.directive(directive.name, directive)
})

components.forEach((component) => {
  app.component(component.name, component)
})

app.use(router).mount('#app')
