# 華爾街幽靈的禮物・教學導讀網站

《華爾街幽靈的禮物:頂尖交易員敗中求勝的三個祕密》(亞瑟・李・辛普森著,一起來出版)
的教學導讀網站。內容為各章重點整理、白話解說與思考題,**並非原書全文**;
原文引用僅限每章至多兩句短金句。

## 技術棧

- Vite 7 + React 19(HashRouter,可靜態部署)
- Tailwind CSS v4(class 策略深色模式)
- Lucide React 圖標
- react-markdown + remark-gfm + rehype-highlight(Markdown 內容渲染)

## 開發

```bash
npm install
npm run dev      # 開發伺服器
npm run build    # 產出 dist/
npm run preview  # 預覽 build 結果
```

## 內容編輯

章節內容在 `src/content/00.md`(序章)~ `17.md`(第17章),
frontmatter 需含 `title / label / part / order` 四欄。
支援四種 callout:`> [!TIP]`、`> [!WARNING]`、`> [!NOTE]`、`> [!ADVANCED]`。
新增章節只要新增 `NN.md` 檔,側欄、路由、上下章導覽會自動生成。

## 佈局

頂欄(標題/搜尋/GitHub/深淺色切換)、左側欄(分組收合目錄+當前章高亮)、
主內容區(麵包屑+文章+上一章/下一章)、右側 TOC(H2/H3 scrollspy)。
GitHub 連結位址在 `src/components/Navbar.jsx` 的 `GITHUB_URL`。
