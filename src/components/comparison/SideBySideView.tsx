import { LivePreview } from '../editor/LivePreview';
import styles from './SideBySideView.module.css';

interface SideBySideViewProps {
  html: string;
  userCss: string;
  targetCss: string;
  height?: string;
}

export function SideBySideView({
  html,
  userCss,
  targetCss,
  height = '300px',
}: SideBySideViewProps) {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <LivePreview
          html={html}
          css={userCss}
          title="あなたの結果"
          height={height}
        />
      </div>
      <div className={styles.panel}>
        <LivePreview
          html={html}
          css={targetCss}
          title="お手本"
          height={height}
        />
      </div>
    </div>
  );
}
