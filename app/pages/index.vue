<template>
  <div class="page-grid">
    <div class="content-area">
      <AdPlaceholder class="banner-ad">
        <template #default>
          Banner Ad Space
        </template>
      </AdPlaceholder>

      <div class="news-list">
        <div v-for="news in paginatedNews" :key="news.id" class="news-item">
          <img :src="news.coverImage" :alt="news.title" class="news-cover" loading="lazy" />
          <div class="news-info">
            <h2 class="news-title">
              <NuxtLink :to="`/article/${news.id}`">{{ news.title }}</NuxtLink>
            </h2>
            <div class="news-meta">
              <span class="category-tag">{{ news.category }}</span> | 
              <span class="date">{{ news.date }}</span>
            </div>
            <p class="news-summary">{{ news.summary }}</p>
          </div>
        </div>
      </div>

      <div class="pagination" v-if="totalPages > 1">
        <button 
          :disabled="currentPage === 1" 
          @click="changePage(currentPage - 1)"
        >
          Prev
        </button>
        <button 
          v-for="page in totalPages" 
          :key="page" 
          :class="{ active: currentPage === page }"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
        <button 
          :disabled="currentPage === totalPages" 
          @click="changePage(currentPage + 1)"
        >
          Next
        </button>
      </div>
    </div>

    <aside class="sidebar">
      <AdPlaceholder class="sidebar-ad">
        <template #default>
          Sidebar Ad 1
        </template>
      </AdPlaceholder>
      
      <AdPlaceholder class="sidebar-ad" style="margin-top: 20px;">
        <template #default>
          Sidebar Ad 2
        </template>
      </AdPlaceholder>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { NewsItem } from '~/types';
import newsData from '~~/data/news.json';

const ITEMS_PER_PAGE = 10;

const newsList = useState<NewsItem[]>('news-list', () => newsData as NewsItem[]);

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(newsList.value.length / ITEMS_PER_PAGE));

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  return newsList.value.slice(start, end);
});

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

useHead({
  title: 'Home - News Site',
  meta: [
    { name: 'description', content: 'Latest news updates' }
  ]
});
</script>
