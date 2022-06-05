<template>
	<p>クラス2: {{data.memberArr.join(',')}}</p>
</template>

<script>
import {reactive} from 'vue'

export default {
	name: 'Class02',
	props: {
		ttl: String,
	},
	setup(props,context){
		const data = reactive({
			memberArr:['梨本','三浦','草壁','竹下'],
		})

		return{
			data,
		}
	},
}
</script>