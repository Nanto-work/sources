<template>
	<li class="navigation__item">
		<div class="row-nav">
			<div
				class="row-nav__left"
				@mouseenter="hoverRowNav(true)"
				@mouseleave="hoverRowNav(false)"
			></div>
			<slot></slot>
		</div>
	</li>
</template>

<script>
export default {
	name: 'SidebarItem',
	data() {
		return {
			burgerAnimate: true,
			sidebarOpen: this.sidebarState
		}
	},
	methods: {
		hoverRowNav: function(bool) {
			this.$emit('hoverRowNav', bool)
		}
	}
}
</script>