<template>
	<li class="navigation__item">
		<div class="row-nav">
			<div
				class="row-nav__left"
				@mouseenter="$emit('enterRowNav')"
				@mouseleave="$emit('leaveRowNav')"
			></div>
			<slot></slot>
		</div>
	</li>
</template>

<script>
export default {
	name: 'NavigationItem'
}
</script>