<template>
	<aside class="sidebar">
		<ul
			class="navigation"
			:class="hoverClass"
			@click.prevent
		>
			<li class="navigation__item">
				<div class="row-nav">
					<div
						class="row-nav__left"
						@mouseenter="hoverClass = 'navigation_showshrink'"
						@mouseleave="hoverClass = ''"
					></div>
					<a href="#" class="row-nav__link add-tag">contacts</a>
				</div>
			</li>
			<li class="navigation__item expanding-item">
				<div class="row-nav">
					<div
						@mouseenter="hoverClass='navigation_showshrink'"
						@mouseleave="hoverClass=''"
						class="row-nav__left"
					>
						<span
							class="row-nav__expand icon-plus"
							href="#"
							@click="expandNav"
						></span>
					</div>
					<span
						class="row-nav__link add-tag"
						@click="expandNav"
					>colors</span>
					<span
						class="row-nav__right"
						@click="expandNav"
					>···</span>
				</div>
				<ul class="sub-navigation">
					<li class="navigation__item">
						<div class="row-nav">
							<div
								class="row-nav__left"
								@mouseenter="hoverClass = 'navigation_showshrink'"
								@mouseleave="hoverClass = ''"
							></div>
							<a href="#" class="row-nav__link add-tag">light</a>
						</div>
					</li>
					<li class="navigation__item">
						<div class="row-nav">
							<div
								class="row-nav__left"
								@mouseenter="hoverClass = 'navigation_showshrink'"
								@mouseleave="hoverClass = ''"
							></div>
							<a href="#" class="row-nav__link add-tag">monokai</a>
						</div>
					</li>
				</ul>
						<!-- <a class="nbi-link add-tag" href="#" @click="expandNav">colors</a>
						<a href="#" class="nbi-right" @click="expandNav"></a>
						<div class="nbi-list">
							<div class="nb-item">
								<div class="nbi-left" @mouseenter="hoverClass='nb-wrap_showshrink'" @mouseleave="hoverClass=''"></div>
								<a class="nbi-link add-script nav-selection" href="#" @click="changeColorLight">light</a>
								<a href="#" class="nbi-right"></a>
							</div>
							<div class="nb-item">
								<div class="nbi-left" @mouseenter="hoverClass='nb-wrap_showshrink'" @mouseleave="hoverClass=''"></div>
								<a class="nbi-link add-script" href="#" @click="changeColorMonokai">monokai</a>
								<a href="#" class="nbi-right"></a>
							</div>
							<div class="nb-item nb-item_closetag">
								<div class="nbi-left" @mouseenter="hoverClass='nb-wrap_showshrink'" @mouseleave="hoverClass=''"></div>
								<a class="add-tag nbi-link" href="#">colors</a>
							</div>
						</div> -->
			</li>
		</ul>
	</aside>
</template>

<script>
//import NavigationItem from '@/components/NavigationItem.vue'

export default {
	name: 'Sidebar',
	components: {
		//NavigationItem
	},
	props: {
		projects: Array
	},
	data() {
		return {
			actualColor: 'light',
			iconClass: '',
			hoverClass: ''
		};
	},
	methods: {
		expandNav: function(){
			console.log('click')
		}
	}
}

/*
<router-link
					class="item-nav__link add-tag"
				></router-link>
*/
</script>