export const LANG_KEY = "lang";

export const content = {
  nav: {
    member: { zh: "實驗室成員", en: "Members" },
    publish: { zh: "論文發表", en: "Publications" },
    about: { zh: "聯絡我們", en: "Contact" },
    homeAria: {
      zh: "先進數位智能製造研究室首頁",
      en: "ADSM Lab home",
    },
    menuAria: { zh: "主要選單", en: "Main menu" },
  },
  wordmark: {
    primary: {
      zh: "先進數位智能製造研究室",
      en: "ADSM Lab",
    },
    secondary: {
      zh: "ADSM Lab",
      en: "Advanced Digital Smart Manufacturing Laboratory",
    },
  },
  theme: {
    toLight: { zh: "切換為淺色模式", en: "Switch to light theme" },
    toDark: { zh: "切換為深色模式", en: "Switch to dark theme" },
  },
  lang: {
    toEn: { zh: "切換為英文", en: "Switch to English" },
    toZh: { zh: "切換為中文", en: "Switch to Chinese" },
    mark: { zh: "中", en: "EN" },
  },
  unavailable: {
    notice: {
      zh: "本頁暫無英文版本",
      en: "This page is not available in English yet.",
    },
  },
  footer: {
    related: { zh: "相關連結", en: "Related Links" },
  },
  home: {
    kicker: { zh: "ADSM Lab", en: "ADSM Lab" },
    title: {
      zh: "先進數位智能製造研究室",
      en: "Advanced Digital Smart Manufacturing Laboratory",
    },
    subtitle: {
      zh: "Advanced Digital Smart Manufacturing Laboratory",
      en: "ADSM Lab",
    },
    introTitle: { zh: "研究室介紹", en: "Lab Introduction" },
    introBody: {
      zh: "先進數位智能製造研究室致力於工業製造的數位化與智能化。我們運用大數據分析、物聯網、人工智慧等前瞻資訊技術，聚焦智慧製造與工業4.0應用，推動即時監控與智慧系統平台開發，並延伸至工具機相關的智慧化研究。",
      en: "The Advanced Digital Smart Manufacturing Laboratory (ADSM) is dedicated to the digitization and intelligentization of industrial manufacturing. By leveraging Big Data Analytics, the Internet of Things (IoT), and Artificial Intelligence, the lab focuses on smart manufacturing and Industry 4.0 applications, advancing real-time monitoring and smart system platform development, extending into machine-tool-related intelligent research.",
    },
    piTitle: { zh: "主持人簡介", en: "Principal Investigator" },
    degreeLabel: { zh: "最高學歷", en: "Highest degree" },
    degreeValue: {
      zh: "中原大學機械工程博士",
      en: "Ph.D. in Mechanical Engineering, Chung Yuan Christian University",
    },
    labLabel: { zh: "研究室", en: "Lab" },
    labValue: {
      zh: "先進數位智能製造研究室",
      en: "Advanced Digital Smart Manufacturing Laboratory",
    },
    expertiseLabel: { zh: "研究專長", en: "Research expertise" },
    expertise: [
      { zh: "智慧製造", en: "Smart Manufacturing" },
      { zh: "人工智慧", en: "AI" },
      { zh: "物聯網", en: "IoT" },
      { zh: "大數據分析", en: "Big Data Analytics" },
      { zh: "工業4.0應用", en: "Industry 4.0 Applications" },
      { zh: "即時監控", en: "Real-time Monitoring" },
      { zh: "智慧系統平台開發", en: "Smart System Platform Development" },
      { zh: "工具機", en: "Machine Tools" },
    ],
  },
  member: {
    title: { zh: "實驗室成員", en: "Members" },
  },
  project: {
    title: { zh: "研究方向", en: "研究方向" },
  },
  photo: {
    title: { zh: "實驗室照片", en: "Photos" },
  },
  publish: {
    title: { zh: "論文發表", en: "Publications" },
  },
  about: {
    title: { zh: "聯絡我們", en: "Contact" },
    mapTitle: { zh: "Google map", en: "Google map" },
  },
};

export function t(entry, lang) {
  if (!entry) {
    return "";
  }
  if (typeof entry === "string") {
    return entry;
  }
  return entry[lang] || entry.zh || "";
}
