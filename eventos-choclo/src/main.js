import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'bulma/css/bulma.css'
import router from './router'
import store from "./store";
import * as VueGoogleMaps from 'vue2-google-maps'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC9UlqoUYi-iQjWxbt5KBI8KLao_IgdyCk',
    libraries: 'places',
  }
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
