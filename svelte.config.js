import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    // Ensure you're using the static adapter
    adapter: adapter(),
    // Set the path for base (important for GitHub Pages deployment)
    paths: {
      base: '/nuke3-apps', // Replace 'your-repo-name' with your GitHub repo name
    },
  }
};

