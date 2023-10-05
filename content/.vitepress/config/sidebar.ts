const rawSidebar = [
  {
    zh: "Web 3",
    en: "Web 3",
    items: [
      //https://github.com/SutuLabs/hyperdriveWhitepaper
      { zh: "Mina CTF", en: "Mina CTF", link: "/projects/2023/mina-ctf/" },
      { zh: "Plonk Script", en: "Plonk Script", link: "/projects/2023/plonk-script/" },
      { zh: "Pawket链上钱包", en: "Pawket", link: "/projects/2022/pawket/" },
      { zh: "运维平台", en: "Ops Platform", link: "/projects/2021/ops-platform/" },
      {
        zh: "区块链展览",
        en: "Blockchain Exhibition",
        link: "/projects/2019/blockchain-exhibition/",
        items: [
          { zh: "区块链架构设计工具", en: "Blockchain Architecture Design", link: "/projects/2019/chain-intro/" },
          { zh: "纸钱包生成器", en: "Paper Wallet Printer", link: "/projects/2019/paper-wallet-printer/" },
        ],
      },
      {
        zh: "《区块链系统实现》",
        en: "Blockchain System Implementation",
        link: "/projects/2018/blockchain-system-implementation/",
      },
      {
        zh: "优擎区块链数据库",
        en: "UChainDB",
        link: "/projects/2017/uchaindb/",
        items: [
          { zh: "素图网", en: "Sutu Pic Platform", link: "/projects/2018/sutu-pic/" },
          { zh: "灯火计划", en: "Deng Project", link: "/projects/2017/deng-project/" },
        ],
      },
    ],
  },
  {
    zh: "Other",
    en: "Web 3",
    items: [
      { zh: "科研工具", en: "Science Tools", link: "/projects/2022/science-tools/" },
      { zh: "交大校友会", en: "SJTU Alumni", link: "/projects/2020/sjtu-alumni/" },
      { zh: "剪刀兔", en: "Editool", link: "/projects/2020/editool/" },
      { zh: "标日学习", en: "Japanese Learning Assistant", link: "/projects/2016/learn-japan/" }, 
      { zh: "C#自动代码生成", en: "C# Hidden Code Generator", link: "/projects/2015/cs-hidden-code-gen/" }, 
      { zh: "ClearCase转git", en: "ClearCase-to-Git Helper", link: "/projects/2015/clearcase-to-git/" }, 
      { zh: "UAP协议", en: "UAP Network", link: "/projects/2009/uap-network/" }, 
    ],
  },
  {
    zh: "大学时期",
    en: "Undergraduate",
    items: [
      { zh: "校内相册批量下载器", en: "Album Downloader", link: "/projects/2009/album-downloader/" }, //https://github.com/wizicer/XiaoNeiAlbumDownloader
      { zh: "本科毕业设计", en: "Digital Clock", link: "/projects/2009/graduation-clock/" },
      { zh: "考研日程计划执行器", en: "Scheduler", link: "/projects/2008/class-alerter/" }, //https://github.com/wizicer/ClassAlerter
      { zh: "和平世界", en: "Web Game: Peace World", link: "/projects/2008/peaceworld/" },
      {
        zh: "低清晰度下的头像处理比较",
        en: "Face Detection in Low Resolution",
        link: "/projects/2007/face-detection-in-low-resolution/",
      }, //https://github.com/wizicer/CsSurveillant
      //https://github.com/wizicer/IcerImageProcessing
    ],
  },
  {
    zh: "高中时期",
    en: "High School",
    collapsed: false,
    items: [
      { zh: "魔法中学院(RPG)", en: "Magic School(RPG)", link: "/projects/2005/magic-school/" }, //https://github.com/wizicer/VbSchoolGame
      { zh: "涂鸦", en: "My Doodles", link: "/projects/2005/doodle/" },
      { zh: "画笔大战(PvP)", en: "Paint Battle", link: "/projects/2004/paint-battle/" },
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
