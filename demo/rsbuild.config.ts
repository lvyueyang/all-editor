import { defineConfig } from '@rsbuild/core';
import { pluginSass } from '@rsbuild/plugin-sass';
import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';

const templates: Record<string, string> = {};
const entryDirs = fs.readdirSync('./src/pages');
const entry = Object.fromEntries(
  entryDirs.map((entryName) => {
    const importFile = globSync(path.join('./src/pages', entryName, 'index.{ts,tsx,js,jsx}'))[0];
    // const htmlFile = globSync(path.join('./src/pages', entryName, 'index.html'))[0];
    templates[entryName] = path.join('./src/pages', entryName, 'index.html');
    return [
      entryName,
      {
        import: `./${importFile}`,
        html: true,
      },
    ];
  })
);

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginSass()],
  source: {
    entry,
  },
  html: {
    template: ({ entryName }) => templates[entryName],
  },
});
