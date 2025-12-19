<template>
  <div class="layout-container">
    <header class="site-header">
      <div class="container header-inner">
        <div class="logo">
          <NuxtLink to="/">News Site</NuxtLink>
        </div>
        <nav class="main-nav">
          <ul>
            <li>
              <NuxtLink to="/" active-class="active">首页</NuxtLink>
            </li>
            <li v-for="category in CATEGORIES" :key="category.slug">
              <NuxtLink :to="`/category/${category.slug}`" active-class="active">
                {{ category.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="site-content">
      <div class="container">
        <slot />
      </div>
    </main>

    <footer class="site-footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} News Site. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { CATEGORIES } from '~/utils/categories';
</script>
