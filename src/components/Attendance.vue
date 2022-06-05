<template>
	<Register
		ttl="①名前を登録 (ClassRoom.vue)"
		v-on:emit-setMembersFun="setMembersFun"
		v-on:emit-resetFun="resetFun"
	>
		<!-- <template v-slot:classTitle>
			クラス名簿メモ
		</template>
		<template v-slot:names>
			<ul>
				<li v-for="value,key in data.classMemberList">
					{{key}}の生徒は、{{ value.join(',') }}
				</li>
			</ul>
		</template> -->
	</Register>
	<hr>
	<h3>{{ ttl }}</h3>
	<table class="table table-striped text-center">
		<thead>
			<tr>
				<th>出席番号</th>
				<th>名前</th>
				<th>出欠</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="memberData in data.AttendanceArr">
				<td>{{ memberData.id }}</td>
				<td>{{ memberData.name }}</td>
				<td>{{ memberData.attendance }}</td>
				<td>
					<button @click="presentFun(memberData)">出席</button>
					<button @click="absentFun(memberData)">欠席</button>
				</td>
			</tr>
		</tbody>
	</table>
	<button class="btn btn-success" @click="fixFun">確定</button>
</template>

<script>
	import {ref,reactive} from 'vue'
	import Register from './Register.vue'

	export default {
	name: "Attendance",
	components: {
		Register,
	},
	props: {
		ttl: String,
	},
	emits:[
		'emit-setLocalStorageFun',
	],
	setup(props,context){
		const data = reactive({
			name: '',
			AttendanceArr: '',
			// classMemberList: {
			// 	'1組':['中村','佐藤','鈴木','高橋'],
			// 	'2組':['竹本','佐田','杉本','佐々木'],
			// 	'3組':['安倍','加藤','斉藤','渡辺'],
			// },
		})

		const setMembersFun = (AttendanceArr)=>{
			data.AttendanceArr = AttendanceArr
		}

		const presentFun = (memberData)=>{
			memberData.attendance = "○"
		}

		const absentFun = (memberData)=>{
			memberData.attendance = "×"
		}

		const resetFun = ()=>{
			data.AttendanceArr = ""
		}

		const fixFun = ()=>{
			if(data.AttendanceArr.length > 0){
				context.emit('emit-setLocalStorageFun', data.AttendanceArr)
			}else{
				alert('確定するデータがありません')
			}
		}

		return{
			data,setMembersFun,
			presentFun,
			absentFun,
			resetFun,
			fixFun,
		}
	},
}
</script>