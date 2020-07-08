import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// jQuery
import $ from 'jquery'; window.$ = $; window.jQuery = $;

// Register hiweb sdk
import hiwebTheme from 'hiweb-theme-sdk';
Vue.use(hiwebTheme);

// ... For development only
if (process.env.NODE_ENV !== 'production') {
  Vue.prototype.$http.setHeaders({
    'Hiweb-Website-Id': process.env.VUE_APP_HIWEB_WEBSITE_ID
  });
}

// Build theme config
import '@/config.js';

// Theme CSS
import '@/assets/css/theme.css';
import '@/assets/fonts/feather/feather.css';

// App css
import '@/assets/scss/app.scss';

// Flickity (image carousel)
import 'flickity/css/flickity.css';

// Fancybox
// const jQuery = $;
require('@fancyapps/fancybox/dist/jquery.fancybox.min.js');
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

// Bootstrap
require('bootstrap');

// Register global components
require('./components');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
