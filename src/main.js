import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'

import routes from './routes'
import locales from './i18n'

// i18n settings
Vue.use(VueI18n)
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})
Vue.config.lang = navigator.language.toLowerCase()
Vue.config.fallbackLang = 'en'

// http utils
Vue.use(VueResource)

// router settings
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// print env info
console.log(`
env: ${process.env.NODE_ENV}
version: ${process.env.__version__}
hash: ${process.env.__hash__}
build: ${process.env.__build__}
`)
