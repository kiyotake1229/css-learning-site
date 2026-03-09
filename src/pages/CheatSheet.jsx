import { useState } from 'react'
import { cheatsheet } from '../data/cheatsheet'
import styles from '../styles/CheatSheet.module.css'

export default function CheatSheet() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [copiedKey, setCopiedKey] = useState(null)

  function handleCopy(syntax, key) {
    navigator.clipboard.writeText(syntax).then(() => {
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 2000)
    })
  }

  const filtered = cheatsheet
    .map(section => ({
      ...section,
      items: section.items.filter(item => {
        const q = search.toLowerCase()
        return (
          item.name.toLowerCase().includes(q) ||
          item.syntax.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q)
        )
      }),
    }))
    .filter(section => {
      if (activeCategory !== 'all' && section.category !== activeCategory) return false
      return section.items.length > 0
    })

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>CSSチートシート</h1>
        <p className={styles.sub}>よく使うCSSプロパティをカテゴリ別にまとめました</p>
      </div>

      <div className={styles.controls}>
        <input
          type="search"
          className={styles.search}
          placeholder="プロパティ名・説明で検索..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className={styles.categories}>
          <button
            className={`${styles.catBtn} ${activeCategory === 'all' ? styles.catActive : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            すべて
          </button>
          {cheatsheet.map(s => (
            <button
              key={s.category}
              className={`${styles.catBtn} ${activeCategory === s.category ? styles.catActive : ''}`}
              onClick={() => setActiveCategory(s.category)}
            >
              {s.category}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>「{search}」に一致する項目が見つかりませんでした。</p>
      ) : (
        <div className={styles.sections}>
          {filtered.map(section => (
            <section key={section.category} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.category}</h2>
              <div className={styles.table}>
                <div className={styles.tableHead}>
                  <span>プロパティ</span>
                  <span>構文</span>
                  <span>説明</span>
                </div>
                {section.items.map((item, rowIdx) => {
                  const key = `${section.category}-${rowIdx}`
                  const copied = copiedKey === key
                  return (
                    <div key={rowIdx} className={styles.row}>
                      <span className={styles.name}>{item.name}</span>
                      <button
                        className={`${styles.syntax} ${copied ? styles.syntaxCopied : ''}`}
                        onClick={() => handleCopy(item.syntax, key)}
                        title="クリックしてコピー"
                      >
                        <code>{item.syntax}</code>
                        <span className={styles.copyBadge}>
                          {copied ? 'コピー済み ✓' : 'コピー'}
                        </span>
                      </button>
                      <span className={styles.desc}>{item.desc}</span>
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
