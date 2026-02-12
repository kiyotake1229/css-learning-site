import type { Tutorial } from '../types';

export const tutorials: Tutorial[] = [
  {
    id: 'flexbox-basics',
    title: 'Flexboxの基礎',
    description: 'CSS Flexboxレイアウトの基本を学びます',
    category: 'flexbox',
    difficulty: 'beginner',
    steps: [
      {
        id: 'step-1',
        title: 'Flexboxの紹介',
        content: `Flexboxは、アイテムを行または列に配置するための1次元レイアウト手法です。floatやpositioningを使用せずに、柔軟でレスポンシブなレイアウトを簡単にデザインできます。

Flexboxを使用するには、**Flexコンテナ**（親要素）と**Flexアイテム**（子要素）が必要です。`,
        codeExample: {
          html: '<div class="container">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>',
          css: `.container {
  display: flex;
}

.item {
  background: #6366f1;
  color: white;
  padding: 1rem;
  margin: 0.25rem;
}`,
        },
      },
      {
        id: 'step-2',
        title: 'Flex Direction（方向）',
        content: `\`flex-direction\` プロパティは主軸の方向を定義します：

- \`row\`（デフォルト）：アイテムは水平に左から右へ配置
- \`row-reverse\`：アイテムは水平に右から左へ配置
- \`column\`：アイテムは垂直に上から下へ配置
- \`column-reverse\`：アイテムは垂直に下から上へ配置`,
        codeExample: {
          html: '<div class="container">\n  <div class="item">A</div>\n  <div class="item">B</div>\n  <div class="item">C</div>\n</div>',
          css: `.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item {
  background: #8b5cf6;
  color: white;
  padding: 1rem;
  text-align: center;
}`,
        },
      },
      {
        id: 'step-3',
        title: 'Justify Content（主軸の配置）',
        content: `\`justify-content\` プロパティは主軸に沿ってアイテムを配置します：

- \`flex-start\`：アイテムを先頭に配置
- \`flex-end\`：アイテムを末尾に配置
- \`center\`：アイテムを中央に配置
- \`space-between\`：アイテム間に均等なスペース
- \`space-around\`：アイテムの周りに均等なスペース
- \`space-evenly\`：アイテム間と周りに均等なスペース`,
        codeExample: {
          html: '<div class="container">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>',
          css: `.container {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f1f5f9;
}

.item {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
}`,
        },
      },
      {
        id: 'step-4',
        title: 'Align Items（交差軸の配置）',
        content: `\`align-items\` プロパティは交差軸（主軸に垂直な軸）に沿ってアイテムを配置します：

- \`stretch\`（デフォルト）：アイテムはコンテナを埋めるように伸びる
- \`flex-start\`：交差軸の先頭にアイテムを配置
- \`flex-end\`：交差軸の末尾にアイテムを配置
- \`center\`：交差軸の中央にアイテムを配置
- \`baseline\`：テキストのベースラインで揃える`,
        codeExample: {
          html: '<div class="container">\n  <div class="item tall">高い</div>\n  <div class="item">普通</div>\n  <div class="item short">低い</div>\n</div>',
          css: `.container {
  display: flex;
  align-items: center;
  height: 150px;
  padding: 1rem;
  background: #f1f5f9;
  gap: 1rem;
}

.item {
  background: #ec4899;
  color: white;
  padding: 1rem;
}

.tall { padding: 2rem 1rem; }
.short { padding: 0.5rem 1rem; }`,
        },
      },
      {
        id: 'step-5',
        title: '完璧な中央配置',
        content: `\`justify-content: center\` と \`align-items: center\` を組み合わせると、水平・垂直の完璧な中央配置ができます - Flexboxの最も一般的な使用例の1つです！`,
        codeExample: {
          html: '<div class="container">\n  <div class="centered">完璧に中央配置！</div>\n</div>',
          css: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: linear-gradient(135deg, #6366f1, #ec4899);
}

.centered {
  background: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  color: #1e293b;
}`,
        },
        task: {
          instruction: 'justify-content または align-items を削除して、何が起こるか確認してみましょう！',
          initialCss: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: linear-gradient(135deg, #6366f1, #ec4899);
}

.centered {
  background: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  color: #1e293b;
}`,
          validationRules: [],
        },
      },
    ],
  },
  {
    id: 'grid-basics',
    title: 'CSS Gridの基礎',
    description: 'CSS Gridレイアウトの基本を学びます',
    category: 'grid',
    difficulty: 'beginner',
    steps: [
      {
        id: 'step-1',
        title: 'CSS Gridの紹介',
        content: `CSS Gridは、行と列を持つ複雑なレイアウトを作成できる2次元レイアウトシステムです。

Flexbox（1次元）とは異なり、Gridは行と列の両方を同時に扱うことができ、ページレイアウトに最適です。`,
        codeExample: {
          html: '<div class="grid">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n</div>',
          css: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
}

.item {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
}`,
        },
      },
      {
        id: 'step-2',
        title: '列の定義',
        content: `\`grid-template-columns\` を使用して列の数とサイズを定義します：

- 固定サイズ：\`100px 200px 100px\`
- 比率単位：\`1fr 2fr 1fr\`（比率）
- repeat()：\`repeat(3, 1fr)\` = \`1fr 1fr 1fr\`
- auto：コンテンツに合わせてサイズ調整
- minmax()：\`minmax(100px, 1fr)\``,
        codeExample: {
          html: '<div class="grid">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>',
          css: `.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  padding: 1rem;
}

.item {
  background: #8b5cf6;
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
}`,
        },
      },
      {
        id: 'step-3',
        title: 'Grid Gap（間隔）',
        content: `\`gap\` プロパティはグリッドアイテム間にスペースを追加します：

- \`gap: 1rem\` - 行と列に同じ間隔
- \`gap: 1rem 2rem\` - 行の間隔、次に列の間隔
- \`row-gap\` と \`column-gap\` で個別に制御`,
        codeExample: {
          html: '<div class="grid">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n</div>',
          css: `.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 2rem;
  padding: 1rem;
}

.item {
  background: #ec4899;
  color: white;
  padding: 1.5rem;
  text-align: center;
  border-radius: 8px;
}`,
        },
      },
      {
        id: 'step-4',
        title: '列と行にまたがる',
        content: `グリッドアイテムは複数の列や行にまたがることができます：

- \`grid-column: span 2\` - 2列にまたがる
- \`grid-row: span 2\` - 2行にまたがる
- \`grid-column: 1 / 3\` - ライン1からライン3まで`,
        codeExample: {
          html: '<div class="grid">\n  <div class="item header">ヘッダー（全幅）</div>\n  <div class="item sidebar">サイドバー</div>\n  <div class="item main">メインコンテンツ</div>\n  <div class="item footer">フッター（全幅）</div>\n</div>',
          css: `.grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1rem;
  padding: 1rem;
}

.item {
  background: #6366f1;
  color: white;
  padding: 1rem;
  border-radius: 8px;
}

.header, .footer {
  grid-column: span 2;
  background: #8b5cf6;
}

.sidebar {
  background: #ec4899;
}`,
        },
      },
    ],
  },
  {
    id: 'flexbox-advanced',
    title: 'Flexbox実践テクニック',
    description: 'Flexboxを使った実践的なレイアウトパターンを学びます',
    category: 'flexbox',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'step-1',
        title: 'Flex Grow・Shrink・Basis',
        content: `Flexアイテムのサイズ制御には3つの重要なプロパティがあります：

- \`flex-grow\`：余ったスペースをどれだけ取るか（デフォルト: 0）
- \`flex-shrink\`：スペースが足りないときどれだけ縮むか（デフォルト: 1）
- \`flex-basis\`：アイテムの基準サイズ（デフォルト: auto）

\`flex: 1\` は \`flex-grow: 1; flex-shrink: 1; flex-basis: 0%\` の短縮形です。`,
        codeExample: {
          html: '<div class="container">\n  <div class="item fixed">固定200px</div>\n  <div class="item grow">残りを埋める</div>\n</div>',
          css: `.container {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
}

.item {
  padding: 1rem;
  color: white;
  border-radius: 8px;
}

.fixed {
  flex-basis: 200px;
  flex-shrink: 0;
  background: #6366f1;
}

.grow {
  flex-grow: 1;
  background: #ec4899;
}`,
        },
      },
      {
        id: 'step-2',
        title: 'ナビゲーションバー',
        content: `Flexboxはナビゲーションバーに最適です。ロゴを左に、メニューを右に配置する典型的なパターンを作ってみましょう。

\`justify-content: space-between\` で両端に配置し、\`align-items: center\` で垂直方向を揃えます。`,
        codeExample: {
          html: '<nav class="navbar">\n  <div class="logo">ロゴ</div>\n  <ul class="menu">\n    <li>ホーム</li>\n    <li>サービス</li>\n    <li>お問合せ</li>\n  </ul>\n</nav>',
          css: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1e293b;
}

.logo {
  color: #6366f1;
  font-weight: bold;
  font-size: 1.5rem;
}

.menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu li {
  color: white;
}`,
        },
      },
      {
        id: 'step-3',
        title: 'カードレイアウト',
        content: `カードのフッターを常に下部に配置するテクニックです。

カード自体を \`flex-direction: column\` にし、コンテンツ部分に \`flex-grow: 1\` を設定することで、コンテンツの量に関わらずフッターが下に配置されます。`,
        codeExample: {
          html: '<div class="card">\n  <div class="card-header">タイトル</div>\n  <div class="card-body">短いコンテンツ</div>\n  <div class="card-footer">フッター</div>\n</div>',
          css: `.card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.card-header {
  background: #6366f1;
  color: white;
  padding: 1rem;
  font-weight: bold;
}

.card-body {
  padding: 1rem;
  flex-grow: 1;
}

.card-footer {
  background: #f1f5f9;
  padding: 1rem;
  font-size: 0.875rem;
  color: #64748b;
}`,
        },
      },
      {
        id: 'step-4',
        title: 'スティッキーフッター',
        content: `ページ全体でフッターを常に画面下部に配置するパターンです。

body や 外側のコンテナを \`min-height: 100vh\` にし、メインコンテンツに \`flex-grow: 1\` を設定します。`,
        codeExample: {
          html: '<div class="page">\n  <header>ヘッダー</header>\n  <main>メインコンテンツ（少ない場合でも...）</main>\n  <footer>フッターは常に下に</footer>\n</div>',
          css: `.page {
  display: flex;
  flex-direction: column;
  min-height: 300px;
}

header {
  background: #6366f1;
  color: white;
  padding: 1rem;
}

main {
  flex-grow: 1;
  padding: 1rem;
  background: #f1f5f9;
}

footer {
  background: #1e293b;
  color: white;
  padding: 1rem;
  text-align: center;
}`,
        },
      },
    ],
  },
  {
    id: 'grid-advanced',
    title: 'CSS Grid実践テクニック',
    description: 'CSS Gridを使った高度なレイアウトテクニックを学びます',
    category: 'grid',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'step-1',
        title: 'Grid Template Areas',
        content: `\`grid-template-areas\` を使うと、視覚的にレイアウトを定義できます。

各エリアに名前を付け、grid-area で要素を配置します。ドット(.)は空のセルを表します。`,
        codeExample: {
          html: '<div class="layout">\n  <header>ヘッダー</header>\n  <nav>ナビ</nav>\n  <main>メイン</main>\n  <aside>サイド</aside>\n  <footer>フッター</footer>\n</div>',
          css: `.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 100px 1fr 150px;
  gap: 1rem;
  padding: 1rem;
}

header { grid-area: header; background: #6366f1; }
nav { grid-area: nav; background: #8b5cf6; }
main { grid-area: main; background: #ec4899; }
aside { grid-area: aside; background: #f59e0b; }
footer { grid-area: footer; background: #1e293b; }

header, nav, main, aside, footer {
  color: white;
  padding: 1rem;
  border-radius: 4px;
}`,
        },
      },
      {
        id: 'step-2',
        title: 'Auto-Fill と Auto-Fit',
        content: `レスポンシブなグリッドを作るには \`auto-fill\` または \`auto-fit\` を使います：

- \`auto-fill\`：できるだけ多くのトラックを作成し、空のトラックも維持
- \`auto-fit\`：空のトラックを折りたたんで、既存のアイテムを伸ばす

\`minmax()\` と組み合わせると、画面幅に応じて列数が自動調整されます。`,
        codeExample: {
          html: '<div class="grid">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n</div>',
          css: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
}

.item {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`,
        },
      },
      {
        id: 'step-3',
        title: 'ダッシュボードレイアウト',
        content: `異なるサイズのカードを配置するダッシュボード風レイアウトです。

\`grid-column: span 2\` や \`grid-row: span 2\` を使って、特定のカードを大きく表示できます。`,
        codeExample: {
          html: '<div class="dashboard">\n  <div class="card large">メイン</div>\n  <div class="card">カード1</div>\n  <div class="card">カード2</div>\n  <div class="card wide">横長</div>\n</div>',
          css: `.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
}

.card {
  background: #6366f1;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}

.large {
  grid-column: span 2;
  grid-row: span 2;
  background: #ec4899;
}

.wide {
  grid-column: span 2;
  background: #10b981;
}`,
        },
      },
      {
        id: 'step-4',
        title: 'アイテムの配置',
        content: `\`place-items\` と \`place-content\` でグリッドアイテムの配置を制御できます：

- \`place-items\`：個々のセル内でのアイテムの配置
- \`place-content\`：グリッド全体の配置（コンテナに余白がある場合）

どちらも \`align-*\` と \`justify-*\` の短縮形です。`,
        codeExample: {
          html: '<div class="grid">\n  <div class="item">中央配置</div>\n</div>',
          css: `.grid {
  display: grid;
  height: 200px;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  place-items: center;
}

.item {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
}`,
        },
      },
    ],
  },
  {
    id: 'responsive-basics',
    title: 'レスポンシブデザインの基礎',
    description: 'メディアクエリとレスポンシブテクニックを学びます',
    category: 'responsive',
    difficulty: 'beginner',
    steps: [
      {
        id: 'step-1',
        title: 'メディアクエリの基本',
        content: `メディアクエリを使うと、画面サイズに応じて異なるスタイルを適用できます。

\`@media (条件) { ... }\` の形式で書きます。

よく使う条件：
- \`max-width\`：指定した幅以下の場合
- \`min-width\`：指定した幅以上の場合`,
        codeExample: {
          html: '<div class="container">\n  <div class="box">レスポンシブ</div>\n  <div class="box">ボックス</div>\n</div>',
          css: `.container {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
}

.box {
  flex: 1;
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}`,
        },
      },
      {
        id: 'step-2',
        title: 'モバイルファースト',
        content: `モバイルファーストは、まずモバイル向けのスタイルを書き、大きな画面向けにスタイルを追加していくアプローチです。

\`min-width\` を使って、画面が大きくなるにつれてスタイルを追加します。

このアプローチのメリット：
- モバイルでの読み込みが速い
- 段階的に機能を追加できる`,
        codeExample: {
          html: '<div class="grid">\n  <div class="card">1</div>\n  <div class="card">2</div>\n  <div class="card">3</div>\n  <div class="card">4</div>\n</div>',
          css: `/* モバイル（デフォルト）: 1列 */
.grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;
}

.card {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
}

/* タブレット: 2列 */
@media (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* デスクトップ: 4列 */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}`,
        },
      },
      {
        id: 'step-3',
        title: 'ビューポート単位',
        content: `ビューポート単位を使うと、画面サイズに相対的な値を指定できます：

- \`vw\`：ビューポート幅の1%
- \`vh\`：ビューポート高さの1%
- \`vmin\`：vw と vh の小さい方
- \`vmax\`：vw と vh の大きい方`,
        codeExample: {
          html: '<div class="hero">\n  <h1>大きな見出し</h1>\n  <p>ビューポート単位を使用</p>\n</div>',
          css: `.hero {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  color: white;
  text-align: center;
}

h1 {
  font-size: 8vw;
  margin: 0;
}

p {
  font-size: 2vw;
  opacity: 0.9;
}`,
        },
      },
      {
        id: 'step-4',
        title: 'clamp() 関数',
        content: `\`clamp(最小値, 推奨値, 最大値)\` を使うと、メディアクエリなしでレスポンシブな値を設定できます。

例：\`font-size: clamp(1rem, 4vw, 3rem)\`
- 最小: 1rem
- 推奨: 4vw（画面幅に応じて変化）
- 最大: 3rem`,
        codeExample: {
          html: '<div class="container">\n  <h1 class="title">レスポンシブタイトル</h1>\n  <p class="text">画面サイズを変えてみてください</p>\n</div>',
          css: `.container {
  padding: 2rem;
  background: #f1f5f9;
}

.title {
  font-size: clamp(1.5rem, 5vw, 4rem);
  color: #1e293b;
  margin: 0 0 1rem;
}

.text {
  font-size: clamp(0.875rem, 2vw, 1.25rem);
  color: #64748b;
  margin: 0;
}`,
        },
      },
      {
        id: 'step-5',
        title: 'アスペクト比',
        content: `\`aspect-ratio\` プロパティを使うと、要素のアスペクト比を維持できます。

動画（16:9）や画像（4:3、1:1）のプレースホルダーに便利です。`,
        codeExample: {
          html: '<div class="video-container">\n  <div class="video">16:9 動画</div>\n</div>\n<div class="square">1:1 正方形</div>',
          css: `.video-container {
  max-width: 400px;
  margin-bottom: 1rem;
}

.video {
  aspect-ratio: 16 / 9;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}

.square {
  width: 100px;
  aspect-ratio: 1;
  background: #ec4899;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`,
        },
      },
    ],
  },
  {
    id: 'animation-basics',
    title: 'CSSアニメーションの基礎',
    description: 'トランジションとアニメーションを学びます',
    category: 'animation',
    difficulty: 'beginner',
    steps: [
      {
        id: 'step-1',
        title: 'Transition（トランジション）',
        content: `\`transition\` を使うと、プロパティの変化をスムーズにアニメーションできます。

基本構文：\`transition: プロパティ 時間 イージング\`

- プロパティ：アニメーションするプロパティ（all で全て）
- 時間：アニメーションの長さ（例: 0.3s）
- イージング：加速曲線（ease, linear, ease-in-out など）`,
        codeExample: {
          html: '<button class="btn">ホバーしてね</button>',
          css: `.btn {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #4f46e5;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}`,
        },
      },
      {
        id: 'step-2',
        title: 'Transform（変形）',
        content: `\`transform\` を使うと、要素を変形できます：

- \`translate(x, y)\`：移動
- \`scale(n)\`：拡大・縮小
- \`rotate(deg)\`：回転
- \`skew(deg)\`：傾斜

複数を組み合わせることもできます。`,
        codeExample: {
          html: '<div class="cards">\n  <div class="card">移動</div>\n  <div class="card rotate">回転</div>\n  <div class="card scale">拡大</div>\n</div>',
          css: `.cards {
  display: flex;
  gap: 1rem;
  padding: 2rem;
}

.card {
  background: #6366f1;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

.card.rotate:hover {
  transform: rotate(10deg);
}

.card.scale:hover {
  transform: scale(1.1);
}`,
        },
      },
      {
        id: 'step-3',
        title: '@keyframes アニメーション',
        content: `\`@keyframes\` を使うと、複数のステップを持つアニメーションを定義できます。

\`from\` と \`to\`、または パーセンテージ（0%, 50%, 100%）で各ステップを指定します。

\`animation\` プロパティでアニメーションを適用：
\`animation: 名前 時間 イージング 繰り返し\``,
        codeExample: {
          html: '<div class="box">フェードイン</div>',
          css: `.box {
  background: #6366f1;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  font-weight: bold;
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,
        },
      },
      {
        id: 'step-4',
        title: '無限アニメーション',
        content: `\`animation-iteration-count: infinite\` または短縮形で \`infinite\` を指定すると、アニメーションが無限に繰り返されます。

ローディングスピナーやパルスエフェクトに便利です。`,
        codeExample: {
          html: '<div class="spinner"></div>',
          css: `.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f1f5f9;
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`,
        },
      },
      {
        id: 'step-5',
        title: 'アニメーションの制御',
        content: `アニメーションには様々な制御プロパティがあります：

- \`animation-delay\`：開始までの遅延
- \`animation-direction\`：再生方向（normal, reverse, alternate）
- \`animation-fill-mode\`：終了時の状態（forwards, backwards, both）
- \`animation-play-state\`：再生・一時停止（running, paused）`,
        codeExample: {
          html: '<div class="dots">\n  <div class="dot"></div>\n  <div class="dot"></div>\n  <div class="dot"></div>\n</div>',
          css: `.dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  background: #6366f1;
  border-radius: 50%;
  animation: bounce 0.6s ease-in-out infinite alternate;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  to {
    transform: translateY(-15px);
    opacity: 0.5;
  }
}`,
        },
      },
    ],
  },
  {
    id: 'animation-advanced',
    title: 'CSSアニメーション実践',
    description: '3D変換と高度なアニメーションテクニックを学びます',
    category: 'animation',
    difficulty: 'intermediate',
    steps: [
      {
        id: 'step-1',
        title: '3D変換の基本',
        content: `3D変換を使うには、親要素に \`perspective\` を設定します。値が小さいほど遠近感が強くなります。

3D変換プロパティ：
- \`rotateX(deg)\`：X軸周りの回転
- \`rotateY(deg)\`：Y軸周りの回転
- \`translateZ(px)\`：Z軸方向の移動
- \`transform-style: preserve-3d\`：子要素の3Dを保持`,
        codeExample: {
          html: '<div class="scene">\n  <div class="card-3d">3D カード</div>\n</div>',
          css: `.scene {
  perspective: 600px;
  padding: 2rem;
}

.card-3d {
  width: 200px;
  height: 150px;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 12px;
  transition: transform 0.5s ease;
}

.card-3d:hover {
  transform: rotateY(25deg) rotateX(10deg);
}`,
        },
      },
      {
        id: 'step-2',
        title: 'フリップカード',
        content: `表と裏を持つフリップカードは、3D変換の典型的な例です。

重要なポイント：
- \`backface-visibility: hidden\` で裏面を隠す
- 裏面は最初から180度回転させておく
- ホバーで180度回転させると裏面が表示される`,
        codeExample: {
          html: '<div class="flip-card">\n  <div class="flip-card-inner">\n    <div class="flip-card-front">表面</div>\n    <div class="flip-card-back">裏面</div>\n  </div>\n</div>',
          css: `.flip-card {
  width: 200px;
  height: 150px;
  perspective: 1000px;
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
  backface-visibility: hidden;
}

.flip-card-front {
  background: #6366f1;
  color: white;
}

.flip-card-back {
  background: #ec4899;
  color: white;
  transform: rotateY(180deg);
}`,
        },
      },
      {
        id: 'step-3',
        title: 'グラデーションアニメーション',
        content: `背景グラデーションをアニメーションさせるには、\`background-size\` を大きくして \`background-position\` をアニメーションします。`,
        codeExample: {
          html: '<div class="gradient-bg">\n  <h2>動くグラデーション</h2>\n</div>',
          css: `.gradient-bg {
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  background: linear-gradient(-45deg, #6366f1, #ec4899, #f59e0b, #10b981);
  background-size: 400% 400%;
  border-radius: 12px;
  animation: gradient 8s ease infinite;
}

.gradient-bg h2 {
  margin: 0;
  font-size: 2rem;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
        },
      },
      {
        id: 'step-4',
        title: 'タイピングアニメーション',
        content: `タイプライター効果は、\`width\` を 0 から文字幅まで広げることで実現します。

\`steps()\` タイミング関数を使うと、段階的に変化します。\`ch\` 単位は1文字の幅を表します。`,
        codeExample: {
          html: '<div class="typing">Hello, World!</div>',
          css: `.typing {
  font-family: monospace;
  font-size: 2rem;
  color: #1e293b;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #6366f1;
  width: 0;
  animation:
    typing 2s steps(13) forwards,
    blink 0.7s step-end infinite;
}

@keyframes typing {
  to {
    width: 13ch;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}`,
        },
      },
    ],
  },
];

export function getTutorialById(id: string): Tutorial | undefined {
  return tutorials.find((t) => t.id === id);
}

export function getTutorialsByCategory(category: string): Tutorial[] {
  return tutorials.filter((t) => t.category === category);
}
