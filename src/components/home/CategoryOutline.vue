<script setup lang="ts">
import { ChevronDown, ChevronRight } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 定义类型
interface Article {
  id: number
  title: string
  slug: string
}

interface SubCategory {
  id: number
  name: string
  articles: Article[]
}

interface Category {
  id: number
  name: string
  children: SubCategory[]
}

const router = useRouter()

// 跟踪每个分类的折叠状态
const expandedCategories = ref<Record<number, boolean>>({
  1: false, // 默认折叠所有分类
  2: false,
  3: false,
  4: false,
  5: false, // 添加新分类的默认折叠状态
})

// 切换分类的折叠状态
function toggleCategory(categoryId: number) {
  expandedCategories.value[categoryId] = !expandedCategories.value[categoryId]
}

// 从配置文件导入分类数据
const categories = ref<Category[]>([])

// 在组件挂载时获取分类数据
async function fetchCategories() {
  try {
    const response = await fetch(`/config/outline.json`)
    const data = await response.json()
    categories.value = data.categories
  }
  catch (error) {
    console.error(`Failed to fetch categories:`, error)
  }
}

// 组件挂载时获取数据
fetchCategories()

function goToArticle(slug: string) {
  router.push({
    path: `/article`,
    query: { id: slug },
  })
}
</script>

<template>
  <div class="bg-background h-full w-72 overflow-y-auto">
    <div class="px-8 pb-4 pt-9">
      <h2 class="mb-6 text-2xl font-bold">
        文章分类
      </h2>
      <div class="space-y-4">
        <div v-for="category in categories" :key="category.id" class="space-y-2">
          <!-- 分类标题和折叠按钮 -->
          <div
            class="text-primary hover:text-primary/80 flex cursor-pointer items-center gap-1"
            @click="toggleCategory(category.id)"
          >
            <component
              :is="expandedCategories[category.id] ? ChevronDown : ChevronRight"
              class="size-4 transition-transform"
            />
            <h3 class="font-medium">
              {{ category.name }}
            </h3>
          </div>

          <!-- 子分类和文章列表 -->
          <div
            v-show="expandedCategories[category.id]"
            class="space-y-1 pl-8 transition-all"
          >
            <div
              v-for="subCategory in category.children"
              :key="subCategory.id"
              class="space-y-1"
            >
              <h4 class="text-muted-foreground text-sm font-medium">
                {{ subCategory.name }}
              </h4>
              <ul class="space-y-1 pl-4">
                <li
                  v-for="article in subCategory.articles"
                  :key="article.id"
                  class="hover:text-primary cursor-pointer text-sm transition-colors"
                  @click="goToArticle(article.slug)"
                >
                  {{ article.title }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
