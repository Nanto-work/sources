<template>
	<div class="wrapper">
		<Header></Header>
		<Sidebar
			:projects="projects"
		></Sidebar>
		<section class="content">
			<router-view/>
		</section>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import {PROJECTS} from './projects.js'

export default {
	name: 'Home',
	components: {
		Header,
		Sidebar
	},
	data() {
		return {
			projects: PROJECTS
		}
	}
}
</script>