import {links} from 'config/navbar.config'
import styles from './navbar.module.css'
import Link from 'next/link'

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h3>LOGO</h3>
      </div>

      <nav className={styles.nav}>
        {
          links.map((link) => (
            <Link href={link.path} key={link.path}>
              <a className={styles.a}>{link.name}</a>
            </Link>
          ))
        }
      </nav>

    </header>
  )
}