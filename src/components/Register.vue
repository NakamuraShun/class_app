<template>
	<!-- <div>
	<h4>
		<slot name="classTitle"></slot>
	</h4>
	<slot name="names"></slot>
	</div> -->
	<h3>{{ttl}}</h3>
	<textarea class="form-control" ref="nameTextArea" :disabled="data.nameTextAreaDisabledFlg" v-model="data.namesTextArea"></textarea>
	<button class="btn btn-primary mt-2 me-3" :disabled="data.registerBtnDisabledFlg" @click="registerFun">登録</button>
	<button class="btn btn-warning mt-2" @click="resetFun">リセット</button>
</template>

<script>
import {ref,reactive,computed} from 'vue'

export default {
	name: 'Register',
	props: {
		ttl: String,
	},
	emits:[ // 定義が必要
		'emit-setMembersFun',
		'emit-resetFun',
	],
	setup(props,context){
		const data = reactive({
			namesTextArea: '',
			AttendanceArr:'',
			nameTextAreaDisabledFlg: false,
			registerBtnDisabledFlg: false,
		})

		const namesTextAreaArr = computed( // 値を取り出す際はrefのように**.value が必要
			(namesTextArea)=>{
				return data.namesTextArea.split(',') // 「,」区切りの名前を配列にする
			}
		)

		const registerFun = ()=>{
			if(!data.namesTextArea){
				alert('名前をカンマ区切りで入力してください')
			}else{
				let id = 0
				data.AttendanceArr = namesTextAreaArr.value.map(function(name){
					let memberData = {}
					memberData.id = ++id
					memberData.name = name
					memberData.attendance = null
					return memberData
				})
				data.nameTextAreaDisabledFlg = true
				data.registerBtnDisabledFlg = true
				context.emit('emit-setMembersFun', data.AttendanceArr)
				data.namesTextArea = ''
				data.AttendanceArr = ''
			}
		}

		const resetFun = ()=>{
			let resetFlg = confirm("出席簿をリセットしてもよろしいですか?")
			if(resetFlg){
				context.emit('emit-resetFun')
				data.nameTextAreaDisabledFlg = false
				data.registerBtnDisabledFlg = false
			}
		}

		return{
			data,
			registerFun,
			resetFun,
			namesTextAreaArr,
		}
	},
}
</script>