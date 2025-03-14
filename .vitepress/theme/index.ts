// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CustomTheme from './CustomTheme.vue'
import { inject } from "@vercel/analytics"
import './style.css'

inject();

export default {
  extends: DefaultTheme,
  Layout: CustomTheme,
  enhanceApp({ app, router, siteData }) {
  },
} satisfies Theme;