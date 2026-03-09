import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          CSS学習サイト
        </NavLink>
        <ul className={styles.links}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              ホーム
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              クイズ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cheatsheet"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              チートシート
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
