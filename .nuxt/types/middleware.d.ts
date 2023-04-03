import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/tagur/OneDrive/Documents/LunaTronix/nuxt3-tailwindcss-LunaTronix/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}