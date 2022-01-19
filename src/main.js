import { createApp } from 'vue'
import App from './App.vue'
import LoadScript from "vue-plugin-load-script";
import SigmaPlayground from './components/SigmaPlayground.vue'

const app = createApp(App)
app.use(LoadScript)
app.component('sigma-playground', SigmaPlayground)
app.mount('#app')
