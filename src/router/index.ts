import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: `/`,
    name: `Home`,
    component: () => import(`@/views/Home.vue`),
  },
  {
    path: `/article`,
    name: `Article`,
    component: () => import(`@/views/Article.vue`),
    props: true,
  },
  {
    path: `/editor`,
    name: `Editor`,
    component: () => import(`@/views/CodemirrorEditor.vue`),
  },
  {
    path: `/:pathMatch(.*)*`,
    name: `NotFound`,
    component: () => import(`@/views/NotFound.vue`),
  },
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(`Route from\nto`, from, to)
    // 如果是从首页导航到编辑器页面，则滚动到顶部
    if (from.path === `/` && (to.path === `/editor` || to.path === `/article`)) {
      return { top: 0 }
    }
    // 其他情况保持默认行为
    return savedPosition || { top: 0 }
  },
})

export default router
