<template>
	<div
		class="header-burger"
		:class="{'header-burger_animated': burgerAnimate,
				'header-burger_active': sidebarOpen}"
		@click="clickBurger"
	>
		<span style="font-size:24rem; position: relative;">burger</span>
		<span></span>
		<span></span>
	</div>
</template>

<script>

export default {
	name: 'HeaderBurger',
	props: {
		sidebarState: Boolean
	},
	data() {
		return {
			burgerAnimate: true,
			sidebarOpen: this.sidebarState
		}
	},
	methods: {
		clickBurger: function() {
			this.burgerAnimate = false
			this.sidebarOpen = !this.sidebarOpen

			this.$emit('showSidebar', this.sidebarOpen)
		}
	}
}
</script>