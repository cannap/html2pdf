import { defineConfig } from 'vite';
import postcssConfig from './postcss.config';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [viteSingleFile()],
});
