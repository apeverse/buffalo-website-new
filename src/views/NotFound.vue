<script setup lang="ts">
// No additional setup needed
</script>

<template>
  <div class="bg-background min-h-screen flex items-center justify-center transition-colors">
    <div class="max-w-md w-full px-4 text-center">
      <h1 class="animate-bounce text-foreground text-7xl font-bold md:text-9xl">
        404
      </h1>
      <div class="space-y-4 mt-4">
        <h2 class="text-foreground/80 text-xl font-semibold md:text-2xl">
          页面未找到
        </h2>
        <p class="text-foreground/60 text-base md:text-lg">
          抱歉，您访问的页面不存在。
        </p>
        <router-link
          to="/"
          class="hover:bg-primary/90 bg-primary text-primary-foreground mt-6 inline-block rounded-lg px-6 py-3 text-base font-medium transition-colors duration-200 md:text-lg"
        >
          返回首页
        </router-link>
      </div>
    </div>
  </div>
</template>
