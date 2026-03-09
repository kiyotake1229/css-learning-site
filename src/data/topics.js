export const topics = [
  // ===== 初級 =====
  {
    id: 'selectors',
    title: 'セレクタ',
    level: 'beginner',
    description: 'CSSセレクタを使って、HTMLの特定の要素にスタイルを適用する方法を学びます。',
    explanation: `## CSSセレクタとは

CSSセレクタは、スタイルを適用したいHTML要素を指定するためのパターンです。

### 要素セレクタ
タグ名で要素を選択します。
\`\`\`css
p { color: blue; }
h1 { font-size: 2rem; }
\`\`\`

### クラスセレクタ
\`.クラス名\` で選択します。複数の要素に同じスタイルを適用できます。
\`\`\`css
.highlight { background: yellow; }
\`\`\`

### IDセレクタ
\`#ID名\` で選択します。ページ内で一意の要素に使います。
\`\`\`css
#header { background: #333; }
\`\`\`

### 属性セレクタ
属性の値で要素を選択します。
\`\`\`css
input[type="text"] { border: 1px solid #ccc; }
a[href^="https"] { color: green; }
\`\`\`

### 結合子
- 子孫結合子（スペース）: \`div p\` — div内のすべてのp
- 子結合子（>）: \`ul > li\` — ulの直接の子のli
- 隣接兄弟（+）: \`h1 + p\` — h1の直後のp
`,
    demoCode: {
      html: `<h1 id="title">タイトル（IDセレクタ）</h1>
<p class="highlight">ハイライト段落（クラスセレクタ）</p>
<p>通常の段落（要素セレクタ）</p>
<a href="https://example.com">HTTPS リンク</a>
<a href="http://example.com">HTTP リンク</a>
<ul>
  <li>リスト項目 1</li>
  <li class="highlight">リスト項目 2（ハイライト）</li>
  <li>リスト項目 3</li>
</ul>`,
      css: `/* 要素セレクタ */
p {
  color: #333;
  line-height: 1.6;
}

/* IDセレクタ */
#title {
  color: #2563eb;
  border-bottom: 3px solid #2563eb;
  padding-bottom: 8px;
}

/* クラスセレクタ */
.highlight {
  background: #fef9c3;
  padding: 4px 8px;
  border-radius: 4px;
}

/* 属性セレクタ */
a[href^="https"] {
  color: #16a34a;
  font-weight: bold;
}

a[href^="http:"] {
  color: #dc2626;
}

/* 子結合子 */
ul > li {
  margin: 4px 0;
  list-style: square;
}`
    },
    quiz: [
      {
        question: 'クラス名 "box" を持つ要素を選択するCSSセレクタはどれですか？',
        options: ['#box', '.box', 'box', '*box'],
        answer: 1,
        hint: 'クラスセレクタは `.クラス名`、IDセレクタは `#ID名` で指定します。',
        advice: '複数クラスの組み合わせ `.box.highlight` も有効です。特異性（specificity）はID:100点、クラス:10点、要素:1点で計算されます。'
      },
      {
        question: 'IDセレクタを使う場合のプレフィックスはどれですか？',
        options: ['.', '#', '@', '$'],
        answer: 1,
        hint: 'IDは `#`、クラスは `.` です。IDはページ内で一意の要素に使います。',
        advice: 'IDセレクタは特異性が高く上書きが難しくなるため、実務ではクラスで統一してIDはJavaScript用途に限定するのが一般的です。'
      },
      {
        question: '`ul > li` の結合子は何を意味しますか？',
        options: [
          'ulの子孫すべてのli',
          'ulの直接の子であるli',
          'ulの後に来るli',
          'ulと同じ親を持つli'
        ],
        answer: 1,
        hint: '`>` は子結合子で直接の子のみ対象です。スペースの子孫結合子と区別しましょう。',
        advice: '`~`（一般兄弟）を使うと後続のすべての兄弟要素も選べます。チェックボックスと連動したスタイリングにも活用できます。'
      },
      {
        question: 'type属性がtextのinput要素を選択するセレクタはどれですか？',
        options: ['input.text', 'input#text', 'input[type="text"]', 'input:text'],
        answer: 2,
        hint: '属性セレクタは `[属性名="値"]` の形式で書きます。',
        advice: '`^=`（前方一致）・`$=`（後方一致）・`*=`（部分一致）の3種類もあります。`a[href^="https"]` でHTTPS リンクだけにスタイルを当てられます。'
      },
      {
        question: '`h1 + p` セレクタが選択する要素はどれですか？',
        options: ['h1の直前にあるp', 'h1の直後に隣接するp', 'h1の子孫のp', 'h1と同じ親を持つ全てのp'],
        answer: 1,
        hint: '+ は隣接兄弟セレクタで、直後の1つの兄弟要素だけを選択します。~ は後続の全兄弟を選択します。',
        advice: '`~`（一般兄弟）と組み合わせると「見出しの後の段落をすべて選択」など文書構造に連動したスタイルが書けます。'
      }
    ],
    challenge: {
      description: 'セレクタを使ってメニューをスタイリング',
      taskDescription: 'CSSセレクタを活用して、お手本と同じナビゲーションメニューを作ってください。',
      targetHtml: `<nav class="nav">
  <ul class="menu">
    <li><a href="#">ホーム</a></li>
    <li><a href="#">プロフィール</a></li>
    <li><a href="#">作品集</a></li>
    <li class="danger"><a href="#">ログアウト</a></li>
  </ul>
</nav>`,
      targetCss: `.nav {
  max-width: 260px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}
.menu {
  list-style: none;
}
.menu li {
  border-bottom: 1px solid #f1f5f9;
}
.menu li:last-child {
  border-bottom: none;
}
.menu a {
  display: block;
  padding: 12px 20px;
  color: #374151;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
}
.menu a:hover {
  background: #eff6ff;
  color: #2563eb;
}
.danger a {
  color: #dc2626;
}`,
      initialHtml: `<nav class="nav">
  <ul class="menu">
    <li><a href="#">ホーム</a></li>
    <li><a href="#">プロフィール</a></li>
    <li><a href="#">作品集</a></li>
    <li class="danger"><a href="#">ログアウト</a></li>
  </ul>
</nav>`,
      initialCss: `/* セレクタを使ってメニューをスタイリングしましょう */
.nav {
  /* max-width, border, border-radius, overflow, background */
}
.menu {
  /* list-style */
}
/* リストアイテムに下線を追加 */
.menu li {

}
/* 最後の項目の下線を消す（:last-child を使用）*/
.menu li:last-child {

}
/* リンクのスタイル（display: block で余白を有効に）*/
.menu a {

}
/* ホバー時の背景色と文字色 */
.menu a:hover {

}
/* .danger クラスは赤色に */
.danger a {

}`,
      hints: [
        '`.menu li:last-child` で最後のリストアイテムを選択できます',
        '`.menu a { display: block; }` にするとパディングがリンク全体に適用されます',
        'ホバー効果は `.menu a:hover { background: #eff6ff; color: #2563eb; }` で実現できます',
        '`.danger a` でクラスと要素を組み合わせたセレクタが使えます'
      ]
    }
  },
  {
    id: 'box-model',
    title: 'ボックスモデル',
    level: 'beginner',
    diagram: 'box-model',
    description: 'CSSのボックスモデルを理解して、margin・padding・borderを使いこなします。',
    explanation: `## CSSボックスモデル

HTMLの全要素は「ボックス」として扱われます。ボックスモデルは内側から：

1. **content** — テキストや画像などの実際のコンテンツ
2. **padding** — コンテンツとborderの間の余白
3. **border** — paddingの外側の境界線
4. **margin** — borderの外側の余白（他の要素との間隔）

### box-sizing
デフォルト（\`content-box\`）では、\`width\`はcontentのみのサイズです。
\`border-box\`に設定すると、\`width\`にpadding+borderが含まれ、レイアウトが直感的になります。

\`\`\`css
* {
  box-sizing: border-box; /* 推奨設定 */
}
\`\`\`

### shorthand記法
\`\`\`css
/* 上下 左右 */
margin: 10px 20px;

/* 上 右 下 左（時計回り）*/
padding: 10px 20px 30px 40px;

/* border: 太さ スタイル 色 */
border: 2px solid #333;
\`\`\`
`,
    demoCode: {
      html: `<div class="box content-box">
  <p>content-box（デフォルト）</p>
  <small>width: 200px + padding 20px + border 4px = 244px</small>
</div>

<div class="box border-box">
  <p>border-box（推奨）</p>
  <small>width: 200px（padding・border含む）</small>
</div>

<div class="margin-demo">
  <div class="inner">margin / padding デモ</div>
</div>`,
      css: `.box {
  width: 200px;
  padding: 20px;
  border: 4px solid #2563eb;
  margin-bottom: 16px;
  background: #eff6ff;
  font-size: 14px;
}

.content-box {
  box-sizing: content-box;
  background: #fef2f2;
  border-color: #ef4444;
}

.border-box {
  box-sizing: border-box;
  background: #f0fdf4;
  border-color: #22c55e;
}

.margin-demo {
  background: #fde68a;
  padding: 20px;
  margin: 16px 0;
}

.inner {
  background: #2563eb;
  color: white;
  padding: 16px 24px;
  margin: 8px;
  border: 3px dashed #93c5fd;
  border-radius: 8px;
}`
    },
    quiz: [
      {
        question: 'ボックスモデルの外側から順番として正しいのはどれですか？',
        options: [
          'margin → border → padding → content',
          'content → padding → border → margin',
          'border → margin → content → padding',
          'padding → content → margin → border'
        ],
        answer: 0,
        hint: '外側から margin・border・padding・content の順です。図で覚えると分かりやすいです。',
        advice: 'DevToolsのElements → Computedパネルでボックスモデルを視覚的に確認できます。実際の計算値のデバッグに活用しましょう。'
      },
      {
        question: '`box-sizing: border-box` の効果として正しいのはどれですか？',
        options: [
          'marginをwidthに含める',
          'padding・borderをwidthに含める',
          'contentのみをwidthとする',
          'すべての余白を0にする'
        ],
        answer: 1,
        hint: 'border-box ではwidthにpaddingとborderが含まれます。デフォルトのcontent-boxはcontentのみです。',
        advice: '実務では `*, *::before, *::after { box-sizing: border-box }` をリセットCSSに書くのが定番です。width計算が直感的になります。'
      },
      {
        question: '`margin: 10px 20px` は何を意味しますか？',
        options: [
          '上下10px、左右20px',
          '上20px、左右10px',
          '全方向15px',
          '上10px、右20px'
        ],
        answer: 0,
        hint: '値が2つの場合、最初が上下、2番目が左右です。時計回りに覚えましょう。',
        advice: '3値の場合は「上・左右・下」の順です。shorthandを使うと記述が簡潔になりますが、1方向だけ変えるときは `margin-top: 8px` のような個別指定が読みやすいです。'
      },
      {
        question: '`margin: 0 auto` の主な用途はどれですか？',
        options: [
          'マージンを全て0にする',
          'width が指定されたブロック要素を水平中央揃えにする',
          '要素を画面上部に固定する',
          '上下の余白を自動計算する'
        ],
        answer: 1,
        hint: 'auto は残りの余白を左右で均等に分配します。width が指定されたブロック要素に使います。',
        advice: 'Flexboxの場合は `margin: auto` だけで縦横中央揃えができます。`justify-content: center` と `align-items: center` の代わりに使えます。'
      },
      {
        question: '`border: 2px solid #333` の "solid" が意味するものはどれですか？',
        options: ['境界線の太さ', '境界線の色', '境界線のスタイル（実線）', '境界線の不透明度'],
        answer: 2,
        hint: 'border のショートハンドは「太さ スタイル 色」の順です。スタイルには solid・dashed・dotted・double などがあります。',
        advice: '`outline` はボックスモデルの外側に描かれレイアウトに影響しません。フォーカスリングを独自デザインにする際に `outline` を活用しましょう。'
      }
    ],
    challenge: {
      description: 'ボックスモデルでプロフィールカードを作ろう',
      taskDescription: 'margin・padding・border・border-radiusを組み合わせて、お手本と同じプロフィールカードを作ってください。',
      targetHtml: `<div class="card">
  <div class="avatar"></div>
  <h2 class="name">田中 太郎</h2>
  <p class="role">フロントエンドエンジニア</p>
  <p class="bio">Webの可能性を追い求めて日々コーディング中。</p>
</div>`,
      targetCss: `.card {
  width: 260px;
  margin: 0 auto;
  padding: 32px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  margin: 0 auto 16px;
}
.name {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}
.role {
  font-size: 0.82rem;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 12px;
}
.bio {
  font-size: 0.88rem;
  color: #64748b;
  line-height: 1.6;
}`,
      initialHtml: `<div class="card">
  <div class="avatar"></div>
  <h2 class="name">田中 太郎</h2>
  <p class="role">フロントエンドエンジニア</p>
  <p class="bio">Webの可能性を追い求めて日々コーディング中。</p>
</div>`,
      initialCss: `/* ボックスモデルを使ってプロフィールカードを作りましょう */
.card {
  /* width, margin, padding, border, border-radius */
  /* text-align, box-shadow */
}
.avatar {
  /* width, height で正方形に */
  /* border-radius: 50% で円形に */
  /* background でグラデーション */
  /* margin で中央揃え */
}
.name {
  /* font-size, font-weight, color, margin-bottom */
}
.role {
  /* font-size, color, font-weight, margin-bottom */
}
.bio {
  /* font-size, color, line-height */
}`,
      hints: [
        '`margin: 0 auto` でブロック要素を水平中央揃えできます',
        '`border-radius: 50%` で正方形の要素を円形にできます',
        '`box-shadow: 0 4px 24px rgba(0,0,0,0.08)` で柔らかい影をつけられます',
        '`padding: 32px 24px` は上下32px・左右24pxを意味します'
      ]
    }
  },
  {
    id: 'colors',
    title: 'カラーと背景',
    level: 'beginner',
    description: 'CSSのカラー指定方法と、背景プロパティを学びます。',
    explanation: `## CSSのカラー指定

### カラー指定の方法
1. **名前**: \`red\`, \`blue\`, \`transparent\` など
2. **HEX**: \`#ff0000\`（6桁）, \`#f00\`（3桁省略形）
3. **RGB**: \`rgb(255, 0, 0)\`
4. **RGBA**: \`rgba(255, 0, 0, 0.5)\`（透明度付き）
5. **HSL**: \`hsl(0, 100%, 50%)\`（色相・彩度・明度）
6. **HSLA**: \`hsla(0, 100%, 50%, 0.5)\`

### 背景プロパティ
\`\`\`css
.element {
  background-color: #f0f0f0;
  background-image: url('image.png');
  background-repeat: no-repeat;   /* repeat | repeat-x | repeat-y */
  background-position: center;
  background-size: cover;         /* contain | auto | px */
}

/* グラデーション */
background: linear-gradient(to right, #667eea, #764ba2);
background: radial-gradient(circle, #f0f0f0, #333);
\`\`\`
`,
    demoCode: {
      html: `<div class="color-swatches">
  <div class="swatch hex">HEX #2563eb</div>
  <div class="swatch rgb">RGB</div>
  <div class="swatch rgba">RGBA</div>
  <div class="swatch hsl">HSL</div>
</div>

<div class="gradient-linear">線形グラデーション</div>
<div class="gradient-radial">放射グラデーション</div>
<div class="bg-demo">背景プロパティ</div>`,
      css: `.color-swatches {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.swatch {
  padding: 12px 16px;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
}

.hex { background-color: #2563eb; }
.rgb { background-color: rgb(220, 38, 38); }
.rgba { background-color: rgba(22, 163, 74, 0.8); color: white; }
.hsl { background-color: hsl(280, 70%, 50%); }

.gradient-linear {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-weight: bold;
  text-align: center;
}

.gradient-radial {
  background: radial-gradient(circle at center, #fbbf24, #ef4444);
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-weight: bold;
  text-align: center;
}

.bg-demo {
  background-color: #1e293b;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255,255,255,0.05) 10px,
    rgba(255,255,255,0.05) 20px
  );
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}`
    },
    quiz: [
      {
        question: 'RGBAのAは何を表しますか？',
        options: ['Angle（角度）', 'Alpha（透明度）', 'Area（範囲）', 'Aspect（比率）'],
        answer: 1,
        hint: 'Alpha（アルファ）は不透明度を表し、0が完全透明、1が完全不透明です。',
        advice: '`rgba()` の代わりに8桁HEX `#2563ebcc` でも透明度を指定できます。`cc` は16進数で 204 = 約80%の不透明度です。'
      },
      {
        question: '背景画像を縦横比を保ちながら要素全体を覆うように設定するプロパティ値はどれですか？',
        options: ['background-size: full', 'background-size: cover', 'background-size: contain', 'background-size: stretch'],
        answer: 1,
        hint: 'cover は要素全体を覆い（はみ出しあり）、contain は全体が収まるように縮小します。',
        advice: 'coverとcontainは迷いやすいです。「覆いたい」→cover、「全体を見せたい」→contain と覚えましょう。ECサイトの商品画像によく使われます。'
      },
      {
        question: 'HSLのLは何を表しますか？',
        options: ['Linear（線形）', 'Layer（層）', 'Lightness（明度）', 'Limit（制限）'],
        answer: 2,
        hint: 'HSLはHue（色相）・Saturation（彩度）・Lightness（明度）の頭文字です。',
        advice: 'Lを50%固定にしてHだけ変えると、同じ明るさの色違いを簡単に作れます。ブランドカラーのバリエーション生成に便利です。'
      },
      {
        question: '#ff0000 を3桁の短縮形HEXで書くとどれですか？',
        options: ['#f00', '#ff0', '#f000', '#f0f'],
        answer: 0,
        hint: '3桁HEXは各色の2桁が同じ値のとき省略できます。#ff0000 → #f00、#00ff00 → #0f0 のように変換します。',
        advice: '3桁HEXは6桁の半分のバイト数で書けます。ただし同じ2桁のペアでないと短縮できないので、#ff3300は#f30に、#ff3311は短縮できません。'
      },
      {
        question: '`linear-gradient(90deg, red, blue)` の角度90degはどの方向ですか？',
        options: ['上から下', '左から右', '右から左', '斜め45度'],
        answer: 1,
        hint: '0deg は下から上、90deg は左から右（to right と同じ）、180deg は上から下です。',
        advice: '`to right`、`to bottom right`（斜め）など方向キーワードも使えます。直感的には `to right` のキーワード指定の方が読みやすいコードになります。'
      }
    ]
  },
  {
    id: 'typography',
    title: 'テキストとフォント',
    level: 'beginner',
    description: 'フォントの種類・サイズ・太さ・行間など、テキストに関するCSSプロパティを学びます。',
    explanation: `## テキストとフォント

### フォント関連
\`\`\`css
.text {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;       /* em, rem, % も使用可 */
  font-weight: 700;      /* 100〜900 or bold/normal */
  font-style: italic;    /* normal | italic | oblique */
  line-height: 1.6;      /* 行間（単位なし推奨）*/
  letter-spacing: 0.05em; /* 字間 */
}
\`\`\`

### テキスト整形
\`\`\`css
.text {
  text-align: center;    /* left | right | justify */
  text-decoration: underline; /* none | line-through */
  text-transform: uppercase;  /* lowercase | capitalize */
  text-indent: 1em;      /* 段落の字下げ */
  white-space: nowrap;   /* テキストの折り返し制御 */
  overflow: hidden;
  text-overflow: ellipsis; /* はみ出しを...で省略 */
}
\`\`\`

### Web Fonts（Google Fonts）
\`\`\`html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
\`\`\`
`,
    demoCode: {
      html: `<p class="base">通常テキスト: The quick brown fox.</p>
<p class="large-bold">大きく太く: font-size 24px, weight 700</p>
<p class="italic">斜体: font-style italic</p>
<p class="spaced">字間広め: letter-spacing 0.15em</p>
<p class="center">中央揃え: text-align center</p>
<p class="uppercase">大文字変換: text-transform uppercase</p>
<p class="ellipsis">テキストオーバーフロー省略: これは非常に長いテキストで、要素からはみ出した場合に...で省略されます</p>
<p class="line-height">行間の調整: line-height 2.0。改行をいれると<br>行間の広さが確認できます。二行目のテキスト。</p>`,
      css: `p {
  margin-bottom: 12px;
  font-size: 16px;
  color: #1e293b;
}

.large-bold {
  font-size: 24px;
  font-weight: 700;
  color: #2563eb;
}

.italic {
  font-style: italic;
  color: #7c3aed;
}

.spaced {
  letter-spacing: 0.15em;
  font-size: 18px;
}

.center {
  text-align: center;
  border: 1px dashed #94a3b8;
  padding: 8px;
}

.uppercase {
  text-transform: uppercase;
  font-weight: 600;
  color: #0f766e;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #e2e8f0;
  padding: 8px;
  background: #f8fafc;
}

.line-height {
  line-height: 2.0;
  background: #f0fdf4;
  padding: 8px;
}`
    },
    quiz: [
      {
        question: '`line-height: 1.6` の場合、単位はどれですか？',
        options: ['px', 'em', '単位なし（font-sizeの倍数）', '%'],
        answer: 2,
        hint: '単位なしの line-height はそのfont-sizeに対する倍数です。1.5〜1.8が読みやすいとされます。',
        advice: 'line-height は単位なし（1.5〜1.8）が推奨です。px や em 指定は親要素のフォントサイズ変更時に計算がずれることがあります。'
      },
      {
        question: 'テキストを全て大文字に変換するCSSプロパティはどれですか？',
        options: ['font-variant: uppercase', 'text-case: upper', 'text-transform: uppercase', 'font-weight: bold'],
        answer: 2,
        hint: 'text-transform は uppercase（大文字）、lowercase（小文字）、capitalize（先頭大文字）を設定します。',
        advice: 'text-transform はHTMLのテキスト自体は変えません。スクリーンリーダーはHTMLの元のテキストを読むため、SEO・アクセシビリティ上も安全です。'
      },
      {
        question: 'はみ出したテキストを「...」で省略するために必要なプロパティの組み合わせはどれですか？',
        options: [
          'overflow: ellipsis のみ',
          'text-overflow: ellipsis のみ',
          'overflow: hidden + text-overflow: ellipsis + white-space: nowrap',
          'display: none + overflow: ellipsis'
        ],
        answer: 2,
        hint: '3つのプロパティが必要です。white-spaceで折り返しを禁止し、overflowで隠し、text-overflowで省略記号を表示します。',
        advice: '複数行省略には `-webkit-line-clamp` が使えます。`display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden` で3行省略ができます。'
      },
      {
        question: 'rem単位は何を基準にしますか？',
        options: ['親要素のfont-size', 'html要素のfont-size', 'ビューポートの幅', '直近の祖先要素のfont-size'],
        answer: 1,
        hint: 'rem は root em の略で、:root（html要素）のfont-size（通常16px）を基準にします。em は親要素基準なのでネストで値が変わります。',
        advice: 'html の font-size を `62.5%`（= 10px）にすると、1.6rem = 16pxになりrem計算が楽になります。ただしユーザーのフォント設定に影響する場合があります。'
      },
      {
        question: 'font-weight: 700 と同等のキーワードはどれですか？',
        options: ['normal', 'bold', 'bolder', 'heavy'],
        answer: 1,
        hint: 'bold は 700、normal は 400 に相当します。100〜900 の数値で細かく指定でき、400・700・900 がよく使われます。',
        advice: 'Google Fonts は使う font-weight ごとにファイルが増えます。`display=swap&weight=400;700` のように必要な太さだけ指定してパフォーマンスを最適化しましょう。'
      }
    ]
  },
  {
    id: 'display',
    title: 'displayプロパティ',
    level: 'beginner',
    diagram: 'display',
    description: 'CSSのdisplayプロパティを理解して、要素の表示方法を制御します。',
    explanation: `## displayプロパティ

### 主な値

#### block
- 前後に改行が入る
- width/heightが指定可能
- \`div\`, \`p\`, \`h1\`〜\`h6\` のデフォルト
\`\`\`css
span { display: block; }
\`\`\`

#### inline
- 文中に並ぶ（前後に改行なし）
- width/heightは効かない
- \`span\`, \`a\`, \`strong\` のデフォルト

#### inline-block
- inlineのように並ぶが、width/heightが使える

#### none
- 要素を完全に非表示にする（スペースも消える）
- \`visibility: hidden\` はスペースは残る

#### flex / grid
- 子要素のレイアウトを制御（別トピックで詳しく解説）
`,
    demoCode: {
      html: `<h3>block要素（div）</h3>
<div class="block-demo">Block 1</div>
<div class="block-demo">Block 2</div>

<h3>inline要素（span）</h3>
<span class="inline-demo">Inline 1</span>
<span class="inline-demo">Inline 2</span>
<span class="inline-demo">Inline 3</span>

<h3>inline-block</h3>
<span class="inline-block-demo">IB 1</span>
<span class="inline-block-demo">IB 2</span>
<span class="inline-block-demo">IB 3</span>

<h3>none vs visibility:hidden</h3>
<div class="row">
  <div class="box">表示</div>
  <div class="box display-none">display:none</div>
  <div class="box">表示</div>
</div>
<div class="row">
  <div class="box">表示</div>
  <div class="box visibility-hidden">visibility:hidden</div>
  <div class="box">表示</div>
</div>`,
      css: `h3 { font-size: 14px; color: #64748b; margin: 12px 0 4px; }

.block-demo {
  background: #3b82f6;
  color: white;
  padding: 8px 16px;
  margin: 4px 0;
  border-radius: 4px;
}

.inline-demo {
  background: #ef4444;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}

.inline-block-demo {
  display: inline-block;
  background: #22c55e;
  color: white;
  padding: 8px 16px;
  width: 80px;
  text-align: center;
  border-radius: 4px;
}

.row { display: flex; gap: 8px; margin-bottom: 8px; }

.box {
  background: #7c3aed;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}

.display-none { display: none; }
.visibility-hidden { visibility: hidden; }`
    },
    quiz: [
      {
        question: 'spanのデフォルトのdisplay値はどれですか？',
        options: ['block', 'inline', 'inline-block', 'flex'],
        answer: 1,
        hint: 'span・a・strong などはデフォルトで inline です。div・p・h1 などは block です。',
        advice: 'span に display:block を指定するのも、div に display:inline を指定するのも有効です。デフォルト値はあくまでブラウザのデフォルトスタイルシートの設定です。'
      },
      {
        question: '`display: none` と `visibility: hidden` の違いはどれですか？',
        options: [
          '両方とも同じ動作をする',
          'display:noneはスペースも消え、visibility:hiddenはスペースが残る',
          'visibility:hiddenはスペースも消え、display:noneはスペースが残る',
          'display:noneは色だけ消える'
        ],
        answer: 1,
        hint: 'display:none は要素をDOMから見えなくし、レイアウトスペースも消えます。visibility:hidden は見えないだけでスペースは残ります。',
        advice: 'フェードアウトアニメーションには opacity: 0 + pointer-events: none を使います。display:none は transition が効かないため、アニメーション後に JS で切り替えるのが定番です。'
      },
      {
        question: 'width/heightを指定しながら横並びにしたい場合、displayの値はどれですか？',
        options: ['block', 'inline', 'inline-block', 'none'],
        answer: 2,
        hint: 'inline-block はinlineのように横並びになりながら、blockのようにwidth/heightが指定できます。',
        advice: 'モダンなCSSでは inline-block より Flexbox の方が使い勝手がよいです。ただしインライン要素にサイズを指定する場面では今でも inline-block が有効です。'
      },
      {
        question: '`display: flex` を設定すると、直接の子要素はどうなりますか？',
        options: ['全てblock要素になる', 'フレックスアイテムになり主軸に沿って並ぶ', 'inline要素になる', '自動的にグリッドに整列する'],
        answer: 1,
        hint: 'display: flex を設定した要素がフレックスコンテナになり、直接の子要素がフレックスアイテムになります。デフォルトは横並びです。',
        advice: 'display: flex の直接の子要素だけがフレックスアイテムになります。孫要素には効きません。孫にも flex レイアウトを適用するには孫にも display: flex を付けます。'
      },
      {
        question: '`visibility: hidden` と `opacity: 0` の共通点はどれですか？',
        options: ['どちらもスペースが消える', 'どちらもスペースが残ったまま非表示になる', '両方ともクリックイベントを受け付ける', '違いは全くない'],
        answer: 1,
        hint: 'visibility: hidden と opacity: 0 はどちらも要素のスペースを保ったまま非表示にします。ただし opacity: 0 はクリックイベントを受け付けます。',
        advice: 'opacity: 0 の要素はクリックイベントを受け付けます。クリックできないようにするには `pointer-events: none` を併用しましょう。'
      }
    ]
  },

  // ===== 中級 =====
  {
    id: 'flexbox',
    title: 'Flexbox',
    level: 'intermediate',
    diagram: 'flexbox',
    description: '1次元レイアウトの強力なツール、Flexboxをマスターします。',
    explanation: `## Flexbox

\`display: flex\` を設定した要素がフレックスコンテナになり、子要素がフレックスアイテムになります。

### コンテナのプロパティ
\`\`\`css
.container {
  display: flex;
  flex-direction: row;       /* row | column | row-reverse | column-reverse */
  justify-content: center;   /* 主軸方向の揃え */
  align-items: center;       /* 交差軸方向の揃え */
  flex-wrap: wrap;           /* 折り返し */
  gap: 16px;                 /* アイテム間の隙間 */
}
\`\`\`

### justify-contentの値
- \`flex-start\` — 先頭揃え
- \`flex-end\` — 末尾揃え
- \`center\` — 中央揃え
- \`space-between\` — 両端揃えで等間隔
- \`space-around\` — 各アイテムの周囲に均等な余白

### アイテムのプロパティ
\`\`\`css
.item {
  flex: 1;          /* flex-grow: 1 の省略形（残りスペースを均等に分配）*/
  flex: 0 0 200px;  /* grow shrink basis */
  align-self: flex-end; /* このアイテムだけの交差軸揃え */
  order: 2;         /* 表示順序（デフォルト0）*/
}
\`\`\`
`,
    demoCode: {
      html: `<h3>justify-content</h3>
<div class="flex-container jc-between">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>

<h3>align-items</h3>
<div class="flex-container ai-center" style="height:80px">
  <div class="flex-item">A</div>
  <div class="flex-item tall">B</div>
  <div class="flex-item">C</div>
</div>

<h3>flex-wrap + gap</h3>
<div class="flex-container wrap">
  <div class="flex-item grow">flex:1</div>
  <div class="flex-item grow">flex:1</div>
  <div class="flex-item grow">flex:2</div>
  <div class="flex-item grow">flex:1</div>
  <div class="flex-item grow">flex:1</div>
</div>`,
      css: `h3 {
  font-size: 13px;
  color: #64748b;
  margin: 12px 0 4px;
}

.flex-container {
  display: flex;
  background: #f1f5f9;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  gap: 8px;
}

.jc-between { justify-content: space-between; }
.ai-center { align-items: center; }
.wrap { flex-wrap: wrap; }

.flex-item {
  background: #2563eb;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
}

.tall { height: 60px; line-height: 44px; }

.grow:nth-child(1) { flex: 1; }
.grow:nth-child(2) { flex: 1; }
.grow:nth-child(3) { flex: 2; background: #7c3aed; }
.grow:nth-child(4) { flex: 1; }
.grow:nth-child(5) { flex: 1; }`
    },
    quiz: [
      {
        question: 'Flexboxで子要素を縦方向に並べるプロパティ設定はどれですか？',
        options: [
          'align-items: column',
          'flex-direction: column',
          'justify-content: vertical',
          'display: flex-column'
        ],
        answer: 1,
        hint: 'flex-direction は主軸の方向を決めます。row（横）がデフォルトで、column にすると縦並びになります。',
        advice: 'flex-direction: column のとき、justify-content と align-items の主軸・交差軸が入れ替わります。縦並びでの中央揃えは `justify-content: center` です。'
      },
      {
        question: '`justify-content: space-between` の動作はどれですか？',
        options: [
          '全アイテムを中央に配置',
          '最初のアイテムを先頭、最後を末尾に配置し、残りを等間隔',
          '全アイテムの周囲に均等な余白',
          'アイテムを縦方向に整列'
        ],
        answer: 1,
        hint: 'space-between は両端に余白なし、space-around は各アイテムの周囲に均等な余白が付きます。',
        advice: 'space-between はナビゲーションバーのロゴと右側メニューを両端に配置する定番レイアウトに使われます。`justify-content: space-between` + `align-items: center` が鉄板です。'
      },
      {
        question: '`flex: 1` の省略形が展開されると？',
        options: [
          'flex-grow: 1; flex-shrink: 0; flex-basis: auto',
          'flex-grow: 1; flex-shrink: 1; flex-basis: 0%',
          'flex-grow: 0; flex-shrink: 1; flex-basis: 1px',
          'flex-direction: 1'
        ],
        answer: 1,
        hint: 'flex: 1 は「残りスペースを均等に分配」という意味で、flex-grow:1・flex-shrink:1・flex-basis:0% の省略形です。',
        advice: '`flex: 0 0 auto` は「縮まず・伸びず・コンテンツサイズ固定」の意味です。サイドバーの固定幅と可変メインエリアの組み合わせに使います。'
      },
      {
        question: 'align-items と align-self の違いはどれですか？',
        options: [
          'align-items は個別アイテムに、align-self は全体に適用',
          'align-items はコンテナに設定して全子要素を揃え、align-self は個別アイテムが自身の揃えを上書き',
          '機能は全く同じ',
          'align-self はFlexboxでは使えない'
        ],
        answer: 1,
        hint: 'align-items はコンテナで全アイテムの交差軸揃えを一括指定、align-self は個々のアイテムがそれを上書きできます。',
        advice: 'カードリスト内で「このカードだけ下端揃え」にしたいとき、そのアイテムに `align-self: flex-end` を指定すると親の設定を上書きできます。'
      },
      {
        question: 'flex-wrap: wrap を設定するとどうなりますか？',
        options: [
          'アイテムを折り返さず一行に圧縮する',
          'アイテムが親の幅を超えると次の行に折り返す',
          'テキストの折り返しを制御する',
          'アイテムを逆順に並べる'
        ],
        answer: 1,
        hint: 'デフォルトは nowrap（折り返しなし）でアイテムが圧縮されます。wrap にするとはみ出したアイテムが次の行に折り返されます。',
        advice: 'flex-wrap: wrap と gap の組み合わせで、CSSグリッドに近いレスポンシブレイアウトが作れます。`repeat(auto-fill, minmax())` と合わせると特に強力です。'
      }
    ],
    challenge: {
      description: 'Flexboxでヘッダーナビゲーションを作ろう',
      taskDescription: 'Flexboxを使って、ロゴ左・ナビゲーション中央・ボタン右のヘッダーを作ってください。',
      targetHtml: `<header class="header">
  <div class="logo">FlexSite</div>
  <nav class="nav">
    <a href="#">ホーム</a>
    <a href="#">サービス</a>
    <a href="#">お問い合わせ</a>
  </nav>
  <button class="cta">始める</button>
</header>`,
      targetCss: `.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: #1e293b;
  border-radius: 8px;
  gap: 16px;
}
.logo {
  font-size: 1.2rem;
  font-weight: 800;
  color: white;
}
.nav {
  display: flex;
  gap: 24px;
}
.nav a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}
.nav a:hover {
  color: white;
}
.cta {
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
}`,
      initialHtml: `<header class="header">
  <div class="logo">FlexSite</div>
  <nav class="nav">
    <a href="#">ホーム</a>
    <a href="#">サービス</a>
    <a href="#">お問い合わせ</a>
  </nav>
  <button class="cta">始める</button>
</header>`,
      initialCss: `/* Flexboxを使ってヘッダーを作りましょう */
.header {
  /* display: flex */
  /* align-items: center で縦方向中央揃え */
  /* justify-content: space-between でロゴとボタンを両端に */
  /* padding, background, border-radius, gap */
}
.logo {
  /* font-size, font-weight, color */
}
/* ナビゲーションリンクも横並びに */
.nav {
  /* display: flex, gap */
}
.nav a {
  /* color, text-decoration, font-size, font-weight */
}
.nav a:hover {
  /* color */
}
.cta {
  /* background, color, border, padding, border-radius, font-weight, font-size */
}`,
      hints: [
        '`.header { display: flex; }` で子要素が横並びになります',
        '`justify-content: space-between` でロゴと CTAボタンを両端に配置できます',
        '`.nav { display: flex; gap: 24px; }` でナビリンクを横並びにできます',
        '`align-items: center` で縦方向の中央揃えができます'
      ]
    }
  },
  {
    id: 'grid',
    title: 'CSS Grid',
    level: 'intermediate',
    diagram: 'grid',
    description: '2次元レイアウトを実現するCSS Gridを学びます。',
    explanation: `## CSS Grid

Flexboxが1次元（行か列）なのに対し、Gridは2次元（行と列）のレイアウトを作れます。

### 基本設定
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;    /* 3列均等 */
  grid-template-columns: 200px 1fr 1fr;  /* 固定+可変 */
  grid-template-columns: repeat(3, 1fr); /* repeat関数 */
  grid-template-rows: auto 100px;
  gap: 16px;           /* 行・列の隙間 */
  column-gap: 20px;    /* 列間だけ */
  row-gap: 10px;       /* 行間だけ */
}
\`\`\`

### アイテムの配置
\`\`\`css
.item {
  grid-column: 1 / 3;    /* 列1から3まで（2列分）*/
  grid-row: 1 / 2;
  grid-column: span 2;   /* 2列分占有 */
}
\`\`\`

### grid-template-areas（名前付き領域）
\`\`\`css
.grid {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
.header { grid-area: header; }
\`\`\`
`,
    demoCode: {
      html: `<h3>基本のグリッド（3列）</h3>
<div class="grid basic">
  <div class="gi">1</div>
  <div class="gi">2</div>
  <div class="gi">3</div>
  <div class="gi span2">4 (span 2)</div>
  <div class="gi">5</div>
</div>

<h3>名前付き領域レイアウト</h3>
<div class="grid layout">
  <div class="gi header">Header</div>
  <div class="gi sidebar">Sidebar</div>
  <div class="gi main">Main Content</div>
  <div class="gi footer">Footer</div>
</div>`,
      css: `h3 { font-size: 13px; color: #64748b; margin: 12px 0 4px; }

.grid {
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
}

.basic {
  grid-template-columns: repeat(3, 1fr);
}

.layout {
  grid-template-columns: 120px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.gi {
  background: #2563eb;
  color: white;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
}

.span2 { grid-column: span 2; background: #7c3aed; }

.header { grid-area: header; background: #0f766e; }
.sidebar { grid-area: sidebar; background: #b45309; min-height: 80px; }
.main { grid-area: main; background: #1d4ed8; min-height: 80px; }
.footer { grid-area: footer; background: #4b5563; }`
    },
    quiz: [
      {
        question: '`grid-template-columns: repeat(4, 1fr)` は何を意味しますか？',
        options: [
          '4行のグリッドを作る',
          '均等幅の4列グリッドを作る',
          '4pxのギャップを作る',
          '4番目の列を1frにする'
        ],
        answer: 1,
        hint: 'repeat(回数, サイズ) は列（または行）の繰り返しを定義します。1fr は利用可能スペースを均等に分割します。',
        advice: '`repeat(auto-fill, minmax(200px, 1fr))` を使うとメディアクエリなしで画面幅に応じて列数が自動調整されます。レスポンシブカードレイアウトの定番パターンです。'
      },
      {
        question: '`grid-column: 1 / 3` の意味はどれですか？',
        options: [
          '1列目の幅を3にする',
          '列ライン1から3まで（2列分）占有する',
          '3列目に配置する',
          '列の間隔を1/3にする'
        ],
        answer: 1,
        hint: 'グリッドラインは列の区切り線の番号です。1/3 は「ライン1からライン3まで」なので2列分を占有します。',
        advice: '`-1` で末尾のラインを参照できます。`grid-column: 1 / -1` で「全列にまたがる」要素が作れます。ヘッダーやフッターの実装に便利です。'
      },
      {
        question: 'FlexboxとCSS Gridの主な違いはどれですか？',
        options: [
          'FlexboxはCSSではない',
          'Flexboxは1次元、Gridは2次元レイアウト',
          'Gridは古くてFlexboxが新しい',
          '違いはない'
        ],
        answer: 1,
        hint: 'Flexboxは行か列の1方向のレイアウトに強く、Gridは行と列を同時に制御する2次元レイアウトに適しています。',
        advice: 'コンテンツ基準（子の大きさに合わせたい）→ Flexbox、レイアウト基準（格子を先に決めたい）→ Grid と使い分けるとよいです。どちらも併用できます。'
      },
      {
        question: '`grid-gap` は現在どのプロパティに統一されましたか？',
        options: ['spacing', 'gap', 'grid-gap のまま推奨', 'gutter'],
        answer: 1,
        hint: 'grid-gap は非推奨になり gap プロパティに統一されました。gap: 16px や gap: 行間 列間 のように指定します。',
        advice: 'gap は Grid だけでなく Flexbox でも使えます。row-gap と column-gap を個別に指定することもでき、縦横で違うスペーシングが必要なときに便利です。'
      },
      {
        question: '`minmax(200px, 1fr)` の意味はどれですか？',
        options: [
          '200px と 1fr の平均値を使う',
          '最小200px・最大1fr の範囲で伸縮するトラックサイズ',
          '200px を 1fr に変換する',
          '200個のトラックを作る'
        ],
        answer: 1,
        hint: 'minmax(最小値, 最大値) でグリッドトラックのサイズ範囲を指定します。repeat(3, minmax(200px, 1fr)) でよく使われます。',
        advice: '`repeat(auto-fill, minmax(200px, 1fr))` の組み合わせはレスポンシブカードレイアウトの鉄板です。min-width なしでカラム数がビューポートに応じて自動変化します。'
      }
    ],
    challenge: {
      description: 'CSS Gridでカードグリッドを作ろう',
      taskDescription: 'CSS Gridを使って、お手本と同じ3カラムのカードレイアウトを作ってください。',
      targetHtml: `<div class="grid">
  <div class="card">カード 1</div>
  <div class="card">カード 2</div>
  <div class="card">カード 3</div>
  <div class="card">カード 4</div>
  <div class="card">カード 5</div>
  <div class="card">カード 6</div>
</div>`,
      targetCss: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.card {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}`,
      initialHtml: `<div class="grid">
  <div class="card">カード 1</div>
  <div class="card">カード 2</div>
  <div class="card">カード 3</div>
  <div class="card">カード 4</div>
  <div class="card">カード 5</div>
  <div class="card">カード 6</div>
</div>`,
      initialCss: `/* CSS Gridを使ってカードグリッドを作りましょう */
.grid {
  /* display: grid */
  /* grid-template-columns: repeat(3, 1fr) で3等分に */
  /* gap でカード間のすき間 */
}
.card {
  /* background でグラデーション（linear-gradient を試してみよう）*/
  /* color, font-weight, font-size */
  /* height でカードの高さを固定 */
  /* display: flex, align-items, justify-content でテキスト中央揃え */
  /* border-radius */
}`,
      hints: [
        '`display: grid` でグリッドコンテナになります',
        '`grid-template-columns: repeat(3, 1fr)` で均等な3カラムができます',
        '`gap: 12px` でグリッドセル間のすき間を設定できます',
        '`background: linear-gradient(135deg, #2563eb, #7c3aed)` でグラデーション背景を作れます'
      ]
    }
  },
  {
    id: 'position',
    title: 'positionプロパティ',
    level: 'intermediate',
    description: 'CSSのpositionプロパティで要素の配置を自在にコントロールします。',
    explanation: `## positionプロパティ

### static（デフォルト）
通常のドキュメントフローに従う。top/left等は効かない。

### relative
**通常の位置を基準**にずらす。他の要素のレイアウトには影響しない。

### absolute
**最も近い position: static以外の祖先要素**を基準に配置。
ドキュメントフローから外れる。

### fixed
**ビューポート（画面）**を基準に固定。スクロールしても動かない。

### sticky
スクロールに追従しながら、指定位置に達すると固定される。

\`\`\`css
/* 親要素にrelativeを設定 */
.parent {
  position: relative;
}

/* 子要素をabsoluteで右上に配置 */
.badge {
  position: absolute;
  top: -8px;
  right: -8px;
}
\`\`\`
`,
    demoCode: {
      html: `<div class="demo-area">
  <div class="box relative-box">
    relative
    <span class="badge">絶対配置バッジ</span>
  </div>

  <div class="box normal-box">通常のボックス</div>
  <div class="box normal-box">通常のボックス</div>
</div>

<div class="sticky-demo">
  <div class="sticky-header">sticky header（スクロールすると固定）</div>
  <div class="content-rows">
    <div>コンテンツ行 1</div>
    <div>コンテンツ行 2</div>
    <div>コンテンツ行 3</div>
    <div>コンテンツ行 4</div>
    <div>コンテンツ行 5</div>
  </div>
</div>`,
      css: `.demo-area {
  position: relative;
  border: 2px dashed #94a3b8;
  padding: 16px;
  margin-bottom: 16px;
  min-height: 120px;
}

.box {
  background: #2563eb;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-weight: bold;
}

.relative-box {
  position: relative;
  background: #7c3aed;
  display: inline-block;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ef4444;
  color: white;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 99px;
  white-space: nowrap;
}

.normal-box { background: #475569; }

.sticky-demo {
  height: 150px;
  overflow-y: scroll;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
}

.sticky-header {
  position: sticky;
  top: 0;
  background: #0f172a;
  color: white;
  padding: 8px 16px;
  font-weight: bold;
}

.content-rows div {
  padding: 10px 16px;
  border-bottom: 1px solid #f1f5f9;
}`
    },
    quiz: [
      {
        question: '`position: absolute` の基準となる要素はどれですか？',
        options: [
          'body要素',
          '最も近いposition: static以外の祖先要素',
          '直接の親要素',
          'html要素'
        ],
        answer: 1,
        hint: '祖先要素が全て static の場合は body が基準になります。親に position:relative を指定するのが一般的です。',
        advice: '「absoluteを使うときは必ず親に relative を付ける」が鉄則です。忘れると意図しない位置になりデバッグが大変なので、セットで覚えましょう。'
      },
      {
        question: 'スクロールしても常に画面の同じ位置に表示するには？',
        options: ['position: absolute', 'position: relative', 'position: fixed', 'position: sticky'],
        answer: 2,
        hint: 'fixed はビューポート（画面）を基準に固定されます。ナビゲーションバーやモーダルによく使われます。',
        advice: 'fixed でヘッダーを固定するときは、body や main に `padding-top: ヘッダーの高さ` を追加してコンテンツが隠れないようにしましょう。'
      },
      {
        question: '`position: sticky` の動作として正しいのはどれですか？',
        options: [
          '常に固定されている',
          'スクロール追従しながら指定位置で固定される',
          'ドキュメントフローから外れる',
          '親要素の左上を基準にする'
        ],
        answer: 1,
        hint: 'sticky は通常フローを維持しながら、スクロールで top 値に達したときに固定されます。テーブルヘッダーに便利です。',
        advice: 'sticky が効かない場合は親要素に `overflow: hidden` や `overflow: auto` が設定されていることが多いです。親のオーバーフロー設定を確認しましょう。'
      },
      {
        question: '`z-index` プロパティが有効に機能する条件はどれですか？',
        options: [
          '全ての要素に効く',
          'position が static 以外（relative/absolute/fixed/sticky）の要素に効く',
          'display: flex の子要素のみ',
          'width が指定された要素のみ'
        ],
        answer: 1,
        hint: 'z-index は position が relative・absolute・fixed・sticky の要素に適用されます。デフォルトの static では効きません。',
        advice: 'z-index が効かない場合、まず position を確認しましょう。また同じ stacking context 内でしか比較されないため、親の z-index も重要です。'
      },
      {
        question: '`position: relative` を top/left を指定せずに使う主な目的は何ですか？',
        options: [
          '要素を非表示にする',
          '内部の absolute 子要素の位置基準となる包含ブロックを作る',
          '要素を水平中央に配置する',
          '要素をフロートさせる'
        ],
        answer: 1,
        hint: 'position: relative は位置をずらさなくても、absolute 子要素の「座標基準」となる包含ブロックを作るためだけに使うことが多いです。',
        advice: 'relative + absolute の組み合わせはバッジ・ツールチップ・ドロップダウンメニューなど多くのUIパターンの基礎です。ぜひ習得しましょう。'
      }
    ]
  },
  {
    id: 'transitions',
    title: 'トランジション・アニメーション',
    level: 'intermediate',
    description: 'CSSのトランジションとアニメーションでインタラクティブな動きを実装します。',
    explanation: `## トランジション（transition）

状態変化（ホバーなど）をアニメーション化する。

\`\`\`css
.button {
  background: blue;
  transition: background 0.3s ease, transform 0.2s ease;
}

.button:hover {
  background: darkblue;
  transform: scale(1.05);
}
\`\`\`

### transitionの値
\`transition: プロパティ名 時間 タイミング関数 遅延\`
- タイミング関数: \`ease\`, \`linear\`, \`ease-in\`, \`ease-out\`, \`ease-in-out\`

## アニメーション（@keyframes）

\`\`\`css
@keyframes slideIn {
  from { transform: translateX(-100px); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
}

.element {
  animation: slideIn 0.5s ease-out forwards;
  /* name duration timing fill-mode */
}
\`\`\`

### animationのプロパティ
- \`animation-iteration-count: infinite\` — 無限ループ
- \`animation-direction: alternate\` — 往復
`,
    demoCode: {
      html: `<h3>ホバーでトランジション</h3>
<button class="btn-transition">ホバーしてみて</button>
<button class="btn-scale">スケール変化</button>

<h3>アニメーション</h3>
<div class="anim-slide">スライドイン</div>
<div class="anim-pulse">パルス（無限）</div>
<div class="anim-spin">スピン（無限）</div>`,
      css: `h3 { font-size: 13px; color: #64748b; margin: 12px 0 6px; }

.btn-transition {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 8px;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.btn-transition:hover {
  background: #1d4ed8;
  box-shadow: 0 4px 16px rgba(37,99,235,0.4);
}

.btn-scale {
  background: #7c3aed;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: transform 0.2s ease, background 0.2s;
}

.btn-scale:hover {
  transform: scale(1.1);
  background: #6d28d9;
}

@keyframes slideIn {
  from { transform: translateX(-60px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.anim-slide {
  background: #0f766e;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  display: inline-block;
  animation: slideIn 0.6s ease-out forwards;
}

.anim-pulse {
  background: #b45309;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  display: inline-block;
  animation: pulse 1.5s ease-in-out infinite;
}

.anim-spin {
  background: #be185d;
  color: white;
  padding: 10px 16px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}`
    },
    quiz: [
      {
        question: '`transition: all 0.3s ease` の "all" は何を意味しますか？',
        options: [
          '全ての要素に適用',
          '全てのプロパティの変化をアニメーション化',
          'アニメーションを全方向に実行',
          '無限ループ'
        ],
        answer: 1,
        hint: 'all の代わりに特定のプロパティ名（background, transform など）を指定すると、そのプロパティだけアニメーション化されます。',
        advice: '`transition: all` は予期しないプロパティもアニメーション化しパフォーマンスが落ちることがあります。実務では `transform` と `opacity` に限定するのが推奨です。'
      },
      {
        question: '@keyframesアニメーションを無限ループにするプロパティはどれですか？',
        options: [
          'animation-count: loop',
          'animation-iteration-count: infinite',
          'animation-repeat: forever',
          'animation-loop: true'
        ],
        answer: 1,
        hint: 'animation-iteration-count に数値を指定すると繰り返し回数を、infinite を指定すると無限ループになります。',
        advice: 'ローディングスピナーには `animation: spin 1s linear infinite` のパターンをよく使います。GPU処理のため `transform: rotate()` で回転させましょう。'
      },
      {
        question: 'transitionとanimationの主な違いはどれですか？',
        options: [
          'transitionは状態変化時のアニメーション、animationは@keyframesで自由に定義できる',
          'transitionは古い技術でanimationが新しい',
          'animationはJavaScriptが必要',
          '違いはない'
        ],
        answer: 0,
        hint: 'transition はホバーなど2状態間の補間で、トリガーが必要です。animation は @keyframes で複雑な動きを自動再生できます。',
        advice: 'パフォーマンスのよいアニメーションは transform と opacity を使います。`left/top` の変化より `transform: translate()` の方がGPUで処理され滑らかです。'
      },
      {
        question: 'timing function の `ease-in` はどんな動きを表しますか？',
        options: ['始めゆっくり・終わり速い', '始め速い・終わりゆっくり', '一定速度', '始め・終わりゆっくり・中間速い'],
        answer: 0,
        hint: 'ease-in は「加速」、ease-out は「減速」、ease-in-out は「加速してから減速」です。自然な動きには ease-out がよく使われます。',
        advice: '自然な動きには ease-out が最も多く使われます。重力の影響を受けるような「落ちる・消える」アニメーションに特に適しています。'
      },
      {
        question: 'animation-fill-mode: forwards の効果はどれですか？',
        options: [
          'アニメーションを前方向だけに実行する',
          'アニメーション終了後も最後のキーフレームのスタイルを保持する',
          'アニメーションを無限に繰り返す',
          'アニメーションを逆再生する'
        ],
        answer: 1,
        hint: 'forwards はアニメーション終了後も to（100%）のスタイルを維持します。none だと元のスタイルに戻ります。',
        advice: 'animation の省略記法は `animation: 名前 時間 タイミング fill-mode` の順序です。例: `animation: slideIn 0.5s ease-out forwards`'
      }
    ]
  },
  {
    id: 'responsive',
    title: 'レスポンシブデザイン',
    level: 'intermediate',
    description: 'メディアクエリを使って、あらゆる画面サイズに対応するレスポンシブデザインを作ります。',
    explanation: `## レスポンシブデザイン

### メディアクエリ
\`\`\`css
/* モバイルファースト（小→大の順で書く）*/
.container {
  width: 100%;          /* モバイル */
}

@media (min-width: 768px) {
  .container {
    width: 750px;       /* タブレット */
  }
}

@media (min-width: 1024px) {
  .container {
    width: 960px;       /* デスクトップ */
  }
}
\`\`\`

### よく使うブレークポイント
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

### ビューポートメタタグ（必須）
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

### レスポンシブの単位
- \`%\` — 親要素に対する割合
- \`vw / vh\` — ビューポート幅・高さに対する割合
- \`rem\` — ルート要素のfont-sizeに対する割合
- \`clamp(min, ideal, max)\` — 最小〜最大の範囲で可変
`,
    demoCode: {
      html: `<div class="responsive-grid">
  <div class="card">カード 1</div>
  <div class="card">カード 2</div>
  <div class="card">カード 3</div>
  <div class="card">カード 4</div>
</div>

<div class="fluid-text">
  fluid text: clamp(1rem, 3vw, 2rem)
</div>

<div class="device-info">
  <div class="mobile-only">📱 モバイル表示（〜768px）</div>
  <div class="tablet-only">💻 タブレット表示（768px〜）</div>
  <div class="desktop-only">🖥️ デスクトップ表示（1024px〜）</div>
</div>`,
      css: `.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 16px;
}

@media (min-width: 480px) {
  .responsive-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  background: #2563eb;
  color: white;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}

.fluid-text {
  font-size: clamp(1rem, 3vw, 2rem);
  background: #f0fdf4;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 12px;
  color: #166534;
  font-weight: bold;
}

/* 表示/非表示でブレークポイントをデモ */
.mobile-only, .tablet-only, .desktop-only {
  padding: 10px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-weight: bold;
}

.mobile-only {
  display: block;
  background: #fef2f2;
  color: #991b1b;
}

.tablet-only {
  display: none;
  background: #fffbeb;
  color: #92400e;
}

.desktop-only {
  display: none;
  background: #eff6ff;
  color: #1e40af;
}

@media (min-width: 480px) {
  .mobile-only { display: none; }
  .tablet-only { display: block; }
}

@media (min-width: 768px) {
  .tablet-only { display: none; }
  .desktop-only { display: block; }
}`
    },
    quiz: [
      {
        question: 'モバイルファーストのメディアクエリで使う条件はどれですか？',
        options: ['max-width', 'min-width', 'screen-size', 'device-width'],
        answer: 1,
        hint: 'モバイルファーストは小さい画面を基本にし、min-width で大きい画面向けに上書きします。デスクトップファーストは逆にmax-widthを使います。',
        advice: 'モバイルファーストはモバイルに最適化されたスタイルが先に読み込まれ、スマートフォンの表示が高速になります。新規プロジェクトでは積極的に採用しましょう。'
      },
      {
        question: '`vw` 単位は何の割合を表しますか？',
        options: ['親要素の幅', 'ビューポートの幅', 'フォントサイズ', 'ルート要素の幅'],
        answer: 1,
        hint: '100vw = ビューポート幅100%、100vh = ビューポート高さ100%です。%は親要素基準なのと区別しましょう。',
        advice: 'スクロールバーがある場合 100vw > 100% になりはみ出しが発生します。フルブラウザ幅を使う場合は `overflow-x: hidden` と組み合わせることが多いです。'
      },
      {
        question: 'レスポンシブデザインで必ず必要なHTMLのmetaタグはどれですか？',
        options: [
          '<meta name="responsive" content="true">',
          '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
          '<meta charset="UTF-8">',
          '<meta name="mobile" content="yes">'
        ],
        answer: 1,
        hint: 'viewportメタタグがないとスマートフォンがPC版レイアウトを縮小表示してしまい、メディアクエリが正しく機能しません。',
        advice: '`initial-scale=1.0` はiOSでの拡大・縮小挙動を制御します。`user-scalable=no` は設定しないのが推奨（アクセシビリティ上の理由）です。'
      },
      {
        question: '`min-width: 768px` のメディアクエリは一般的に何を意味しますか？',
        options: ['モバイルのみに適用', 'タブレット以上の画面幅に適用', 'デスクトップのみに適用', '印刷時に適用'],
        answer: 1,
        hint: '768px はタブレット（iPad）の幅が基準です。sm:640px・md:768px・lg:1024px・xl:1280px がよく使われます。',
        advice: 'ブレークポイントは特定デバイスの幅でなく「コンテンツが崩れ始める場所」で設定するのが理想です。デバイス依存しない柔軟なレイアウトを目指しましょう。'
      },
      {
        question: 'コンテナの最大幅を1200pxに制限しつつ小さい画面では全幅にするCSSはどれですか？',
        options: [
          'width: 1200px',
          'max-width: 1200px; width: 100%',
          'min-width: 1200px',
          'width: clamp(100%, 100%, 1200px)'
        ],
        answer: 1,
        hint: 'max-width は最大値を制限しますが、それ以下では縮みます。width: 100% と組み合わせてレスポンシブなコンテナを作ります。',
        advice: '`.container { max-width: 1200px; width: 100%; margin: 0 auto; padding: 0 24px; }` がレスポンシブコンテナの定番パターンです。サイトの雛形に入れましょう。'
      }
    ]
  },

  // ===== 上級 =====
  {
    id: 'custom-properties',
    title: 'CSS変数（カスタムプロパティ）',
    level: 'advanced',
    description: 'CSS変数を使って、再利用可能でテーマ変更が簡単なスタイルを作ります。',
    explanation: `## CSS変数（カスタムプロパティ）

### 定義と使用
\`\`\`css
:root {
  --primary: #2563eb;
  --spacing-md: 16px;
  --font-size-base: 1rem;
}

.button {
  background: var(--primary);
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
}

/* フォールバック値 */
color: var(--unknown-color, #333);
\`\`\`

### スコープ
\`\`\`css
.dark-theme {
  --primary: #60a5fa;  /* このスコープ内でオーバーライド */
  --bg: #1e293b;
}
\`\`\`

### JavaScriptから操作
\`\`\`js
// 読み取り
getComputedStyle(el).getPropertyValue('--primary')

// 設定
el.style.setProperty('--primary', '#ff0000')
\`\`\`

### メリット
- 一箇所を変更するだけでサイト全体に反映
- テーマ切り替えが簡単
- calc()と組み合わせて計算も可能
`,
    demoCode: {
      html: `<div class="theme-demo light">
  <h3>ライトテーマ</h3>
  <button class="theme-btn">ボタン</button>
  <p class="theme-text">テキストのカラー</p>
</div>

<div class="theme-demo dark">
  <h3>ダークテーマ</h3>
  <button class="theme-btn">ボタン</button>
  <p class="theme-text">テキストのカラー</p>
</div>

<div class="calc-demo">
  <div class="step" style="--size: 1">--size: 1</div>
  <div class="step" style="--size: 2">--size: 2</div>
  <div class="step" style="--size: 3">--size: 3</div>
</div>`,
      css: `:root {
  --primary: #2563eb;
  --bg: #ffffff;
  --text: #1e293b;
  --border: #e2e8f0;
  --spacing: 16px;
}

.theme-demo {
  --bg: #ffffff;
  --text: #1e293b;
  --primary: #2563eb;
  background: var(--bg);
  color: var(--text);
  padding: var(--spacing);
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 8px;
  margin-bottom: 12px;
}

.theme-demo.dark {
  --bg: #1e293b;
  --text: #f1f5f9;
  --primary: #60a5fa;
  --border: #334155;
}

.theme-demo h3 {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--text);
}

.theme-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 8px;
}

.theme-text { color: var(--text); margin: 8px 0 0; }

/* calc() + CSS変数 */
.calc-demo {
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

.step {
  background: #2563eb;
  color: white;
  font-size: 11px;
  text-align: center;
  border-radius: 6px 6px 0 0;
  padding: 4px;
  width: calc(var(--size) * 60px);
  height: calc(var(--size) * 40px);
  display: flex;
  align-items: center;
  justify-content: center;
}`
    },
    quiz: [
      {
        question: 'CSS変数の定義に使う記法はどれですか？',
        options: ['$primary: blue', '@primary: blue', '--primary: blue', '#primary: blue'],
        answer: 2,
        hint: 'CSS変数（カスタムプロパティ）は `--` で始まります。SCSSの変数（`$`）と混同しないよう注意しましょう。',
        advice: 'CSS変数とSCSS変数の最大の違いはランタイムで変更できることです。JavaScriptやメディアクエリからも変更できるため、ダークモードの実装に最適です。'
      },
      {
        question: 'CSS変数を使用する記法はどれですか？',
        options: ['$primary', '@primary', 'primary()', 'var(--primary)'],
        answer: 3,
        hint: 'CSS変数を参照するには `var(--変数名)` 関数を使います。`var()` を省略することはできません。',
        advice: 'var() のネストも可能です。`var(--color, var(--fallback, #333))` のようにフォールバックをさらにフォールバックさせることもできます。'
      },
      {
        question: '`var(--color, #333)` の `#333` は何ですか？',
        options: ['エラー値', 'フォールバック値（変数が未定義の場合に使われる）', 'デバッグ用の値', 'コメント'],
        answer: 1,
        hint: 'var() の第2引数はフォールバック値です。変数が未定義または無効な場合にこの値が使われます。',
        advice: 'コンポーネントライブラリでは変数が未定義でも壊れないようフォールバックを付けるのが安全です。`color: var(--btn-color, var(--primary, #2563eb))` のように多重フォールバックも活用できます。'
      },
      {
        question: 'CSS変数はどのスコープに定義するとサイト全体で参照できますか？',
        options: ['body { }', 'html { }', ':root { }', '* { }'],
        answer: 2,
        hint: ':root はHTML文書のルート要素（html）と同等で最高スコープです。ここで定義した変数はどの要素からも参照できます。',
        advice: 'ダークモードの実装では `[data-theme="dark"]` セレクタで CSS変数を上書きするパターンが主流です。JSで `document.documentElement.setAttribute("data-theme", "dark")` と合わせて使います。'
      },
      {
        question: 'JavaScriptからCSS変数を変更する方法はどれですか？',
        options: [
          'document.css.setVar("--color", "red")',
          'element.style.setProperty("--color", "red")',
          'CSS.variables["--color"] = "red"',
          'element.cssVar("--color", "red")'
        ],
        answer: 1,
        hint: 'element.style.setProperty("--変数名", 値) で設定、getComputedStyle(el).getPropertyValue("--変数名") で読み取れます。',
        advice: 'CSS変数をJSから変更するとCSSアニメーションも連動します。スライダーで色変えるインタラクティブなUIや、ゲームのHPバーなど動的な演出に活用できます。'
      }
    ]
  },
  {
    id: 'pseudo',
    title: '擬似クラス・擬似要素',
    level: 'advanced',
    description: '擬似クラス（:hover等）と擬似要素（::before等）を使いこなします。',
    explanation: `## 擬似クラスと擬似要素

### 擬似クラス（:）
要素の**状態**を表す。

\`\`\`css
a:hover   { color: blue; }       /* マウスオーバー時 */
a:visited { color: purple; }     /* 訪問済みリンク */
input:focus { outline: 2px solid blue; } /* フォーカス時 */
input:disabled { opacity: 0.5; } /* 無効状態 */

/* 構造擬似クラス */
li:first-child  { font-weight: bold; }
li:last-child   { border-bottom: none; }
li:nth-child(2) { background: #f0f0f0; }
li:nth-child(odd) { background: #f9f9f9; }

/* 否定 */
p:not(.special) { color: gray; }
\`\`\`

### 擬似要素（::）
要素の**特定部分**や**仮想要素**を表す。

\`\`\`css
/* コンテンツの前後に要素を追加 */
.icon::before { content: "★ "; }
.note::after  { content: " (注)"; color: red; }

/* テキスト選択時 */
::selection { background: yellow; }

/* 最初の文字・行 */
p::first-letter { font-size: 2em; float: left; }
p::first-line   { font-weight: bold; }
\`\`\`
`,
    demoCode: {
      html: `<h3>擬似クラス</h3>
<ul class="pseudo-list">
  <li>first-child（太字）</li>
  <li>2番目</li>
  <li>3番目（odd）</li>
  <li>4番目</li>
  <li>last-child（下線）</li>
</ul>

<input type="text" placeholder="フォーカスしてみて" class="focus-input">
<button class="hover-btn">ホバー・アクティブ</button>

<h3>擬似要素</h3>
<p class="drop-cap">擬似要素のデモ。first-letterで最初の文字を大きく表示しています。これがドロップキャップと呼ばれる効果です。</p>
<div class="with-badge">通知あり</div>
<p class="annotated">重要な情報</p>`,
      css: `h3 { font-size: 13px; color: #64748b; margin: 12px 0 6px; }

/* 擬似クラス */
.pseudo-list {
  list-style: none;
  padding: 0;
  margin-bottom: 12px;
}

.pseudo-list li {
  padding: 8px 12px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.pseudo-list li:first-child { font-weight: bold; color: #2563eb; }
.pseudo-list li:last-child { text-decoration: underline; border-bottom: none; }
.pseudo-list li:nth-child(odd) { background: #eff6ff; }
.pseudo-list li:hover { background: #dbeafe; cursor: default; }

.focus-input {
  border: 2px solid #e2e8f0;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  margin-right: 8px;
}

.focus-input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.2); }

.hover-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.hover-btn:hover { background: #1d4ed8; }
.hover-btn:active { transform: scale(0.97); }

/* 擬似要素 */
.drop-cap::first-letter {
  font-size: 2.5em;
  font-weight: bold;
  float: left;
  line-height: 0.8;
  margin-right: 6px;
  color: #2563eb;
}

.with-badge {
  position: relative;
  display: inline-block;
  background: #f1f5f9;
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.with-badge::after {
  content: "3";
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ef4444;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.annotated::after {
  content: " ※重要";
  color: #ef4444;
  font-size: 0.85em;
  font-weight: bold;
}`
    },
    quiz: [
      {
        question: '擬似クラスと擬似要素の記号の違いはどれですか？',
        options: [
          '擬似クラスは::、擬似要素は:',
          '擬似クラスは:、擬似要素は::',
          '両方:を使う',
          '両方::を使う'
        ],
        answer: 1,
        hint: '擬似クラス（:hover, :focus など）は1コロン、擬似要素（::before, ::after など）は2コロンです。',
        advice: '古いブラウザ対応のため `:before`（1コロン）でも動作しますが、仕様通り `::before`（2コロン）を使うのが推奨です。'
      },
      {
        question: 'リストの奇数番目の要素を選択するセレクタはどれですか？',
        options: ['li:nth-child(even)', 'li:nth-child(odd)', 'li:odd', 'li:nth(odd)'],
        answer: 1,
        hint: 'nth-child(odd) が奇数行、nth-child(even) が偶数行です。テーブルのストライプに便利です。',
        advice: 'An+B の式も使えます。`nth-child(3n+1)` は1,4,7...行目、`nth-child(4n)` は4の倍数行を選択します。複雑なリストのスタイリングに活用できます。'
      },
      {
        question: '`::before` 擬似要素を表示させるために必須のCSSプロパティはどれですか？',
        options: ['display: block', 'content: ""（空でも必要）', 'position: absolute', 'visibility: visible'],
        answer: 1,
        hint: '::before / ::after は content プロパティがないと表示されません。空文字 `""` でも必ず指定が必要です。',
        advice: '`content: attr(data-label)` を使うとHTML属性の値をCSSで表示できます。JavaScriptなしでツールチップやカウンターを実装できます。'
      },
      {
        question: '`:not()` 擬似クラスの正しい使用例はどれですか？',
        options: [
          'p:not(.special) でspecialクラス以外のpを選択',
          ':not(p) でpのみを選択',
          ':not は複数セレクタに使えない',
          ':not は擬似クラスには使えない'
        ],
        answer: 0,
        hint: ':not(セレクタ) は指定に一致しない要素を選択します。:not(.last-child) や li:not(:first-child) のように活用できます。',
        advice: 'CSS Selectors Level 4では `:not(.a, .b)` のように複数セレクタを括弧内に書けます。`li:not(:first-child):not(:last-child)` より `:not(:first-child, :last-child)` とスッキリ書けます。'
      },
      {
        question: '`:focus-visible` が `:focus` と異なる点はどれですか？',
        options: [
          '同じ動作をする',
          'キーボード操作時のみ適用され、マウスクリックでは適用されない',
          'Firefox専用の擬似クラス',
          'input要素にしか使えない'
        ],
        answer: 1,
        hint: ':focus-visible はキーボード等でフォーカスした場合のみ適用されます。マウスクリックには適用されないのでアクセシビリティに配慮した実装に使います。',
        advice: 'button:focus { outline: none } の代わりに `button:focus:not(:focus-visible) { outline: none }` とするとキーボードユーザーのフォーカスを維持したままマウスのアウトラインだけ消せます。'
      }
    ]
  },
  {
    id: 'calc-clamp',
    title: 'calc() / clamp()',
    level: 'advanced',
    description: 'CSS関数のcalc()とclamp()で動的なサイズ計算を行います。',
    explanation: `## calc() と clamp()

### calc() — 計算式
異なる単位を混在させて計算できます。

\`\`\`css
.element {
  width: calc(100% - 32px);      /* 親の幅から32px引く */
  height: calc(100vh - 60px);    /* 画面高さからヘッダーを引く */
  font-size: calc(1rem + 0.5vw); /* 固定+可変 */
  margin: calc(var(--spacing) * 2); /* CSS変数との組み合わせ */
}
\`\`\`

### clamp(min, ideal, max) — 範囲クランプ
最小値・理想値・最大値を指定して可変値を作ります。

\`\`\`css
/* フォントサイズをモバイル〜デスクトップで可変に */
font-size: clamp(1rem, 2.5vw, 2rem);
/* → 最小1rem、最大2rem、中間は2.5vw */

/* コンテナ幅 */
width: clamp(300px, 80%, 1200px);
\`\`\`

### min() / max()
\`\`\`css
width: min(500px, 90%);   /* 小さい方を使う */
width: max(300px, 50%);   /* 大きい方を使う */
\`\`\`
`,
    demoCode: {
      html: `<h3>calc() のデモ</h3>
<div class="calc-container">
  <div class="sidebar">Sidebar (200px)</div>
  <div class="content">Main: calc(100% - 200px - 16px)</div>
</div>

<h3>clamp() フォントサイズ</h3>
<p class="clamp-text">このテキストのサイズはclamp(14px, 2.5vw, 24px)です。ウィンドウ幅を変えると変化します。</p>

<h3>min() / max()</h3>
<div class="min-demo">width: min(300px, 80%) — 小さい方</div>
<div class="max-demo">width: max(200px, 40%) — 大きい方</div>`,
      css: `h3 { font-size: 13px; color: #64748b; margin: 12px 0 6px; }

.calc-container {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  background: #f1f5f9;
  padding: 8px;
  border-radius: 8px;
}

.sidebar {
  width: 200px;
  flex-shrink: 0;
  background: #7c3aed;
  color: white;
  padding: 12px;
  border-radius: 6px;
  font-size: 13px;
}

.content {
  width: calc(100% - 200px - 16px);
  background: #2563eb;
  color: white;
  padding: 12px;
  border-radius: 6px;
  font-size: 13px;
}

.clamp-text {
  font-size: clamp(14px, 2.5vw, 24px);
  background: #fef9c3;
  padding: 12px;
  border-radius: 8px;
  color: #713f12;
  margin-bottom: 12px;
}

.min-demo {
  width: min(300px, 80%);
  background: #22c55e;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 13px;
}

.max-demo {
  width: max(200px, 40%);
  background: #f59e0b;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 13px;
}`
    },
    quiz: [
      {
        question: '`width: calc(100% - 32px)` が意味することはどれですか？',
        options: [
          '幅を100ピクセルから32ピクセル引いた値',
          '親要素の幅から32pxを引いた幅',
          '100vwから32pxを引いた幅',
          '幅を132%にする'
        ],
        answer: 1,
        hint: 'calc() の % は親要素基準です。異なる単位（% と px）を混在させて計算できるのが大きなメリットです。',
        advice: '`width: calc(100% - var(--padding) * 2)` のようにCSS変数と組み合わせると、可変paddingに対応した動的なwidthが書けます。'
      },
      {
        question: '`clamp(1rem, 3vw, 2rem)` で、画面幅が非常に広い場合のフォントサイズはどれですか？',
        options: ['1rem', '3vw（可変）', '2rem', '4rem'],
        answer: 2,
        hint: 'clamp(最小値, 理想値, 最大値) です。画面が広くなると理想値が大きくなりますが最大値を超えません。',
        advice: '`font-size: clamp(1rem, 2.5vw, 1.5rem)` でフォントサイズをレスポンシブにできます。メディアクエリなしでモバイルからデスクトップまで自然にスケールします。'
      },
      {
        question: '`min(500px, 90%)` の動作はどれですか？',
        options: [
          '常に500pxを使う',
          '500pxと90%のうち小さい方を使う',
          '500pxと90%のうち大きい方を使う',
          '平均値の295pxを使う'
        ],
        answer: 1,
        hint: 'min() は引数の中で最も小さい値を使います。max() は最も大きい値を使います。コンテナの最大幅制限に便利です。',
        advice: '`width: min(500px, 90%)` は `max-width: 500px; width: 90%` と同等の意味です。1行で書けるのでコードがシンプルになります。'
      },
      {
        question: '`height: calc(100vh - 60px)` はどんな場面で使われますか？',
        options: [
          '画像の高さを60%にする',
          '60pxのヘッダーを除いた画面いっぱいの高さを持つレイアウト',
          'フォントサイズを画面に合わせる',
          'スクロール量を制限する'
        ],
        answer: 1,
        hint: '100vh は画面全体の高さです。ヘッダーの高さを引くことで、スクロールバーが出ない全画面レイアウトを作れます。',
        advice: 'モバイルブラウザのアドレスバーで 100vh の挙動が変わる問題には `dvh`（dynamic viewport height）単位が解決策です。`height: 100dvh` で対応できます。'
      },
      {
        question: 'calc() の中で使えない演算子はどれですか？',
        options: ['+ (加算)', '- (減算)', '* (乗算)', '^ (べき乗)'],
        answer: 3,
        hint: 'calc() は +・-・*・/ の四則演算が使えます。べき乗（^）は使えません。注意点として + と - の前後にはスペースが必要です。',
        advice: 'CSS の + と - は前後にスペースが必要です。`calc(100% -32px)` はエラーになります。`calc(100% - 32px)` と書きましょう。'
      }
    ]
  },
  {
    id: 'transforms',
    title: 'clip-path / transform',
    level: 'advanced',
    description: 'transformで要素を変形し、clip-pathで独自の形状を作ります。',
    explanation: `## transform

要素を視覚的に変形します（レイアウトには影響しない）。

\`\`\`css
.element {
  transform: translateX(50px);        /* X方向に移動 */
  transform: translateY(-20px);       /* Y方向に移動 */
  transform: translate(50px, -20px);  /* XY同時 */
  transform: scale(1.5);              /* 拡大縮小 */
  transform: rotate(45deg);           /* 回転 */
  transform: skewX(15deg);            /* 傾斜 */

  /* 複数組み合わせ */
  transform: translateX(20px) rotate(10deg) scale(1.1);
}
\`\`\`

### transform-origin
変形の基点を指定（デフォルト: center center）

\`\`\`css
transform-origin: top left;
transform-origin: 50% 100%;
\`\`\`

## clip-path

要素を任意の形にクリップします。

\`\`\`css
/* 多角形 */
clip-path: polygon(50% 0%, 100% 100%, 0% 100%);

/* 円 */
clip-path: circle(50% at center);

/* 楕円 */
clip-path: ellipse(60% 40% at center);

/* 矩形（角丸も可）*/
clip-path: inset(10px round 8px);
\`\`\`
`,
    demoCode: {
      html: `<h3>transform デモ</h3>
<div class="transforms-row">
  <div class="t-box translate">translate(10px, -10px)</div>
  <div class="t-box scale">scale(1.2)</div>
  <div class="t-box rotate">rotate(15deg)</div>
  <div class="t-box skew">skewX(15deg)</div>
</div>

<h3>clip-path デモ</h3>
<div class="clips-row">
  <div class="clip-box triangle">三角形</div>
  <div class="clip-box circle-clip">円</div>
  <div class="clip-box hexagon">六角形</div>
  <div class="clip-box arrow">矢印</div>
</div>`,
      css: `h3 { font-size: 13px; color: #64748b; margin: 12px 0 8px; }

.transforms-row, .clips-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  align-items: center;
}

.t-box {
  background: #2563eb;
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-size: 11px;
  text-align: center;
  width: 100px;
  transition: transform 0.3s ease;
}

.t-box:hover { transform: none !important; background: #1d4ed8; }

.translate { transform: translate(10px, -10px); }
.scale { transform: scale(1.15); background: #7c3aed; }
.rotate { transform: rotate(12deg); background: #0f766e; }
.skew { transform: skewX(12deg); background: #b45309; }

.clip-box {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 11px;
  font-weight: bold;
}

.triangle {
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

.circle-clip {
  clip-path: circle(50% at center);
  background: linear-gradient(135deg, #f59e0b, #ef4444);
}

.hexagon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: linear-gradient(135deg, #22c55e, #16a34a);
}

.arrow {
  clip-path: polygon(0 20%, 60% 20%, 60% 0, 100% 50%, 60% 100%, 60% 80%, 0 80%);
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  width: 100px;
}`
    },
    quiz: [
      {
        question: '`transform: rotate(90deg)` で要素はどの方向に回転しますか？',
        options: ['反時計回りに90度', '時計回りに90度', '上に90px移動', '90%縮小'],
        answer: 1,
        hint: 'CSSのrotateは正の値が時計回りです。反時計回りにするには -90deg のようにマイナス値を使います。',
        advice: 'transformはGPUで処理されるため、`left/top` よりも `transform: translate()` の方がアニメーションがスムーズです。パフォーマンス改善の基本テクニックです。'
      },
      {
        question: 'transformプロパティはレイアウトに影響しますか？',
        options: [
          'はい、周囲の要素がずれる',
          'いいえ、視覚的にのみ変形し、レイアウトには影響しない',
          'marginとpaddingには影響する',
          'displayプロパティを変更する'
        ],
        answer: 1,
        hint: 'transform は GPU上で視覚的に変形するだけで、元のスペースはそのまま残ります。positionのtop/leftとの違いです。',
        advice: 'transformはスタッキングコンテキストを新規に作成します。z-indexの意図しない挙動が起きたときは、transformの有無も確認してみましょう。'
      },
      {
        question: '`clip-path: circle(50% at center)` で作られる形状はどれですか？',
        options: ['正方形', '三角形', '円（要素内接）', '星形'],
        answer: 2,
        hint: 'circle(半径 at 中心X 中心Y) で円形のクリップを作れます。50%は短辺の半分なので、正方形要素なら内接円になります。',
        advice: 'clip-path にも transition が適用できます。`polygon()` の頂点数が同じなら形が変わるアニメーションが作れます。ホバーで四角→菱形など面白い演出が可能です。'
      },
      {
        question: '複数のtransformを適用するときの正しい書き方はどれですか？',
        options: [
          'transform: rotate(45deg); transform: scale(1.2);（2行）',
          'transform: rotate(45deg) scale(1.2);（スペース区切り）',
          'transform: [rotate(45deg), scale(1.2)]',
          'transforms: rotate(45deg), scale(1.2)'
        ],
        answer: 1,
        hint: 'transform は1プロパティに複数の関数をスペースで区切って書きます。2行に分けると後の宣言で上書きされ前の変換が無効になります。',
        advice: 'transformの順序は結果に影響します。`translate(50px, 0) rotate(45deg)` と `rotate(45deg) translate(50px, 0)` では異なる位置に移動します。'
      },
      {
        question: '`transform-origin` を変えると何が変わりますか？',
        options: [
          'transformが無効になる',
          '回転・拡縮・傾斜などの変形の基点が変わる',
          'アニメーション速度が変わる',
          'z-indexが変わる'
        ],
        answer: 1,
        hint: 'デフォルトは center center（要素の中心）です。transform-origin: top left に変えると左上を基点に変形します。',
        advice: '`transform-origin: 0% 50%` で左端を起点にしたスケールアニメーションが作れます。折り畳みメニューやアコーディオンのアニメーションによく使われます。'
      }
    ]
  },
  {
    id: 'architecture',
    title: 'CSSアーキテクチャ（BEM）',
    level: 'advanced',
    description: 'BEM命名規則などのCSSアーキテクチャを学んで、大規模なスタイルを保守しやすく管理します。',
    explanation: `## CSSアーキテクチャ

大規模なプロジェクトでCSSが複雑になるのを防ぐための設計手法。

### BEM（Block Element Modifier）
命名規則でCSSの構造を明確にします。

\`\`\`
block__element--modifier
\`\`\`

\`\`\`css
/* Block: 独立したコンポーネント */
.card { ... }

/* Element: blockの構成要素（__で区切る）*/
.card__title { ... }
.card__body { ... }
.card__footer { ... }

/* Modifier: 状態や変形（--で区切る）*/
.card--featured { ... }
.card--dark { ... }
.card__title--large { ... }
\`\`\`

### SMACSS / OOCSS
- **SMACSS**: Base, Layout, Module, State, Themeに分類
- **OOCSS**: 構造と見た目を分離し、再利用性を高める

### Utility-First（Tailwindアプローチ）
\`\`\`html
<div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
\`\`\`

### CSS Modules / Scoped CSS
- スコープを自動的に作り、クラス名衝突を防ぐ
- Vite + React では \`.module.css\` がこれにあたる
`,
    demoCode: {
      html: `<!-- BEM命名規則のデモ -->
<article class="card">
  <img class="card__image" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100'%3E%3Crect fill='%23dbeafe' width='100%25' height='100'/%3E%3C/svg%3E" alt="">
  <div class="card__body">
    <h2 class="card__title">通常カード</h2>
    <p class="card__text">BEMのBlockです。</p>
  </div>
  <div class="card__footer">
    <button class="card__btn">詳細を見る</button>
  </div>
</article>

<article class="card card--featured">
  <div class="card__body">
    <h2 class="card__title card__title--large">注目カード</h2>
    <p class="card__text">card--featuredがModifierです。</p>
  </div>
  <div class="card__footer">
    <button class="card__btn card__btn--primary">今すぐ見る</button>
  </div>
</article>`,
      css: `/* BEM: Block */
.card {
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* BEM: Element */
.card__image {
  width: 100%;
  height: 80px;
  object-fit: cover;
  display: block;
}

.card__body {
  padding: 16px;
}

.card__title {
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 8px;
}

.card__text {
  color: #64748b;
  font-size: 14px;
  margin: 0;
}

.card__footer {
  padding: 8px 16px 16px;
}

.card__btn {
  background: #f1f5f9;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}

/* BEM: Modifier */
.card--featured {
  border-color: #2563eb;
  border-width: 3px;
  background: #eff6ff;
}

.card__title--large {
  font-size: 20px;
  color: #2563eb;
}

.card__btn--primary {
  background: #2563eb;
  color: white;
}`
    },
    quiz: [
      {
        question: 'BEMの "E" は何を表しますか？',
        options: ['External（外部）', 'Element（要素）', 'Effect（効果）', 'Exception（例外）'],
        answer: 1,
        hint: 'BEM は Block・Element・Modifier の略です。Blockは独立コンポーネント、Elementはその構成要素です。',
        advice: 'Elementには3つ以上の階層をつけないのがBEMの慣例です。`.card__body__text` はNGで、`.card__text` にします。深いネストはHTML構造への依存を高めます。'
      },
      {
        question: 'BEMでModifierを表す区切り文字はどれですか？',
        options: ['_ (アンダースコア)', '__ (ダブルアンダースコア)', '-- (ダブルハイフン)', '- (ハイフン)'],
        answer: 2,
        hint: 'BEMの規則：Block__Element でElementを表し、Block--Modifier でModifierを表します。',
        advice: 'Modifierはクラスを「追加」する形で使います。元のBlockクラスは残します（`class="card card--featured"`）。これにより基本スタイルと変形スタイルが分離されます。'
      },
      {
        question: 'CSS Modulesのメリットはどれですか？',
        options: [
          'CSSを削除できる',
          'クラス名をグローバルに適用できる',
          'クラス名のスコープを自動作成しクラス名衝突を防ぐ',
          'JavaScriptが不要になる'
        ],
        answer: 2,
        hint: 'CSS Modulesはビルド時にクラス名をユニークな識別子に変換します。ReactではViteが `.module.css` を自動処理します。',
        advice: 'CSS Modulesでは `:global(.global-class)` でグローバルスタイルも書けます。また `composes: base from "./base.module.css"` で他モジュールのスタイルを継承できます。'
      },
      {
        question: 'BEMのBlockの定義として正しいのはどれですか？',
        options: [
          'HTMLのブロックレベル要素',
          '独立して機能する再利用可能なUIコンポーネント（card, nav, button など）',
          'divタグのみを指す',
          'モジュール内の1つのCSSルール'
        ],
        answer: 1,
        hint: 'BEMのBlockは意味的に独立したUIコンポーネントです。DOMの構造ではなく機能的な独立性で判断します。',
        advice: '大規模プロジェクトでは Block をフォルダに分けて管理します。`components/Button/Button.module.css` と `Button.jsx` を同じ場所に置くコロケーションが推奨されます。'
      },
      {
        question: 'Utility-first CSS（Tailwindなど）のメリットはどれですか？',
        options: [
          'CSSファイルが大きくなる',
          'クラス名を考える必要がなく、小さな単機能クラスをHTMLに直接組み合わせられる',
          'セマンティクスが明確になる',
          'サーバーサイドレンダリング専用'
        ],
        answer: 1,
        hint: 'ユーティリティファーストはHTMLに直接スタイルを書くため命名不要でCSSが増えにくいです。一方HTMLが冗長になるトレードオフがあります。',
        advice: 'Tailwind CSS はビルド時にPurgeCSSで未使用クラスを除去するため、本番CSSは非常に小さくなります。ユーティリティクラスの数を気にする必要はありません。'
      }
    ]
  }
]

