import { createApp } from 'vue'
import App from './App.vue'
// add routing script to the main
import router from './router'

// const options = {
//   confirmButtonColor: '#1a4273'
// }
createApp(App).use(router).mount('#app')
