// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import CustomTheme from './CustomTheme.vue'

export default {
  extends: DefaultTheme,
  Layout: CustomTheme,
  enhanceApp({ app, router, siteData }) {
  },
} satisfies Theme;