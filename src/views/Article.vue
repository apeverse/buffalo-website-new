<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
import { renderArticle, type title } from '@/utils/renderArticle'
import { useRoute } from 'vue-router'

const store = useCommonStore()
const route = useRoute()
const output = ref(``)
const titles = ref<title[]>([])
const readingTime = ref()
const isOpenHeadingSlider = ref(false)

// 获取并加载文章内容
async function loadArticleContent() {
  if (route.path !== `/article`)
    return
  const articleId = route.query.id as string
  if (!articleId)
    return

  try {
    const response = await fetch(`/articles/${articleId}.md`)
    if (!response.ok) {
      console.error(`文章加载失败:`, response.statusText)
      return
    }
    const content = await response.text()

    const result = renderArticle(content)
    output.value = result.output
    titles.value = result.titles
    readingTime.value = result.readingTime
  }
  catch (error) {
    console.error(`加载文章失败:`, error)
  }
}

function handleBackTop() {
  window.scrollTo({ top: 0, behavior: `smooth` })
}

// 监听路由参数变化
watch(() => route.query.id, () => {
  loadArticleContent()
})

onMounted(async () => {
  loadArticleContent()
})
</script>

<template>
  <div class="container flex flex-col">
    <ArticleHeader />

    <main class="container-main flex flex-1 flex-col">
      <div class="container-main-section border-radius-10 relative flex flex-1 overflow-hidden border-1 border-b-0">
        <div
          class="relative flex-1 overflow-x-hidden transition-width"
        >
          <div id="preview" class="preview-wrapper w-full p-5">
            <div
              id="output-wrapper"
              class="w-full"
            >
              <div
                class="preview max-w-5xl border-x-1 shadow-xl"
                :class="[store.previewWidth]"
              >
                <section id="output" class="w-full" v-html="output" />
              </div>
            </div>
          </div>
          <BackTop
            target="preview"
            :right="store.isMobile ? 24 : 20"
            :bottom="store.isMobile ? 90 : 20"
            @click="handleBackTop"
          />
          <div
            class="bg-background absolute left-0 top-0 border rounded-2 rounded-lt-none p-2 text-sm shadow"
            @mouseenter="() => isOpenHeadingSlider = true" @mouseleave="() => isOpenHeadingSlider = false"
          >
            <List class="size-6" />
            <ul
              class="overflow-auto transition-all" :class="{
                'max-h-0 w-0': !isOpenHeadingSlider,
                'max-h-100 w-60 mt-2': isOpenHeadingSlider,
              }"
            >
              <li
                v-for="(item, index) in titles" :key="index"
                class="line-clamp-1 py-1 leading-6 hover:bg-gray-300 dark:hover:bg-gray-600"
                :style="{ paddingLeft: `${item.level - 0.5}em` }"
              >
                <a :href="item.url">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer class="h-[30px] flex select-none items-center justify-center px-4 text-[12px]">
        字数 {{ readingTime?.words }}， 阅读大约需 {{ Math.ceil(readingTime?.minutes ?? 0) }} 分钟
      </footer>
    </main>
    <RunLoading />
  </div>
</template>

<style lang="less" scoped>
@import url('../assets/less/app.less');
</style>

<style lang="less" scoped>
.container {
  height: 100vh;
  min-width: 100%;
  padding: 0;
}

.container-main {
  overflow: hidden;
}

.preview-wrapper {
  position: relative;
  height: 100%;
  overflow-y: auto;
}

#output-wrapper {
  position: relative;
  user-select: text;
  height: 100%;
}
</style>
