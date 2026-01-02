<template>
  <div class="page-grid">
    <div class="content-area">
      <AdPlaceholder type="banner" class="banner-ad">
        <template #default>
          Banner Ad Space
        </template>
      </AdPlaceholder>

      <div class="category-header">
        <h1>{{ categoryName }} News</h1>
      </div>

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
        <div v-if="paginatedNews.length === 0" class="no-news">
          No news found in this category.
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
      <AdPlaceholder type="sidebar" class="sidebar-ad">
        <template #default>
          Sidebar Ad 1
        </template>
      </AdPlaceholder>
      
      <AdPlaceholder type="sidebar" class="sidebar-ad" style="margin-top: 20px;">
        <template #default>
          Sidebar Ad 2
        </template>
      </AdPlaceholder>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { NewsItem } from '~/types';
import newsData from '~~/data/news.json';
import { getCategoryNameBySlug } from '~/utils/categories';

const route = useRoute();
const ITEMS_PER_PAGE = 10;

const slug = computed(() => route.params.slug as string);
const categoryName = computed(() => getCategoryNameBySlug(slug.value));

// Filter news by category
const allNews = useState<NewsItem[]>('news-list', () => newsData as NewsItem[]);
const categoryNews = computed(() => {
  if (!categoryName.value) return [];
  return allNews.value.filter(item => item.category === categoryName.value);
});

const currentPage = ref(1);

// Reset page when category changes
watch(slug, () => {
  currentPage.value = 1;
});

const totalPages = computed(() => Math.ceil(categoryNews.value.length / ITEMS_PER_PAGE));

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  return categoryNews.value.slice(start, end);
});

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

useHead({
  title: computed(() => `${categoryName.value} - News Site`),
  meta: [
    { name: 'description', content: computed(() => `Latest news in ${categoryName.value}`) },
    { name: 'adflux-page-category', content: computed(() => categoryName.value) }
  ]
});
</script>

<style scoped>
.category-header {
  margin-bottom: 20px;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 10px;
}
.no-news {
  padding: 20px;
  text-align: center;
  color: #777;
}
</style>
