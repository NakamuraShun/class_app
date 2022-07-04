import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export const store = createStore({
	state()	{
		return {
			appTitle: '出席簿アプリ',
			appDate: '',
			appAdminLastName: '',
			appAdminFirstName: '',
		}
	},
	mutations: {
		setAppDate: (state) => {
			let month = new Date().getMonth() + 1
			let date = new Date().getDate()
			state.appDate = month + '月' + date + '日'
		},
		setAppAdmin: (state, admin) => {
			state.appAdminLastName = admin.lastName
			state.appAdminFirstName = admin.firstName
		}
	},
	plugins: [
		createPersistedState(),
	],
})