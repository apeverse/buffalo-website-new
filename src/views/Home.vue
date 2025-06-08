<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToEditor() {
  router.push(`/editor`)
}

const features = [
  {
    title: `简洁易用`,
    description: `专注写作体验，让创作更流畅`,
    icon: `mdi:pencil-outline`,
  },
  {
    title: `实时预览`,
    description: `所见即所得，秒见渲染效果`,
    icon: `mdi:eye-outline`,
  },
  {
    title: `微信排版`,
    description: `完美适配微信公众号排版规范`,
    icon: `mdi:wechat`,
  },
  {
    title: `云端同步`,
    description: `自动保存，随时随地搞创作`,
    icon: `mdi:cloud-sync-outline`,
  },
]
</script>

<template>
  <div id="home-page" class="bg-background">
    <!-- 上部分：欢迎区域 -->
    <section class="section bg-gray-50 pt-24 dark:bg-[unset]">
      <div class="mx-auto max-w-full px-4 py-12 md:max-w-7xl lg:px-8 sm:px-6">
        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="lg:w-1/2">
            <h1 class="text-4xl font-extrabold lg:text-5xl sm:text-4xl sm:tracking-tight">
              区块链与AI技术<span class="text-blue-600 italic">进阶之路</span>
            </h1>
            <p class="text-base-content/60 mt-5 text-xl">
              从基础到高级，掌握（前沿技术开发）核心技能
            </p>
            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" class="gradient-button text-base" @click="goToEditor">
                开始编辑
                <Icon icon="mdi:arrow-right" class="ml-2" />
              </Button>
              <a href="#articles" class="text-primary inline-block">
                <Button variant="outline" size="lg" class="text-base">
                  文章列表
                </Button>
              </a>
            </div>
            <div class="grid grid-cols-1 mt-10 gap-6 sm:grid-cols-2">
              <div v-for="item in features" :key="item.title" class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="rounded-box h-12 w-12 flex items-center justify-center bg-blue-500 text-white">
                    <Icon :icon="item.icon" class="text-lg" />
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-base-content/80 text-lg font-medium">
                    {{ item.title }}
                  </h3>
                  <p class="text-base-content/60 mt-2">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 lg:mt-0 lg:w-5/12">
            <div class="rounded-box bg-base-100 overflow-hidden shadow-xl">
              <div class="bg-blue-500 px-6 py-4">
                <h3 class="text-lg text-white font-medium">
                  关于我们
                </h3>
              </div>
              <div class="px-6 py-5">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="relative h-24 w-24 flex items-center justify-center overflow-hidden border-4 border-blue-100 rounded-full bg-gray-200">
                      <img
                        src="/assets/images/buffalo-logo.png"
                        alt="Buffalo"
                        class="object-cover h-full w-full"
                        loading="lazy"
                        width="96"
                        height="96"
                      >
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="flex items-center text-xl">
                      <h4 class="font-bold">
                        水牛
                      </h4>
                      <a href="https://github.com/" class="hover:text-primary ml-2" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" />
                      </a>
                    </div>
                    <p class="text-primary text-lg font-medium">
                      资深软件系统架构师
                    </p>
                  </div>
                </div>
                <div class="mt-6">
                  <p class="text-base-content/60 leading-relaxed">
                    水牛加密空间是一个技术交流社区，致力于分享优质技术资源，包括：开源工具、技术文档、教程，
                    让技术学习变得简单有趣。
                  </p>
                  <div class="mt-5 flex items-center">
                    <Icon icon="mdi:star-outline" class="text-primary/80 mr-2" />
                    <span class="text-base-content/60">专注技术，热爱分享</span>
                  </div>
                  <div class="mt-2 flex items-center">
                    <Icon icon="mdi:heart-outline" class="text-primary/80 mr-2" />
                    <span class="text-base-content/60">开源协作，共同进步</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-4 text-center">
        <a href="#articles" class="text-primary bounce-animation inline-block">
          <Icon icon="mdi:chevron-down" class="text-5xl" />
        </a>
      </div>
    </section>

    <!-- 下部分：文章列表 -->
    <section id="articles" class="mx-auto flex justify-center px-4 py-6 md:py-8">
      <div class="max-w-7xl w-full flex">
        <CategoryOutline class="hidden md:block" />
        <div class="flex-1 pl-8">
          <ArticleList />
        </div>
      </div>
    </section>
    <BackTop :right="20" :bottom="40" :visibility-height="200" target="home-page" />
  </div>
</template>

<style scoped>
.bg-background {
  background-color: hsl(var(--background));
}

.bounce-animation {
  animation: bounce 2s infinite;
  will-change: transform;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
