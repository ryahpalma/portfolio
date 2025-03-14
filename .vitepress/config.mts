import {defineConfig} from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
        ],
        server: {
            allowedHosts: true,
        },
    },
    sitemap: {
        hostname: 'https://ryahpalma.dev'
    },
    srcDir: './src',
    lastUpdated: true,
    cleanUrls: true,
    locales: {
        root: {
            title: "Ryan Palma - Desenvolvedor Backend",
            description: "Desenvolvedor backend há mais de 5 anos, especialista em desenvolvimento de sistemas",
            label: 'Português',
            lang: 'pt',
            head: [
                // Favicon & Manifests
                ['link', {rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96'}],
                ['link', {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}],
                ['link', {rel: 'shortcut icon', href: '/favicon.ico'}],
                ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
                ['meta', {name: 'apple-mobile-web-app-title', content: 'Ryan Palma'}],
                ['link', {rel: 'manifest', href: '/site.webmanifest'}],

                // Open Graph Desktop
                ['meta', {property: 'og:title', content: 'Ryan Palma - Desenvolvedor Backend'}],
                ['meta', {property: 'og:description', content: 'Desenvolvimento de sistemas, lojas ou sites, que derão retornos significativos em seus negócios.'}],
                ['meta', {property: 'og:image', content: '/og-image-desktop.png'}],
                ['meta', {property: 'og:image:width', content: '1200'}],
                ['meta', {property: 'og:image:height', content: '630'}],
                ['meta', {property: 'og:image:alt', content: 'Banner'}],
                ['meta', {property: 'og:type', content: 'website'}],
                ['meta', {property: 'og:url', content: 'https://ryahpalma.dev'}],

                // Open Graph Mobile
                ['meta', {property: 'og:image', content: '/og-image-mobile.png'}],
                ['meta', {property: 'og:image:width', content: '800'}],
                ['meta', {property: 'og:image:height', content: '600'}],

                // Twitter Cards
                ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
                ['meta', {name: 'twitter:title', content: 'Ryan Palma - Desenvolvedor Backend'}],
                ['meta', {name: 'twitter:description', content: 'Desenvolvimento de sistemas, lojas ou sites, que derão retornos significativos em seus negócios.'}],
                ['meta', {name: 'twitter:image', content: '/og-image-desktop.png'}],
                ['meta', {name: 'twitter:image:alt', content: 'Banner'}],
                ['meta', {name: 'twitter:site', content: '@ryahpalma'}],

                // JSON-LD (Google Structured Data)
                ['script', {type: 'application/ld+json'}, JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Ryan Palma - Desenvolvedor Backend",
                    "url": "https://ryahpalma.dev",
                    "description": "Desenvolvimento de sistemas, lojas ou sites, que derão retornos significativos em seus negócios.",
                    "image": "https://ryahpalma.dev/og-image-desktop.png",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Ryan Palma",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://ryahpalma.dev/web-app-manifest-512x512.png"
                        }
                    }
                })]
            ],
            themeConfig: {
                darkModeSwitchLabel: "Tema Claro/Escuro",
                returnToTopLabel: "Retonar ao topo",
                outline: {
                    label: "Nessa Página"
                },
                docFooter: {
                    prev: "Voltar página",
                    next: "Proxima página",
                },
                nav: [
                    {text: 'Início', link: '/'},
                    {text: 'Blog', link: '/blog'}
                ],
                sidebar: [
                    {
                        text: 'Sumário',
                        items: [
                            {text: 'Blog', link: '/blog'},
                            {text: 'Laravel', link: '/laravel'},
                            {text: 'Nginx', link: '/nginx'},
                            {text: 'Cloudflare', link: '/cloudflare'},
                        ]
                    }
                ],
                footer: {
                    message: 'Lançado sob <a href="https://github.com/ryahpalma/portfolio/blob/main/LICENSE">Licença MIT</a>.',
                    copyright: 'Direitos Reservados © ' + new Date().getFullYear() + ' <a href="https://github.com/ryahpalma">Ryan Palma</a>'
                }
            },
        },
        en: {
            title: "Ryan Palma - Backend Developer",
            description: "Backend developer for over 5 years, specialist in systems development",
            label: 'English',
            lang: 'en',
            link: '/en',
            head: [
                // Favicon & Manifests
                ['link', {rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96'}],
                ['link', {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}],
                ['link', {rel: 'shortcut icon', href: '/favicon.ico'}],
                ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
                ['meta', {name: 'apple-mobile-web-app-title', content: 'Ryan Palma'}],
                ['link', {rel: 'manifest', href: '/site.webmanifest'}],

                // Open Graph Desktop
                ['meta', {property: 'og:title', content: 'Ryan Palma - Backend Developer'}],
                ['meta', {property: 'og:description', content: 'Development of systems, stores, or websites that will bring significant returns to your business.'}],
                ['meta', {property: 'og:image', content: '/og-image-desktop.png'}],
                ['meta', {property: 'og:image:width', content: '1200'}],
                ['meta', {property: 'og:image:height', content: '630'}],
                ['meta', {property: 'og:image:alt', content: 'Banner'}],
                ['meta', {property: 'og:type', content: 'website'}],
                ['meta', {property: 'og:url', content: 'https://ryahpalma.dev/en'}],

                // Open Graph Mobile
                ['meta', {property: 'og:image', content: '/og-image-mobile.png'}],
                ['meta', {property: 'og:image:width', content: '800'}],
                ['meta', {property: 'og:image:height', content: '600'}],

                // Twitter Cards
                ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
                ['meta', {name: 'twitter:title', content: 'Ryan Palma - Backend Developer'}],
                ['meta', {name: 'twitter:description', content: 'Development of systems, stores, or websites that will bring significant returns to your business.'}],
                ['meta', {name: 'twitter:image', content: '/og-image-desktop.png'}],
                ['meta', {name: 'twitter:image:alt', content: 'Banner'}],
                ['meta', {name: 'twitter:site', content: '@ryahpalma'}],

                // JSON-LD (Google Structured Data)
                ['script', {type: 'application/ld+json'}, JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Ryan Palma - Backend Developer",
                    "url": "https://ryahpalma.dev/en",
                    "description": "Development of systems, stores, or websites that will bring significant returns to your business.",
                    "image": "https://ryahpalma.dev/og-image-desktop.png",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Ryan Palma",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://ryahpalma.dev/web-app-manifest-512x512.png"
                        }
                    }
                })]
            ],
            themeConfig: {
                darkModeSwitchLabel: "Theme Light/Dark",
                nav: [
                    {text: 'Home', link: '/en'},
                    {text: 'Blog', link: '/en/blog'}
                ],
                sidebar: [
                    {
                        text: 'Sumary',
                        items: [
                            {text: 'Blog', link: '/en/blog'},
                            {text: 'Laravel', link: '/en/laravel'},
                            {text: 'Nginx', link: '/en/nginx'},
                            {text: 'Cloudflare', link: '/en/cloudflare'},
                        ]
                    }
                ],
                footer: {
                    message: 'Released under the <a href="https://github.com/ryahpalma/portfolio/blob/main/LICENSE">MIT License</a>.',
                    copyright: 'Copyright © ' + new Date().getFullYear() + ' <a href="https://github.com/ryahpalma">Ryan Palma</a>'
                }
            },
        },
    },
    themeConfig: {
        siteTitle: false,
        logo: {
            light: '/logo-light.svg',
            dark: '/logo-dark.svg',
            alt: 'Logo Ryan Palma'
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: 'Pesquisar',
                                buttonAriaLabel: 'Pesquisar'
                            },
                            modal: {
                                noResultsText: 'Sem resultados para',
                                resetButtonTitle: 'Limpar',
                                displayDetails: 'Mostrar detalhes',
                                footer: {
                                    selectText: 'para navegar',
                                    navigateText: 'para selecionar',
                                    closeText: 'para fechar',
                                }
                            }
                        }
                    }
                }
            }
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/ryahpalma'},
            {icon: 'whatsapp', link: 'https://wa.me/5512988878268'},
            {icon: 'linkedin', link: 'https://linkedin.com/in/ryahpalma'},
        ]
    },
})
