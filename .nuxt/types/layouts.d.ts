import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/tagur/OneDrive/Documents/LunaTronix/nuxt-tailwind-static-template/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}