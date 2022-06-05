<template>
	<h2 class="display-3">{{$store.state.appTitle}}</h2>
	<p>今日の日付: {{$store.state.appDate}}</p>
	<p>管理者: {{$store.state.appAdminLastName}} {{$store.state.appAdminFirstName}}</p>
	<input type="text" v-model="data.adminUserLastName" placeholder="苗字">
	<input type="text" v-model="data.adminUserFirstName" placeholder="名前">
	<button @click="setappAdminFun">登録</button>
	<hr>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'

export default {
	name: 'Header',
	setup(){
		const store = useStore()
		const data = reactive({
			adminUserLastName: '',
			adminUserFirstName: '',
			adminUserObj:{},
		})

		const setappAdminFun = ()=> {
			if(!data.adminUserLastName || !data.adminUserFirstName){
				alert('苗字と名前を入力してください')
				return
			}
			data.adminUserObj.lastName = data.adminUserLastName
			data.adminUserObj.firstName = data.adminUserFirstName
			store.commit({type:'setAppAdmin', ...data.adminUserObj}) // スプレッド構文: https://zenn.dev/kou_pg_0131/articles/js-merge-multiple-objects
			data.adminUserLastName = ''
			data.adminUserFirstName = ''
		}

		return{
			data,
			setappAdminFun,
		}
	}
}
</script>
