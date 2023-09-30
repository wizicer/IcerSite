import { DefaultTheme } from "vitepress/types/default-theme";
import { defineConfigWithTheme } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import viteConfig from "./vite.config";
import { getSidebar } from "./sidebar";
import { getSocialLinks } from "./socialLink";

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

interface ThemeConfig extends DefaultTheme.Config {
  locales?: any;
}

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  title: "冰河设计",
  description: "冰河魔法师的自留地",
  vite: viteConfig as any,
  locales: {
    en: {
      label: "English",
      lang: "en",
      title: "IcerDesign",
      description: "Everything about IcerDesign",

      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "About", link: "/en/about/" },
          { text: "Project", link: "/en/projects/" },
          { text: "Blog", link: "/en/archives" },
        ],

        sidebar: getSidebar("en"),
        socialLinks: getSocialLinks("en"),
      },
    },
    zh: {
      label: "中文",
      lang: "zh",

      themeConfig: {
        locales: {
          index: {
            latestBlog: {
              title: "最新博客",
              more: "查看所有",
            },
          },
          blog: {
            list: {
              top: "置顶",
              icon: {
                year: "年",
                month: "月",
              },
              item: {
                year: (year: number) => `${year}年`,
                month: (month: number) => `${month}月`,
              },
            },
            tags: {
              total: (count: number) => `共 ${count} 篇`,
              empty: "空空如也...",
              clickHint: "点击上方标签，查看标签下的所有文章",
            },
            content: {
              top: "置顶",
            },
          },
          info: {
            oldNotice: (age: number) => `老文章预警：该文写于作者${age}岁，里面提到的东西可能会过于幼稚或已经过时，请注意分辨。`,
          },
        },

        nav: [
          { text: "主页", link: "/zh/" },
          { text: "关于", link: "/zh/about/" },
          { text: "项目", link: "/zh/projects/" },
          { text: "博客", link: "/zh/archives" },
        ],

        sidebar: getSidebar("zh"),
        socialLinks: getSocialLinks("zh"),
      },
    },
  },
  themeConfig: {
    // search: {
    //   provider: "local",
    // },
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: true,

    // editLink: {
    //   pattern: "https://github.com/SutuLabs/zkcourse/edit/main/docs/:path",
    //   text: "在GitHub编辑本页面",
    // },
  },

  markdown: {
    config: (md) => {
      md.use(mathjax3);

      md.renderer.rules.image = (tokens, idx, options, env, slf) => {
        const lang = env.frontmatter.lang;
        if (lang != "zh") {
          for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (!token.attrs) continue;
            const apos = token.attrs.findIndex((_) => _[0] == "src");
            if (apos == -1) continue;
            const origin = token.attrs[apos][1];
            if (origin.startsWith("/")) continue;
            if (origin.startsWith("https://")) continue;
            if (origin.startsWith("http://")) continue;
            let path = env.relativePath.substr(0, env.relativePath.lastIndexOf("/") + 1);
            path = path.replace(lang, "zh");
            token.attrs[apos][1] = "/" + path + origin;
            // console.log(path, token.attrs[apos], origin);
          }
        }
        let htmlResult = slf.renderToken(tokens, idx, options);
        return htmlResult;
      };
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
