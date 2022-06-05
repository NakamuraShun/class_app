<template>
	<p>クラス4: {{data.memberArr.join(',')}}</p>
</template>

<script>
import {reactive} from 'vue'

export default {
	name: 'Class04',
	props: {
		ttl: String,
	},
	setup(props,context){
		const data = reactive({
			memberArr:['松下','岸辺','高杉','斉藤'],
		})

		return{
			data,
		}
	},
}
</script>