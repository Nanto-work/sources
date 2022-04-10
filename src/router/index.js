import { createRouter, createWebHashHistory } from 'vue-router'
import LogoAnimateView from '@/views/LogoAnimateView'
import ProjectView from '@/views/ProjectView'
import ContactsView from '@/views/ContactsView'

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
