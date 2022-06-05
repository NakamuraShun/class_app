<template>
	<Header></Header>
	<Nav></Nav>
	<router-view></router-view>
</template>

<script>
import {reactive,onMounted} from 'vue'
import { useStore } from 'vuex' // setup内でsotreへアクセスする方法: https://next.vuex.vuejs.org/ja/guide/composition-api.html

import Header from './components/common/header.vue'
import Nav from './components/common/nav.vue'

export default {
	name: 'App',
	components: {
		Header,
		Nav,
	},
	setup(){
		const store = useStore()

		const setDateFun = ()=> {
			store.commit('setAppDate')
		}

		onMounted(setDateFun)
	}
}
</script>
