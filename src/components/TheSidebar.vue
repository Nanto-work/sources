<template>
	<aside class="sidebar">
		<ul
			class="navigation"
			:class="{'navigation_showexpand': hoverClass}"
			@click.prevent
		>
			<SidebarList
				:list="projects"
				:listTitle="'projects'"
				@hover-row-nav="toggleHoverClass"
			></SidebarList>
			<SidebarItem
				@hover-row-nav="toggleHoverClass"
			>
				<router-link
					:to="{name: 'contacts'}"
					class="row-nav__link add-tag"
				>contacts</router-link>
			</SidebarItem>
			<SidebarColors
				@hover-row-nav="toggleHoverClass"
			></SidebarColors>
		</ul>
	</aside>
</template>

<script>
import SidebarList from '@/components/SidebarList'
import SidebarItem from '@/components/SidebarItem'
import SidebarColors from '@/components/SidebarColors'
import {PROJECTS} from '@/projects.js'

export default {
	name: 'TheSidebar',
	components: {
		SidebarItem,
		SidebarList,
		SidebarColors
	},
	data() {
		return {
			projects: PROJECTS,
			hoverClass: false
		}
	},
	methods: {
		toggleHoverClass: function(bool) {
			this.hoverClass = bool
		}
	}
}
</script>