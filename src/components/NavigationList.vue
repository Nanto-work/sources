<template>
	<li
		class="navigation__item expanding-item"
		:class="{ 'expanding-item_open': expandState }"
	>
		<div class="row-nav">
			<div
				@mouseenter="$emit('enterRowNav')"
				@mouseleave="$emit('leaveRowNav')"
				class="row-nav__left"
			>
				<span
					class="row-nav__expand icon-plus"
					href="#"
					@click="expandList"
				></span>
			</div>
			<span
				class="row-nav__link add-tag"
				@click="expandList"
			>{{ listTitle }}</span>
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
					@enter-row-nav="$emit('enterRowNav')"
					@leave-row-nav="$emit('leaveRowNav')"
				></NavigationList>
				<NavigationItem
					v-else
					:itemData="item"
					@enter-row-nav="$emit('enterRowNav')"
					@leave-row-nav="$emit('leaveRowNav')"
				></NavigationItem>
			</template>
		</ul>
	</li>
</template>

<script>
import NavigationItem from '@/components/NavigationItem.vue'

export default {
	name: 'NavigationList',
	props: {
		list: Array,
		listTitle: String
	},
	components: {
		NavigationItem
	},
	data() {
		return {
			itemsArr: [],
			listsArr: [],
			expandState: false
		}
	},
	beforeCreate() {
		console.log(this.list);
	},
	methods: {
		expandList: function() {
			this.expandState = !this.expandState;
		}
	}
}
</script>