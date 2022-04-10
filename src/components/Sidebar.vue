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
				@enter-row-nav="hoverClass = 'navigation_showshrink'"
				@leave-row-nav="hoverClass = null"
			></NavigationList>
		</ul>
	</aside>
</template>

<script>
import NavigationList from '@/components/NavigationList.vue'
/*import NavigationItem from '@/components/NavigationItem.vue'*/

export default {
	name: 'Sidebar',
	components: {
/*		NavigationItem,*/
		NavigationList
	},
	props: {
		projects: Array
	},
	data() {
		return {
			actualColor: 'light',
			hoverClass: null
		};
	}
}

</script>