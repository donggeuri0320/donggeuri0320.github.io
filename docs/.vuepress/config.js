import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'donggeuri0320',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    // navbar: ['/', '/get-started'],

    // 사이드바 설정 추가
    sidebar: {
      '/ddd/': [
        {
          text: 'Category 1',
          collapsible: true,
          children: [
            {text: 'index', link: '/ddd/'},
            {text: 'appp haha', link: '/ddd/appp'},
            {text: 'ttt haha', link: '/ddd/ttt'},
          ],
        },
      ],
    },
     navbar: [
      // nested group - max depth is 2
      {
        text: 'Group',
        children: [
          {
            // text: 'SubGroup',
            children: ['/group/foo.md', '/group/bar.md'],
          },
        ],
      },
      // control when should the item be active
      {
        text: 'Group 2',
        children: [
          {
            text: 'Always active',
            link: '/',
            // this item will always be active
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // this item will be active when current route path starts with /foo/
            // regular expression is supported
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
  }),

  bundler: viteBundler(),
})
