<template>
	<p>クラス1: {{data.memberArr.join(',')}}</p>
</template>

<script>
import {reactive} from 'vue'

export default {
	name: 'Class01',
	props: {
		ttl: String,
	},
	setup(props,context){
		const data = reactive({
			memberArr:['中村','佐藤','鈴木','高橋'],
		})

		return{
			data,
		}
	},
}
</script>