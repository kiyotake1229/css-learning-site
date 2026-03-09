export const cheatsheet = [
  {
    category: 'セレクタ',
    items: [
      { name: '要素セレクタ', syntax: 'p { }', desc: 'すべての<p>要素' },
      { name: 'クラスセレクタ', syntax: '.class { }', desc: 'class属性を持つ要素' },
      { name: 'IDセレクタ', syntax: '#id { }', desc: 'id属性を持つ要素（ページで一意）' },
      { name: '全称セレクタ', syntax: '* { }', desc: 'すべての要素' },
      { name: '子孫結合子', syntax: 'div p { }', desc: 'div内のすべてのp' },
      { name: '子結合子', syntax: 'ul > li { }', desc: 'ulの直接の子li' },
      { name: '隣接兄弟', syntax: 'h1 + p { }', desc: 'h1の直後のp' },
      { name: '属性セレクタ', syntax: 'a[href] { }', desc: 'href属性を持つa' },
      { name: '属性値セレクタ', syntax: 'input[type="text"] { }', desc: 'type=textのinput' },
      { name: '前方一致', syntax: 'a[href^="https"] { }', desc: 'hrefがhttpsで始まるa' },
    ]
  },
  {
    category: 'ボックスモデル',
    items: [
      { name: 'width / height', syntax: 'width: 200px;', desc: 'コンテンツの幅・高さ' },
      { name: 'max-width', syntax: 'max-width: 1200px;', desc: '最大幅' },
      { name: 'margin', syntax: 'margin: 10px 20px;', desc: '外側の余白（上下 左右）' },
      { name: 'margin auto', syntax: 'margin: 0 auto;', desc: '水平中央揃え（block要素）' },
      { name: 'padding', syntax: 'padding: 16px;', desc: '内側の余白（全方向）' },
      { name: 'border', syntax: 'border: 1px solid #333;', desc: '境界線' },
      { name: 'border-radius', syntax: 'border-radius: 8px;', desc: '角丸' },
      { name: 'box-sizing', syntax: 'box-sizing: border-box;', desc: 'padding・borderをwidthに含める' },
      { name: 'box-shadow', syntax: 'box-shadow: 0 4px 16px rgba(0,0,0,0.1);', desc: '影' },
      { name: 'outline', syntax: 'outline: 2px solid blue;', desc: '枠線（レイアウトに影響しない）' },
    ]
  },
  {
    category: 'テキスト・フォント',
    items: [
      { name: 'font-family', syntax: "font-family: 'Helvetica', sans-serif;", desc: 'フォントの種類' },
      { name: 'font-size', syntax: 'font-size: 1rem;', desc: 'フォントサイズ' },
      { name: 'font-weight', syntax: 'font-weight: 700;', desc: '太さ（100〜900）' },
      { name: 'font-style', syntax: 'font-style: italic;', desc: '斜体' },
      { name: 'line-height', syntax: 'line-height: 1.6;', desc: '行間（単位なし推奨）' },
      { name: 'letter-spacing', syntax: 'letter-spacing: 0.05em;', desc: '字間' },
      { name: 'text-align', syntax: 'text-align: center;', desc: 'テキスト揃え' },
      { name: 'text-decoration', syntax: 'text-decoration: none;', desc: '下線など' },
      { name: 'text-transform', syntax: 'text-transform: uppercase;', desc: '大文字変換' },
      { name: 'text-overflow', syntax: 'text-overflow: ellipsis;', desc: '省略（...）' },
      { name: 'white-space', syntax: 'white-space: nowrap;', desc: '折り返し制御' },
      { name: 'word-break', syntax: 'word-break: break-all;', desc: '単語の途中で折り返し' },
    ]
  },
  {
    category: 'カラー・背景',
    items: [
      { name: 'color', syntax: 'color: #2563eb;', desc: 'テキストの色' },
      { name: 'background-color', syntax: 'background-color: rgba(0,0,0,0.5);', desc: '背景色' },
      { name: 'background-image', syntax: "background-image: url('img.png');", desc: '背景画像' },
      { name: 'background-size', syntax: 'background-size: cover;', desc: '背景画像のサイズ' },
      { name: 'background-position', syntax: 'background-position: center;', desc: '背景画像の位置' },
      { name: 'linear-gradient', syntax: 'background: linear-gradient(to right, #a, #b);', desc: '線形グラデーション' },
      { name: 'opacity', syntax: 'opacity: 0.8;', desc: '要素全体の透明度' },
    ]
  },
  {
    category: 'Flexbox',
    items: [
      { name: 'display: flex', syntax: 'display: flex;', desc: 'Flexコンテナを作成' },
      { name: 'flex-direction', syntax: 'flex-direction: row;', desc: '主軸の方向（row|column）' },
      { name: 'justify-content', syntax: 'justify-content: space-between;', desc: '主軸方向の揃え' },
      { name: 'align-items', syntax: 'align-items: center;', desc: '交差軸方向の揃え' },
      { name: 'align-self', syntax: 'align-self: flex-end;', desc: '個別の交差軸揃え' },
      { name: 'flex-wrap', syntax: 'flex-wrap: wrap;', desc: '折り返し' },
      { name: 'gap', syntax: 'gap: 16px;', desc: 'アイテム間の隙間' },
      { name: 'flex', syntax: 'flex: 1;', desc: 'grow shrink basisの省略形' },
      { name: 'order', syntax: 'order: 2;', desc: '表示順序（デフォルト0）' },
    ]
  },
  {
    category: 'CSS Grid',
    items: [
      { name: 'display: grid', syntax: 'display: grid;', desc: 'Gridコンテナを作成' },
      { name: 'grid-template-columns', syntax: 'grid-template-columns: repeat(3, 1fr);', desc: '列の定義' },
      { name: 'grid-template-rows', syntax: 'grid-template-rows: auto 1fr;', desc: '行の定義' },
      { name: 'grid-template-areas', syntax: 'grid-template-areas: "h h" "s m";', desc: '名前付き領域' },
      { name: 'grid-area', syntax: 'grid-area: header;', desc: '領域への配置' },
      { name: 'grid-column', syntax: 'grid-column: 1 / 3;', desc: '列の開始/終了' },
      { name: 'grid-row', syntax: 'grid-row: span 2;', desc: '行をまたぐ' },
      { name: 'gap', syntax: 'gap: 16px;', desc: 'グリッドの隙間' },
    ]
  },
  {
    category: 'position',
    items: [
      { name: 'static', syntax: 'position: static;', desc: 'デフォルト（フローに従う）' },
      { name: 'relative', syntax: 'position: relative;', desc: '通常位置を基準にずらす' },
      { name: 'absolute', syntax: 'position: absolute;', desc: '最近のposition付き祖先を基準' },
      { name: 'fixed', syntax: 'position: fixed;', desc: 'ビューポートを基準（スクロール不変）' },
      { name: 'sticky', syntax: 'position: sticky; top: 0;', desc: 'スクロール追従+固定' },
      { name: 'top / right / bottom / left', syntax: 'top: 16px;', desc: '配置のオフセット' },
      { name: 'z-index', syntax: 'z-index: 100;', desc: '重なり順（数値が大きいほど前面）' },
    ]
  },
  {
    category: 'トランジション・アニメーション',
    items: [
      { name: 'transition', syntax: 'transition: all 0.3s ease;', desc: 'プロパティ変化のアニメーション' },
      { name: 'transition-delay', syntax: 'transition-delay: 0.1s;', desc: '遅延時間' },
      { name: 'animation', syntax: 'animation: name 1s ease infinite;', desc: '@keyframesアニメーション' },
      { name: '@keyframes', syntax: '@keyframes name { from{} to{} }', desc: 'アニメーションの定義' },
      { name: 'animation-iteration-count', syntax: 'animation-iteration-count: infinite;', desc: 'ループ回数' },
      { name: 'animation-direction', syntax: 'animation-direction: alternate;', desc: '往復アニメーション' },
    ]
  },
  {
    category: 'transform',
    items: [
      { name: 'translate', syntax: 'transform: translate(20px, -10px);', desc: 'XY移動' },
      { name: 'scale', syntax: 'transform: scale(1.5);', desc: '拡大縮小' },
      { name: 'rotate', syntax: 'transform: rotate(45deg);', desc: '回転' },
      { name: 'skew', syntax: 'transform: skewX(15deg);', desc: '傾斜' },
      { name: 'transform-origin', syntax: 'transform-origin: top left;', desc: '変形の基点' },
      { name: 'clip-path', syntax: 'clip-path: circle(50%);', desc: '形状クリッピング' },
    ]
  },
  {
    category: 'CSS変数・関数',
    items: [
      { name: 'カスタムプロパティ定義', syntax: '--primary: #2563eb;', desc: ':root内で定義' },
      { name: 'var()', syntax: 'color: var(--primary);', desc: '変数の参照' },
      { name: 'var() フォールバック', syntax: 'color: var(--x, #333);', desc: '未定義時のデフォルト値' },
      { name: 'calc()', syntax: 'width: calc(100% - 32px);', desc: '計算式（異なる単位も可）' },
      { name: 'clamp()', syntax: 'font-size: clamp(1rem, 2vw, 2rem);', desc: '最小・最大値付き可変値' },
      { name: 'min() / max()', syntax: 'width: min(500px, 90%);', desc: '二値の小さい/大きい方' },
    ]
  },
  {
    category: '擬似クラス・擬似要素',
    items: [
      { name: ':hover', syntax: 'a:hover { }', desc: 'マウスオーバー時' },
      { name: ':focus', syntax: 'input:focus { }', desc: 'フォーカス時' },
      { name: ':active', syntax: 'button:active { }', desc: 'クリック中' },
      { name: ':nth-child(n)', syntax: 'li:nth-child(2) { }', desc: 'n番目の子要素' },
      { name: ':first-child / :last-child', syntax: 'li:first-child { }', desc: '最初/最後の子' },
      { name: ':not()', syntax: 'p:not(.special) { }', desc: 'セレクタに一致しない要素' },
      { name: '::before / ::after', syntax: '.el::before { content: ""; }', desc: '前後に仮想要素を追加' },
      { name: '::placeholder', syntax: 'input::placeholder { }', desc: 'プレースホルダー' },
      { name: '::selection', syntax: '::selection { background: yellow; }', desc: '選択テキスト' },
    ]
  },
  {
    category: 'メディアクエリ',
    items: [
      { name: 'min-width（モバイルファースト）', syntax: '@media (min-width: 768px) { }', desc: '768px以上に適用' },
      { name: 'max-width（デスクトップファースト）', syntax: '@media (max-width: 767px) { }', desc: '767px以下に適用' },
      { name: 'orientation', syntax: '@media (orientation: landscape) { }', desc: '横向き時' },
      { name: 'prefers-color-scheme', syntax: '@media (prefers-color-scheme: dark) { }', desc: 'ダークモード時' },
      { name: 'print', syntax: '@media print { }', desc: '印刷時' },
    ]
  },
  {
    category: 'SCSS変数・ネスト',
    items: [
      { name: '変数定義', syntax: '$primary: #2563eb;', desc: '再利用可能な値を定義' },
      { name: 'ネスト', syntax: '.nav { a { color: $primary; } }', desc: 'セレクタのネスト' },
      { name: '親セレクタ &', syntax: '&:hover { }  &.active { }', desc: '親セレクタへの参照（疑似クラス・BEMに活用）' },
      { name: 'BEMネスト', syntax: '.block { &__elem { } &--mod { } }', desc: 'BEM命名をネストで表現' },
      { name: '!default フラグ', syntax: '$color: blue !default;', desc: '未定義の場合のみ代入' },
      { name: 'null チェック', syntax: '@if $var != null { }', desc: '変数がnullでないとき適用' },
    ]
  },
  {
    category: 'SCSSミックスイン・関数',
    items: [
      { name: '@mixin定義', syntax: '@mixin flex-center { display: flex; }', desc: 'スタイルのまとまりを定義' },
      { name: '@include', syntax: '@include flex-center;', desc: 'ミックスインを適用' },
      { name: '引数付き@mixin', syntax: '@mixin btn($bg: blue) { }', desc: 'デフォルト値付き引数' },
      { name: '@content', syntax: '@mixin tablet { @media(min-width:768px) { @content; } }', desc: 'ミックスインにブロックを渡す' },
      { name: '@function', syntax: '@function rem($px) { @return $px / 16px * 1rem; }', desc: 'カスタム関数の定義（値を返す）' },
      { name: 'darken / lighten', syntax: 'darken($color, 10%)', desc: '色を暗く/明るくする' },
      { name: 'mix()', syntax: 'mix(white, $primary, 60%)', desc: '2色を混合（第3引数は比率）' },
      { name: 'rgba()', syntax: 'rgba($color, 0.5)', desc: 'SCSS変数からrgba値を生成' },
    ]
  },
  {
    category: 'SCSS継承・フロー制御',
    items: [
      { name: '@extend', syntax: '@extend .class-name;', desc: '他セレクタのスタイルを継承' },
      { name: 'プレースホルダー', syntax: '%flex-center { display: flex; }', desc: 'CSS非出力の継承元（%で定義）' },
      { name: '@if / @else', syntax: '@if $theme == dark { } @else { }', desc: '条件分岐' },
      { name: '@each（リスト）', syntax: '@each $item in red, blue, green { }', desc: 'リストを反復' },
      { name: '@each（マップ）', syntax: '@each $k, $v in $map { }', desc: 'マップを反復（key-value）' },
      { name: '@for through', syntax: '@for $i from 1 through 5 { }', desc: '1〜5まで（5を含む）反復' },
      { name: '@for to', syntax: '@for $i from 1 to 5 { }', desc: '1〜4まで（5を含まない）反復' },
      { name: '補間 #{}', syntax: '.col-#{$i} { }', desc: '変数をセレクタや文字列に埋め込む' },
      { name: '@use', syntax: "@use 'sass:math';", desc: '組み込みモジュールのインポート' },
      { name: 'math.div()', syntax: 'math.div(10px, 2)', desc: '除算（新構文）' },
    ]
  },
]
