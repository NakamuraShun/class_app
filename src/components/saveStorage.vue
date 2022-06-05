<template>
	<Attendance 
		ttl="②出席確認 (Attendance.vue)"
		v-on:emit-setLocalStorageFun="setLocalStorageFun"
	 />
	<hr>
	<h3>③保存データ管理(saveStorege.vue)</h3>
	<div class="row">
		<template v-for="AttendanceArr in data.localStorageArr">
			<div class="col-12 col-sm-4">
				<table class="table table-secondary table-bordered  text-center">
					<thead>
						<tr>
							<th>出席番号</th>
							<th>名前</th>
							<th>出欠</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="memberData in AttendanceArr">
							<td>{{ memberData.id }}</td>
							<td>{{ memberData.name }}</td>
							<td>{{ memberData.attendance }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</template>
	</div>
	<button class="btn btn-danger" @click="deleteLocalStorageFun">ストレージデータを削除</button>
</template>

<script>
import {reactive,onMounted} from 'vue'

import Attendance from './Attendance.vue'

export default {
	name: 'App',
	components: {
		Attendance,
	},
	setup(){
		const data = reactive({
			date: '',
			localStorageArr: [],
		})

		const getLocalStrageFun = ()=>{
			let localStorageData = JSON.parse(localStorage.getItem('ClassRoomAppData'))
			if(localStorageData != null){
				data.localStorageArr = localStorageData
			}
		}

		const setLocalStorageFun = (AttendanceArr)=>{
			data.localStorageArr.unshift(AttendanceArr)
			localStorage.setItem('ClassRoomAppData', JSON.stringify(data.localStorageArr))
			getLocalStrageFun() // 一覧を更新
		}

		const deleteLocalStorageFun = ()=>{
			let deleteFlg = confirm('削除しますか?')
			if(deleteFlg){
				localStorage.removeItem('ClassRoomAppData')
				data.localStorageArr = []
			}
		}

		onMounted(getLocalStrageFun)

		return{
			data,
			setLocalStorageFun,
			deleteLocalStorageFun,
			getLocalStrageFun,
		}
	}
}
</script>
