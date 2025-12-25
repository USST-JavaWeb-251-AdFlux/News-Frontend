import { defineNuxtConfig } from 'nuxt/config'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

// Read data for prerendering
const newsData = JSON.parse(readFileSync(join(process.cwd(), 'data/news.json'), 'utf-8'))
const categories = JSON.parse(readFileSync(join(process.cwd(), 'data/categories.json'), 'utf-8'))

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      meta: [{
        name: 'adflux-verification',
        content: 'verify-25882a0e1452454a0ae7ecafff783ff7',
      }],
      script: [{
        src: 'https://adflux.bobliu.tech/ads/main.js',
        type: 'module',
        tagPosition: 'bodyClose',
      }],
    },
  },
  nitro: {
    preset: 'cloudflare-pages-static',
    prerender: {
      routes: [
        '/',
        ...categories.map((c: any) => `/category/${c.slug}`),
        ...newsData.map((item: any) => `/article/${item.id}`)
      ]
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'adflux-slot'
    }
  }
})
