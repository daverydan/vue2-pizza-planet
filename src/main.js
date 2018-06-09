import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		// return { x: 0, y: 0 }
		/*if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}*/
		/*if (to.hash) {
			return {
				selector: to.hash
			}
		}*/
		/*return { selector: '.btn' }
		return { selector: 'h1' }*/
	}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
