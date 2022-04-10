<template>
	<li class="navigation__item">
		<div class="row-nav">
			<div
				class="row-nav__left"
				@mouseenter="$emit('enterRowNav')"
				@mouseleave="$emit('leaveRowNav')"
			></div>
			<a href="#" class="row-nav__link add-tag">{{ itemData.title }}</a>
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