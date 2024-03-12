import { UserConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'

const config: UserConfig = {
  plugins: [
    Vue(),
    UnoCSS(),
  ]
}

export default config
