import {defineConfig} from 'vite';
import {createViteBlock} from 'vite-plugin-gutenberg-blocks';
import {viteStaticCopy} from 'vite-plugin-static-copy';
import {resolve} from 'node:path';

export default defineConfig({
    plugins: [
        createViteBlock(),
        viteStaticCopy({
            targets: [
                {
                    src: resolve(process.env.PWD, 'src/img/*.png'),
                    dest: '.',
                },
            ],
        }),
    ],
});
