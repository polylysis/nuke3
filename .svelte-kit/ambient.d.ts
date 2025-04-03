
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const NIX_BUILD_CORES: string;
	export const npm_package_devDependencies__picocss_pico: string;
	export const configureFlags: string;
	export const SPEECHD_CMD: string;
	export const mesonFlags: string;
	export const I3SOCK: string;
	export const shell: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const npm_config_ignore_scripts: string;
	export const LC_ADDRESS: string;
	export const LC_NAME: string;
	export const DIRENV_DIR: string;
	export const STRINGS: string;
	export const npm_package_private: string;
	export const depsTargetTarget: string;
	export const XCURSOR_PATH: string;
	export const stdenv: string;
	export const npm_config_argv: string;
	export const builder: string;
	export const npm_config_bin_links: string;
	export const LC_MONETARY: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const KITTY_PID: string;
	export const shellHook: string;
	export const NO_AT_BRIDGE: string;
	export const XCURSOR_SIZE: string;
	export const DIRENV_FILE: string;
	export const EDITOR: string;
	export const phases: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const npm_config_save_prefix: string;
	export const SOURCE_DATE_EPOCH: string;
	export const npm_package_devDependencies_vite: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const npm_package_readmeFilename: string;
	export const NIX_PATH: string;
	export const npm_package_scripts_build: string;
	export const NIXPKGS_CONFIG: string;
	export const npm_package_dependencies_gh_pages: string;
	export const CXX: string;
	export const _: string;
	export const TEMPDIR: string;
	export const system: string;
	export const KITTY_PUBLIC_KEY: string;
	export const HOST_PATH: string;
	export const IN_NIX_SHELL: string;
	export const doInstallCheck: string;
	export const HOME: string;
	export const NIX_BINTOOLS: string;
	export const SSH_ASKPASS: string;
	export const npm_config_version_git_tag: string;
	export const LANG: string;
	export const LC_PAPER: string;
	export const npm_package_dependencies_sass: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const depsTargetTargetPropagated: string;
	export const npm_config_init_license: string;
	export const npm_package_version: string;
	export const SWAYSOCK: string;
	export const WAYLAND_DISPLAY: string;
	export const cmakeFlags: string;
	export const npm_package_scripts_prepare: string;
	export const KITTY_SHELL_INTEGRATION: string;
	export const GIO_EXTRA_MODULES: string;
	export const outputs: string;
	export const npm_config_version_commit_hooks: string;
	export const KITTY_WINDOW_ID: string;
	export const NIX_STORE: string;
	export const TMPDIR: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const LD: string;
	export const buildPhase: string;
	export const DIRENV_DIFF: string;
	export const INIT_CWD: string;
	export const READELF: string;
	export const GTK_A11Y: string;
	export const npm_package_scripts_preview: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const npm_package_description: string;
	export const doCheck: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const YARN_WRAP_OUTPUT: string;
	export const depsBuildBuild: string;
	export const XDG_SESSION_CLASS: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const TERMINFO: string;
	export const npm_package_name: string;
	export const GTK_PATH: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const LESSOPEN: string;
	export const npm_package_type: string;
	export const strictDeps: string;
	export const USER: string;
	export const TZDIR: string;
	export const AR: string;
	export const AS: string;
	export const TEMP: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const npm_config_version_git_sign: string;
	export const npm_package_scripts_deploy: string;
	export const NIX_BUILD_TOP: string;
	export const NM: string;
	export const npm_config_version_git_message: string;
	export const PAGER: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const LC_TELEPHONE: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const patches: string;
	export const LC_MEASUREMENT: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const XDG_VTNR: string;
	export const buildInputs: string;
	export const XDG_SESSION_ID: string;
	export const preferLocalBuild: string;
	export const LOCALE_ARCHIVE: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const TERMINFO_DIRS: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_svelte: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_config_strict_ssl: string;
	export const NODE_PATH: string;
	export const depsBuildTarget: string;
	export const OBJCOPY: string;
	export const NIX_XDG_DESKTOP_PORTAL_DIR: string;
	export const out: string;
	export const LC_TIME: string;
	export const npm_package_scripts_dev: string;
	export const STRIP: string;
	export const XDG_DATA_DIRS: string;
	export const HUSHLOGIN: string;
	export const LIBEXEC_PATH: string;
	export const TMP: string;
	export const OBJDUMP: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const dontAddDisableDepTrack: string;
	export const __fish_nixos_env_preinit_sourced: string;
	export const CC: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const NIX_CC: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const depsBuildTargetPropagated: string;
	export const npm_package_license: string;
	export const depsBuildBuildPropagated: string;
	export const DIRENV_WATCHES: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const _SWAY_WRAPPER_ALREADY_EXECUTED: string;
	export const npm_config_registry: string;
	export const npm_config_ignore_optional: string;
	export const CONFIG_SHELL: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const __structuredAttrs: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const npm_node_execpath: string;
	export const RANLIB: string;
	export const npm_config_engine_strict: string;
	export const NIX_HARDENING_ENABLE: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const LC_NUMERIC: string;
	export const NIX_LDFLAGS: string;
	export const nativeBuildInputs: string;
	export const name: string;
	export const depsHostHostPropagated: string;
	export const npm_config_init_version: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		NIX_BUILD_CORES: string;
		npm_package_devDependencies__picocss_pico: string;
		configureFlags: string;
		SPEECHD_CMD: string;
		mesonFlags: string;
		I3SOCK: string;
		shell: string;
		depsHostHost: string;
		NODE: string;
		npm_config_ignore_scripts: string;
		LC_ADDRESS: string;
		LC_NAME: string;
		DIRENV_DIR: string;
		STRINGS: string;
		npm_package_private: string;
		depsTargetTarget: string;
		XCURSOR_PATH: string;
		stdenv: string;
		npm_config_argv: string;
		builder: string;
		npm_config_bin_links: string;
		LC_MONETARY: string;
		GDK_PIXBUF_MODULE_FILE: string;
		KITTY_PID: string;
		shellHook: string;
		NO_AT_BRIDGE: string;
		XCURSOR_SIZE: string;
		DIRENV_FILE: string;
		EDITOR: string;
		phases: string;
		XDG_SEAT: string;
		PWD: string;
		NIX_PROFILES: string;
		npm_config_save_prefix: string;
		SOURCE_DATE_EPOCH: string;
		npm_package_devDependencies_vite: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		NIX_ENFORCE_NO_NATIVE: string;
		npm_package_readmeFilename: string;
		NIX_PATH: string;
		npm_package_scripts_build: string;
		NIXPKGS_CONFIG: string;
		npm_package_dependencies_gh_pages: string;
		CXX: string;
		_: string;
		TEMPDIR: string;
		system: string;
		KITTY_PUBLIC_KEY: string;
		HOST_PATH: string;
		IN_NIX_SHELL: string;
		doInstallCheck: string;
		HOME: string;
		NIX_BINTOOLS: string;
		SSH_ASKPASS: string;
		npm_config_version_git_tag: string;
		LANG: string;
		LC_PAPER: string;
		npm_package_dependencies_sass: string;
		XDG_CURRENT_DESKTOP: string;
		depsTargetTargetPropagated: string;
		npm_config_init_license: string;
		npm_package_version: string;
		SWAYSOCK: string;
		WAYLAND_DISPLAY: string;
		cmakeFlags: string;
		npm_package_scripts_prepare: string;
		KITTY_SHELL_INTEGRATION: string;
		GIO_EXTRA_MODULES: string;
		outputs: string;
		npm_config_version_commit_hooks: string;
		KITTY_WINDOW_ID: string;
		NIX_STORE: string;
		TMPDIR: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		LD: string;
		buildPhase: string;
		DIRENV_DIFF: string;
		INIT_CWD: string;
		READELF: string;
		GTK_A11Y: string;
		npm_package_scripts_preview: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		npm_package_description: string;
		doCheck: string;
		npm_config_version_tag_prefix: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		YARN_WRAP_OUTPUT: string;
		depsBuildBuild: string;
		XDG_SESSION_CLASS: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		TERMINFO: string;
		npm_package_name: string;
		GTK_PATH: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		LESSOPEN: string;
		npm_package_type: string;
		strictDeps: string;
		USER: string;
		TZDIR: string;
		AR: string;
		AS: string;
		TEMP: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		npm_config_version_git_sign: string;
		npm_package_scripts_deploy: string;
		NIX_BUILD_TOP: string;
		NM: string;
		npm_config_version_git_message: string;
		PAGER: string;
		NIX_CFLAGS_COMPILE: string;
		LC_TELEPHONE: string;
		QTWEBKIT_PLUGIN_PATH: string;
		patches: string;
		LC_MEASUREMENT: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		XDG_VTNR: string;
		buildInputs: string;
		XDG_SESSION_ID: string;
		preferLocalBuild: string;
		LOCALE_ARCHIVE: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		TERMINFO_DIRS: string;
		npm_execpath: string;
		npm_package_devDependencies_svelte: string;
		XDG_RUNTIME_DIR: string;
		npm_config_strict_ssl: string;
		NODE_PATH: string;
		depsBuildTarget: string;
		OBJCOPY: string;
		NIX_XDG_DESKTOP_PORTAL_DIR: string;
		out: string;
		LC_TIME: string;
		npm_package_scripts_dev: string;
		STRIP: string;
		XDG_DATA_DIRS: string;
		HUSHLOGIN: string;
		LIBEXEC_PATH: string;
		TMP: string;
		OBJDUMP: string;
		PATH: string;
		propagatedBuildInputs: string;
		dontAddDisableDepTrack: string;
		__fish_nixos_env_preinit_sourced: string;
		CC: string;
		npm_package_devDependencies__sveltejs_kit: string;
		NIX_CC: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		depsBuildTargetPropagated: string;
		npm_package_license: string;
		depsBuildBuildPropagated: string;
		DIRENV_WATCHES: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		_SWAY_WRAPPER_ALREADY_EXECUTED: string;
		npm_config_registry: string;
		npm_config_ignore_optional: string;
		CONFIG_SHELL: string;
		KITTY_INSTALLATION_DIR: string;
		__structuredAttrs: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		npm_node_execpath: string;
		RANLIB: string;
		npm_config_engine_strict: string;
		NIX_HARDENING_ENABLE: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		LC_NUMERIC: string;
		NIX_LDFLAGS: string;
		nativeBuildInputs: string;
		name: string;
		depsHostHostPropagated: string;
		npm_config_init_version: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