// ===== SCSS =====
const scssTopics = [
  {
    id: 'scss-basics',
    title: 'SCSS変数とネスト',
    level: 'intermediate',
    lang: 'scss',
    description: 'SCSSの変数（$var）とネスト、親セレクタ（&）を使って保守性の高いスタイルを書きます。',
    explanation: `## SCSSとは

SCSS（Sassy CSS）はCSSの拡張言語（AltCSS）です。通常のCSSと完全互換で、変数・ネスト・ミックスインなどの強力な機能を追加します。

### 変数（Variables）
\`\`\`scss
$primary: #2563eb;
$spacing-base: 16px;
$font-size-lg: 1.25rem;

.button {
  background: $primary;
  padding: $spacing-base / 2 $spacing-base;
  font-size: $font-size-lg;
}
\`\`\`

### ネスト（Nesting）
HTMLの構造をそのままCSSに反映できます。
\`\`\`scss
.nav {
  background: #fff;
  padding: 16px;

  ul {
    list-style: none;
    display: flex;
    gap: 8px;
  }

  a {
    color: #333;
    text-decoration: none;

    &:hover {       // & = 親セレクタ（.nav a:hover）
      color: $primary;
    }
  }
}
\`\`\`

### 親セレクタ（&）
\`\`\`scss
.button {
  background: blue;

  &:hover    { background: darkblue; }  // .button:hover
  &.large    { font-size: 1.2rem; }     // .button.large
  &--primary { background: $primary; } // BEM: .button--primary
  &__icon    { margin-right: 8px; }    // BEM: .button__icon
}
\`\`\`
`,
    demoCode: {
      html: `<nav class="nav">
  <div class="nav__logo">MySite</div>
  <ul class="nav__links">
    <li><a href="#" class="nav__link nav__link--active">ホーム</a></li>
    <li><a href="#" class="nav__link">製品</a></li>
    <li><a href="#" class="nav__link">お問い合わせ</a></li>
  </ul>
</nav>

<div class="card">
  <div class="card__header">カードタイトル</div>
  <div class="card__body">
    <p>SCSSのネストを使ったカードコンポーネントです。</p>
    <button class="btn btn--primary">詳細を見る</button>
    <button class="btn btn--ghost">キャンセル</button>
  </div>
</div>`,
      scss: `// ===== SCSS変数 =====
$primary: #2563eb;
$text: #1e293b;
$border: #e2e8f0;
$radius: 10px;
$spacing: 16px;

// ===== ナビゲーション（ネスト + &）=====
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border: 1px solid $border;
  border-radius: $radius;
  padding: $spacing;
  margin-bottom: $spacing;

  &__logo {
    font-weight: 800;
    font-size: 1.1rem;
    color: $primary;
  }

  &__links {
    display: flex;
    list-style: none;
    gap: 4px;
  }

  &__link {
    display: block;
    padding: 6px 14px;
    border-radius: 6px;
    color: #64748b;
    text-decoration: none;
    transition: all 0.15s;

    &:hover {
      background: #eff6ff;
      color: $primary;
    }

    &--active {
      background: $primary;
      color: white;

      &:hover {
        background: darken($primary, 8%);
        color: white;
      }
    }
  }
}

// ===== カード =====
.card {
  border: 1px solid $border;
  border-radius: $radius;
  overflow: hidden;

  &__header {
    background: #f8fafc;
    padding: 12px $spacing;
    font-weight: 700;
    color: $text;
    border-bottom: 1px solid $border;
  }

  &__body {
    padding: $spacing;

    p { color: #64748b; margin-bottom: 12px; }
  }
}

// ===== ボタン（& BEM）=====
.btn {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-right: 8px;
  transition: all 0.15s;

  &--primary {
    background: $primary;
    color: white;
    &:hover { background: darken($primary, 8%); }
  }

  &--ghost {
    background: transparent;
    color: $text;
    border: 1px solid $border;
    &:hover { background: #f8fafc; }
  }
}`
    },
    quiz: [
      {
        question: 'SCSSで変数を定義する記号はどれですか？',
        options: ['--variable', '@variable', '$variable', '#variable'],
        answer: 2,
        hint: 'SCSSの変数は `$` で始めます。CSSカスタムプロパティの `--` と異なるので注意しましょう。',
        advice: 'CSS変数（`--var`）との使い分け：SCSS変数はコンパイル時に値に置き換えられます。ランタイムで変更したい値はCSS変数、コンパイル時の定数にはSCSS変数を使いましょう。'
      },
      {
        question: 'SCSSのネスト内で親セレクタを参照する記号はどれですか？',
        options: ['>', '^', '&', '~'],
        answer: 2,
        hint: '`&` は親セレクタを展開します。`.nav { &:hover }` は `.nav:hover` に、`&__item` は `.nav__item` に展開されます。',
        advice: '& はBEMとの相性が抜群です。`.block { &__element { } &--modifier { } }` のパターンで、SCSSでBEM命名を構造的に管理できます。'
      },
      {
        question: '.button の中に &:hover と書いた場合、生成されるCSSセレクタはどれですか？',
        options: ['.button .hover', '.button:hover', ':hover .button', '.button > :hover'],
        answer: 1,
        hint: '& は親セレクタ（.button）そのものを表します。スペースなしで結合されるので .button:hover になります。',
        advice: '& は複数回使えます。`.card { &:hover &__title { color: blue; } }` のように書くと、ホバー時の子要素スタイルも構造的にネストして書けます。'
      },
      {
        question: 'SCSSとSassの違いとして正しいのはどれですか？',
        options: [
          '全く同じもの',
          'SCSSは{}と;を使うCSS互換構文、Sassはインデント構文',
          'SassはJavaScript用、SCSSはCSS用',
          'SCSSはより古い構文'
        ],
        answer: 1,
        hint: 'SCSSはCSSと全く同じ構文で書けます（拡張子 .scss）。Sassはインデントで構造を表す別構文（拡張子 .sass）です。',
        advice: '既存の `.css` ファイルを `.scss` にリネームするだけでSCSSとして動作します。CSSは100%有効なSCSSです。段階的な移行が可能です。'
      },
      {
        question: 'SCSSで @import ではなく @use が推奨される主な理由はどれですか？',
        options: [
          '@importの方が遅い',
          '@useは名前空間を提供しグローバル汚染と重複コンパイルを防ぐ',
          '@useの方が書きやすい',
          '@importはSCSSで使えない'
        ],
        answer: 1,
        hint: '@use で読み込むと名前空間がつきます（例: math.ceil()）。@import はグローバルに展開され変数の衝突が起きやすいため非推奨です。',
        advice: '@use では `@use "sass:math"` でmath.div()、`@use "sass:color"` でcolor関数が使えます。これらのモジュールシステムが @import にはなかった主な強化点です。'
      }
    ]
  },
  {
    id: 'scss-mixins',
    title: 'SCSSミックスイン',
    level: 'intermediate',
    lang: 'scss',
    description: '@mixinでスタイルのまとまりを定義し、@includeで再利用します。引数を使って柔軟なミックスインを作れます。',
    explanation: `## @mixin と @include

ミックスインはスタイルのひとまとまりを定義して、複数箇所で再利用できる機能です。

### 基本的な@mixin
\`\`\`scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  @include flex-center;
  height: 100vh;
}
\`\`\`

### 引数付き@mixin
\`\`\`scss
@mixin button($bg: #2563eb, $color: white) {
  background: $bg;
  color: $color;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: darken($bg, 10%);
  }
}

.btn-primary { @include button(); }
.btn-danger  { @include button(#ef4444); }
\`\`\`

### @content（コンテンツブロック）
メディアクエリなどに便利です。
\`\`\`scss
@mixin tablet {
  @media (min-width: 768px) {
    @content;
  }
}

.container {
  width: 100%;

  @include tablet {
    width: 750px;
    margin: 0 auto;
  }
}
\`\`\`
`,
    demoCode: {
      html: `<div class="demo-flex">
  <div class="card-a">カードA<br><small>@mixin card</small></div>
  <div class="card-b">カードB<br><small>@mixin card (variant)</small></div>
</div>

<div class="buttons">
  <button class="btn-primary">Primary</button>
  <button class="btn-danger">Danger</button>
  <button class="btn-success">Success</button>
</div>

<div class="responsive-box">
  レスポンシブボックス<br>
  <small>@include tablet で幅が変わります</small>
</div>`,
      scss: `// ===== 基本ミックスイン =====
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// ===== 引数付きミックスイン =====
@mixin card($border-color: #e2e8f0, $bg: white) {
  background: $bg;
  border: 2px solid $border-color;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

@mixin button($bg: #2563eb, $color: white) {
  background: $bg;
  color: $color;
  padding: 9px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.15s;

  &:hover {
    background: darken($bg, 10%);
    transform: translateY(-1px);
  }
}

// ===== @content =====
@mixin tablet {
  @media (min-width: 480px) {
    @content;
  }
}

// ===== 使用 =====
.demo-flex {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.card-a {
  @include card();
  flex: 1;
  min-width: 120px;
  font-weight: 600;
  color: #1e293b;
}

.card-b {
  @include card(#2563eb, #eff6ff);
  flex: 1;
  min-width: 120px;
  font-weight: 600;
  color: #1e40af;
}

.buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.btn-primary { @include button(); }
.btn-danger  { @include button(#ef4444); }
.btn-success { @include button(#16a34a); }

.responsive-box {
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  color: #64748b;
  font-size: 14px;

  @include tablet {
    background: #eff6ff;
    border-color: #2563eb;
    color: #1e40af;
  }
}`
    },
    quiz: [
      {
        question: '@mixinで定義したスタイルを使用するには？',
        options: ['@use mixin-name', '@apply mixin-name', '@include mixin-name', '@import mixin-name'],
        answer: 2,
        hint: '@mixin で定義し、@include で呼び出します。@apply は古いCSS提案、@use はモジュール読み込みです。',
        advice: 'よく使うミックスインは `_mixins.scss` などのpartialファイルにまとめて `@use` で読み込むと再利用しやすいです。チームでの開発にも最適です。'
      },
      {
        question: 'ミックスインに引数のデフォルト値を設定する書き方はどれですか？',
        options: [
          '@mixin btn($color = blue)',
          '@mixin btn($color: blue)',
          '@mixin btn($color default blue)',
          '@mixin btn($color || blue)'
        ],
        answer: 1,
        hint: 'SCSSの引数デフォルト値は `$変数: デフォルト値` の形式です。Pythonのキーワード引数に似た書き方です。',
        advice: 'デフォルト値付きのミックスインは引数なしでも呼び出せます。基本スタイルは `@include button()` で、カスタマイズは `@include button(#ef4444)` で呼び出せます。'
      },
      {
        question: '@contentを使うメリットはどれですか？',
        options: [
          'ミックスインにコンテンツ（スタイルブロック）を渡せる',
          'CSSコメントを自動生成する',
          '変数のデフォルト値を設定する',
          'セレクタを自動的に生成する'
        ],
        answer: 0,
        hint: '@content を使うと、@include 時に `{ }` ブロックで渡したスタイルが展開されます。メディアクエリのラッパーミックスインに特に便利です。',
        advice: 'メディアクエリのmixinを定義しておくと `@include sp { color: red }` のように書けます。ブレークポイントを一元管理でき、変更も1箇所で済みます。'
      },
      {
        question: '@mixin 内で `&` を使うとどうなりますか？',
        options: [
          'エラーになる',
          '@include した場所のセレクタに展開される',
          '常に :root になる',
          'body セレクタになる'
        ],
        answer: 1,
        hint: '@mixin 内の `&` は @include した場所のセレクタが展開されます。つまり mixin の中で &:hover を書いても正しく動作します。',
        advice: 'ミックスイン内で & を使うことで、ホバー・フォーカス・disabled状態のスタイルも一括でmixinに含められます。ボタンmixinなどで特に効果的です。'
      },
      {
        question: 'ミックスインとクラスの継承（@extend）の使い分けとして適切なのはどれですか？',
        options: [
          '常にミックスインを使う',
          '引数が必要・メディアクエリ内で使う場合はmixin、同種要素の共通スタイルには@extend/%',
          '常に@extendを使う',
          '両者に違いはない'
        ],
        answer: 1,
        hint: '@mixin は引数で柔軟なカスタマイズが可能です。@extend はメディアクエリ内で使えない制限がありますが、同一スコープ内の共通スタイルまとめに有効です。',
        advice: 'コンポーネントライブラリでは @mixin が主流です。@extend はメディアクエリ内使用不可などの制約があるため、汎用性の高い @mixin を優先するのが実務の傾向です。'
      }
    ]
  },
  {
    id: 'scss-functions',
    title: 'SCSS関数と演算',
    level: 'advanced',
    lang: 'scss',
    description: '@functionでカスタム関数を定義し、SCSSの組み込み関数（darken・lighten・mixなど）と演算を使いこなします。',
    explanation: `## SCSS関数と演算

### 四則演算
\`\`\`scss
$base: 16px;

.element {
  width: 100% / 3;
  margin: $base * 2;
  padding: $base + 8px;
  font-size: $base - 2px;
}
\`\`\`

### 組み込みカラー関数
\`\`\`scss
$primary: #2563eb;

.dark  { background: darken($primary, 10%); }  // 暗く
.light { background: lighten($primary, 20%); } // 明るく
.trans { background: rgba($primary, 0.3); }    // 透明度
.mixed { background: mix($primary, white, 70%); } // 混合

// @use で新しい構文
@use 'sass:color';
.new-dark { background: color.adjust($primary, $lightness: -10%); }
\`\`\`

### @function でカスタム関数
\`\`\`scss
@function rem($px) {
  @return $px / 16px * 1rem;
}

@function clamp-size($min, $max) {
  @return clamp(#{$min}, 2.5vw, #{$max});
}

.element {
  font-size: rem(24px);     // 1.5rem
  padding: rem(16px);       // 1rem
}
\`\`\`
`,
    demoCode: {
      html: `<h3>カラー関数</h3>
<div class="color-row">
  <div class="c-darkened">darken 20%</div>
  <div class="c-base">base $primary</div>
  <div class="c-lightened">lighten 20%</div>
  <div class="c-mixed">mix(white, 60%)</div>
  <div class="c-rgba">rgba 0.4</div>
</div>

<h3>演算</h3>
<div class="calc-row">
  <div class="col-third">100%/3</div>
  <div class="col-third">100%/3</div>
  <div class="col-third">100%/3</div>
</div>

<h3>カスタム @function</h3>
<p class="rem-demo">rem(24px) → 1.5rem のフォントサイズ</p>
<p class="rem-sm">rem(12px) → 0.75rem のフォントサイズ</p>`,
      scss: `@use 'sass:math';
@use 'sass:color';

// ===== 変数 =====
$primary: #2563eb;
$base-font: 16px;

// ===== カスタム関数 =====
@function rem($px) {
  @return math.div($px, $base-font) * 1rem;
}

// ===== カラー関数デモ =====
h3 {
  font-size: rem(13px);
  color: #64748b;
  margin: 12px 0 8px;
}

.color-row {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.color-row div {
  padding: 12px 8px;
  border-radius: 8px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  flex: 1;
  min-width: 80px;
}

.c-darkened  { background: color.adjust($primary, $lightness: -20%); }
.c-base      { background: $primary; }
.c-lightened { background: lighten($primary, 20%); color: #1e293b; }
.c-mixed     { background: mix(white, $primary, 60%); color: #1e293b; }
.c-rgba      { background: rgba($primary, 0.4); color: #1e293b; border: 1px solid #e2e8f0; }

// ===== 演算デモ =====
.calc-row {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.col-third {
  width: math.percentage(math.div(1, 3));
  background: #7c3aed;
  color: white;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
}

// ===== @function デモ =====
.rem-demo {
  font-size: rem(24px);
  color: #1e293b;
  margin-bottom: 8px;
  font-weight: 600;
}

.rem-sm {
  font-size: rem(12px);
  color: #64748b;
}`
    },
    quiz: [
      {
        question: 'SCSSで色を暗くする組み込み関数はどれですか？',
        options: ['dark($color, 10%)', 'darken($color, 10%)', 'color.dark($color)', 'shade($color, 10%)'],
        answer: 1,
        hint: 'darken() で暗く、lighten() で明るく、mix() で2色を混合できます。新しいSassでは color.adjust() の使用が推奨されています。',
        advice: 'Sass の色関数はブランドカラーのバリエーション（ホバー色・ボーダー色）を自動生成するのに便利です。デザイントークンと組み合わせると強力なテーマシステムが作れます。'
      },
      {
        question: '@functionが@mixinと異なる点はどれですか？',
        options: [
          '@functionはスタイルを出力し、@mixinは値を返す',
          '@functionは@returnで値を返し、@mixinはスタイルブロックを出力する',
          '違いはない',
          '@functionはループを使えない'
        ],
        answer: 1,
        hint: '@function は計算結果などの「値」を返します。@mixin は「スタイルの集まり」を出力します。使い分けが重要です。',
        advice: '`@function spacing($n) { @return $n * 8px; }` のようなスペーシング関数を作っておくと、デザインシステムの8pxグリッドを一貫して使えます。'
      },
      {
        question: '`math.div(1, 3)` が必要な理由はどれですか？',
        options: [
          '見やすくするため',
          '新しいSassでは / が除算ではなく区切り文字として解釈されるため',
          '整数の割り算に使うため',
          'パーセント計算のため'
        ],
        answer: 1,
        hint: '新しいSass（Dart Sass）では `1 / 3` の `/` がCSSのショートハンド区切り文字として扱われます。除算には math.div() を使います。',
        advice: '`@use "sass:math"` でmath.div(), math.ceil(), math.floor() などの数学関数が使えます。複雑なグリッドやタイポグラフィのスケール計算に便利です。'
      },
      {
        question: 'SCSS の @function で必ず使うキーワードはどれですか？',
        options: ['@yield', '@output', '@return', '@result'],
        answer: 2,
        hint: '@function は @return で値を返します。@return がないと null が返ります。値を返すこと（@function）とスタイルを出力すること（@mixin）の違いを覚えましょう。',
        advice: '`@function` は純粋な値の計算に、`@mixin` はスタイルの生成に使います。この責務の分離でコードが読みやすくなり、テストもしやすくなります。'
      },
      {
        question: '`lighten($color, 20%)` の効果はどれですか？',
        options: [
          '色を20%暗くする',
          '色の明度を20%上げて明るくする',
          '色の透明度を20%にする',
          '色を20%鮮やかにする'
        ],
        answer: 1,
        hint: 'lighten() は明度を上げ、darken() は明度を下げます。saturate() / desaturate() は彩度を操作します。',
        advice: '`mix($color, white, 80%)` も明るさの調整に使えます。lighten() より自然な色変化が得られる場合があります。Figmaのtints機能と近い動作です。'
      }
    ]
  },
  {
    id: 'scss-extend',
    title: 'SCSS継承（@extend）',
    level: 'advanced',
    lang: 'scss',
    description: '@extendとプレースホルダー（%）でスタイルを継承し、コードの重複を減らします。',
    explanation: `## @extend と プレースホルダー

### @extend の基本
他のセレクタのスタイルを継承します。

\`\`\`scss
.message {
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid;
}

.success {
  @extend .message;
  background: #f0fdf4;
  border-color: #22c55e;
  color: #166534;
}

.error {
  @extend .message;
  background: #fef2f2;
  border-color: #ef4444;
  color: #991b1b;
}
\`\`\`

### プレースホルダー（%）
\`%name\` で定義したスタイルはCSSに単体では出力されず、@extend されたときだけ出力されます。

\`\`\`scss
// これ自体はCSSに出力されない
%flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero { @extend %flex-center; }
.icon-wrap { @extend %flex-center; }
\`\`\`

### @extend vs @mixin の使い分け
| | @extend / % | @mixin |
|---|---|---|
| 引数 | ✕ | ✓ |
| 生成CSS | セレクタをまとめる | コードをコピー |
| 用途 | 同種の要素 | 汎用スタイル |
`,
    demoCode: {
      html: `<h3>アラートコンポーネント（@extend）</h3>
<div class="alert alert--info">情報: @extendで継承しています</div>
<div class="alert alert--success">成功: 共通スタイルを継承</div>
<div class="alert alert--warning">警告: プレースホルダーを使用</div>
<div class="alert alert--error">エラー: コードの重複がありません</div>

<h3>ボタングループ（%プレースホルダー）</h3>
<div class="btn-group">
  <button class="btn-a">ボタンA</button>
  <button class="btn-b">ボタンB</button>
  <button class="btn-c">ボタンC</button>
</div>`,
      scss: `// ===== プレースホルダー =====
%card-base {
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 4px solid;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
}

%btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 20px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}

// ===== @extend で継承 =====
h3 {
  font-size: 13px;
  color: #64748b;
  margin: 12px 0 8px;
}

.alert {
  @extend %card-base;
}

.alert--info {
  background: #eff6ff;
  border-color: #2563eb;
  color: #1e40af;
}

.alert--success {
  background: #f0fdf4;
  border-color: #22c55e;
  color: #166534;
}

.alert--warning {
  background: #fffbeb;
  border-color: #f59e0b;
  color: #92400e;
}

.alert--error {
  background: #fef2f2;
  border-color: #ef4444;
  color: #991b1b;
}

// ===== ボタン =====
.btn-group {
  display: flex;
  gap: 8px;
}

.btn-a {
  @extend %btn-base;
  background: #2563eb;
  color: white;
  &:hover { background: #1d4ed8; }
}

.btn-b {
  @extend %btn-base;
  background: #7c3aed;
  color: white;
  &:hover { background: #6d28d9; }
}

.btn-c {
  @extend %btn-base;
  background: #f1f5f9;
  color: #1e293b;
  border: 1px solid #e2e8f0;
  &:hover { background: #e2e8f0; }
}`
    },
    quiz: [
      {
        question: 'SCSS のプレースホルダー（%）の特徴はどれですか？',
        options: [
          '通常のクラスと同じようにCSSに出力される',
          '@extend されるまでCSSに出力されない',
          'JavaScriptから参照できる',
          '必ず@mixinと一緒に使う'
        ],
        answer: 1,
        hint: '%placeholder は @extend で使われるまでCSSに出力されません。.class を extend するよりクリーンなCSSが生成されます。',
        advice: 'プレースホルダーを使うと出力CSSが `.success, .error { padding: 12px }` のようにグループ化されてコードが減ります。直接クラスを @extend するより推奨されます。'
      },
      {
        question: '@extend を使うメリットはどれですか？',
        options: [
          '引数を渡してスタイルを動的に変えられる',
          'セレクタをグループ化してCSSの重複を減らせる',
          'メディアクエリを自動生成できる',
          'JavaScriptの変数をCSSに使える'
        ],
        answer: 1,
        hint: '@extend はセレクタをグループ化します。例えば .message, .success { padding: 12px } のようにまとめられます。',
        advice: '@extend はアラート・バッジ・ステータス表示など「同種の要素に共通ベーススタイルを持つ」場合に効果を発揮します。メッセージコンポーネントの実装に特に有効です。'
      },
      {
        question: '@extend と @mixin の使い分けとして適切なのはどれですか？',
        options: [
          '常に@extendを使う',
          '引数が必要な場合は@mixin、同種の要素に共通スタイルを付ける場合は@extend/%',
          '常に@mixinを使う',
          'どちらも同じなので気にしない'
        ],
        answer: 1,
        hint: '@mixin は引数で柔軟なカスタマイズが可能、@extend はコードの重複を排除しますがメディアクエリ内では使えない制限があります。',
        advice: '迷ったら @mixin を使うのが安全です。@extend のメディアクエリ内使用不可などの制約を避けられ、コードの挙動が予測しやすくなります。'
      },
      {
        question: '@extend がメディアクエリ内で使えない理由はどれですか？',
        options: [
          '構文が異なるから',
          'セレクタのスコープが異なるため、メディアクエリを越えた @extend は Sass が拒否するため',
          'ブラウザが対応していないから',
          'ファイルサイズが大きくなるから'
        ],
        answer: 1,
        hint: '@extend はメディアクエリのスコープを跨げません。メディアクエリ内でスタイルを再利用したい場合は @mixin を使います。',
        advice: 'この制約があるため、多くのプロジェクトでは @extend を使わず @mixin で代替しています。Sass公式も @mixin の使用を推奨しています。'
      },
      {
        question: 'プレースホルダー（%）を @extend した場合、生成されるCSSはどうなりますか？',
        options: [
          'プレースホルダー名のクラスがそのまま出力される',
          'プレースホルダーを @extend した全セレクタがグループ化されて出力される',
          '変数として展開される',
          '何も出力されない'
        ],
        answer: 1,
        hint: '%message を .success と .error が @extend した場合、.success, .error { /* message のスタイル */ } のようにグループ化されます。',
        advice: 'DevTools でCSSを確認すると @extend によるグループ化がよく分かります。出力CSSの構造を理解することでデバッグ力が上がります。'
      }
    ]
  },
  {
    id: 'scss-control',
    title: 'SCSSフロー制御',
    level: 'advanced',
    lang: 'scss',
    description: '@if・@each・@for・@whileでSCSSに制御構造を持ち込み、ユーティリティクラスなどを自動生成します。',
    explanation: `## SCSSのフロー制御

### @if / @else if / @else
\`\`\`scss
@mixin theme-color($theme) {
  @if $theme == dark {
    background: #1e293b;
    color: white;
  } @else if $theme == light {
    background: white;
    color: #1e293b;
  } @else {
    background: #f8fafc;
    color: #64748b;
  }
}

.dark-box  { @include theme-color(dark); }
.light-box { @include theme-color(light); }
\`\`\`

### @each
リストやマップを反復処理します。
\`\`\`scss
$colors: (primary: #2563eb, success: #22c55e, danger: #ef4444);

@each $name, $color in $colors {
  .text-#{$name}  { color: $color; }
  .bg-#{$name}    { background: $color; }
  .border-#{$name}{ border-color: $color; }
}
\`\`\`

### @for
数値範囲を繰り返します。
\`\`\`scss
// @for $i from 1 through 5
@for $i from 1 through 5 {
  .col-#{$i} {
    width: 20% * $i;
  }
}

// spacing utilities
@for $i from 0 through 4 {
  .p-#{$i} { padding: 4px * $i; }
  .m-#{$i} { margin:  4px * $i; }
}
\`\`\`
`,
    demoCode: {
      html: `<h3>@each でカラーユーティリティ自動生成</h3>
<div class="swatch-row">
  <span class="badge bg-primary">primary</span>
  <span class="badge bg-success">success</span>
  <span class="badge bg-warning text-warning">warning</span>
  <span class="badge bg-danger">danger</span>
  <span class="badge bg-purple">purple</span>
</div>

<h3>@for でグリッドカラム自動生成</h3>
<div class="grid-demo">
  <div class="col-1 cell">col-1</div>
  <div class="col-2 cell">col-2</div>
  <div class="col-3 cell">col-3</div>
</div>
<div class="grid-demo">
  <div class="col-2 cell">col-2</div>
  <div class="col-4 cell">col-4</div>
</div>

<h3>@if でサイズバリアント生成</h3>
<div class="size-row">
  <button class="btn-sm">sm</button>
  <button class="btn-md">md</button>
  <button class="btn-lg">lg</button>
</div>`,
      scss: `@use 'sass:math';
@use 'sass:color';

// ===== @each: カラーマップ =====
$colors: (
  primary: #2563eb,
  success: #16a34a,
  warning: #d97706,
  danger:  #dc2626,
  purple:  #7c3aed,
);

h3 {
  font-size: 13px;
  color: #64748b;
  margin: 12px 0 8px;
}

.swatch-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 12px;
  font-weight: 700;
  color: white;
}

@each $name, $clr in $colors {
  .bg-#{$name} {
    background-color: $clr;
  }
  .text-#{$name} {
    color: $clr;
  }
}

// warningは文字色を暗くする
.text-warning { color: #92400e; }
.bg-warning   { color: #1e293b; }

// ===== @for: グリッドカラム =====
$cols: 6;

.grid-demo {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
}

.cell {
  background: #2563eb;
  color: white;
  padding: 8px 4px;
  border-radius: 6px;
  font-size: 11px;
  text-align: center;
  font-weight: 700;
}

@for $i from 1 through $cols {
  .col-#{$i} {
    flex: $i;
  }
}

// ===== @if: サイズバリアント =====
$sizes: (sm, md, lg);

@mixin btn-size($size) {
  @if $size == sm {
    padding: 5px 12px;
    font-size: 12px;
  } @else if $size == md {
    padding: 8px 18px;
    font-size: 14px;
  } @else if $size == lg {
    padding: 12px 28px;
    font-size: 16px;
  }
}

.size-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

@each $s in $sizes {
  .btn-#{$s} {
    @include btn-size($s);
    background: #7c3aed;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.15s;
    &:hover { background: #6d28d9; }
  }
}`
    },
    quiz: [
      {
        question: 'SCSSの @each でマップを使うとき、`@each $key, $value in $map` の $key と $value はそれぞれ何を表しますか？',
        options: [
          '$keyがインデックス、$valueが要素',
          '$keyがマップのキー、$valueがマップの値',
          '$keyが型名、$valueが値',
          '順序は逆で$keyが値、$valueがキー'
        ],
        answer: 1,
        hint: 'SCSSのマップは `(key: value, key: value)` の形式で定義します。@each でキーと値を取り出してスタイルを生成できます。',
        advice: 'カラーパレット・スペーシングスケール・ブレークポイントをマップで定義して @each で展開するパターンはデザインシステムの実装に広く使われます。'
      },
      {
        question: '`@for $i from 1 through 5` で生成されるのは何回ですか？',
        options: ['4回（1,2,3,4）', '5回（1,2,3,4,5）', '6回（0,1,2,3,4,5）', '5回（0,1,2,3,4）'],
        answer: 1,
        hint: 'through は終端を含みます（1〜5で5回）。to を使うと終端を含まず4回（1〜4）になります。',
        advice: '実務では @for より @each（リスト・マップ）の方がよく使われます。@for はインデックス付きの繰り返しが必要な限られた場面で使うとコードが読みやすくなります。'
      },
      {
        question: 'SCSS の文字列補間（Interpolation）の記法はどれですか？',
        options: ['${variable}', '#($variable)', '#{$variable}', '@{$variable}'],
        answer: 2,
        hint: '`#{$var}` でセレクタやプロパティ名に変数を埋め込めます。`.icon-#{$name}` のようにクラス名の動的生成に使います。',
        advice: '@each はマップと組み合わせると特に強力です。色名と値のマップから `.text-primary`, `.text-success` などのユーティリティクラスを一括生成できます。'
      },
      {
        question: '`@for $i from 1 to 5` と `@for $i from 1 through 5` の違いはどれですか？',
        options: [
          '違いはない',
          'to は5を含まず4回（1〜4）、through は5を含み5回（1〜5）繰り返す',
          'through は5を含まず4回、to は5を含む5回繰り返す',
          'to は降順、through は昇順'
        ],
        answer: 1,
        hint: 'through は終端を含む（inclusive）、to は終端を含まない（exclusive）です。Pythonのrange()の挙動と逆なので注意しましょう。',
        advice: 'Python の range() と逆の挙動（through は含む、to は含まない）なので注意しましょう。コメントに意図を書いておくと他の開発者が混乱しません。'
      },
      {
        question: '`@each $item in (red, green, blue)` は何回繰り返しますか？',
        options: ['2回', '3回', '4回', 'リストが空でなければ無限'],
        answer: 1,
        hint: '@each はリストの要素数だけ繰り返します。(red, green, blue) は3要素なので3回、$item に red → green → blue の順で代入されます。',
        advice: '@each は複数値リストにも使えます。`@each $name, $color in (primary, blue), (danger, red)` のように名前と値のペアで処理できます。'
      }
    ]
  }
]

topics.push(...scssTopics)

export const topicsByLevel = {
  beginner: topics.filter(t => t.level === 'beginner' && !t.lang),
  intermediate: topics.filter(t => t.level === 'intermediate' && !t.lang),
  advanced: topics.filter(t => t.level === 'advanced' && !t.lang),
  scss: topics.filter(t => t.lang === 'scss'),
}
