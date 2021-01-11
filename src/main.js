import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "./router"
import VueRadial from 'vue-radial-progress'

Vue.use(VueRadial)
// import './assets/css/feather.css';
// import './assets/css/app-light.css';
// import './assets/css/simplebar.css';
// import './assets/css/quill.snow.css';
// import './assets/css/jquery.steps.css';
// import './assets/css/uppy.min.css';
// import './assets/css/select2.css';
Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
