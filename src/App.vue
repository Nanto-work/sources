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
		<TheSidebar
			:class="{'sidebar_open': sidebarOpen}"
		></TheSidebar>
		<section class="content">
			<router-view/>
		</section>
	</div>
</template>

<script>
import HeaderLogo from '@/components/HeaderLogo'
import HeaderBurger from '@/components/HeaderBurger'
import TheSidebar from '@/components/TheSidebar'

export default {
	name: 'WebFolder',
	components: {
		HeaderLogo,
		HeaderBurger,
		TheSidebar
	},
	data() {
		return {
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