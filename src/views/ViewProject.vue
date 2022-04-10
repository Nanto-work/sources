<template>
	<div class="screen">
		<iframe
			:src="link"
		></iframe>
	</div>
</template>

<script>
export default {
	name: 'ViewProject',
	props: {
		link: String
	}
}
</script>