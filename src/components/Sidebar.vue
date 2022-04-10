<template>
	<aside class="sidebar">
		<ul class="navigation">
			<NavigationItem
				v-for="(item, i) in projects"
				:key="i"
				:itemData="item"
			></NavigationItem>
		</ul>
	</aside>
</template>

<script>
import NavigationItem from '@/components/NavigationItem.vue'

export default {
	name: 'Sidebar',
	components: {
		NavigationItem
	},
	props: {
		projects: Array
	}
}

/*
<router-link
					class="item-nav__link add-tag"
				></router-link>
*/
</script>