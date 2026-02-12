import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import styles from './CodeEditor.module.css';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: 'css' | 'html';
  height?: string;
  readOnly?: boolean;
  placeholder?: string;
}

export function CodeEditor({
  value,
  onChange,
  language = 'css',
  height = '300px',
  readOnly = false,
  placeholder,
}: CodeEditorProps) {
  const extensions = language === 'css' ? [css()] : [html()];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.language}>{language.toUpperCase()}</span>
      </div>
      <CodeMirror
        value={value}
        height={height}
        theme={vscodeDark}
        extensions={extensions}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={placeholder}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          defaultKeymap: true,
          searchKeymap: true,
          historyKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
      />
    </div>
  );
}
