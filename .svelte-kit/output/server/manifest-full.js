export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.ee24677e.js","app":"_app/immutable/entry/app.359c6e07.js","imports":["_app/immutable/entry/start.ee24677e.js","_app/immutable/chunks/scheduler.0c16bc3d.js","_app/immutable/chunks/singletons.dc45071f.js","_app/immutable/chunks/index.55c9ec69.js","_app/immutable/entry/app.359c6e07.js","_app/immutable/chunks/scheduler.0c16bc3d.js","_app/immutable/chunks/index.9868a140.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/coupons",
				pattern: /^\/coupons\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/freebets",
				pattern: /^\/freebets\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/funbets",
				pattern: /^\/funbets\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/privacypolicy",
				pattern: /^\/privacypolicy\/?$/,
				params: [],
				page: { layouts: [0,7,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/statistics",
				pattern: /^\/statistics\/?$/,
				params: [],
				page: { layouts: [0,8,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/tos",
				pattern: /^\/tos\/?$/,
				params: [],
				page: { layouts: [0,9,], errors: [1,,], leaf: 18 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
