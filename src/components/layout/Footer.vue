<script setup lang="ts">
// No additional setup needed for now
</script>

<template>
  <footer class="mt-10 px-4 py-8">
    <div class="container mx-auto">
      <div class="space-y-4 flex flex-col items-center justify-center">
        <div class="space-y-2 text-center">
          <p class="text-sm">
            &copy; {{ new Date().getFullYear() }} 水牛区块链课程. 保留所有权利.
          </p>
          <p class="text-base-content/60 text-xs">
            地址：北京市海淀区中关村软件园
          </p>
        </div>
        <div class="space-x-4 flex">
          <a href="https://github.com/doocs" target="_blank" rel="noopener noreferrer" class="hover:text-primary">
            <i class="i-mdi-github text-xl" />
          </a>
          <a href="https://doocs.github.io" target="_blank" rel="noopener noreferrer" class="hover:text-primary">
            <i class="i-mdi-web text-xl" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
