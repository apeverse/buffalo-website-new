<script setup lang="ts">
// No additional setup needed
</script>

<template>
  <div class="from-gray-50 to-gray-100 bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md w-full text-center">
      <h1 class="animate-bounce text-7xl text-gray-800 font-bold md:text-9xl dark:text-gray-200">
        404
      </h1>
      <div class="space-y-4 mt-4">
        <h2 class="text-xl text-gray-700 font-semibold md:text-2xl dark:text-gray-300">
          页面未找到
        </h2>
        <p class="text-base text-gray-600 md:text-lg dark:text-gray-400">
          抱歉，您访问的页面不存在。
        </p>
        <router-link
          to="/"
          class="bg-primary hover:bg-primary/90 mt-6 inline-block transform rounded-lg px-6 py-3 text-base text-white font-medium shadow-lg transition-colors duration-200 md:text-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          返回首页
        </router-link>
      </div>
    </div>
  </div>
</template>
