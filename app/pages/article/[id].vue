<template>
  <div class="article-container">
    <div v-if="article" class="article-detail">
      <header class="article-header">
        <h1 class="article-title">{{ article.title }}</h1>
        <div class="article-meta">
          <span class="category-tag">{{ article.category }}</span>
          <span class="separator"> | </span>
          <span class="date">{{ article.date }}</span>
        </div>
      </header>

      <div class="article-content" v-html="article.content"></div>
      
      <div class="article-footer">
        <NuxtLink to="/" class="back-link">&larr; Back to Home</NuxtLink>
      </div>
    </div>
    <div v-else class="not-found">
      <h1>Article not found</h1>
      <NuxtLink to="/">Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import type { NewsItem } from '~/types';
import newsData from '~~/data/news.json';

const route = useRoute();
const id = route.params.id as string;

const allNews = useState<NewsItem[]>('news-list', () => newsData as NewsItem[]);
const article = computed(() => allNews.value.find(item => item.id === id));

useHead({
  title: computed(() => article.value ? `${article.value.title} - News Site` : 'Article Not Found'),
  meta: [
    { 
      name: 'description', 
      content: computed(() => article.value ? article.value.summary : '') 
    },
    {
      name: 'adflux-page-category',
      content: computed(() => article.value ? article.value.category : '')
    }
  ]
});
</script>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
}

.separator {
  margin: 0 10px;
  color: #ccc;
}

.article-footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.back-link {
  color: var(--primary-color);
  font-weight: 500;
}

.not-found {
  text-align: center;
  padding: 50px;
}
</style>
