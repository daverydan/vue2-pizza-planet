import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import History from './components/History.vue'
import Delivery from './components/Delivery.vue'
import OrderingGuide from './components/OrderingGuide.vue'
import Admin from './components/Admin.vue'

export const routes = [
	{ path: '/', components: {
		default: Home,
		'ordering-guide': OrderingGuide,
		'delivery': Delivery,
		'history': History,
	}},
	{ path: '/menu', component: Menu },
	{ path: '/admin', component: Admin, beforeEnter: (to, from, next) => {
		alert('Please login to access.')
		next()
	}},
	{ path: '/about', component: About, children: [
		{ path: '/contact', component: Contact },
		{ path: '/history', component: History },
		{ path: '/delivery', component: Delivery },
		{ path: '/ordering-guide', component: OrderingGuide },
	]},
	{ path: '*', redirect: '/' },
]