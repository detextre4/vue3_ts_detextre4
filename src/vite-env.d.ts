/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

import FullScreen from '@/components/helpers/full-screen.vue'
import CustomModal from '@/components/modals/custom-modal.vue'
import VImgLoad from '@/components/helpers/v-img-load.vue'
import VImgInput from '@/components/helpers/v-img-input.vue'
import VAvatarUpload from '@/components/helpers/v-avatar-upload.vue'
import Navbar from '@/components/navbar.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Navbar: typeof Navbar,
    FullScreen: typeof FullScreen,
    CustomModal: typeof CustomModal,
    VImgLoad: typeof VImgLoad,
    VImgInput: typeof VImgInput,
    VAvatarUpload: typeof VAvatarUpload,
  }
}
