import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TopicPage from './pages/TopicPage'
import QuizPage from './pages/QuizPage'
import CheatSheet from './pages/CheatSheet'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/:id" element={<TopicPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/cheatsheet" element={<CheatSheet />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
