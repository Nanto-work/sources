import {ref, computed, onMounted} from 'vue'

export default function useColorSchemes() {
	
	let currentColor = ref('light')


	const isLightColor = computed(() => {
		return (currentColor.value === 'light') ? true : false
	})
	const isMonokaiColor = computed(() => {
		return (currentColor.value === 'monokai') ? true : false
	})
	
	const changeColorClass = () => {
		document.documentElement.className = currentColor.value
	}
	const changeColor = (color) => {
		currentColor.value = color
		changeColorClass()
	}

	onMounted(changeColorClass)


	return {
		currentColor,
		isLightColor,
		isMonokaiColor,
		changeColorClass,
		changeColor
	}
}