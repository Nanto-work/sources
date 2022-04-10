<template>
	<li class="navigation__item">
		<div
			class="row-nav"
			v-if="!itemData.list"
		>
			<div class="row-nav__left"></div>
			<router-link
				class="row-nav__link add-tag"
				:to="{name: 'viewProject', params: {link: itemData.link}}"
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