<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 定义类型
interface Article {
  id: number
  title: string
  description: string
  date: string
  slug: string
}

const router = useRouter()

const articles = ref<Article[]>([])

// 在组件挂载时获取文章数据
async function fetchArticles() {
  try {
    const response = await fetch(`/config/toplist.json`)
    const data = await response.json()
    articles.value = data.articles
  }
  catch (error) {
    console.error(`Failed to fetch articles:`, error)
  }
}

// 组件挂载时获取数据
fetchArticles()

function goToArticle(slug: string) {
  router.push({
    path: `/article`,
    query: { id: slug },
  })
}
</script>

<template>
  <div class="w-full px-8 pb-4 pt-9">
    <h2 class="mb-6 text-2xl font-bold">
      最新文章
    </h2>
    <div class="grid gap-6">
      <div
        v-for="article in articles"
        :key="article.id"
        class="group hover:bg-muted cursor-pointer border rounded-lg p-4 transition-colors"
        @click="goToArticle(article.slug)"
      >
        <h3 class="group-hover:text-primary mb-2 text-lg font-semibold">
          {{ article.title }}
        </h3>
        <p class="text-muted-foreground mb-2 text-sm">
          {{ article.description }}
        </p>
        <time class="text-muted-foreground text-xs">{{ article.date }}</time>
      </div>
    </div>
  </div>
</template>
