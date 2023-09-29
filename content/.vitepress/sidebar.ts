const rawSidebar = [
  {
    text: "区块链时期",
    items: [
      { text: "区块链展览", link: "/projects/2019/blockchain-exhibition/" },
    ],
  },
  {
    text: "大学时期",
    items: [
      { text: "校内相册批量下载器", link: "/projects/2009/album-downloader/" },
      { text: "本科毕业设计", link: "/projects/2009/graduation-clock/" },
      { text: "考研日程计划执行器", link: "/projects/2008/class-alerter/" },
      { text: "和平世界", link: "/projects/2008/peaceworld/" },
      { text: "低清晰度下的头像处理比较", link: "/projects/2007/face-detection-in-low-resolution/" },
    ],
  },
  {
    text: "高中时期",
    collapsed: false,
    items: [
      { text: "魔法中学院", link: "/projects/2005/magic-school/" },
      { text: "涂鸦", link: "/projects/2005/doodle/" },
      { text: "画笔大战", link: "/projects/2004/paint-battle/" },
      { text: "在线代码片段库", link: "/projects/2004/code-share/" },
      { text: "网站大点兵", link: "/projects/2004/web-site/" },
      { text: "图标大战", link: "/projects/2003/icon-battler/" },
      { text: "冰河评语", link: "/projects/2003/reviewer/" },
      { text: "魔法鼠标控制", link: "/projects/2003/magic-mouse/" },
    ],
  },
  {
    text: "初中时期",
    collapsed: false,
    items: [
      { text: "第一个RPG游戏", link: "/projects/2002/first-rpg/" },
      { text: "隐藏文件到图片中", link: "/projects/2002/hide-file/" },
      { text: "世界时钟", link: "/projects/2002/world-clock/" },
      { text: "生物周期速查", link: "/projects/2001/period/" },
      { text: "神速切割", link: "/projects/2001/cut/" },
    ],
  },
];

type LANGUAGE = "en" | "zh";
export function getSidebar(lang: LANGUAGE) {
  const i = (getObject(lang, { items: rawSidebar }) as any).items;
  return i;
}

function getObject(lang: LANGUAGE, obj: object): object {
  if ("items" in obj && Array.isArray(obj.items)) obj.items = obj.items.map((_) => getObject(lang, _));
  return Object.assign({}, obj, { text: obj[lang] || obj["text"], link: obj["link"] && "/" + lang + obj["link"] });
}
