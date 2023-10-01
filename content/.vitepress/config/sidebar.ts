const rawSidebar = [
  {
    zh: "区块链时期",
    en: "Web 3",
    items: [
      { zh: "区块链展览", en: "Blockchain Exhibition", link: "/projects/2019/blockchain-exhibition/" },
      //
    ],
  },
  {
    zh: "大学时期",
    en: "Undergraduate",
    items: [
      { zh: "校内相册批量下载器", en: "Album Downloader", link: "/projects/2009/album-downloader/" },
      { zh: "本科毕业设计", en: "Digital Clock", link: "/projects/2009/graduation-clock/" },
      { zh: "考研日程计划执行器", en: "Scheduler", link: "/projects/2008/class-alerter/" },
      { zh: "和平世界", en: "Web Game: Peace World", link: "/projects/2008/peaceworld/" },
      {
        zh: "低清晰度下的头像处理比较",
        en: "Face Detection in Low Resolution",
        link: "/projects/2007/face-detection-in-low-resolution/",
      },
    ],
  },
  {
    zh: "高中时期",
    en: "High School",
    collapsed: false,
    items: [
      { zh: "魔法中学院", en: "Magic School", link: "/projects/2005/magic-school/" },
      { zh: "涂鸦", en: "My Doodles", link: "/projects/2005/doodle/" },
      { zh: "画笔大战", en: "Paint Battle", link: "/projects/2004/paint-battle/" },
      { zh: "在线代码片段库", en: "Online Code Sharer", link: "/projects/2004/code-share/" },
      { zh: "网站大点兵", en: "My Web Sites", link: "/projects/2004/web-site/" },
      { zh: "图标大战", en: "Icon Battler", link: "/projects/2003/icon-battler/" },
      { zh: "冰河评语", en: "Review Writer", link: "/projects/2003/reviewer/" },
      { zh: "魔法鼠标控制", en: "Magic Mouse", link: "/projects/2003/magic-mouse/" },
    ],
  },
  {
    zh: "初中时期",
    en: "Junior High School",
    collapsed: false,
    items: [
      { zh: "第一个RPG游戏", en: "My First RPG", link: "/projects/2002/first-rpg/" },
      { zh: "隐藏文件到图片中", en: "Hide File in Image", link: "/projects/2002/hide-file/" },
      { zh: "世界时钟", en: "World Clock", link: "/projects/2002/world-clock/" },
      { zh: "生物周期速查", en: "Period Diagram", link: "/projects/2001/period/" },
      { zh: "神速切割", en: "Superspeed Cut", link: "/projects/2001/cut/" },
    ],
  },
];

type LANGUAGE = "en" | "zh";
export function getSidebar(lang: LANGUAGE) {
  const i = (getObject(lang, { items: rawSidebar }) as any).items;
  return i;
}

function getObject(lang: LANGUAGE, obj: object): object {
  return Object.assign({}, obj, {
    text: obj[lang] || obj["text"],
    link: obj["link"] && "/" + lang + obj["link"],
    items: "items" in obj && Array.isArray(obj.items) && obj.items.map((_) => getObject(lang, _)),
  });
}
