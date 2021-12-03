import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/mltd': {
        target: 'https://api.matsurihi.me/mltd/v1/',
        changeOrigin: true,
        rewrite: path=>path.replace(/^mltd/, '')
      },
      '/my-mltd': {
        target: 'https://mltd-api.dovahkiin.top/.netlify/functions/server',
        changeOrigin: true,
        rewrite: path=>path.replace(/^\/my\-mltd/, '')
      },
      '/storage': {
        target: 'https://storage.matsurihi.me/mltd',
        changeOrigin: true,
        rewrite: path=>path.replace(/^\/storage/, '')
      },
      //https://webview-dot-theaterdays.appspot.com/api/info?type=3&cursor=&platform=google
      '/news-mltd':{
        target:'https://mltd.dovahkiin.top/news-mltd',
        changeOrigin: true,
        rewrite: path=>path.replace(/^\/news\-mltd/, '')
      },
      '/news-img':{
        target:'https://mltd.dovahkiin.top/news-img',
        changeOrigin: true,
        rewrite: path=>path.replace(/^\/news\-img/, '')
      },
    }
  },
})
