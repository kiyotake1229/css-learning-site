import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../components/common';
import styles from './HomePage.module.css';

const features = [
  {
    title: 'プレイグラウンド',
    description: 'リアルタイムプレビューでCSSを自由に実験',
    path: '/playground',
    icon: '🎨',
  },
  {
    title: '演習',
    description: 'お手本と比較しながらCSSを練習',
    path: '/exercises',
    icon: '💪',
  },
  {
    title: 'クイズ',
    description: 'インタラクティブなクイズでCSSの知識をテスト',
    path: '/quizzes',
    icon: '❓',
  },
  {
    title: 'チュートリアル',
    description: 'CSSの概念をステップバイステップで学習',
    path: '/tutorials',
    icon: '📚',
  },
];

const categories = [
  { name: 'Flexbox', description: '柔軟なレイアウトをマスター', color: '#6366f1' },
  { name: 'Grid', description: '複雑なグリッドレイアウトを構築', color: '#8b5cf6' },
  { name: 'レスポンシブ', description: 'あらゆる画面サイズに対応', color: '#ec4899' },
  { name: 'アニメーション', description: 'デザインに動きを加える', color: '#f59e0b' },
];

export function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>CSS学習ラボ</h1>
        <p className={styles.subtitle}>
          インタラクティブな演習、クイズ、実践的な練習でCSSをマスターしよう
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>学習モード</h2>
        <div className={styles.features}>
          {features.map((feature) => (
            <Link key={feature.path} to={feature.path} className={styles.featureLink}>
              <Card hoverable className={styles.featureCard}>
                <CardContent>
                  <span className={styles.icon}>{feature.icon}</span>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>カテゴリ</h2>
        <div className={styles.categories}>
          {categories.map((category) => (
            <Card key={category.name} className={styles.categoryCard}>
              <CardContent>
                <div
                  className={styles.categoryColor}
                  style={{ backgroundColor: category.color }}
                />
                <h3 className={styles.categoryName}>{category.name}</h3>
                <p className={styles.categoryDesc}>{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
