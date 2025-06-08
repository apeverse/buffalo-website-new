<script setup lang="ts">
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 100)
})
</script>

<template>
  <transition name="fade">
    <div
      v-if="loading"
      class="loading"
    >
      <strong>水牛加密空间</strong>
    </div>
  </transition>
</template>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 18px;
  background-color: hsl(var(--background));

  &::before {
    content: '';
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: transparent;
    background-image: url('/assets/images/buffalo-logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 26px;
    animation: spin 1.5s linear infinite;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>
