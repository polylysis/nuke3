export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "nuke3/_app",
	assets: new Set(["audio/backroom_labyrinth.ogg","audio/korobeiniki.ogg","audio/lhs_rld_installer_10.ogg","audio/watasi_wa_ame.ogg","favicon.png"]),
	mimeTypes: {".ogg":"audio/ogg",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.C_RfDEem.js",app:"_app/immutable/entry/app.B5OZo97L.js",imports:["_app/immutable/entry/start.C_RfDEem.js","_app/immutable/chunks/DyVseb-V.js","_app/immutable/chunks/D6IUTZXv.js","_app/immutable/chunks/CxYZoaSc.js","_app/immutable/chunks/Q5ZWzqMF.js","_app/immutable/entry/app.B5OZo97L.js","_app/immutable/chunks/D6IUTZXv.js","_app/immutable/chunks/BB8_HknP.js","_app/immutable/chunks/BcffUGTN.js","_app/immutable/chunks/DPQ-H3H6.js","_app/immutable/chunks/BM3zD7BM.js","_app/immutable/chunks/Q5ZWzqMF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/complain",
				pattern: /^\/complain\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/music",
				pattern: /^\/music\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/todo",
				pattern: /^\/todo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/weather",
				pattern: /^\/weather\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/writer",
				pattern: /^\/writer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
