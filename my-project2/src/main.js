import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1 导入element-ui
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import { Row, Button, Switch } from 'element-ui'
Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(Row)
Vue.use(Button)
Vue.use(Switch)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
