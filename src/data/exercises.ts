import type { Exercise } from '../types';

export const exercises: Exercise[] = [
  // ==================== Flexbox 初級 ====================
  {
    id: 'flexbox-1',
    title: '要素を中央に配置',
    description: 'Flexboxを使って、コンテナ内でボックスを水平・垂直方向の中央に配置しましょう。',
    category: 'flexbox',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <div class="box">中央に配置</div>
</div>`,
    initialCss: `.container {
  width: 100%;
  height: 200px;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  /* ここにFlexboxスタイルを追加 */
}

.box {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
}`,
    solutionCss: `.container {
  width: 100%;
  height: 200px;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
}`,
    validationRules: [
      { property: 'display', expectedValue: 'flex', check: 'equals' },
      { property: 'justify-content', expectedValue: 'center', check: 'equals' },
      { property: 'align-items', expectedValue: 'center', check: 'equals' },
    ],
    hints: [
      'まずコンテナに display: flex を設定しましょう',
      '水平方向の中央配置には justify-content を使います',
      '垂直方向の中央配置には align-items を使います',
    ],
  },
  {
    id: 'flexbox-2',
    title: 'アイテム間のスペース',
    description: 'Flexboxを使って、ボックスを均等な間隔で配置しましょう。',
    category: 'flexbox',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>`,
    initialCss: `.container {
  width: 100%;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  /* ここにFlexboxスタイルを追加 */
}

.box {
  background: #6366f1;
  color: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`,
    solutionCss: `.container {
  width: 100%;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: flex;
  justify-content: space-between;
}

.box {
  background: #6366f1;
  color: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`,
    validationRules: [
      { property: 'display', expectedValue: 'flex', check: 'equals' },
      { property: 'justify-content', expectedValue: 'space-between', check: 'equals' },
    ],
    hints: [
      'コンテナに display: flex を設定しましょう',
      'justify-content に space-between を使いましょう',
    ],
  },
  {
    id: 'flexbox-3',
    title: '縦方向に並べる',
    description: 'Flexboxの flex-direction を使って、ボックスを縦方向に並べましょう。',
    category: 'flexbox',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <div class="box">A</div>
  <div class="box">B</div>
  <div class="box">C</div>
</div>`,
    initialCss: `.container {
  width: 200px;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  /* ここにFlexboxスタイルを追加 */
}

.box {
  background: #8b5cf6;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
}`,
    solutionCss: `.container {
  width: 200px;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.box {
  background: #8b5cf6;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
}`,
    validationRules: [
      { property: 'display', expectedValue: 'flex', check: 'equals' },
      { property: 'flex-direction', expectedValue: 'column', check: 'equals' },
    ],
    hints: [
      'まず display: flex を使いましょう',
      'flex-direction を column に設定すると縦方向に並びます',
      'オプションで gap を追加して間隔を設定できます',
    ],
  },
  {
    id: 'flexbox-4',
    title: '順序を逆に',
    description: 'flex-direction を使ってボックスの順序を逆にしましょう。',
    category: 'flexbox',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>`,
    initialCss: `.container {
  width: 100%;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: flex;
  gap: 1rem;
  /* 順序を逆にするプロパティを追加 */
}

.box {
  background: #6366f1;
  color: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`,
    solutionCss: `.container {
  width: 100%;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: flex;
  gap: 1rem;
  flex-direction: row-reverse;
}

.box {
  background: #6366f1;
  color: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`,
    validationRules: [
      { property: 'flex-direction', expectedValue: 'row-reverse', check: 'equals' },
    ],
    hints: [
      'flex-direction プロパティを使いましょう',
      'row-reverse で水平方向の順序が逆になります',
    ],
  },
  {
    id: 'flexbox-5',
    title: '右寄せ配置',
    description: 'アイテムをコンテナの右端に配置しましょう。',
    category: 'flexbox',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <div class="box">右に寄せる</div>
</div>`,
    initialCss: `.container {
  width: 100%;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  /* Flexboxで右寄せ */
}

.box {
  background: #ec4899;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
}`,
    solutionCss: `.container {
  width: 100%;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: flex;
  justify-content: flex-end;
}

.box {
  background: #ec4899;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
}`,
    validationRules: [
      { property: 'display', expectedValue: 'flex', check: 'equals' },
      { property: 'justify-content', expectedValue: 'flex-end', check: 'equals' },
    ],
    hints: [
      'display: flex を設定しましょう',
      'justify-content: flex-end で右寄せになります',
    ],
  },
  {
    id: 'flexbox-6',
    title: '均等配置（周囲にスペース）',
    description: 'アイテムの周りに均等なスペースを配置しましょう。',
    category: 'flexbox',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>`,
    initialCss: `.container {
  width: 100%;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: flex;
  /* 均等配置を追加 */
}

.box {
  background: #f59e0b;
  color: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`,
    solutionCss: `.container {
  width: 100%;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: flex;
  justify-content: space-around;
}

.box {
  background: #f59e0b;
  color: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`,
    validationRules: [
      { property: 'justify-content', expectedValue: 'space-around', check: 'equals' },
    ],
    hints: [
      'justify-content プロパティを使います',
      'space-around は各アイテムの周りに均等なスペースを配置します',
    ],
  },
  // ==================== Flexbox 中級 ====================
  {
    id: 'flexbox-7',
    title: 'Flex Grow',
    description: '中央のボックスが残りのスペースを埋めるようにしましょう。',
    category: 'flexbox',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <div class="box side">左</div>
  <div class="box middle">中央（伸縮）</div>
  <div class="box side">右</div>
</div>`,
    initialCss: `.container {
  display: flex;
  width: 100%;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  gap: 1rem;
}

.box {
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
}

.side {
  background: #6366f1;
  width: 100px;
}

.middle {
  background: #ec4899;
  /* ここに flex-grow を追加 */
}`,
    solutionCss: `.container {
  display: flex;
  width: 100%;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  gap: 1rem;
}

.box {
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
}

.side {
  background: #6366f1;
  width: 100px;
}

.middle {
  background: #ec4899;
  flex-grow: 1;
}`,
    validationRules: [
      { property: 'flex-grow', expectedValue: '1', check: 'equals' },
    ],
    hints: [
      'コンテナにはすでに display: flex が設定されています',
      '.middle クラスに flex-grow: 1 を追加しましょう',
      'flex-grow: 1 で要素が利用可能なスペースを埋めるように拡張されます',
    ],
  },
  {
    id: 'flexbox-8',
    title: '折り返し',
    description: 'ボックスがオーバーフローしたときに次の行に折り返すようにしましょう。',
    category: 'flexbox',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</div>`,
    initialCss: `.container {
  width: 280px;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: flex;
  gap: 0.5rem;
  /* flex-wrap を追加 */
}

.box {
  background: #6366f1;
  color: white;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  flex-shrink: 0;
}`,
    solutionCss: `.container {
  width: 280px;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.box {
  background: #6366f1;
  color: white;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  flex-shrink: 0;
}`,
    validationRules: [
      { property: 'flex-wrap', expectedValue: 'wrap', check: 'equals' },
    ],
    hints: [
      'デフォルトでは、flexアイテムは1行に収まろうとします',
      'flex-wrap: wrap を使うと、アイテムが新しい行に折り返されます',
    ],
  },
  {
    id: 'flexbox-9',
    title: 'align-self で個別配置',
    description: '2番目のボックスだけを下に配置しましょう。',
    category: 'flexbox',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <div class="box">1</div>
  <div class="box special">2</div>
  <div class="box">3</div>
</div>`,
    initialCss: `.container {
  display: flex;
  align-items: flex-start;
  height: 150px;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  gap: 1rem;
}

.box {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
}

.special {
  background: #ec4899;
  /* このボックスを下に配置 */
}`,
    solutionCss: `.container {
  display: flex;
  align-items: flex-start;
  height: 150px;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  gap: 1rem;
}

.box {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
}

.special {
  background: #ec4899;
  align-self: flex-end;
}`,
    validationRules: [
      { property: 'align-self', expectedValue: 'flex-end', check: 'equals' },
    ],
    hints: [
      'align-self は個々のアイテムの配置を上書きできます',
      'flex-end で下（交差軸の終点）に配置されます',
    ],
  },
  {
    id: 'flexbox-10',
    title: 'order で順序変更',
    description: '3番目のボックスを最初に表示しましょう。',
    category: 'flexbox',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box first">3→1番目に</div>
</div>`,
    initialCss: `.container {
  display: flex;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  gap: 1rem;
}

.box {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
}

.first {
  background: #10b981;
  /* orderを使って最初に */
}`,
    solutionCss: `.container {
  display: flex;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  gap: 1rem;
}

.box {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
}

.first {
  background: #10b981;
  order: -1;
}`,
    validationRules: [
      { property: 'order', expectedValue: '-1', check: 'equals' },
    ],
    hints: [
      'order プロパティで表示順序を変更できます',
      'デフォルトは0なので、-1にすると最初に表示されます',
    ],
  },
  {
    id: 'flexbox-11',
    title: 'flex-basis で基準サイズ',
    description: '最初のボックスの基準幅を200pxにしましょう。',
    category: 'flexbox',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <div class="box wide">200px幅</div>
  <div class="box">自動</div>
  <div class="box">自動</div>
</div>`,
    initialCss: `.container {
  display: flex;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  gap: 1rem;
}

.box {
  background: #6366f1;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
}

.wide {
  background: #f59e0b;
  /* flex-basisで幅を設定 */
}`,
    solutionCss: `.container {
  display: flex;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  gap: 1rem;
}

.box {
  background: #6366f1;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
}

.wide {
  background: #f59e0b;
  flex-basis: 200px;
}`,
    validationRules: [
      { property: 'flex-basis', expectedValue: '200px', check: 'equals' },
    ],
    hints: [
      'flex-basis はアイテムの初期サイズを設定します',
      'widthと似ていますが、Flexboxでより適切に動作します',
    ],
  },
  {
    id: 'flexbox-12',
    title: 'ナビゲーションバー',
    description: 'ロゴを左、メニューを右に配置するナビゲーションバーを作りましょう。',
    category: 'flexbox',
    difficulty: 'intermediate',
    htmlTemplate: `<nav class="navbar">
  <div class="logo">ロゴ</div>
  <ul class="menu">
    <li>ホーム</li>
    <li>サービス</li>
    <li>お問合せ</li>
  </ul>
</nav>`,
    initialCss: `.navbar {
  padding: 1rem 2rem;
  background: #1e293b;
  /* Flexboxでレイアウト */
}

.logo {
  color: #6366f1;
  font-weight: bold;
  font-size: 1.25rem;
}

.menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.menu li {
  color: white;
}`,
    solutionCss: `.navbar {
  padding: 1rem 2rem;
  background: #1e293b;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #6366f1;
  font-weight: bold;
  font-size: 1.25rem;
}

.menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.menu li {
  color: white;
}`,
    validationRules: [
      { property: 'display', expectedValue: 'flex', check: 'equals' },
      { property: 'justify-content', expectedValue: 'space-between', check: 'equals' },
    ],
    hints: [
      '.navbar に display: flex を設定',
      'justify-content: space-between でロゴとメニューを左右に分離',
      'align-items: center で垂直方向を中央に',
    ],
  },
  // ==================== Flexbox 上級 ====================
  {
    id: 'flexbox-13',
    title: 'カードレイアウト',
    description: 'カードのフッターを常に下に配置しましょう。',
    category: 'flexbox',
    difficulty: 'advanced',
    htmlTemplate: `<div class="card">
  <div class="card-header">タイトル</div>
  <div class="card-body">短いコンテンツ</div>
  <div class="card-footer">フッター</div>
</div>`,
    initialCss: `.card {
  width: 200px;
  height: 250px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  /* Flexboxでレイアウト */
}

.card-header {
  background: #6366f1;
  color: white;
  padding: 1rem;
  font-weight: bold;
}

.card-body {
  padding: 1rem;
  color: #334155;
  /* このエリアを伸ばす */
}

.card-footer {
  background: #f1f5f9;
  padding: 1rem;
  color: #64748b;
  font-size: 0.875rem;
}`,
    solutionCss: `.card {
  width: 200px;
  height: 250px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-header {
  background: #6366f1;
  color: white;
  padding: 1rem;
  font-weight: bold;
}

.card-body {
  padding: 1rem;
  color: #334155;
  flex-grow: 1;
}

.card-footer {
  background: #f1f5f9;
  padding: 1rem;
  color: #64748b;
  font-size: 0.875rem;
}`,
    validationRules: [
      { property: 'display', expectedValue: 'flex', check: 'equals' },
      { property: 'flex-direction', expectedValue: 'column', check: 'equals' },
      { property: 'flex-grow', expectedValue: '1', check: 'equals' },
    ],
    hints: [
      '.card に display: flex と flex-direction: column を設定',
      '.card-body に flex-grow: 1 を設定して残りスペースを埋める',
    ],
  },
  {
    id: 'flexbox-14',
    title: '聖杯レイアウト',
    description: 'ヘッダー、3カラム、フッターの聖杯レイアウトを作りましょう。',
    category: 'flexbox',
    difficulty: 'advanced',
    htmlTemplate: `<div class="layout">
  <header class="header">ヘッダー</header>
  <div class="content">
    <aside class="sidebar-left">左</aside>
    <main class="main">メイン</main>
    <aside class="sidebar-right">右</aside>
  </div>
  <footer class="footer">フッター</footer>
</div>`,
    initialCss: `.layout {
  min-height: 300px;
  /* 縦方向にFlex */
}

.header, .footer {
  background: #1e293b;
  color: white;
  padding: 1rem;
  text-align: center;
}

.content {
  /* 横方向にFlex */
}

.sidebar-left, .sidebar-right {
  background: #6366f1;
  color: white;
  padding: 1rem;
  width: 80px;
  text-align: center;
}

.main {
  background: #f1f5f9;
  padding: 1rem;
  /* 残りを埋める */
}`,
    solutionCss: `.layout {
  min-height: 300px;
  display: flex;
  flex-direction: column;
}

.header, .footer {
  background: #1e293b;
  color: white;
  padding: 1rem;
  text-align: center;
}

.content {
  display: flex;
  flex-grow: 1;
}

.sidebar-left, .sidebar-right {
  background: #6366f1;
  color: white;
  padding: 1rem;
  width: 80px;
  text-align: center;
}

.main {
  background: #f1f5f9;
  padding: 1rem;
  flex-grow: 1;
}`,
    validationRules: [
      { property: 'flex-direction', expectedValue: 'column', check: 'equals' },
      { property: 'flex-grow', expectedValue: '1', check: 'equals' },
    ],
    hints: [
      '.layout に display: flex と flex-direction: column',
      '.content に display: flex と flex-grow: 1',
      '.main に flex-grow: 1 で残りを埋める',
    ],
  },
  // ==================== Grid 初級 ====================
  {
    id: 'grid-1',
    title: '基本のGrid',
    description: 'CSS Gridを使って3列のレイアウトを作成しましょう。',
    category: 'grid',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,
    initialCss: `.container {
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  /* Gridスタイルを追加 */
}

.item {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  border-radius: 8px;
}`,
    solutionCss: `.container {
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.item {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  border-radius: 8px;
}`,
    validationRules: [
      { property: 'display', expectedValue: 'grid', check: 'equals' },
      { property: 'grid-template-columns', check: 'exists' },
    ],
    hints: [
      'コンテナに display: grid を設定しましょう',
      'grid-template-columns を使って列を定義します',
      'repeat(3, 1fr) で3つの等幅の列を作成できます',
    ],
  },
  {
    id: 'grid-2',
    title: '2列レイアウト',
    description: '2列のグリッドを作成しましょう。',
    category: 'grid',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>`,
    initialCss: `.container {
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  /* 2列グリッド */
}

.item {
  background: #8b5cf6;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`,
    solutionCss: `.container {
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.item {
  background: #8b5cf6;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`,
    validationRules: [
      { property: 'display', expectedValue: 'grid', check: 'equals' },
      { property: 'grid-template-columns', check: 'exists' },
    ],
    hints: [
      'display: grid を設定',
      'grid-template-columns: 1fr 1fr で2列',
    ],
  },
  {
    id: 'grid-3',
    title: '固定幅と可変幅',
    description: '左側を200px固定、右側を可変幅にしましょう。',
    category: 'grid',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <div class="sidebar">サイドバー</div>
  <div class="main">メインコンテンツ</div>
</div>`,
    initialCss: `.container {
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  /* 左固定、右可変 */
}

.sidebar {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
}

.main {
  background: #ec4899;
  color: white;
  padding: 2rem;
}`,
    solutionCss: `.container {
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1rem;
}

.sidebar {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
}

.main {
  background: #ec4899;
  color: white;
  padding: 2rem;
}`,
    validationRules: [
      { property: 'display', expectedValue: 'grid', check: 'equals' },
      { property: 'grid-template-columns', expectedValue: '200px 1fr', check: 'equals' },
    ],
    hints: [
      '固定幅は px で、可変幅は fr で指定',
      'grid-template-columns: 200px 1fr',
    ],
  },
  {
    id: 'grid-4',
    title: 'グリッド間隔',
    description: 'アイテム間に2remの間隔を設定しましょう。',
    category: 'grid',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>`,
    initialCss: `.container {
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* 間隔を追加 */
}

.item {
  background: #10b981;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`,
    solutionCss: `.container {
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.item {
  background: #10b981;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`,
    validationRules: [
      { property: 'gap', expectedValue: '2rem', check: 'equals' },
    ],
    hints: [
      'gap プロパティで間隔を設定',
      'gap: 2rem で行と列の両方に適用',
    ],
  },
  // ==================== Grid 中級 ====================
  {
    id: 'grid-5',
    title: 'Gridスパン',
    description: '最初のアイテムが3列すべてにまたがるようにしましょう。',
    category: 'grid',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <div class="item header">ヘッダー（全列にまたがる）</div>
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
    initialCss: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
}

.item {
  background: #6366f1;
  color: white;
  padding: 1.5rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.header {
  background: #ec4899;
  /* grid-column span を追加 */
}`,
    solutionCss: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
}

.item {
  background: #6366f1;
  color: white;
  padding: 1.5rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.header {
  background: #ec4899;
  grid-column: span 3;
}`,
    validationRules: [
      { property: 'grid-column', expectedValue: 'span 3', check: 'contains' },
    ],
    hints: [
      '.header 要素に grid-column プロパティを使いましょう',
      'span キーワードで複数の列にまたがることができます',
      'grid-column: span 3 を試してみましょう',
    ],
  },
  {
    id: 'grid-6',
    title: '行スパン',
    description: 'サイドバーを2行にまたがらせましょう。',
    category: 'grid',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <div class="item sidebar">サイドバー</div>
  <div class="item">コンテンツ1</div>
  <div class="item">コンテンツ2</div>
</div>`,
    initialCss: `.container {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
}

.item {
  background: #6366f1;
  color: white;
  padding: 1.5rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.sidebar {
  background: #f59e0b;
  /* 2行にまたがる */
}`,
    solutionCss: `.container {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
}

.item {
  background: #6366f1;
  color: white;
  padding: 1.5rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.sidebar {
  background: #f59e0b;
  grid-row: span 2;
}`,
    validationRules: [
      { property: 'grid-row', expectedValue: 'span 2', check: 'contains' },
    ],
    hints: [
      'grid-row プロパティで行をまたげます',
      'grid-row: span 2 で2行にまたがる',
    ],
  },
  {
    id: 'grid-7',
    title: 'グリッドエリア名',
    description: 'grid-template-areasを使ってレイアウトを定義しましょう。',
    category: 'grid',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <header class="header">ヘッダー</header>
  <nav class="nav">ナビ</nav>
  <main class="main">メイン</main>
  <footer class="footer">フッター</footer>
</div>`,
    initialCss: `.container {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  grid-template-columns: 100px 1fr;
  /* grid-template-areas を追加 */
}

.header {
  background: #6366f1;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  /* grid-area を追加 */
}

.nav {
  background: #8b5cf6;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  /* grid-area を追加 */
}

.main {
  background: #ec4899;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  /* grid-area を追加 */
}

.footer {
  background: #1e293b;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  /* grid-area を追加 */
}`,
    solutionCss: `.container {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  grid-template-columns: 100px 1fr;
  grid-template-areas:
    "header header"
    "nav main"
    "footer footer";
}

.header {
  background: #6366f1;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  grid-area: header;
}

.nav {
  background: #8b5cf6;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  grid-area: nav;
}

.main {
  background: #ec4899;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  grid-area: main;
}

.footer {
  background: #1e293b;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  grid-area: footer;
}`,
    validationRules: [
      { property: 'grid-template-areas', check: 'exists' },
      { property: 'grid-area', check: 'exists' },
    ],
    hints: [
      'grid-template-areas でレイアウトを視覚的に定義',
      '各要素に grid-area で名前を割り当て',
    ],
  },
  {
    id: 'grid-8',
    title: '自動配置',
    description: 'auto-fill を使って自動的に列を増減させましょう。',
    category: 'grid',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,
    initialCss: `.container {
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: grid;
  gap: 1rem;
  /* auto-fill で自動配置 */
}

.item {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`,
    solutionCss: `.container {
  padding: 1rem;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}

.item {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`,
    validationRules: [
      { property: 'grid-template-columns', expectedValue: 'auto-fill', check: 'contains' },
    ],
    hints: [
      'repeat(auto-fill, minmax(最小値, 最大値)) を使用',
      'minmax(100px, 1fr) で最小100px、最大1fr',
    ],
  },
  // ==================== Grid 上級 ====================
  {
    id: 'grid-9',
    title: 'ダッシュボードレイアウト',
    description: '異なるサイズのカードを配置したダッシュボードを作りましょう。',
    category: 'grid',
    difficulty: 'advanced',
    htmlTemplate: `<div class="dashboard">
  <div class="card large">大きいカード</div>
  <div class="card">カード1</div>
  <div class="card">カード2</div>
  <div class="card wide">横長カード</div>
</div>`,
    initialCss: `.dashboard {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  /* グリッドを定義 */
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
  background: #ec4899;
  /* 2x2 にまたがる */
}

.wide {
  background: #10b981;
  /* 2列にまたがる */
}`,
    solutionCss: `.dashboard {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  grid-template-columns: repeat(3, 1fr);
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
  background: #ec4899;
  grid-column: span 2;
  grid-row: span 2;
}

.wide {
  background: #10b981;
  grid-column: span 2;
}`,
    validationRules: [
      { property: 'grid-template-columns', check: 'exists' },
      { property: 'grid-column', expectedValue: 'span 2', check: 'contains' },
    ],
    hints: [
      '3列グリッドを作成',
      '.large に grid-column: span 2 と grid-row: span 2',
      '.wide に grid-column: span 2',
    ],
  },
  // ==================== レスポンシブ 初級 ====================
  {
    id: 'responsive-1',
    title: '画面幅でレイアウト変更',
    description: '768px以下で縦並びに変更しましょう。',
    category: 'responsive',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <div class="box">ボックス1</div>
  <div class="box">ボックス2</div>
</div>`,
    initialCss: `.container {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
}

.box {
  background: #6366f1;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  flex: 1;
  text-align: center;
}

/* 768px以下で縦並び */`,
    solutionCss: `.container {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
}

.box {
  background: #6366f1;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  flex: 1;
  text-align: center;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`,
    validationRules: [
      { property: '@media', check: 'exists' },
      { property: 'flex-direction', expectedValue: 'column', check: 'equals' },
    ],
    hints: [
      '@media (max-width: 768px) でメディアクエリを定義',
      'その中で flex-direction: column を設定',
    ],
  },
  {
    id: 'responsive-2',
    title: 'モバイルで非表示',
    description: '600px以下でサイドバーを非表示にしましょう。',
    category: 'responsive',
    difficulty: 'beginner',
    htmlTemplate: `<div class="layout">
  <aside class="sidebar">サイドバー</aside>
  <main class="main">メインコンテンツ</main>
</div>`,
    initialCss: `.layout {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
}

.sidebar {
  width: 200px;
  background: #6366f1;
  color: white;
  padding: 1rem;
  border-radius: 8px;
}

.main {
  flex: 1;
  background: white;
  padding: 1rem;
  border-radius: 8px;
}

/* 600px以下でサイドバーを非表示 */`,
    solutionCss: `.layout {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
}

.sidebar {
  width: 200px;
  background: #6366f1;
  color: white;
  padding: 1rem;
  border-radius: 8px;
}

.main {
  flex: 1;
  background: white;
  padding: 1rem;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .sidebar {
    display: none;
  }
}`,
    validationRules: [
      { property: '@media', check: 'exists' },
      { property: 'display', expectedValue: 'none', check: 'equals' },
    ],
    hints: [
      '@media (max-width: 600px) を使用',
      '.sidebar に display: none を設定',
    ],
  },
  {
    id: 'responsive-3',
    title: 'フォントサイズの調整',
    description: 'モバイルでタイトルのフォントサイズを小さくしましょう。',
    category: 'responsive',
    difficulty: 'beginner',
    htmlTemplate: `<div class="container">
  <h1 class="title">大きなタイトル</h1>
  <p class="text">本文テキストがここに入ります。</p>
</div>`,
    initialCss: `.container {
  padding: 2rem;
  background: #f1f5f9;
}

.title {
  font-size: 3rem;
  color: #1e293b;
  margin-bottom: 1rem;
}

.text {
  color: #64748b;
  line-height: 1.6;
}

/* 480px以下でフォントサイズを小さく */`,
    solutionCss: `.container {
  padding: 2rem;
  background: #f1f5f9;
}

.title {
  font-size: 3rem;
  color: #1e293b;
  margin-bottom: 1rem;
}

.text {
  color: #64748b;
  line-height: 1.6;
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }
}`,
    validationRules: [
      { property: '@media', check: 'exists' },
      { property: 'font-size', expectedValue: '1.5rem', check: 'equals' },
    ],
    hints: [
      '@media (max-width: 480px) でモバイル向けスタイル',
      '.title の font-size を小さくする',
    ],
  },
  // ==================== レスポンシブ 中級 ====================
  {
    id: 'responsive-4',
    title: 'レスポンシブナビゲーション',
    description: 'モバイルでナビゲーションを縦並びにしましょう。',
    category: 'responsive',
    difficulty: 'intermediate',
    htmlTemplate: `<nav class="nav">
  <div class="logo">ロゴ</div>
  <ul class="menu">
    <li>ホーム</li>
    <li>サービス</li>
    <li>会社概要</li>
    <li>お問合せ</li>
  </ul>
</nav>`,
    initialCss: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1e293b;
}

.logo {
  color: #6366f1;
  font-weight: bold;
  font-size: 1.25rem;
}

.menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.menu li {
  color: white;
}

/* 768px以下でレイアウト変更 */`,
    solutionCss: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1e293b;
}

.logo {
  color: #6366f1;
  font-weight: bold;
  font-size: 1.25rem;
}

.menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.menu li {
  color: white;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 1rem;
  }

  .menu {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}`,
    validationRules: [
      { property: '@media', check: 'exists' },
      { property: 'flex-direction', expectedValue: 'column', check: 'equals' },
    ],
    hints: [
      '.nav と .menu の両方を flex-direction: column に',
      'メニューを中央揃えにする',
    ],
  },
  {
    id: 'responsive-5',
    title: 'グリッドの列数変更',
    description: 'タブレットで2列、モバイルで1列にしましょう。',
    category: 'responsive',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="grid">
  <div class="card">カード1</div>
  <div class="card">カード2</div>
  <div class="card">カード3</div>
  <div class="card">カード4</div>
</div>`,
    initialCss: `.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
}

/* タブレット768px以下で2列 */

/* モバイル480px以下で1列 */`,
    solutionCss: `.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}`,
    validationRules: [
      { property: '@media', check: 'exists' },
      { property: 'grid-template-columns', check: 'exists' },
    ],
    hints: [
      '2つのメディアクエリを使用',
      '768pxで2列、480pxで1列',
    ],
  },
  // ==================== アニメーション 初級 ====================
  {
    id: 'animation-1',
    title: 'ホバーで色変更',
    description: 'ホバー時にボタンの色をスムーズに変更しましょう。',
    category: 'animation',
    difficulty: 'beginner',
    htmlTemplate: `<button class="btn">ホバーしてね</button>`,
    initialCss: `.btn {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  /* トランジションを追加 */
}

.btn:hover {
  background: #4f46e5;
}`,
    solutionCss: `.btn {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #4f46e5;
}`,
    validationRules: [
      { property: 'transition', check: 'exists' },
    ],
    hints: [
      'transition プロパティでアニメーションを追加',
      'transition: background 0.3s ease',
    ],
  },
  {
    id: 'animation-2',
    title: 'ホバーで拡大',
    description: 'ホバー時にカードを少し拡大しましょう。',
    category: 'animation',
    difficulty: 'beginner',
    htmlTemplate: `<div class="card">
  <h3>カードタイトル</h3>
  <p>カードの内容</p>
</div>`,
    initialCss: `.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  max-width: 300px;
  /* トランジションを追加 */
}

.card:hover {
  /* 拡大する */
}

.card h3 {
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.card p {
  color: #64748b;
  margin: 0;
}`,
    solutionCss: `.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  max-width: 300px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card h3 {
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.card p {
  color: #64748b;
  margin: 0;
}`,
    validationRules: [
      { property: 'transition', check: 'exists' },
      { property: 'transform', expectedValue: 'scale', check: 'contains' },
    ],
    hints: [
      'transition: transform 0.3s ease を追加',
      'hover時に transform: scale(1.05) で拡大',
    ],
  },
  {
    id: 'animation-3',
    title: 'フェードイン',
    description: '@keyframes を使ってフェードインアニメーションを作りましょう。',
    category: 'animation',
    difficulty: 'beginner',
    htmlTemplate: `<div class="box">フェードイン</div>`,
    initialCss: `.box {
  background: #6366f1;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  /* アニメーションを追加 */
}

/* @keyframes を定義 */`,
    solutionCss: `.box {
  background: #6366f1;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`,
    validationRules: [
      { property: 'animation', check: 'exists' },
      { property: '@keyframes', check: 'exists' },
    ],
    hints: [
      '@keyframes fadeIn でアニメーションを定義',
      'opacity を 0 から 1 に変化',
      'animation: fadeIn 1s ease で適用',
    ],
  },
  // ==================== アニメーション 中級 ====================
  {
    id: 'animation-4',
    title: '回転アニメーション',
    description: '無限に回転するローディングスピナーを作りましょう。',
    category: 'animation',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="spinner"></div>`,
    initialCss: `.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f1f5f9;
  border-top-color: #6366f1;
  border-radius: 50%;
  /* 回転アニメーションを追加 */
}

/* @keyframes を定義 */`,
    solutionCss: `.spinner {
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
    validationRules: [
      { property: 'animation', check: 'exists' },
      { property: '@keyframes', check: 'exists' },
      { property: 'rotate', check: 'exists' },
    ],
    hints: [
      '@keyframes spin で360度回転を定義',
      'animation: spin 1s linear infinite',
      'infinite で無限ループ',
    ],
  },
  {
    id: 'animation-5',
    title: 'バウンスアニメーション',
    description: '上下にバウンドするアニメーションを作りましょう。',
    category: 'animation',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="ball"></div>`,
    initialCss: `.ball {
  width: 50px;
  height: 50px;
  background: #ec4899;
  border-radius: 50%;
  /* バウンスアニメーションを追加 */
}

/* @keyframes を定義 */`,
    solutionCss: `.ball {
  width: 50px;
  height: 50px;
  background: #ec4899;
  border-radius: 50%;
  animation: bounce 0.5s ease-in-out infinite alternate;
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
  }
}`,
    validationRules: [
      { property: 'animation', check: 'exists' },
      { property: '@keyframes', check: 'exists' },
      { property: 'translateY', check: 'exists' },
    ],
    hints: [
      'translateY で上下移動',
      'alternate で往復アニメーション',
    ],
  },
  {
    id: 'animation-6',
    title: 'パルスアニメーション',
    description: '脈打つように拡大縮小するアニメーションを作りましょう。',
    category: 'animation',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="pulse"></div>`,
    initialCss: `.pulse {
  width: 100px;
  height: 100px;
  background: #6366f1;
  border-radius: 50%;
  /* パルスアニメーションを追加 */
}

/* @keyframes を定義 */`,
    solutionCss: `.pulse {
  width: 100px;
  height: 100px;
  background: #6366f1;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}`,
    validationRules: [
      { property: 'animation', check: 'exists' },
      { property: '@keyframes', check: 'exists' },
      { property: 'scale', check: 'exists' },
    ],
    hints: [
      '0%, 100% と 50% でキーフレームを定義',
      'scale で拡大縮小',
      'opacity も変化させると効果的',
    ],
  },
  // ==================== Flexbox 上級（追加） ====================
  {
    id: 'flexbox-15',
    title: 'マスタリーレイアウト',
    description: 'Flexboxを使って、ピンタレスト風のレイアウトを作りましょう。',
    category: 'flexbox',
    difficulty: 'advanced',
    htmlTemplate: `<div class="masonry">
  <div class="column">
    <div class="item tall">1</div>
    <div class="item">2</div>
  </div>
  <div class="column">
    <div class="item">3</div>
    <div class="item tall">4</div>
  </div>
  <div class="column">
    <div class="item medium">5</div>
    <div class="item">6</div>
  </div>
</div>`,
    initialCss: `.masonry {
  padding: 1rem;
  background: #f1f5f9;
  /* 横並びに */
}

.column {
  flex: 1;
  /* 縦並びに */
}

.item {
  background: #6366f1;
  color: white;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  height: 80px;
}

.tall { height: 180px; background: #ec4899; }
.medium { height: 120px; background: #10b981; }`,
    solutionCss: `.masonry {
  padding: 1rem;
  background: #f1f5f9;
  display: flex;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.item {
  background: #6366f1;
  color: white;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  height: 80px;
}

.tall { height: 180px; background: #ec4899; }
.medium { height: 120px; background: #10b981; }`,
    validationRules: [
      { property: 'display', expectedValue: 'flex', check: 'equals' },
      { property: 'flex-direction', expectedValue: 'column', check: 'equals' },
    ],
    hints: [
      '.masonry に display: flex で横並び',
      '.column に display: flex と flex-direction: column',
    ],
  },
  {
    id: 'flexbox-16',
    title: 'スティッキーフッター',
    description: 'コンテンツが少なくてもフッターを画面下部に固定しましょう。',
    category: 'flexbox',
    difficulty: 'advanced',
    htmlTemplate: `<div class="page">
  <header class="header">ヘッダー</header>
  <main class="content">
    <p>コンテンツが少ない場合でも...</p>
  </main>
  <footer class="footer">フッターは下に</footer>
</div>`,
    initialCss: `.page {
  min-height: 300px;
  background: #f1f5f9;
  /* Flexboxでレイアウト */
}

.header {
  background: #6366f1;
  color: white;
  padding: 1rem;
}

.content {
  padding: 1rem;
  /* 残りスペースを埋める */
}

.footer {
  background: #1e293b;
  color: white;
  padding: 1rem;
  text-align: center;
}`,
    solutionCss: `.page {
  min-height: 300px;
  background: #f1f5f9;
  display: flex;
  flex-direction: column;
}

.header {
  background: #6366f1;
  color: white;
  padding: 1rem;
}

.content {
  padding: 1rem;
  flex-grow: 1;
}

.footer {
  background: #1e293b;
  color: white;
  padding: 1rem;
  text-align: center;
}`,
    validationRules: [
      { property: 'display', expectedValue: 'flex', check: 'equals' },
      { property: 'flex-direction', expectedValue: 'column', check: 'equals' },
      { property: 'flex-grow', expectedValue: '1', check: 'equals' },
    ],
    hints: [
      '.page を flex container にして column 方向に',
      '.content に flex-grow: 1 で残りスペースを埋める',
    ],
  },
  {
    id: 'flexbox-17',
    title: 'メディアオブジェクト',
    description: '画像とテキストが横に並ぶメディアオブジェクトパターンを作りましょう。',
    category: 'flexbox',
    difficulty: 'advanced',
    htmlTemplate: `<div class="media">
  <div class="media-image">IMG</div>
  <div class="media-body">
    <h3>タイトル</h3>
    <p>これはメディアオブジェクトパターンです。画像の横にテキストが流れます。</p>
  </div>
</div>`,
    initialCss: `.media {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  /* Flexboxで横並び */
}

.media-image {
  width: 80px;
  height: 80px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-shrink: 0;
}

.media-body {
  /* 左にマージン */
}

.media-body h3 {
  margin: 0 0 0.5rem;
  color: #1e293b;
}

.media-body p {
  margin: 0;
  color: #64748b;
}`,
    solutionCss: `.media {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: flex-start;
}

.media-image {
  width: 80px;
  height: 80px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-shrink: 0;
}

.media-body {
  margin-left: 1rem;
}

.media-body h3 {
  margin: 0 0 0.5rem;
  color: #1e293b;
}

.media-body p {
  margin: 0;
  color: #64748b;
}`,
    validationRules: [
      { property: 'display', expectedValue: 'flex', check: 'equals' },
      { property: 'margin-left', check: 'exists' },
    ],
    hints: [
      '.media に display: flex',
      '.media-body に margin-left でスペース確保',
      'align-items: flex-start で上揃え',
    ],
  },
  // ==================== Grid 中級（追加） ====================
  {
    id: 'grid-10',
    title: 'minmax関数',
    description: 'minmax()を使って最小100px、最大1frの列を作りましょう。',
    category: 'grid',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
    initialCss: `.container {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  /* minmaxを使って3列 */
}

.item {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`,
    solutionCss: `.container {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
}

.item {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`,
    validationRules: [
      { property: 'grid-template-columns', expectedValue: 'minmax', check: 'contains' },
    ],
    hints: [
      'minmax(最小値, 最大値) で柔軟なサイズを指定',
      'repeat(3, minmax(100px, 1fr))',
    ],
  },
  {
    id: 'grid-11',
    title: 'グリッドの配置',
    description: 'place-items を使ってアイテムを中央に配置しましょう。',
    category: 'grid',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <div class="item">中央</div>
</div>`,
    initialCss: `.container {
  display: grid;
  height: 200px;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  /* アイテムを中央に */
}

.item {
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
}`,
    solutionCss: `.container {
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
    validationRules: [
      { property: 'place-items', expectedValue: 'center', check: 'equals' },
    ],
    hints: [
      'place-items は align-items と justify-items の短縮形',
      'place-items: center で縦横中央',
    ],
  },
  // ==================== Grid 上級（追加） ====================
  {
    id: 'grid-12',
    title: 'フォトギャラリー',
    description: '異なるサイズの写真を配置するギャラリーを作りましょう。',
    category: 'grid',
    difficulty: 'advanced',
    htmlTemplate: `<div class="gallery">
  <div class="photo featured">Featured</div>
  <div class="photo">2</div>
  <div class="photo">3</div>
  <div class="photo">4</div>
  <div class="photo">5</div>
</div>`,
    initialCss: `.gallery {
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  background: #1e293b;
  /* 4列グリッド */
}

.photo {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
  min-height: 100px;
}

.featured {
  background: #ec4899;
  /* 2列x2行にまたがる */
}`,
    solutionCss: `.gallery {
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  background: #1e293b;
  grid-template-columns: repeat(4, 1fr);
}

.photo {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
  min-height: 100px;
}

.featured {
  background: #ec4899;
  grid-column: span 2;
  grid-row: span 2;
}`,
    validationRules: [
      { property: 'grid-template-columns', check: 'exists' },
      { property: 'grid-column', expectedValue: 'span 2', check: 'contains' },
      { property: 'grid-row', expectedValue: 'span 2', check: 'contains' },
    ],
    hints: [
      '4列グリッドを作成',
      '.featured に grid-column: span 2 と grid-row: span 2',
    ],
  },
  {
    id: 'grid-13',
    title: '雑誌風レイアウト',
    description: 'grid-template-areas で雑誌のような複雑なレイアウトを作りましょう。',
    category: 'grid',
    difficulty: 'advanced',
    htmlTemplate: `<div class="magazine">
  <article class="headline">大見出し記事</article>
  <article class="feature">特集記事</article>
  <aside class="sidebar">サイドバー</aside>
  <article class="story1">記事1</article>
  <article class="story2">記事2</article>
</div>`,
    initialCss: `.magazine {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  min-height: 400px;
  /* grid-template-areas でレイアウト */
}

.headline {
  background: #6366f1;
  color: white;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 8px;
}

.feature {
  background: #ec4899;
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
}

.sidebar {
  background: #1e293b;
  color: white;
  padding: 1rem;
  border-radius: 8px;
}

.story1, .story2 {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,
    solutionCss: `.magazine {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  min-height: 400px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "headline headline"
    "feature sidebar"
    "story1 story2";
}

.headline {
  background: #6366f1;
  color: white;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  grid-area: headline;
}

.feature {
  background: #ec4899;
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  grid-area: feature;
}

.sidebar {
  background: #1e293b;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  grid-area: sidebar;
}

.story1, .story2 {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.story1 { grid-area: story1; }
.story2 { grid-area: story2; }`,
    validationRules: [
      { property: 'grid-template-areas', check: 'exists' },
      { property: 'grid-area', check: 'exists' },
    ],
    hints: [
      'grid-template-areas で視覚的にレイアウトを定義',
      '各要素に grid-area で名前を割り当て',
      'grid-template-columns と grid-template-rows も設定',
    ],
  },
  {
    id: 'grid-14',
    title: 'サブグリッド風レイアウト',
    description: '入れ子のグリッドで親のグリッドラインに揃えましょう。',
    category: 'grid',
    difficulty: 'advanced',
    htmlTemplate: `<div class="parent">
  <div class="child">
    <div class="item">A</div>
    <div class="item">B</div>
  </div>
  <div class="child">
    <div class="item">C</div>
    <div class="item">D</div>
  </div>
</div>`,
    initialCss: `.parent {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  /* 2列グリッド */
}

.child {
  background: #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  /* 内部も2列グリッド */
}

.item {
  background: #6366f1;
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
}`,
    solutionCss: `.parent {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
  grid-template-columns: repeat(2, 1fr);
}

.child {
  background: #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.item {
  background: #6366f1;
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
}`,
    validationRules: [
      { property: 'grid-template-columns', check: 'exists' },
    ],
    hints: [
      '親も子も display: grid',
      '両方に grid-template-columns を設定',
    ],
  },
  // ==================== レスポンシブ 中級（追加） ====================
  {
    id: 'responsive-6',
    title: 'コンテナクエリ風',
    description: 'clamp()を使ってレスポンシブなフォントサイズを作りましょう。',
    category: 'responsive',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="container">
  <h1 class="title">レスポンシブタイトル</h1>
  <p class="text">画面幅に応じてフォントサイズが変化します。</p>
</div>`,
    initialCss: `.container {
  padding: 2rem;
  background: #f1f5f9;
}

.title {
  color: #1e293b;
  margin-bottom: 1rem;
  /* clamp()でレスポンシブに */
}

.text {
  color: #64748b;
  line-height: 1.6;
}`,
    solutionCss: `.container {
  padding: 2rem;
  background: #f1f5f9;
}

.title {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.text {
  color: #64748b;
  line-height: 1.6;
}`,
    validationRules: [
      { property: 'font-size', expectedValue: 'clamp', check: 'contains' },
    ],
    hints: [
      'clamp(最小値, 推奨値, 最大値)',
      'vw単位で画面幅に連動',
      'clamp(1.5rem, 4vw, 3rem)',
    ],
  },
  {
    id: 'responsive-7',
    title: 'アスペクト比の維持',
    description: 'aspect-ratioを使って16:9の動画コンテナを作りましょう。',
    category: 'responsive',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="video-container">
  <div class="video">16:9 動画エリア</div>
</div>`,
    initialCss: `.video-container {
  max-width: 800px;
  background: #1e293b;
  border-radius: 8px;
  overflow: hidden;
}

.video {
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  /* 16:9のアスペクト比 */
}`,
    solutionCss: `.video-container {
  max-width: 800px;
  background: #1e293b;
  border-radius: 8px;
  overflow: hidden;
}

.video {
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  aspect-ratio: 16 / 9;
}`,
    validationRules: [
      { property: 'aspect-ratio', expectedValue: '16', check: 'contains' },
    ],
    hints: [
      'aspect-ratio: 幅 / 高さ',
      'aspect-ratio: 16 / 9 で16:9比率',
    ],
  },
  // ==================== レスポンシブ 上級（追加） ====================
  {
    id: 'responsive-8',
    title: 'モバイルファースト',
    description: 'モバイルファーストでデスクトップ向けにスタイルを追加しましょう。',
    category: 'responsive',
    difficulty: 'advanced',
    htmlTemplate: `<div class="card-grid">
  <div class="card">カード1</div>
  <div class="card">カード2</div>
  <div class="card">カード3</div>
  <div class="card">カード4</div>
</div>`,
    initialCss: `/* モバイルファースト: 基本は1列 */
.card-grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
}

.card {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
}

/* 768px以上で2列 */

/* 1024px以上で4列 */`,
    solutionCss: `.card-grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f1f5f9;
}

.card {
  background: #6366f1;
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}`,
    validationRules: [
      { property: '@media', check: 'exists' },
      { property: 'min-width', check: 'exists' },
    ],
    hints: [
      'モバイルファーストは min-width を使う',
      '768px以上、1024px以上でブレークポイント',
    ],
  },
  {
    id: 'responsive-9',
    title: 'レスポンシブテーブル',
    description: 'モバイルでテーブルをカード形式に変換しましょう。',
    category: 'responsive',
    difficulty: 'advanced',
    htmlTemplate: `<table class="table">
  <thead>
    <tr>
      <th>名前</th>
      <th>役職</th>
      <th>部署</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="名前">田中太郎</td>
      <td data-label="役職">マネージャー</td>
      <td data-label="部署">開発部</td>
    </tr>
    <tr>
      <td data-label="名前">佐藤花子</td>
      <td data-label="役職">エンジニア</td>
      <td data-label="部署">開発部</td>
    </tr>
  </tbody>
</table>`,
    initialCss: `.table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.table th, .table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.table th {
  background: #6366f1;
  color: white;
}

.table tr:hover {
  background: #f1f5f9;
}

/* 600px以下でカード形式に */`,
    solutionCss: `.table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.table th, .table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.table th {
  background: #6366f1;
  color: white;
}

.table tr:hover {
  background: #f1f5f9;
}

@media (max-width: 600px) {
  .table thead {
    display: none;
  }

  .table tr {
    display: block;
    margin-bottom: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
  }

  .table td {
    display: block;
    text-align: right;
    border-bottom: 1px solid #e2e8f0;
  }

  .table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    color: #6366f1;
  }
}`,
    validationRules: [
      { property: '@media', check: 'exists' },
      { property: 'display', expectedValue: 'block', check: 'equals' },
      { property: 'content', expectedValue: 'attr', check: 'contains' },
    ],
    hints: [
      'thead を display: none で非表示',
      'tr と td を display: block に',
      '::before と attr() でラベルを表示',
    ],
  },
  {
    id: 'responsive-10',
    title: 'フルードタイポグラフィ',
    description: 'calc()とvwを組み合わせて滑らかに変化するフォントを作りましょう。',
    category: 'responsive',
    difficulty: 'advanced',
    htmlTemplate: `<div class="hero">
  <h1 class="hero-title">フルードタイポグラフィ</h1>
  <p class="hero-text">画面幅に応じて滑らかにサイズが変化します</p>
</div>`,
    initialCss: `.hero {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  text-align: center;
}

.hero-title {
  color: white;
  margin-bottom: 1rem;
  /* calc()でフルードフォント */
}

.hero-text {
  color: rgba(255,255,255,0.9);
  /* calc()でフルードフォント */
}`,
    solutionCss: `.hero {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  text-align: center;
}

.hero-title {
  color: white;
  margin-bottom: 1rem;
  font-size: calc(1.5rem + 2vw);
}

.hero-text {
  color: rgba(255,255,255,0.9);
  font-size: calc(1rem + 0.5vw);
}`,
    validationRules: [
      { property: 'font-size', expectedValue: 'calc', check: 'contains' },
      { property: 'font-size', expectedValue: 'vw', check: 'contains' },
    ],
    hints: [
      'calc(固定値 + vw値) で滑らかな変化',
      '例: calc(1.5rem + 2vw)',
    ],
  },
  // ==================== アニメーション 中級（追加） ====================
  {
    id: 'animation-7',
    title: 'スライドイン',
    description: '左からスライドインするアニメーションを作りましょう。',
    category: 'animation',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="slide-box">スライドイン</div>`,
    initialCss: `.slide-box {
  background: #6366f1;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  /* スライドインアニメーション */
}

/* @keyframes を定義 */`,
    solutionCss: `.slide-box {
  background: #6366f1;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}`,
    validationRules: [
      { property: 'animation', check: 'exists' },
      { property: '@keyframes', check: 'exists' },
      { property: 'translateX', check: 'exists' },
    ],
    hints: [
      'translateX(-100%) で画面外から',
      'opacity も 0 から 1 に',
    ],
  },
  {
    id: 'animation-8',
    title: 'シェイクアニメーション',
    description: 'エラー時のような左右に揺れるアニメーションを作りましょう。',
    category: 'animation',
    difficulty: 'intermediate',
    htmlTemplate: `<div class="shake-box">エラー！</div>`,
    initialCss: `.shake-box {
  background: #ef4444;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  /* シェイクアニメーション */
}

/* @keyframes を定義 */`,
    solutionCss: `.shake-box {
  background: #ef4444;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-10px); }
  40% { transform: translateX(10px); }
  60% { transform: translateX(-10px); }
  80% { transform: translateX(10px); }
}`,
    validationRules: [
      { property: 'animation', check: 'exists' },
      { property: '@keyframes', check: 'exists' },
      { property: 'translateX', check: 'exists' },
    ],
    hints: [
      '複数のキーフレームで左右に揺らす',
      '20%, 40%, 60%, 80% でポイント設定',
    ],
  },
  // ==================== アニメーション 上級（追加） ====================
  {
    id: 'animation-9',
    title: 'タイピングアニメーション',
    description: 'タイプライターのように文字が現れるアニメーションを作りましょう。',
    category: 'animation',
    difficulty: 'advanced',
    htmlTemplate: `<div class="typing">Hello, World!</div>`,
    initialCss: `.typing {
  font-family: monospace;
  font-size: 2rem;
  color: #1e293b;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #6366f1;
  width: 0;
  /* タイピングアニメーション */
}

/* @keyframes を定義 */`,
    solutionCss: `.typing {
  font-family: monospace;
  font-size: 2rem;
  color: #1e293b;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #6366f1;
  width: 0;
  animation: typing 2s steps(13) forwards, blink 0.7s step-end infinite;
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
    validationRules: [
      { property: 'animation', check: 'exists' },
      { property: '@keyframes', check: 'exists' },
      { property: 'steps', check: 'exists' },
    ],
    hints: [
      'width を 0 から文字数分に広げる',
      'steps() で段階的に',
      'ch単位は1文字の幅',
      'カーソルの点滅も追加',
    ],
  },
  {
    id: 'animation-10',
    title: '3D回転カード',
    description: 'ホバーで裏返る3Dカードを作りましょう。',
    category: 'animation',
    difficulty: 'advanced',
    htmlTemplate: `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">表面</div>
    <div class="flip-card-back">裏面</div>
  </div>
</div>`,
    initialCss: `.flip-card {
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
  /* Y軸で180度回転 */
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
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
  /* 裏面は最初から180度回転 */
}`,
    solutionCss: `.flip-card {
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
  font-size: 1.25rem;
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
    validationRules: [
      { property: 'transform', expectedValue: 'rotateY', check: 'contains' },
      { property: 'backface-visibility', expectedValue: 'hidden', check: 'equals' },
    ],
    hints: [
      'perspective で3D空間を作る',
      'transform-style: preserve-3d で子要素も3D',
      'backface-visibility: hidden で裏面を隠す',
      'rotateY(180deg) で回転',
    ],
  },
  {
    id: 'animation-11',
    title: 'グラデーションアニメーション',
    description: '動くグラデーション背景を作りましょう。',
    category: 'animation',
    difficulty: 'advanced',
    htmlTemplate: `<div class="gradient-bg">
  <h2>動くグラデーション</h2>
</div>`,
    initialCss: `.gradient-bg {
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  background: linear-gradient(-45deg, #6366f1, #ec4899, #f59e0b, #10b981);
  background-size: 400% 400%;
  border-radius: 12px;
  /* グラデーションアニメーション */
}

.gradient-bg h2 {
  margin: 0;
  font-size: 2rem;
}

/* @keyframes を定義 */`,
    solutionCss: `.gradient-bg {
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  background: linear-gradient(-45deg, #6366f1, #ec4899, #f59e0b, #10b981);
  background-size: 400% 400%;
  border-radius: 12px;
  animation: gradient 10s ease infinite;
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
    validationRules: [
      { property: 'animation', check: 'exists' },
      { property: '@keyframes', check: 'exists' },
      { property: 'background-position', check: 'exists' },
    ],
    hints: [
      'background-size を大きく（400% 400%）',
      'background-position をアニメーション',
      '0% → 100% → 0% でループ',
    ],
  },
  {
    id: 'animation-12',
    title: 'ローディングドット',
    description: '3つのドットが波打つローディングアニメーションを作りましょう。',
    category: 'animation',
    difficulty: 'advanced',
    htmlTemplate: `<div class="loading">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,
    initialCss: `.loading {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  background: #6366f1;
  border-radius: 50%;
  /* アニメーション */
}

.dot:nth-child(2) {
  /* 遅延 */
}

.dot:nth-child(3) {
  /* 遅延 */
}

/* @keyframes を定義 */`,
    solutionCss: `.loading {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  background: #6366f1;
  border-radius: 50%;
  animation: wave 1s ease-in-out infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes wave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}`,
    validationRules: [
      { property: 'animation', check: 'exists' },
      { property: '@keyframes', check: 'exists' },
      { property: 'animation-delay', check: 'exists' },
    ],
    hints: [
      'translateY で上下に動かす',
      'animation-delay で各ドットをずらす',
      ':nth-child() で個別に指定',
    ],
  },
];

export function getExercisesByCategory(category: string): Exercise[] {
  return exercises.filter((e) => e.category === category);
}

export function getExerciseById(id: string): Exercise | undefined {
  return exercises.find((e) => e.id === id);
}
