<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const contactItems = ref([
  {
    title: `微信公众号`,
    description: `水牛区块链`,
    icon: `mdi:wechat`,
  },
  {
    title: `微信社群`,
    description: `区块链技术交流群`,
    icon: `mdi:user`,
  },
  {
    title: `视频号`,
    description: `水牛区块链讲堂`,
    icon: `mdi:video`,
  },
])
</script>

<template>
  <div class="mx-auto mb-12 max-w-4xl">
    <h3 class="mb-8 text-center text-2xl font-bold">
      联系方式
    </h3>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div
        v-for="item in contactItems" :key="item.title"
        class="group flex items-start rounded-lg p-4"
      >
        <div class="flex-shrink-0">
          <div class="h-14 w-14 flex items-center justify-center rounded-lg bg-blue-500 text-white shadow-md transition-transform group-hover:scale-110 dark:text-unset">
            <Icon :icon="item.icon" class="text-2xl" />
          </div>
        </div>
        <div class="ml-4 flex-1">
          <h4 class="text-lg font-semibold">
            {{ item.title }}
          </h4>
          <p class="mt-1 text-sm">
            {{ item.description }}
          </p>
          <div class="mt-4 h-32 w-32 flex items-center justify-center rounded-lg bg-gray-50 p-3 shadow-sm transition-all group-hover:shadow-md">
            <span class="text-center text-xs text-gray-500">{{ item.title }}二维码</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group:hover {
  transform: translateY(-2px);
}
</style>
