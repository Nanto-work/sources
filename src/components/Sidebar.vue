<template>
	<aside class="sidebar">
		<ul
			class="navigation"
			:class="hoverClass"
			@click.prevent
		>
			<NavigationList
				:list="projects"
				:listTitle="'projects'"
				@enter-row-nav="hoverClass = 'navigation_showexpand'"
				@leave-row-nav="hoverClass = ''"
			></NavigationList>
			<NavigationItem
				@enter-row-nav="hoverClass = 'navigation_showexpand'"
				@leave-row-nav="hoverClass = ''"
			>
				<router-link
					:to="{name: 'viewContacts'}"
					class="row-nav__link add-tag"
				>contacts</router-link>
			</NavigationItem>
			<ColorList
				@enter-row-nav="hoverClass = 'navigation_showexpand'"
				@leave-row-nav="hoverClass = ''"
			></ColorList>
		</ul>
	</aside>
</template>

<script>
import NavigationList from '@/components/NavigationList.vue'
import NavigationItem from '@/components/NavigationItem.vue'
import ColorList from '@/components/ColorList.vue'

export default {
	name: 'Sidebar',
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
			hoverClass: ''
		}
	}
}

</script>