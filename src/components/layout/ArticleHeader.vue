<script setup lang="ts">
import { useCommonHeaderStore } from '@/stores/commonHeader'
import { Monitor, Moon, Smartphone, Sun } from 'lucide-vue-next'

const commonHeaderStore = useCommonHeaderStore()

const { isDark, previewWidth } = storeToRefs(commonHeaderStore)
const { toggleDark, previewWidthChanged } = commonHeaderStore
</script>

<template>
  <header class="header-container h-15 flex flex-wrap items-center justify-end dark:bg-[#191c20] !px-5">
    <!-- 左侧菜单：移动端隐藏 -->
    <!-- <div></div> -->

    <!-- 右侧操作区：移动端保留核心按钮 -->
    <div class="space-x-2 flex flex-wrap">
      <!-- 暗色切换 -->
      <Button variant="outline" size="icon" @click="toggleDark()">
        <Moon v-show="isDark" class="size-4" />
        <Sun v-show="!isDark" class="size-4" />
      </Button>

      <!-- 预览模式切换 -->
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline" size="icon">
            <Smartphone v-show="previewWidth === 'w-[375px]'" class="size-4" />
            <Monitor v-show="previewWidth === 'w-full'" class="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" :align-offset="-5" class="w-[200px]">
          <DropdownMenuRadioGroup v-model="previewWidth" @update:model-value="previewWidthChanged">
            <DropdownMenuRadioItem value="w-[375px]">
              <Smartphone class="mr-2 size-4" />
              移动端
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="w-full">
              <Monitor class="mr-2 size-4" />
              电脑端
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
</template>

<style lang="less" scoped>
// .menubar {
//   user-select: none;
// }

kbd {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #a8a8a8;
  padding: 1px 4px;
  border-radius: 2px;
}
</style>
