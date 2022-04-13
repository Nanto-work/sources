<template>
	<li
		class="navigation__item sidebar-colors expanding-item"
		:class="{'expanding-item_open': expandState}"
	>
		<div class="row-nav">
			<div
				class="row-nav__left"
				@mouseenter="hoverRowNav(true)"
				@mouseleave="hoverRowNav(false)"
			>
				<span
					class="row-nav__expand icon-expand"
					@click="expandList"
				></span>
			</div>
			<span
				class="row-nav__link add-tag"
				@click="expandList"
			>colors</span>
			<span
				class="row-nav__right"
				@click="expandList"
			>···</span>
		</div>
		<ul class="sub-navigation">
			<SidebarItem
				@hover-row-nav="hoverRowNav"
			>
				<span
					class="row-nav__link add-script"
					:class="{'add-script_selected': isLightColor}"
					@click="changeColor('light')"
				>light</span>
			</SidebarItem>
			<SidebarItem
				@hover-row-nav="hoverRowNav"
			>
				<span
					class="row-nav__link add-script"
					:class="{'add-script_selected': isMonokaiColor}"
					@click="changeColor('monokai')"
				>monokai</span>
			</SidebarItem>
		</ul>
		<div class="row-nav row-nav_close">
			<div
				class="row-nav__left"
				@mouseenter="hoverRowNav(true)"
				@mouseleave="hoverRowNav(false)"
			></div>
			<span class="row-nav__link add-closetag">colors</span>
		</div>
	</li>
</template>

<script>
import SidebarItem from '@/components/SidebarItem'
import useColorSchemes from '@/composables/useColorSchemes' //Composition API Demo

export default {
	name: 'SidebarColors',
	components: {
		SidebarItem
	},
	setup() { // Composition API Demo
		const {isLightColor, isMonokaiColor, changeColor} = useColorSchemes()
		
		return {
			isLightColor,
			isMonokaiColor,
			changeColor
		}
	},
	data() {
		return {
			expandState: false
		}
	},
	methods: {
		expandList: function() {
			this.expandState = !this.expandState
		},
		hoverRowNav: function(bool) {
			this.$emit('hoverRowNav', bool)
		}
	}
}
</script>