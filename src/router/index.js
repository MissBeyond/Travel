import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }]
})


function Axios() {
  this.then = function(res,callback) {
    callback(res)
  }
}
const axios = new Axios()
axios.then('this is response', handleResponse)

function handleResponse(res) {
  console.log(res)
}
