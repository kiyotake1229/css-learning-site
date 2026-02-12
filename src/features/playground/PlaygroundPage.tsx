import { useState } from 'react';
import { CodeEditor, LivePreview } from '../../components/editor';
import { Button } from '../../components/common';
import styles from './PlaygroundPage.module.css';

const defaultHtml = `<div class="container">
  <div class="box box-1">1</div>
  <div class="box box-2">2</div>
  <div class="box box-3">3</div>
</div>`;

const defaultCss = `.container {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}

.box {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  color: white;
}

.box-1 { background: #6366f1; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`;

const templates = [
  {
    name: 'Flexbox基礎',
    html: defaultHtml,
    css: defaultCss,
  },
  {
    name: 'Gridレイアウト',
    html: `<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,
    css: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
}

.item {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  padding: 2rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 8px;
}`,
  },
  {
    name: 'カードコンポーネント',
    html: `<div class="card">
  <div class="card-image"></div>
  <div class="card-content">
    <h2 class="card-title">Card Title</h2>
    <p class="card-text">This is a simple card component with an image placeholder and some content.</p>
    <button class="card-button">Learn More</button>
  </div>
</div>`,
    css: `.card {
  width: 300px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 150px;
  background: linear-gradient(135deg, #6366f1, #ec4899);
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  margin: 0 0 0.5rem;
  color: #1e293b;
}

.card-text {
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0 0 1rem;
}

.card-button {
  background: #6366f1;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.card-button:hover {
  background: #4f46e5;
}`,
  },
];

export function PlaygroundPage() {
  const [html, setHtml] = useState(defaultHtml);
  const [css, setCss] = useState(defaultCss);
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('css');

  const loadTemplate = (template: (typeof templates)[0]) => {
    setHtml(template.html);
    setCss(template.css);
  };

  const resetCode = () => {
    setHtml(defaultHtml);
    setCss(defaultCss);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>プレイグラウンド</h1>
          <p className={styles.subtitle}>リアルタイムでCSSを実験しよう</p>
        </div>
        <div className={styles.actions}>
          <div className={styles.templates}>
            <span className={styles.templatesLabel}>テンプレート:</span>
            {templates.map((template) => (
              <Button
                key={template.name}
                variant="ghost"
                size="sm"
                onClick={() => loadTemplate(template)}
              >
                {template.name}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="sm" onClick={resetCode}>
            リセット
          </Button>
        </div>
      </header>

      <div className={styles.workspace}>
        <div className={styles.editors}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'html' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('html')}
            >
              HTML
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'css' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('css')}
            >
              CSS
            </button>
          </div>
          <div className={styles.editorContainer}>
            {activeTab === 'html' ? (
              <CodeEditor
                value={html}
                onChange={setHtml}
                language="html"
                height="calc(100vh - 280px)"
              />
            ) : (
              <CodeEditor
                value={css}
                onChange={setCss}
                language="css"
                height="calc(100vh - 280px)"
              />
            )}
          </div>
        </div>

        <div className={styles.preview}>
          <LivePreview html={html} css={css} height="calc(100vh - 220px)" />
        </div>
      </div>
    </div>
  );
}
