<template>
	<p>クラス3: {{data.memberArr.join(',')}}</p>
</template>

<script>
import {reactive} from 'vue'

export default {
	name: 'Class03',
	props: {
		ttl: String,
	},
	setup(props,context){
		const data = reactive({
			memberArr:['竹本','佐田','杉本','佐々木'],
		})

		return{
			data,
		}
	},
}
</script>