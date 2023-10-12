module.exports = {
    base: '',
    title: "博客", 
    lang: 'zh-CN', 
    head: [
        ['link', { rel: 'icon', href: '/avatar.jpg' }],
    ],
    lastUpdated: true,
    markdown: {
        theme: 'github-dark',
        lineNumbers: true,
    },
    titleTemplate: "博客",
    themeConfig: {
        logo: '',
        search: {
            provider: 'local'
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/about/' },
            { 
                text: '编程', 
                items: [
                    { text: 'go', link: '/coding/Go/'},
                    { text: '区块链', link: '/coding/BlockChain/' }
                ]
            },
            { 
                text: '设计', 
                items: [
                    { text: '画稿', link: '/design/draw'},
                ]
            },
            { 
                text: '团队', 
                link: '/team'
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/CN-Linzhisen' },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
    }
}
