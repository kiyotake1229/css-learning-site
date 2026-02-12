import { useEffect, useRef } from 'react';
import styles from './LivePreview.module.css';

interface LivePreviewProps {
  html: string;
  css: string;
  title?: string;
  height?: string;
}

export function LivePreview({
  html,
  css,
  title = 'Preview',
  height = '300px',
}: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const document = iframe.contentDocument;
    if (!document) return;

    const content = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 1rem;
      background: white;
      color: #1e293b;
    }
    ${css}
  </style>
</head>
<body>
  ${html}
</body>
</html>
    `;

    document.open();
    document.write(content);
    document.close();
  }, [html, css]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.preview} style={{ height }}>
        <iframe
          ref={iframeRef}
          className={styles.iframe}
          title="Live Preview"
          sandbox="allow-same-origin"
        />
      </div>
    </div>
  );
}
