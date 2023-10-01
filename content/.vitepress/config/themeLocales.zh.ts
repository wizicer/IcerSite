export const zhLocales = {
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
};
