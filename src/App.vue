<template>
	<div class="wrapper">
		<header class="header">
			<HeaderLogo/>
			<HeaderBurger
				:sidebarState="sidebarOpen"
				@show-sidebar="toggleSidebar"
			>
			</HeaderBurger>
		</header>
		<SidebarComponent
			:class="{'sidebar_open': sidebarOpen}"
			:projects="projects"
		></SidebarComponent>
		<section class="content">
			<router-view/>
		</section>
	</div>
</template>

<script>
import HeaderLogo from '@/components/HeaderLogo'
import HeaderBurger from '@/components/HeaderBurger'
import SidebarComponent from '@/components/SidebarComponent'
import {PROJECTS} from './projects.js'

export default {
	name: 'WebFolder',
	components: {
		HeaderLogo,
		HeaderBurger,
		SidebarComponent
	},
	data() {
		return {
			projects: PROJECTS,
			sidebarOpen: false
		}
	},
	methods: {
		toggleSidebar: function(bool) {
			this.sidebarOpen = bool
		}
	}
}
</script>