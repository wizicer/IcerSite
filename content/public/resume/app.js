// import { createApp } from "./vue.esm-browser.prod.js";
import { createApp } from "./vue.esm-browser.prod.js";

createApp({
  data() {
    const urlParams = new URLSearchParams(window.location.search);
    const language = urlParams.get("language");
    return {
      language: language == "zh" ? "zh" : "en",
      // language: "zh",
      mode: "resume",
      // mode: "letter",
      switchable: !language,
    };
  },
  mounted() {
    this.updateTitle();
  },
  methods: {
    switchLanguage() {
      if (!this.switchable) return;
      this.language = this.language == "en" ? "zh" : "en";
      this.updateTitle();
    },
    switchMode() {
      if (!this.switchable) return;
      this.mode = this.mode == "resume" ? "letter" : "resume";
      this.updateTitle();
    },
    updateTitle() {
      document.title =
        this.mode == "resume"
          ? this.isEnglish
            ? "Shuang Liang - Resume"
            : "梁爽 - 简历"
          : this.isEnglish
          ? "Shuang Liang - Cover Letter"
          : "梁爽 - 求职信";
    },
  },
  computed: {
    isEnglish() {
      return this.language == "en";
    },
    titles() {
      return {
        education: this.isEnglish ? "EDUCATION" : "教育经历",
        metrics: this.isEnglish ? "METRICS" : "成果指标",
        skills: this.isEnglish ? "SKILLS" : "技能",
        awards: this.isEnglish ? "AWARDS" : "荣誉",
        summary: this.isEnglish ? "SUMMARY" : "个人自述",
        language: this.isEnglish ? "Language" : "语言能力",
        stack: this.isEnglish ? "" : "技术栈",
      };
    },
    info() {
      return this.isEnglish
        ? {
            name: "Shuang Liang (梁爽)",
            job: "Web3 Architect / ZKP Engineer",
            location: "Shanghai, China",
          }
        : {
            name: "梁爽",
            job: "Web3 架构师 / 零知识证明工程师",
            location: "中国 上海",
          };
    },
    schools() {
      return this.isEnglish
        ? [
            {
              name: "Shanghai Jiaotong University",
              short: "SJTU",
              degree: "PhD in Computer Science",
              duration: "2020 ~ 2025",
              location: "Shanghai, China",
              highlights: [
                {
                  type: "onemin",
                  content: "On leave of absence",
                },
              ],
            },
            {
              name: "Shanghai Jiaotong University",
              short: "SJTU",
              degree: "MEng in Software Engineering",
              duration: "2013 ~ 2016",
              location: "Shanghai, China",
              highlights: [],
            },
            {
              name: "Chongqing Jiaotong University",
              short: "CQJTU",
              degree: "BS in Electronic Engineering",
              duration: "2005 ~ 2009",
              location: "Chongqing, China",
              highlights: [
                // {
                //   type: "two",
                //   leading: "hello",
                //   content: "world",
                // },
              ],
            },
          ]
        : [
            {
              name: "上海交通大学",
              short: "SJTU",
              degree: "计算机科学 博士",
              duration: "2020 ~ 2025",
              location: "上海",
              highlights: [
                {
                  type: "onemin",
                  content: "休学中",
                },
              ],
            },
            {
              name: "上海交通大学",
              short: "SJTU",
              degree: "软件工程 工程硕士",
              duration: "2013 ~ 2016",
              location: "上海",
              highlights: [],
            },
            {
              name: "重庆交通大学",
              short: "CQJTU",
              degree: "电子信息工程 学士",
              duration: "2005 ~ 2009",
              location: "重庆",
              highlights: [],
            },
          ];
    },
    skills() {
      return [
        {
          name: this.isEnglish ? "Programming" : "编程语言",
          list: [
            {
              category: this.isEnglish ? "Over 300k LoC" : "超过30万行代码",
              items: ["C#", "Typescript/Javascript"],
            },
            {
              category: this.isEnglish ? "Over 30k LoC" : "超过3万行代码",
              items: ["C/C++", "Basic", "Pascal", "Vue"],
            },
            {
              category: this.isEnglish ? "Over 3k LoC" : "超过3千行代码",
              items: ["Circom", "Cairo", "Python", "Bash", "SQL", "Latex", "CoffeeScript", "F#/Lisp/Elm"],
            },
          ],
        },
        {
          name: this.isEnglish ? "Management" : "管理工作",
          list: [
            this.isEnglish
              ? {
                  category: "Over 10 years",
                  items: [
                    //
                    "Leadership",
                    "Agile",
                    "Coach",
                    "Time/Project Management",
                  ],
                }
              : {
                  category: "超过10年经验",
                  items: [
                    //
                    "领导力",
                    "敏捷过程",
                    "团队指导",
                    "时间管理",
                    "项目管理",
                  ],
                },
            // {
            //   category: "Over 5 years",
            //   items: [
            //     //  "Strategic thinking",
            //     "Quality Management",
            //   ],
            // },
          ],
        },
        {
          name: this.isEnglish ? "Ops" : "运维工作",
          list: [
            {
              category: this.isEnglish ? "Over 3000 Instances" : "超过3千实例",
              items: [
                //
                "Linux",
                "Zabbix",
                "Jumpserver",
              ],
            },
            {
              category: this.isEnglish ? "Over 300 Instances" : "超过300实例",
              items: [
                //
                "Docker",
                "CI/CD",
                "Prometheus",
                "Grafana",
              ],
            },
          ],
        },
      ];
    },
    past() {
      return [
        {
          title: this.isEnglish ? "EXPERIENCE" : "工作经验",
          items: [
            this.isEnglish
              ? {
                  employer: "Sutu Tech",
                  position: "Founder & CTO",
                  duration: "2017.7 ~ Present",
                  location: "Shanghai, China",
                  highlights: [
                    //
                    {
                      content:
                        "As a CTO, I led a team to develop a range of products, including the blockchain database UChainDB, a data cluster management system, Chialisp IDE, the web3 wallet - Pawket, and Name Service.",
                      stack: "C# + Typescript",
                    },
                    "As a Founder, I refine the company's development strategy through ongoing communication with clients and investors, and by evaluating the broader financial market and policy landscape.",
                  ],
                }
              : {
                  employer: "上海素图科技",
                  position: "创始人 & CTO",
                  duration: "2017.7 ~ 现在",
                  location: "上海",
                  highlights: [
                    //
                    {
                      content:
                        "作为 CTO，领导团队开发了一系列产品，包括 UChainDB (区块链数据库)、数据集群管理系统、Chialisp IDE、Pawket (Web3 钱包) 和域名服务等。",
                      stack: "C# + Typescript",
                    },
                    "作为创始人，通过与客户和投资者的持续沟通，以及评估金融市场和政策环境，持续地调整和改善公司的发展战略。",
                  ],
                },
            this.isEnglish
              ? {
                  employer: "Honeywell",
                  position: "Senior Engineer & Architect",
                  duration: "2012.5 ~ 2017.6",
                  location: "Shanghai, China",
                  highlights: [
                    //
                    {
                      content:
                        "As a technical architect, I led the team to develop the PC configuration software of Honeywell RTU2020 and ControlEdge™ PLC. And been issued 2 US patents.",
                      stack: "C# + WPF",
                    },
                  ],
                }
              : {
                  employer: "霍尼韦尔",
                  position: "高级工程师 & 架构师",
                  duration: "2012.5 ~ 2017.6",
                  location: "上海",
                  highlights: [
                    //
                    {
                      content:
                        "作为技术架构师，领导团队开发了霍尼韦尔 ControlEdge™ PLC 和 RTU2020 的 PC 配置软件，并获得了两项美国专利。",
                      stack: "C# + WPF",
                    },
                  ],
                },
            this.isEnglish
              ? {
                  employer: "Fetion",
                  position: "Senior Engineer & Projec Manager",
                  duration: "2009.4 ~ 2012.4",
                  location: "Chongqing, China",
                  highlights: [
                    //
                    {
                      content:
                        "As a technical architect, I led a team to develop a high-performance distributed service, which achieved 200 million/hour customized MMS/SMS messages delivery and issued 3 Chinese patents.",
                      stack: "C# + Javascript",
                    },
                  ],
                }
              : {
                  employer: "飞信",
                  position: "高级工程师 & 架构师",
                  duration: "2009.4 ~ 2012.4",
                  location: "重庆",
                  highlights: [
                    //
                    {
                      content:
                        "作为技术架构师，领导团队开发了一个高性能分布式服务，实现了每小时 2 亿条定制短彩信的发送，并获得了三项中国专利。",
                      stack: "C# + Javascript",
                    },
                  ],
                },
          ],
        },
        // {
        //   title: "RESEARCH",
        //   items: [
        //     {
        //       employer: "SJTU DB Group",
        //       position: "Research Assistant",
        //       duration: "2020.6 ~ Present",
        //       location: "Shanghai, China",
        //       highlights: [
        //         //
        //         "hello",
        //       ],
        //     },
        //     {
        //       employer: "CQJTU Vision Lab",
        //       position: "Research Assistant",
        //       duration: "2006.9 ~ 2008.6",
        //       location: "Chongqing, China",
        //       highlights: [
        //         //
        //         "hello",
        //       ],
        //     },
        //   ],
        // },
        {
          title: this.isEnglish ? "ZKP Program" : "零知识证明相关项目",
          items: [
            this.isEnglish
              ? {
                  employer: "Mina Foundation",
                  position: "Grantee",
                  duration: "2023.3 ~ Present",
                  location: "Remote, Global",
                  highlights: [
                    //
                    {
                      content:
                        "As a Mina zkIgnite Cohort Grantee, I am responsible for implementing instructional design for secure coding of ZK smart contracts on Mina.",
                      stack: "Typescript + Snarkyjs",
                    },
                  ],
                }
              : {
                  employer: "Mina 基金会",
                  position: "Grantee",
                  duration: "2023.3 ~ 现在",
                  location: "无固定地点",
                  highlights: [
                    //
                    {
                      content:
                        "作为 Mina zkIgnite Cohort 入选项目 MinaCTF 的开发者，负责设计一套寓教于乐的体验式编程环境，重点关注零知识证明智能合约的安全编码。",
                      stack: "Typescript + Snarkyjs",
                    },
                  ],
                },
            this.isEnglish
              ? {
                  employer: "zkShanghai Workshop",
                  position: "Instructor",
                  duration: "2023.4 ~ Present",
                  location: "Shanghai, China",
                  highlights: [
                    //
                    {
                      content:
                        "As an instructor, I am responsible for designing the curriculum for the workshop, which covers topics ranging from the mathematical foundations of modern ZKP to the engineering applications.",
                      stack: "Circom + Cairo",
                    },
                  ],
                }
              : {
                  employer: "zkShanghai 工作坊",
                  position: "主讲",
                  duration: "2023.4 ~ 现在",
                  location: "上海",
                  highlights: [
                    //
                    {
                      content:
                        "作为主讲，负责设计工作坊的课程及进度安排，课程内容涵盖从现代零知识证明的数学基础到工程应用的多个主题。该工作坊已有线上线下 100 多名学员参与。",
                      stack: "Circom + Cairo",
                    },
                  ],
                },
            this.isEnglish
              ? {
                  employer: "Huawei",
                  position: "Researcher",
                  duration: "2022.6 ~ Present",
                  location: "Shanghai, China",
                  highlights: [
                    //
                    {
                      content:
                        "As a researcher, I am responsible for researching the novel index structures based on ZKP and integrate them into Huawei openGauss to enhance privacy-preserving capability.",
                      stack: "Circom + Cairo + C#",
                    },
                  ],
                }
              : {
                  employer: "华为",
                  position: "研究员",
                  duration: "2022.6 ~ 现在",
                  location: "上海",
                  highlights: [
                    //
                    {
                      content:
                        "作为研究员，负责研究基于零知识证明的新型索引结构，并将其集成到华为 openGauss 数据库中，以增强其隐私保护能力。",
                      stack: "Circom + Cairo + C#",
                    },
                  ],
                },
          ],
        },
      ];
    },
    awards() {
      return [
        // { year: 2023, title: "Mina Protocol zkIgnite Cohort 1 Grantee", level: "top 26/160+" },
        // { year: 2022, title: "Chia Developer Challenge", level: "1st/74" },
        { year: 2019, title: "Excellent Science Popularization Ambassador", level: "Honor" },
        // { year: 2019, title: "Japanese-Language Proficiency", level: "N2 Certificate" },
        // 6th Challenge Cup of Entrepreneurship Planning Competition
        { year: 2008, title: "6th Challenge Cup Competition", level: "National Bronze Medal" },
        { year: 2007, title: "System Analyst (Advanced)", level: "National Certificate" },
        { year: 2002, title: "National Olympiad In Informatics", level: "National Second Prize" },
      ];
    },
    simpleAwards() {
      return this.isEnglish
        ? [
            // { year: 2022, title: "Chia Developer Challenge", level: "1st/74" },
            // { year: 2019, title: "Excellent Science Popularization Ambassador", level: "Honor" },
            // { year: 2019, title: "Japanese-Language Proficiency", level: "N2 Certificate" },
            // 6th Challenge Cup of Entrepreneurship Planning Competition
            { year: "2007~2008", title: "Challenge Cup Competition", level: "National Bronze Medal, Prov. 1st Prize" },
            // { year: "2008", title: "Challenge Cup Competition", level: "National Bronze Medal" },
            // { year: "2007", title: "System Analyst (Advanced)", level: "National Certificate" },
            { year: "2002~2004", title: "National Olympiad In Informatics", level: "National Second Prize" },
          ]
        : [
            { year: "2007~2008", title: "全国大学生挑战杯竞赛", level: "全国铜牌，省级一等奖" },
            { year: "2002~2004", title: "全国信息学奥赛", level: "全国二等奖" },
          ];
    },
    languages() {
      return this.isEnglish
        ? [
            { language: "Chinese", level: "Native" },
            { language: "English", level: "Proficiency" },
            { language: "Japanese", level: "Limited Proficiency" },
          ]
        : [
            { language: "中文", level: "母语" },
            { language: "英语", level: "熟练" },
            { language: "日语", level: "基本熟练" },
          ];
    },
    profileItems() {
      return [
        { url: "https://github.com/wizicer", leading: "Github", text: "wizicer", cls: "mr-5" },
        { url: "mailto:liangshuangde@gmail.com", leading: "Email", text: "liangshuangde@gmail.com", cls: "mr-8" },
        {
          url: "tel:+8613501728947",
          leading: "Phone",
          text: this.isEnglish ? "+86-13501728947" : "135-0172-8947",
          hint: this.isEnglish ? undefined : "微信同",
          cls: "mr-6",
        },
        { url: "https://icerdesign.com", leading: "Portfolio", text: "icerdesign.com", cls: "mr-2" },
      ];
    },
    metrics() {
      return [
        {
          metric: this.isEnglish ? "Patents" : "专利",
          items: [
            {
              url: "https://patents.google.com/patent/CN102043861B/zh",
              name: "CN 102043861 B: 基于移动终端的网页数据结构化显示方法",
            },
            {
              url: "https://patents.google.com/patent/CN102497624B/zh",
              name: "CN 102497624 B: 短/彩信业务数据的业务用户分组下发处理系统及方法",
            },
            { url: "https://patents.google.com/patent/CN103186629B/zh", name: "CN 103186629 B: 一种短/彩信文件生成系统及方法" },
            {
              url: "https://patents.google.com/patent/US20170235691A1/en",
              name: "US 2017/0235691 A1: I/O BINDING WITH AUTOMATIC IEC ADDRESS GENERATION IN RTU CONFIGURATION",
            },
            {
              url: "https://patents.google.com/patent/US20180373224A1/en",
              name: "US 2018/0373224 A1: EFFICIENT METHOD FOR AUTOMATICALLY GENERATING POINTS IN A SCADA SYSTEM",
            },
          ],
        },
        {
          metric: this.isEnglish ? "Papers" : "论文",
          items: [
            {
              url: "http://www.cqvip.com/qk/92817x/20086/27481833.html",
              name: "蓝章礼, 曹建秋, 梁爽, 复杂背景下视频序列中的人脸定位. 计算机科学, Vol.35 No.6, pp.255-257, 279, 2008",
            },
            {
              url: "",
              name: "Zhangli Lan, Shuang Liang, and Jianqiu Cao, XiaoDong Liu, Face Location in Video Sequence with Complex Background, The International Conference on Sustainable  Development in Building and Environment, Chongqing, China 25-27th,September,2007",
            },
            {
              url: "http://www.cqvip.com/qk/90370x/200810/28699906.html",
              name: "蓝章礼, 梁爽, 田文玉, 基于数字显微图像处理的水泥粒度分析, 材料导报, Vol.22 No.10, pp.88-90, 2008",
            },
            {
              url: "http://www.cqvip.com/qk/93403x/201706/672579503.html",
              name: "胡祖奎, 余建桥, 梁爽, 一种基于分层模板的人脸检测方法, 西南师范大学学报(自然科学版), Vol.42 No.6, pp. 112-120 2017",
            },
          ],
        },
      ];
    },
  },
}).mount("#app");
