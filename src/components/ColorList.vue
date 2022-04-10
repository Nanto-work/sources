<template>
	<li
		class="navigation__item expanding-item"
		:class="{'expanding-item_open': expandState}"
	>
		<div class="row-nav">
			<div
				@mouseenter="$emit('enterRowNav')"
				@mouseleave="$emit('leaveRowNav')"
				class="row-nav__left"
			>
				<span
					v-if="expandState"
					class="row-nav__expand icon-minus"
					@click="expandList"
				></span>
				<span
					v-else
					class="row-nav__expand icon-plus"
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
			<NavigationItem
				@enter-row-nav="$emit('enterRowNav')"
				@leave-row-nav="$emit('leaveRowNav')"
			>
				<span
					class="row-nav__link add-script"
					:class="(currentColor === 'light') ? 'add-script_selected' : ''"
					@click="changeColor('light')"
				>light</span>
			</NavigationItem>
			<NavigationItem
				@enter-row-nav="$emit('enterRowNav')"
				@leave-row-nav="$emit('leaveRowNav')"
			>
				<span
					class="row-nav__link add-script"
					:class="(currentColor === 'monokai') ? 'add-script_selected' : ''"
					@click="changeColor('monokai')"
				>monokai</span>
			</NavigationItem>
		</ul>
		<div class="row-nav row-nav_close">
			<div
				class="row-nav__left"
				@mouseenter="$emit('enterRowNav')"
				@mouseleave="$emit('leaveRowNav')"
			></div>
			<span class="row-nav__link add-closetag">colors</span>
		</div>
	</li>
</template>

<script>
import NavigationItem from '@/components/NavigationItem.vue'
import {ref, onMounted} from 'vue'

export default {
	name: 'ColorList',
	components: {
		NavigationItem
	},
	setup() {
		let currentColor = ref('light')
		const changeColorClass = () => {
			document.documentElement.className = currentColor.value
		}
		const changeColor = (color) => {
			currentColor.value = color
			changeColorClass()
		}

		onMounted(changeColorClass)

		return {
			currentColor,
			changeColorClass,
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
		}
	}
}
</script>