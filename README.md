# 先進數位智能製造研究室 Advanced Digital Smart Manufacturing Laboratory (ADSM)

大學機械工程研究室網站，展示實驗室簡介、成員、發表著作等資訊。

Live site -> https://scorpio-su.github.io/lab-portfolio/

## 技術棧 Tech stack

- React 18 + react-router-dom v6（Create React App / react-scripts）
- Bootstrap 5 + bootstrap-icons
- gh-pages 部署至 GitHub Pages

## 開發指令 Commands

```bash
npm install            # 安裝套件
npm start              # 啟動開發伺服器 http://localhost:3000
npm test -- --watchAll=false   # 執行測試（CI 模式）
npm run build           # 產出正式版 build/
npm run desploy          # 部署 build/ 到 gh-pages（注意：指令名稱為 desploy，非 deploy）
```

## 功能特色 Features

- 深色 / 淺色主題切換（依系統偏好自動判斷，並記住使用者選擇）
- 中文 / 英文語言切換
