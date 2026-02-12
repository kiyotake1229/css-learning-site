import type { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'multiple_choice',
    category: 'flexbox',
    question: 'Flexコンテナを作成するために使用するCSSプロパティはどれですか？',
    options: [
      'flex: 1',
      'display: flex',
      'flex-direction: row',
      'justify-content: center',
    ],
    correctIndex: 1,
    explanation: 'display: flex でFlexコンテナを作成します。他のプロパティはFlexアイテムやFlexコンテナの動作を制御するために使用されます。',
  },
  {
    id: 'q2',
    type: 'multiple_choice',
    category: 'flexbox',
    question: 'justify-content: space-between は何をしますか？',
    options: [
      'アイテムを水平方向に中央揃えにする',
      '各アイテムの周りに均等なスペースを配置する',
      '最初のアイテムを先頭に、最後のアイテムを末尾に配置し、間に均等なスペースを入れる',
      'アイテムを縦方向に積み重ねる',
    ],
    correctIndex: 2,
    explanation: 'space-between は最初のアイテムを先頭に、最後のアイテムを末尾に配置し、残りのアイテムの間に均等なスペースを配置します。',
  },
  {
    id: 'q3',
    type: 'multiple_choice',
    category: 'flexbox',
    question: 'Flexboxで主軸の方向を制御するプロパティはどれですか？',
    options: [
      'align-items',
      'justify-content',
      'flex-wrap',
      'flex-direction',
    ],
    correctIndex: 3,
    explanation: 'flex-direction は主軸の方向（row、row-reverse、column、column-reverse）を決定します。',
  },
  {
    id: 'q4',
    type: 'multiple_choice',
    category: 'flexbox',
    question: 'デフォルトの flex-direction を持つFlexコンテナで、align-items: center は何をしますか？',
    options: [
      'アイテムを水平方向に中央揃えにする',
      'アイテムを垂直方向に中央揃えにする',
      'Flexコンテナを中央に配置する',
      'アイテム内のテキストを中央揃えにする',
    ],
    correctIndex: 1,
    explanation: 'デフォルトの flex-direction: row では、align-items は交差軸（垂直方向）を制御します。align-items: center はアイテムを垂直方向に中央揃えにします。',
  },
  {
    id: 'q5',
    type: 'multiple_choice',
    category: 'grid',
    question: 'CSS Gridコンテナを作成するプロパティはどれですか？',
    options: [
      'display: grid',
      'grid-template: 1fr',
      'grid-area: main',
      'grid-gap: 10px',
    ],
    correctIndex: 0,
    explanation: 'display: grid でGridコンテナを作成します。他のプロパティはGridレイアウトを設定するために使用されます。',
  },
  {
    id: 'q6',
    type: 'multiple_choice',
    category: 'grid',
    question: 'grid-template-columns: repeat(3, 1fr) は何を作成しますか？',
    options: [
      '等しい高さの3行',
      '等しい幅の3列',
      'それぞれ3ピクセル幅の3列',
      '3x3のグリッド',
    ],
    correctIndex: 1,
    explanation: 'repeat(3, 1fr) は、利用可能なスペースの等しい割合（1fr）を占める3つの列を作成します。',
  },
  {
    id: 'q7',
    type: 'multiple_choice',
    category: 'grid',
    question: 'グリッドアイテムを2列にまたがらせるにはどうしますか？',
    options: [
      'width: 2',
      'grid-column: span 2',
      'column-span: 2',
      'flex: 2',
    ],
    correctIndex: 1,
    explanation: 'grid-column: span 2 でグリッドアイテムを2列にまたがらせることができます。',
  },
  {
    id: 'q8',
    type: 'fill_in_blank',
    category: 'flexbox',
    question: 'アイテムを水平・垂直の両方で中央に配置するCSSを完成させてください：',
    codeTemplate: `.container {
  display: flex;
  {{blank1}}: center;
  {{blank2}}: center;
}`,
    blanks: [
      { id: 'blank1', correctAnswer: 'justify-content', alternatives: ['justify-content'] },
      { id: 'blank2', correctAnswer: 'align-items', alternatives: ['align-items'] },
    ],
    explanation: 'justify-content: center は主軸（デフォルトでは水平方向）に沿ってアイテムを配置し、align-items: center は交差軸（デフォルトでは垂直方向）に沿ってアイテムを配置します。',
  },
  {
    id: 'q9',
    type: 'fill_in_blank',
    category: 'grid',
    question: '3列グリッドを作成するCSSを完成させてください：',
    codeTemplate: `.container {
  display: {{blank1}};
  grid-template-columns: {{blank2}};
}`,
    blanks: [
      { id: 'blank1', correctAnswer: 'grid', alternatives: ['grid'] },
      { id: 'blank2', correctAnswer: 'repeat(3, 1fr)', alternatives: ['1fr 1fr 1fr', 'repeat(3, 1fr)'] },
    ],
    explanation: 'display: grid でGridコンテナを作成し、grid-template-columns で3つの等幅の列を作成します。',
  },
  {
    id: 'q10',
    type: 'multiple_choice',
    category: 'responsive',
    question: 'CSSメディアクエリの目的は何ですか？',
    options: [
      '外部スタイルシートをインポートする',
      'デバイス/ビューポートの条件に基づいてスタイルを適用する',
      '要素をアニメーションさせる',
      'グリッドレイアウトを作成する',
    ],
    correctIndex: 1,
    explanation: 'メディアクエリを使用すると、ビューポートの幅、デバイスの種類、向きなどの条件に基づいてCSSスタイルを適用できます。',
  },
  {
    id: 'q11',
    type: 'multiple_choice',
    category: 'responsive',
    question: '768px以下の画面幅をターゲットにするメディアクエリはどれですか？',
    options: [
      '@media (min-width: 768px)',
      '@media (max-width: 768px)',
      '@media (width: 768px)',
      '@media screen 768px',
    ],
    correctIndex: 1,
    explanation: '@media (max-width: 768px) はビューポートが768px以下の場合にスタイルを適用します。',
  },
  {
    id: 'q12',
    type: 'multiple_choice',
    category: 'animation',
    question: 'CSSトランジションの持続時間を指定するために使用するプロパティはどれですか？',
    options: [
      'animation-duration',
      'transition-time',
      'transition-duration',
      'transform-duration',
    ],
    correctIndex: 2,
    explanation: 'transition-duration はCSSトランジションが完了するまでにかかる時間を指定します。',
  },
  // ==================== Flexbox 追加 ====================
  {
    id: 'q13',
    type: 'multiple_choice',
    category: 'flexbox',
    question: 'flex: 1 は何の短縮形ですか？',
    options: [
      'flex-grow: 1',
      'flex-grow: 1, flex-shrink: 1, flex-basis: 0%',
      'flex-direction: 1',
      'flex-wrap: 1',
    ],
    correctIndex: 1,
    explanation: 'flex: 1 は flex-grow: 1, flex-shrink: 1, flex-basis: 0% の短縮形です。これによりアイテムが利用可能なスペースを均等に分け合います。',
  },
  {
    id: 'q14',
    type: 'multiple_choice',
    category: 'flexbox',
    question: 'flex-wrap: wrap は何をしますか？',
    options: [
      'アイテムを1行に圧縮する',
      'アイテムが収まらない場合に次の行に折り返す',
      'アイテムを逆順に並べる',
      'アイテムを縦方向に並べる',
    ],
    correctIndex: 1,
    explanation: 'flex-wrap: wrap はFlexアイテムがコンテナに収まらない場合、次の行に折り返すようにします。',
  },
  {
    id: 'q15',
    type: 'multiple_choice',
    category: 'flexbox',
    question: 'align-self プロパティは何に使用しますか？',
    options: [
      'すべてのFlexアイテムの配置を設定する',
      '個々のFlexアイテムの交差軸での配置を上書きする',
      'Flexコンテナを配置する',
      'テキストを中央揃えにする',
    ],
    correctIndex: 1,
    explanation: 'align-self は個々のFlexアイテムに対して、親のalign-itemsの設定を上書きして独自の配置を指定できます。',
  },
  {
    id: 'q16',
    type: 'multiple_choice',
    category: 'flexbox',
    question: 'order プロパティのデフォルト値は何ですか？',
    options: [
      '-1',
      '0',
      '1',
      'auto',
    ],
    correctIndex: 1,
    explanation: 'order プロパティのデフォルト値は0です。負の値を指定すると最初に、正の値を指定すると後ろに表示されます。',
  },
  {
    id: 'q17',
    type: 'multiple_choice',
    category: 'flexbox',
    question: 'gap プロパティは何をしますか？',
    options: [
      'Flexアイテムのサイズを変更する',
      'Flexアイテム間のスペースを設定する',
      'コンテナのパディングを設定する',
      'アイテムを中央に配置する',
    ],
    correctIndex: 1,
    explanation: 'gap はFlexアイテム間のスペース（溝）を設定します。row-gap と column-gap の短縮形としても使えます。',
  },
  {
    id: 'q18',
    type: 'fill_in_blank',
    category: 'flexbox',
    question: 'Flexアイテムを逆順で横並びにするCSSを完成させてください：',
    codeTemplate: `.container {
  display: flex;
  flex-direction: {{blank1}};
}`,
    blanks: [
      { id: 'blank1', correctAnswer: 'row-reverse', alternatives: ['row-reverse'] },
    ],
    explanation: 'flex-direction: row-reverse はアイテムを右から左に（逆順で）横並びにします。',
  },
  // ==================== Grid 追加 ====================
  {
    id: 'q19',
    type: 'multiple_choice',
    category: 'grid',
    question: 'grid-template-areas で空のセルを表すにはどうしますか？',
    options: [
      'empty',
      'null',
      '. (ドット)',
      'none',
    ],
    correctIndex: 2,
    explanation: 'grid-template-areas では、ドット(.)を使って空のグリッドセルを表します。',
  },
  {
    id: 'q20',
    type: 'multiple_choice',
    category: 'grid',
    question: 'minmax(100px, 1fr) は何を意味しますか？',
    options: [
      '常に100pxの幅',
      '常に1frの幅',
      '最小100px、最大で利用可能なスペースの1分割',
      '100pxから1pxの間のランダムな幅',
    ],
    correctIndex: 2,
    explanation: 'minmax(100px, 1fr) はトラックが最小100px、最大で利用可能なスペースの1分割（1fr）になることを意味します。',
  },
  {
    id: 'q21',
    type: 'multiple_choice',
    category: 'grid',
    question: 'auto-fill と auto-fit の違いは何ですか？',
    options: [
      '違いはない',
      'auto-fill は空のトラックを維持し、auto-fit は折りたたむ',
      'auto-fit は空のトラックを維持し、auto-fill は折りたたむ',
      'auto-fill は行用、auto-fit は列用',
    ],
    correctIndex: 1,
    explanation: 'auto-fill は空のトラックを維持しますが、auto-fit は空のトラックを0に折りたたんで残りのアイテムを伸ばします。',
  },
  {
    id: 'q22',
    type: 'multiple_choice',
    category: 'grid',
    question: 'place-items: center は何の短縮形ですか？',
    options: [
      'align-items と justify-items',
      'align-content と justify-content',
      'grid-row と grid-column',
      'margin と padding',
    ],
    correctIndex: 0,
    explanation: 'place-items は align-items と justify-items の短縮形で、グリッドアイテムをセル内で配置します。',
  },
  {
    id: 'q23',
    type: 'multiple_choice',
    category: 'grid',
    question: 'fr単位は何を表しますか？',
    options: [
      'フレーム',
      '固定ピクセル',
      '利用可能なスペースの分数（fraction）',
      'フォントサイズの相対値',
    ],
    correctIndex: 2,
    explanation: 'fr（fraction）は利用可能なスペースを分数で分割します。1fr 2fr なら1:2の比率で分割されます。',
  },
  {
    id: 'q24',
    type: 'fill_in_blank',
    category: 'grid',
    question: 'グリッドアイテムを2行にまたがらせるCSSを完成させてください：',
    codeTemplate: `.item {
  grid-row: {{blank1}};
}`,
    blanks: [
      { id: 'blank1', correctAnswer: 'span 2', alternatives: ['span 2', '1 / 3', '1 / span 2'] },
    ],
    explanation: 'grid-row: span 2 でグリッドアイテムを2行にまたがらせることができます。1 / 3 でも同様の結果になります。',
  },
  {
    id: 'q25',
    type: 'fill_in_blank',
    category: 'grid',
    question: 'レスポンシブなグリッドを作成するCSSを完成させてください：',
    codeTemplate: `.container {
  display: grid;
  grid-template-columns: repeat({{blank1}}, minmax(200px, 1fr));
}`,
    blanks: [
      { id: 'blank1', correctAnswer: 'auto-fill', alternatives: ['auto-fill', 'auto-fit'] },
    ],
    explanation: 'auto-fill または auto-fit を使うと、利用可能なスペースに応じて自動的に列数が調整されます。',
  },
  // ==================== Responsive 追加 ====================
  {
    id: 'q26',
    type: 'multiple_choice',
    category: 'responsive',
    question: 'モバイルファーストのアプローチではどのメディアクエリを使いますか？',
    options: [
      '@media (max-width: ...)',
      '@media (min-width: ...)',
      '@media screen',
      '@media print',
    ],
    correctIndex: 1,
    explanation: 'モバイルファーストでは、基本スタイルをモバイル向けに書き、min-width で大きな画面向けのスタイルを追加していきます。',
  },
  {
    id: 'q27',
    type: 'multiple_choice',
    category: 'responsive',
    question: 'viewport メタタグの width=device-width は何をしますか？',
    options: [
      'ページ幅を固定する',
      'ビューポートの幅をデバイスの幅に合わせる',
      '最大幅を設定する',
      'フォントサイズを調整する',
    ],
    correctIndex: 1,
    explanation: 'width=device-width はビューポートの幅をデバイスの画面幅に合わせ、レスポンシブデザインの基本となります。',
  },
  {
    id: 'q28',
    type: 'multiple_choice',
    category: 'responsive',
    question: 'clamp() 関数の正しい構文はどれですか？',
    options: [
      'clamp(最大値, 推奨値, 最小値)',
      'clamp(推奨値, 最小値, 最大値)',
      'clamp(最小値, 推奨値, 最大値)',
      'clamp(最小値, 最大値)',
    ],
    correctIndex: 2,
    explanation: 'clamp(最小値, 推奨値, 最大値) の順で指定します。推奨値が最小値と最大値の間に収まるようになります。',
  },
  {
    id: 'q29',
    type: 'multiple_choice',
    category: 'responsive',
    question: 'vw単位は何に基づいていますか？',
    options: [
      '親要素の幅',
      'ビューポートの幅',
      '文字の幅',
      'ルート要素のフォントサイズ',
    ],
    correctIndex: 1,
    explanation: 'vw（viewport width）はビューポートの幅の1%を表します。100vwはビューポートの全幅です。',
  },
  {
    id: 'q30',
    type: 'multiple_choice',
    category: 'responsive',
    question: 'aspect-ratio: 16 / 9 は何をしますか？',
    options: [
      '要素の幅を16px、高さを9pxにする',
      '要素の幅と高さの比率を16:9に維持する',
      '16個の列と9個の行を作る',
      '16秒後に9pxに変化させる',
    ],
    correctIndex: 1,
    explanation: 'aspect-ratio は要素のアスペクト比（幅と高さの比率）を指定します。16 / 9 は動画によく使われる比率です。',
  },
  {
    id: 'q31',
    type: 'fill_in_blank',
    category: 'responsive',
    question: '768px以上の画面でのみスタイルを適用するメディアクエリを完成させてください：',
    codeTemplate: `@media ({{blank1}}: 768px) {
  .container {
    display: flex;
  }
}`,
    blanks: [
      { id: 'blank1', correctAnswer: 'min-width', alternatives: ['min-width'] },
    ],
    explanation: 'min-width: 768px は768px以上の画面幅でスタイルを適用します。',
  },
  {
    id: 'q32',
    type: 'fill_in_blank',
    category: 'responsive',
    question: 'レスポンシブなフォントサイズを設定するCSSを完成させてください：',
    codeTemplate: `.title {
  font-size: {{blank1}}(1rem, 4vw, 3rem);
}`,
    blanks: [
      { id: 'blank1', correctAnswer: 'clamp', alternatives: ['clamp'] },
    ],
    explanation: 'clamp() 関数を使うと、最小値と最大値の間で滑らかに変化するレスポンシブな値を設定できます。',
  },
  // ==================== Animation 追加 ====================
  {
    id: 'q33',
    type: 'multiple_choice',
    category: 'animation',
    question: '@keyframes で定義するのは何ですか？',
    options: [
      'トランジションのタイミング',
      'アニメーションの各段階のスタイル',
      '要素のサイズ',
      'グリッドレイアウト',
    ],
    correctIndex: 1,
    explanation: '@keyframes はアニメーションの各段階（0%, 50%, 100%など）でのスタイルを定義します。',
  },
  {
    id: 'q34',
    type: 'multiple_choice',
    category: 'animation',
    question: 'animation: spin 2s linear infinite の infinite は何を意味しますか？',
    options: [
      'アニメーションが非常に速い',
      'アニメーションが無限に繰り返される',
      'アニメーションが無限に遅い',
      'アニメーションが一度だけ実行される',
    ],
    correctIndex: 1,
    explanation: 'infinite はアニメーションが無限に繰り返されることを意味します。回数を指定する場合は数値を使います。',
  },
  {
    id: 'q35',
    type: 'multiple_choice',
    category: 'animation',
    question: 'transition と animation の主な違いは何ですか？',
    options: [
      '違いはない',
      'transition は状態変化時のみ、animation は自動的に実行できる',
      'animation は状態変化時のみ、transition は自動的に実行できる',
      'transition は色のみ、animation はサイズのみ',
    ],
    correctIndex: 1,
    explanation: 'transition は hover などの状態変化がトリガーとなりますが、animation は @keyframes を使って自動的に実行できます。',
  },
  {
    id: 'q36',
    type: 'multiple_choice',
    category: 'animation',
    question: 'transform: rotate(360deg) は何をしますか？',
    options: [
      '要素を360ピクセル移動する',
      '要素を360度回転する（1回転）',
      '要素を360%拡大する',
      '要素の透明度を360に設定する',
    ],
    correctIndex: 1,
    explanation: 'rotate(360deg) は要素を360度（1回転）回転させます。',
  },
  {
    id: 'q37',
    type: 'multiple_choice',
    category: 'animation',
    question: 'animation-fill-mode: forwards は何をしますか？',
    options: [
      'アニメーションを前方に再生する',
      'アニメーション終了後、最後のキーフレームのスタイルを維持する',
      'アニメーションを逆再生する',
      'アニメーションを最初から繰り返す',
    ],
    correctIndex: 1,
    explanation: 'forwards はアニメーション終了後、最後のキーフレーム（100%または to）のスタイルを維持します。',
  },
  {
    id: 'q38',
    type: 'multiple_choice',
    category: 'animation',
    question: 'ease-in-out タイミング関数はどのような動きですか？',
    options: [
      '一定速度',
      '最初は遅く、最後は速い',
      '最初は速く、最後は遅い',
      '最初と最後が遅く、中間が速い',
    ],
    correctIndex: 3,
    explanation: 'ease-in-out は開始と終了がゆっくりで、中間が速くなる滑らかな動きを作ります。',
  },
  {
    id: 'q39',
    type: 'multiple_choice',
    category: 'animation',
    question: 'transform: scale(1.5) は何をしますか？',
    options: [
      '要素を1.5ピクセルに縮小する',
      '要素を1.5倍に拡大する',
      '要素を1.5度回転する',
      '要素を1.5秒かけて移動する',
    ],
    correctIndex: 1,
    explanation: 'scale(1.5) は要素を元のサイズの1.5倍（150%）に拡大します。',
  },
  {
    id: 'q40',
    type: 'multiple_choice',
    category: 'animation',
    question: 'animation-direction: alternate は何をしますか？',
    options: [
      'アニメーションを交互にスキップする',
      'アニメーションを往復させる（行って戻る）',
      'アニメーションを別の要素に適用する',
      'アニメーションを逆方向のみ再生する',
    ],
    correctIndex: 1,
    explanation: 'alternate はアニメーションを往復させます。1回目は正方向、2回目は逆方向というように交互に再生します。',
  },
  {
    id: 'q41',
    type: 'fill_in_blank',
    category: 'animation',
    question: '要素をフェードインさせるキーフレームを完成させてください：',
    codeTemplate: `@keyframes fadeIn {
  from {
    {{blank1}}: 0;
  }
  to {
    {{blank1}}: 1;
  }
}`,
    blanks: [
      { id: 'blank1', correctAnswer: 'opacity', alternatives: ['opacity'] },
    ],
    explanation: 'opacity を 0 から 1 に変化させることでフェードイン効果を作ります。',
  },
  {
    id: 'q42',
    type: 'fill_in_blank',
    category: 'animation',
    question: '無限に回転するスピナーのアニメーションを完成させてください：',
    codeTemplate: `.spinner {
  animation: spin 1s {{blank1}} infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`,
    blanks: [
      { id: 'blank1', correctAnswer: 'linear', alternatives: ['linear'] },
    ],
    explanation: 'linear は一定速度でアニメーションを実行します。回転アニメーションでは滑らかな動きになります。',
  },
  {
    id: 'q43',
    type: 'multiple_choice',
    category: 'animation',
    question: 'backface-visibility: hidden は主に何に使用しますか？',
    options: [
      '要素を非表示にする',
      '3D回転時に裏面を隠す',
      '背景を透明にする',
      'アニメーションを停止する',
    ],
    correctIndex: 1,
    explanation: 'backface-visibility: hidden は3D変換で要素が回転したとき、裏面が見えないようにします。フリップカードなどで使用します。',
  },
  {
    id: 'q44',
    type: 'multiple_choice',
    category: 'animation',
    question: 'perspective プロパティは何のために使用しますか？',
    options: [
      '要素の透明度を設定する',
      '3D空間での奥行き感を作る',
      'アニメーションの速度を設定する',
      'グラデーションを作成する',
    ],
    correctIndex: 1,
    explanation: 'perspective は3D変換の視点からの距離を設定し、奥行き感のある3D効果を作ります。値が小さいほど遠近感が強くなります。',
  },
];

export function getQuizzesByCategory(category: string): QuizQuestion[] {
  return quizQuestions.filter((q) => q.category === category);
}

export function getQuizById(id: string): QuizQuestion | undefined {
  return quizQuestions.find((q) => q.id === id);
}
