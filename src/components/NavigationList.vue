<template>
	<li
		class="navigation__item expanding-item"
		:class="{'expanding-item_open': expandState}"
	>
		<div class="row-nav">
			<div
				class="row-nav__left"
				@mouseenter="hoverRowNav(true)"
				@mouseleave="hoverRowNav(false)"
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
			>{{listTitle}}</span>
			<span
				class="row-nav__right"
				@click="expandList"
			>···</span>
		</div>
		<ul class="sub-navigation">
			<template
				v-for="(item, i) in list"
				:key="i"
			>
				<NavigationList
					v-if="item.list"
					:list="item.list"
					:listTitle="item.title"
					@hover-row-nav="hoverRowNav"
				></NavigationList>
				<NavigationItem
					v-else
					@hover-row-nav="hoverRowNav"
				>
					<router-link
						:to="{name: 'viewProject', params: {link: item.link}}"
						class="row-nav__link add-tag"
					>{{item.title}}</router-link>
				</NavigationItem>
			</template>
		</ul>
		<div class="row-nav row-nav_close">
			<div
				class="row-nav__left"
				@mouseenter="hoverRowNav(true)"
				@mouseleave="hoverRowNav(false)"
			></div>
			<span class="row-nav__link add-closetag">{{listTitle}}</span>
		</div>
	</li>
</template>

<script>
import NavigationItem from '@/components/NavigationItem'

export default {
	name: 'NavigationList',
	components: {
		NavigationItem
	},
	props: {
		list: Array,
		listTitle: String
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