# AIでつくった道具箱

## フォルダの構成
```
index.html              ホーム
assets/                 共通ファイル(見た目 style.css / メニューと一覧のデータ data.js / site.js)
software/
  index.html            ソフト一覧
  kotoba-talk/          ソフト1つにつきフォルダ1つ
    index.html            説明記事(作成日・作成ツール入り)
    app.html              アプリ本体
  soft-2/               ソフト名（空）
articles/
  index.html            記事一覧
  article-1.html        記事1（空）
```

## GitHub Pagesで公開する
1. GitHubで新しいリポジトリを「Public」で作ります。
2. このフォルダの中身(index.html が一番上の階層に来るように)をすべてアップロードします。
3. 「Settings」→「Pages」で、「Deploy from a branch」、ブランチ「main」、フォルダ「/(root)」にして保存します。
4. 数分後、`https://ユーザー名.github.io/リポジトリ名/` で見られます。

## ソフトを増やす
1. `software/soft-2/` のように、フォルダを1つコピーして、名前を変えます(例: `software/my-app/`)。
2. フォルダの中の `index.html` に説明を書き、ソフト本体(例: `app.html`)を入れます。
3. `assets/data.js` の `software` に1行足します(id はフォルダ名と同じにします)。date と tool を入れると、「準備中」の表示が消えます。
4. メニューとホーム、ソフト一覧は自動で更新されます。

## 記事を増やす
1. `articles/article-1.html` をコピーして、名前を変えます(例: `articles/my-note.html`)。
2. `<body data-page="articles/article-1">` の部分を、新しい名前(`articles/my-note`)に直します。
3. `assets/data.js` の `articles` に1行足します。

## 注意
- ソフトのフォルダを動かしたり、名前を変えたりすると、メニューのリンクが切れます。data.js の id もあわせて直してください。
- AIに頼むときは、「このフォルダ構成と data.js の形を保ったまま、ソフトを追加して」と伝えると、うまくいきます。
