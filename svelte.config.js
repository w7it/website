import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'dist',
            assets: 'dist',
            fallback: '404.html',
            precompress: true,
        }),
    },
    preprocess: preprocess(),
};

export default config;
