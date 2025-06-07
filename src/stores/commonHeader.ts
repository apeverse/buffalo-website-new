import { widthOptions } from '@/config'
import { useDark, useStorage, useToggle } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useCommonHeaderStore = defineStore(`commonHeader`, () => {
  // 是否开启深色模式
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  // 预览宽度
  const previewWidth = useStorage(`previewWidth`, widthOptions[0].value)
  const previewWidthChanged = (newWidth: string) => {
    previewWidth.value = newWidth
  }

  return {
    isDark, // 保持 ref 类型
    toggleDark,
    previewWidth,
    previewWidthChanged,
  }
})
