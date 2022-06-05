import { createRouter, createWebHistory } from 'vue-router'

import save_storage from './components/saveStorage.vue'
import Class01 from './components/ClassRoom/Class01.vue'
import Class02 from './components/ClassRoom/Class02.vue'
import Class03 from './components/ClassRoom/Class03.vue'
import Class04 from './components/ClassRoom/Class04.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'saveStorage',
			component: save_storage,
		},
		{
			path: '/class01',
			name: 'Class01',
			component: Class01,
		},
		{
			path: '/class02',
			name: 'Class02',
			component: Class02,
		},
		{
			path: '/class03',
			name: 'Class03',
			component: Class03,
		},
		{
			path: '/class04',
			name: 'Class04',
			component: Class04,
		},
	],
})