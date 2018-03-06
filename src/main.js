// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.http.interceptors.push((request,next)=>{
  let token = window.localStorage.token
  // let token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySUQiOiIyIn0.irpyg5nYoOcxTJvPS69aeFAN0LnVV7VxbjGO0YLWcJs'
  if(token){
    request.headers.set('Authorization',token)
    console.log(request.headers)
  }
  next((res)=>{
    return res
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
