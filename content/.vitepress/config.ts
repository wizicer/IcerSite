import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import viteConfig from "./vite.config";
import { getSidebar } from "./sidebar";

// prettier-ignore
const customElements = [
  "mjx-container", "mjx-assistive-mml", "math", "maction", "maligngroup",
  "malignmark", "menclose", "merror", "mfenced", "mfrac", "mi", "mlongdiv",
  "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow",
  "ms", "mscarries", "mscarry", "mscarries", "msgroup", "mstack", "mlongdiv",
  "msline", "mstack", "mspace", "msqrt", "msrow", "mstack", "mstack", "mstyle",
  "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder",
  "munderover", "semantics", "math", "mi", "mn", "mo", "ms", "mspace", "mtext",
  "menclose", "merror", "mfenced", "mfrac", "mpadded", "mphantom", "mroot",
  "mrow", "msqrt", "mstyle", "mmultiscripts", "mover", "mprescripts", "msub",
  "msubsup", "msup", "munder", "munderover", "none", "maligngroup",
  "malignmark", "mtable", "mtd", "mtr", "mlongdiv", "mscarries", "mscarry",
  "msgroup", "msline", "msrow", "mstack", "maction", "semantics", "annotation",
  "annotation-xml",
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "冰河设计",
  description: "冰河魔法师的自留地",
  vite: viteConfig as any,
  locales: {
    en: {
      label: "English",
      lang: "en",
    },
    zh: {
      label: "中文",
      lang: "zh",

      themeConfig: {
        nav: [
          { text: "主页", link: "/zh/" },
          { text: "关于", link: "/zh/about/" },
          { text: "项目", link: "/zh/projects/" },
          { text: "博客", link: "/zh/archives" },
        ],

        sidebar: getSidebar("zh"),
      },
    },
  },
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: true,

    // editLink: {
    //   pattern: "https://github.com/SutuLabs/zkcourse/edit/main/docs/:path",
    //   text: "在GitHub编辑本页面",
    // },

    socialLinks: [
      // { icon: "github", link: "https://github.com/SutuLabs/zkcourse" },
      {
        icon: {
          svg: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M715.086 175.231c84.209 83.541 84.209 219.068 0 302.609L473.844 717.177c-27.011 26.808-70.757 26.808-97.766.003L134.834 477.841c-84.209-83.541-84.209-219.068 0-302.609 79.465-78.834 205.507-83.196 290.126-13.085 84.619-70.111 210.661-65.749 290.126 13.085zm-304.55 29.078c-68.15-67.609-178.704-67.609-246.854 0-68.059 67.519-68.059 176.933 0 244.453l241.247 239.342c11.041 10.958 29.021 10.958 40.064-.003l241.244-239.34c68.059-67.519 68.059-176.933 0-244.453-68.15-67.609-178.704-67.609-246.854 0-7.985 7.921-20.863 7.921-28.847 0zm512.659 447.719c41.568 41.25 41.568 108.188-.002 149.427L817.049 906.759c-16.362 16.242-42.825 16.242-59.183.004L651.718 801.455c-41.57-41.239-41.57-108.177 0-149.429 36.964-36.67 94.329-40.671 135.737-11.999 41.408-28.671 98.773-24.671 135.739 12.001zM773.03 681.102c-25.51-25.315-66.943-25.315-92.462 0-25.423 25.228-25.423 66.056-.002 91.275l106.152 105.312c.391.388 1.084.388 1.479-.004l106.148-105.308c25.42-25.218 25.42-66.046 0-91.272-25.52-25.318-66.953-25.318-92.464-.002-7.985 7.924-20.867 7.924-28.852 0z"/></svg>',
        },
        link: "http://love.icerdesign.com/",
        // ariaLabel: "love",
      },
      {
        icon: {
          svg: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="camera-photo-heart-love-valentine"> <path d="M440,128h-91.238l-23.297-42.953C318.574,72.063,305.109,64,290.32,64H221.68c-14.789,0-28.254,8.063-35.109,20.984   L163.238,128H136v-8c0-8.837-7.163-16-16-16H88c-8.836,0-16,7.163-16,16v8c-22.055,0-40,17.945-40,40v176c0,22.055,17.945,40,40,40   h99.62c22.556,19.851,52.043,32,84.38,32s61.824-12.149,84.38-32H440c22.055,0,40-17.945,40-40V168   C480,145.945,462.055,128,440,128z M440,176v16c0,4.418-3.582,8-8,8h-40c-4.418,0-8-3.582-8-8v-16c0-4.418,3.582-8,8-8h40   C436.418,168,440,171.582,440,176z M220.945,128l5.789-11.578c1.363-2.727,4.105-4.422,7.156-4.422h44.219   c3.051,0,5.793,1.695,7.156,4.422L291.055,128H220.945z M82.745,232c8.487,0,16.626,3.371,22.627,9.373l24.652,24.652   C128.779,273.18,128,280.494,128,288c0,13.976,2.331,27.399,6.49,40H48v-96H82.745z M377.51,328c4.16-12.601,6.49-26.024,6.49-40   c0-7.506-0.779-14.82-2.025-21.975l24.652-24.652c6.001-6.001,14.141-9.373,22.627-9.373H464v96H377.51z M144,288   c0-61.758,50.242-112,112-112s112,50.242,112,112s-50.242,112-112,112S144,349.758,144,288z M256,200c-48.56,0-88,39.44-88,88   s39.44,88,88,88s88-39.44,88-88S304.56,200,256,200z M301.76,305.6l-32.48,32.88c-7.36,7.36-19.2,7.36-26.56,0l-32.48-32.88   c-11.84-12-13.92-31.2-3.6-44.64c12.4-16.16,35.52-17.2,49.36-3.2c13.84-14,36.96-12.96,49.36,3.2   C315.68,274.4,313.6,293.6,301.76,305.6z"/> </g> <g id="Layer_1"/> </svg>',
        },
        link: "https://www.hiyaphoto.com/",
        // ariaLabel: "photographer",
      },
    ],
  },

  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
});
