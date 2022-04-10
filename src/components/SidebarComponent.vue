<template>
	<aside class="sidebar">
		<ul
			class="navigation"
			:class="{'navigation_showexpand': hoverClass}"
			@click.prevent
		>
			<NavigationList
				:list="projects"
				:listTitle="'projects'"
				@hover-row-nav="toggleHoverClass"
			></NavigationList>
			<NavigationItem
				@hover-row-nav="toggleHoverClass"
			>
				<router-link
					:to="{name: 'viewContacts'}"
					class="row-nav__link add-tag"
				>contacts</router-link>
			</NavigationItem>
			<ColorList
				@hover-row-nav="toggleHoverClass"
			></ColorList>
		</ul>
	</aside>
</template>

<script>
import NavigationList from '@/components/NavigationList'
import NavigationItem from '@/components/NavigationItem'
import ColorList from '@/components/ColorList'

export default {
	name: 'SidebarComponent',
	components: {
		NavigationItem,
		NavigationList,
		ColorList
	},
	props: {
		projects: Array,
	},
	data() {
		return {
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