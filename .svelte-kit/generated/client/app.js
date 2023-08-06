export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/": [10],
		"/coupons": [11,[2]],
		"/faq": [12,[3]],
		"/freebets": [13,[4]],
		"/funbets": [14,[5]],
		"/gallery": [15,[6]],
		"/privacypolicy": [16,[7]],
		"/statistics": [17,[8]],
		"/tos": [18,[9]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';