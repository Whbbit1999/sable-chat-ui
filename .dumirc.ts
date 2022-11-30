import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'SableChat',
  },
  base: '/sable-chat-ui',
  publicPath: '/sable-chat-ui/',
});
