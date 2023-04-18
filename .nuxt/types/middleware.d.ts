import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/User/Desktop/LunaTronix_/Luna_Tronix/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}