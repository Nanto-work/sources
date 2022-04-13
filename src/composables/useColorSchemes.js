import {ref, computed, onBeforeMount, onMounted} from 'vue'

export default function useColorSchemes() {
	
	let currentColor = ref('monokai') // initial colorscheme value


	const isLightColor = computed(() => { // highlight actual colorscheme trigger
		return (currentColor.value === 'light') ? true : false
	})
	const isMonokaiColor = computed(() => { // highlight actual colorscheme trigger
		return (currentColor.value === 'monokai') ? true : false
	})

	
	const setInitialColor = () => { // set actual colorscheme through user's local time
		let currentTime = new Date(),
			currentHour = currentTime.getHours()

		if (8 <= currentHour < 20) {
			currentColor.value = 'light'
		}
	}	
	const changeColorClass = () => { // change colorscheme through html.class
		document.documentElement.className = currentColor.value
	}
	const changeColor = (color) => { // change actual colorscheme value
		currentColor.value = color
		changeColorClass()
	}

	
	onBeforeMount(setInitialColor)
	onMounted(changeColorClass)


	return {
		currentColor,
		isLightColor,
		isMonokaiColor,
		changeColorClass,
		setInitialColor,
		changeColor
	}
}