<template>
	<li class="navigation__item">
		<div
			v-if="!itemData.list"
			class="item-nav"
		>
			<div class="item-nav__left"></div>
			<router-link
				:to="{name: 'viewProject', params: {link: itemData.link}}"
				class="item-nav__link add-tag"
			>{{itemData.title}}</router-link>
		</div>
	</li>
</template>

<script>
export default {
	name: 'NavigationItem',
	props: {
		itemData: Object
	}
}
</script>