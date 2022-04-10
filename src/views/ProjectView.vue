<template>
	<div class="screen">
		<iframe
			:src="link"
		></iframe>
	</div>
</template>

<script>
export default {
	name: 'ProjectView',
	props: {
		link: String
	}
}
</script>