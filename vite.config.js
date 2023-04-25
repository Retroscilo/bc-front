// @ts-check
import react from "@vitejs/plugin-react";

/**
 * @type { import('vite').UserConfig }
 */
const config = {
	plugins: [
		react({
			// Add this line
			include: "**/*.jsx, **/*.js",
		}),
	],
};

export default config;
