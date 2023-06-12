const rawSidebar = [
  {
    text: "大学时期",
    items: [
      { text: "低清晰度下的头像处理比较", link: "/projects/2007/face-detection-in-low-resolution/" },
      { text: "和平世界", link: "/projects/2008/peaceworld/" },
      { text: "本科毕业设计", link: "/projects/2009/graduation-clock/" },
      { text: "校内相册批量下载器", link: "/projects/2009/album-downloader/" },
      { text: "考研日程计划执行器", link: "/projects/2008/class-alerter/" },
    ],
  },
  {
    text: "初高中时期",
    collapsed: false,
    items: [
      { text: "魔法中学院", link: "/projects/2005/magic-school/" },
      { text: "涂鸦", link: "/projects/2005/doodle/" },
      { text: "画笔大战", link: "/projects/2004/paint-battle/" },
      { text: "第一个RPG游戏", link: "/projects/2002/first-rpg/" },
      { text: "图标大战", link: "/projects/2003/icon-battler/" },
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
