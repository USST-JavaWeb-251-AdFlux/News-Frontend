import { defineNuxtConfig } from 'nuxt/config'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

// Read data for prerendering
const newsData = JSON.parse(readFileSync(join(process.cwd(), 'data/news.json'), 'utf-8'))
const categories = JSON.parse(readFileSync(join(process.cwd(), 'data/categories.json'), 'utf-8'))

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: {
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
