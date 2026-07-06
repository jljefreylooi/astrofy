import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: "https://astrofy-template.netlify.app",
	integrations: [mdx(), tailwind(), sitemap()],
	image: {
		service: { entrypoint: 'astro/assets/services/noop' },
	},
});
