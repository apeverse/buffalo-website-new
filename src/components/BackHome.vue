<script setup lang="ts">
import buffaloLogo from '@/assets/images/buffalo-logo.png'
import { useRouter } from 'vue-router'

const router = useRouter()

function backHome() {
  router.push({
    path: `/`,
  })
}
</script>

<template>
  <div class="relative h-10 w-10 flex cursor-pointer items-center justify-center overflow-hidden border-4 border-blue-100 rounded-full bg-gray-200 sm:h-12 sm:w-12" @click="backHome">
    <img :src="buffaloLogo" alt="Buffalo" class="object-cover h-full w-full">
  </div>
</template>

<style scoped lang='less'>
</style>
