import styles from '../styles/Diagram.module.css'

function BoxModelDiagram() {
  return (
    <div className={styles.diagram}>
      <div className={styles.diagramTitle}>ボックスモデル図</div>
      <div className={styles.boxMargin}>
        <span className={styles.boxLabel}>margin</span>
        <div className={styles.boxBorder}>
          <span className={styles.boxLabel}>border</span>
          <div className={styles.boxPadding}>
            <span className={styles.boxLabel}>padding</span>
            <div className={styles.boxContent}>
              content
            </div>
          </div>
        </div>
      </div>
      <div className={styles.boxLegend}>
        <span className={styles.legendItem}><span className={`${styles.legendColor} ${styles.legendMargin}`}></span>margin</span>
        <span className={styles.legendItem}><span className={`${styles.legendColor} ${styles.legendBorder}`}></span>border</span>
        <span className={styles.legendItem}><span className={`${styles.legendColor} ${styles.legendPadding}`}></span>padding</span>
        <span className={styles.legendItem}><span className={`${styles.legendColor} ${styles.legendContent}`}></span>content</span>
      </div>
    </div>
  )
}

function FlexboxDiagram() {
  return (
    <div className={styles.diagram}>
      <div className={styles.diagramTitle}>Flexbox 軸と justify-content</div>
      <div className={styles.flexAxes}>
        <div className={styles.flexContainer}>
          <div className={styles.flexMainAxis}>
            <span className={styles.axisLabel}>主軸（main axis）→</span>
          </div>
          <div className={styles.flexCrossAxis}>
            <span className={styles.crossAxisLabel}>交差軸<br/>（cross axis）<br/>↓</span>
          </div>
          <div className={styles.flexItems}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
        </div>
      </div>
      <div className={styles.flexJustify}>
        {[
          { label: 'flex-start', items: ['1','2','3'], cls: 'jcStart' },
          { label: 'center', items: ['1','2','3'], cls: 'jcCenter' },
          { label: 'flex-end', items: ['1','2','3'], cls: 'jcEnd' },
          { label: 'space-between', items: ['1','2','3'], cls: 'jcBetween' },
          { label: 'space-around', items: ['1','2','3'], cls: 'jcAround' },
        ].map(({ label, items, cls }) => (
          <div key={label} className={styles.justifyRow}>
            <code className={styles.justifyLabel}>{label}</code>
            <div className={`${styles.justifyBar} ${styles[cls]}`}>
              {items.map((n, i) => <span key={i} className={styles.justifyItem}>{n}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function GridDiagram() {
  return (
    <div className={styles.diagram}>
      <div className={styles.diagramTitle}>CSS Grid 構造</div>
      <div className={styles.gridDemo}>
        <div className={styles.gridLabels}>
          <span></span>
          <span className={styles.colLabel}>col 1</span>
          <span className={styles.colLabel}>col 2</span>
          <span className={styles.colLabel}>col 3</span>
        </div>
        <div className={styles.gridRow}>
          <span className={styles.rowLabel}>row 1</span>
          <div className={`${styles.gridCell} ${styles.cellSpan}`}>header (span 3)</div>
        </div>
        <div className={styles.gridRow}>
          <span className={styles.rowLabel}>row 2</span>
          <div className={styles.gridCell}>sidebar</div>
          <div className={`${styles.gridCell} ${styles.cellMain}`}>main content</div>
          <div className={styles.gridCell}>aside</div>
        </div>
        <div className={styles.gridRow}>
          <span className={styles.rowLabel}>row 3</span>
          <div className={`${styles.gridCell} ${styles.cellSpan}`}>footer (span 3)</div>
        </div>
      </div>
      <div className={styles.gridGapNote}>← gap → （行・列の隙間）</div>
    </div>
  )
}

function DisplayDiagram() {
  return (
    <div className={styles.diagram}>
      <div className={styles.diagramTitle}>block / inline / inline-block の違い</div>
      <div className={styles.displayRows}>
        <div className={styles.displayRow}>
          <span className={styles.displayLabel}>block</span>
          <div className={styles.displayArea}>
            <div className={`${styles.displayEl} ${styles.elBlock}`}>div（幅100%）</div>
            <div className={`${styles.displayEl} ${styles.elBlock}`}>div（次の行）</div>
          </div>
        </div>
        <div className={styles.displayRow}>
          <span className={styles.displayLabel}>inline</span>
          <div className={styles.displayArea}>
            <span className={`${styles.displayEl} ${styles.elInline}`}>span</span>
            <span className={`${styles.displayEl} ${styles.elInline}`}>span</span>
            <span className={`${styles.displayEl} ${styles.elInline}`}>span</span>
            <span className={styles.displayNote}>（width/height無効）</span>
          </div>
        </div>
        <div className={styles.displayRow}>
          <span className={styles.displayLabel}>inline-block</span>
          <div className={styles.displayArea}>
            <span className={`${styles.displayEl} ${styles.elInlineBlock}`}>A</span>
            <span className={`${styles.displayEl} ${styles.elInlineBlock}`}>B</span>
            <span className={`${styles.displayEl} ${styles.elInlineBlock}`}>C</span>
            <span className={styles.displayNote}>（w/h有効・横並び）</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Diagram({ type }) {
  if (type === 'box-model') return <BoxModelDiagram />
  if (type === 'flexbox') return <FlexboxDiagram />
  if (type === 'grid') return <GridDiagram />
  if (type === 'display') return <DisplayDiagram />
  return null
}
