import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HomePage } from './features/home';
import { PlaygroundPage } from './features/playground';
import { ExerciseListPage, ExercisePage } from './features/exercises';
import { QuizPage } from './features/quiz';
import { TutorialListPage, TutorialPage } from './features/tutorials';
import './styles/globals.css';
import styles from './App.module.css';

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        CSS学習ラボ
      </Link>
      <div className={styles.navLinks}>
        <Link
          to="/playground"
          className={`${styles.navLink} ${isActive('/playground') ? styles.active : ''}`}
        >
          プレイグラウンド
        </Link>
        <Link
          to="/exercises"
          className={`${styles.navLink} ${isActive('/exercises') ? styles.active : ''}`}
        >
          演習
        </Link>
        <Link
          to="/quizzes"
          className={`${styles.navLink} ${isActive('/quizzes') ? styles.active : ''}`}
        >
          クイズ
        </Link>
        <Link
          to="/tutorials"
          className={`${styles.navLink} ${isActive('/tutorials') ? styles.active : ''}`}
        >
          チュートリアル
        </Link>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className={styles.app}>
      <Navigation />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/exercises" element={<ExerciseListPage />} />
          <Route path="/exercises/:id" element={<ExercisePage />} />
          <Route path="/quizzes" element={<QuizPage />} />
          <Route path="/tutorials" element={<TutorialListPage />} />
          <Route path="/tutorials/:id" element={<TutorialPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
