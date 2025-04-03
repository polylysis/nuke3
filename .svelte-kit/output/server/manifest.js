export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/backroom_labyrinth.ogg","audio/korobeiniki.ogg","audio/lhs_rld_installer_10.ogg","audio/watasi_wa_ame.ogg","favicon.png"]),
	mimeTypes: {".ogg":"audio/ogg",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DpwutmTb.js",app:"_app/immutable/entry/app.DymBgw1g.js",imports:["_app/immutable/entry/start.DpwutmTb.js","_app/immutable/chunks/B9E0Fxs0.js","_app/immutable/chunks/D6IUTZXv.js","_app/immutable/chunks/Q5ZWzqMF.js","_app/immutable/entry/app.DymBgw1g.js","_app/immutable/chunks/D6IUTZXv.js","_app/immutable/chunks/BB8_HknP.js","_app/immutable/chunks/BcffUGTN.js","_app/immutable/chunks/DPQ-H3H6.js","_app/immutable/chunks/BM3zD7BM.js","_app/immutable/chunks/Q5ZWzqMF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/complain","/music","/todo","/weather","/writer"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
