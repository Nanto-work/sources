import { createRouter, createWebHashHistory } from 'vue-router'
import LogoAnimateView from '../views/LogoAnimateView.vue'
import ProjectView from '../views/ProjectView.vue'
import ContactsView from '../views/ContactsView.vue'

const routes = [
	{
		path: '/',
		name: 'viewLogoAnimate',
		component: LogoAnimateView
	},
	{
		path: '/project',
		name: 'viewProject',
		component: ProjectView,
		props: true
	},
	{
		path: '/contacts',
		name: 'viewContacts',
		component: ContactsView
    }
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
