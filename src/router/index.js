import { createRouter, createWebHashHistory } from 'vue-router'
import ViewLogoAnimate from '@/views/ViewLogoAnimate'
import ViewProject from '@/views/ViewProject'
import ViewContacts from '@/views/ViewContacts'

const routes = [
	{
		path: '/',
		name: 'main',
		component: ViewLogoAnimate
	},
	{
		path: '/projects',
		name: 'projects',
		component: ViewProject,
		props: true
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: ViewContacts
    }
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
