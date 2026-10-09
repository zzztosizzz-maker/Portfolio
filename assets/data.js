// ★ ソフトや記事を増やすときは、ここに1行足します。
// フォルダ(ソフト)またはファイル(記事)を作ったうえで、下の一覧に書き足してください。
// date や tool を空にすると「準備中(空)」として表示されます。
window.SITE = {
  name: "AIでつくった道具箱",
  tagline: "プログラムの知識がない素人が、AIに頼んで作ったものの置き場",
  // ソフト: software/<id>/index.html が説明ページ
  software: [
    { id: "kotoba-talk", name: "ことばトーク", desc: "声が出しにくい人のための、文字入力と読み上げの会話補助ツール。", date: "2026-10-03", tool: "AI(Claude)" },
    { id: "qr-code", name: "QRコード生成ツール", desc: "完全ブラウザ完結で安全。テキストやURLから即座にQRコードを生成しPNG保存できます。", date: "2026-09-08", tool: "AI(Claude / Anthropic)" },
    { id: "soft-2", name: "ソフト名（空）", desc: "準備中です。", date: "", tool: "" }
  ],
  // 記事: articles/<id>.html
  articles: [
    { id: "ai-memo", name: "AI活用のメモ", desc: "AIコーディングや対話の精度を保つコツ、長文セッション対策と引き継ぎのノウハウ。", date: "2026-10-09", tool: "AIナレッジ" },
    { id: "windows-setup", name: "Windows快適な設定", desc: "Pythonスクリプトをダブルクリック起動するBATファイルと、オリジナルアイコン・ホットキー設定手順。", date: "2026-10-09", tool: "Windowsナレッジ" },
    { id: "article-1", name: "記事1（空）", desc: "準備中です。", date: "", tool: "" }
  ]
};
