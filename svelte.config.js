import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
	paths: {
      base: '/nuke3',  // Change this to your repo name
    }
  }
};

export default config;
