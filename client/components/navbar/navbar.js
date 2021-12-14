import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './navbar.module.css'
import {links} from 'config/navbar.config'

export default function NavBar({isAuthenticated, deauthenticate}) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h3>LOGO</h3>
      </div>

      <nav className={styles.nav}>
        {links.map((link) => (
          <Link href={link.path} key={link.path}>
            <a className={styles.a}>{link.name}</a>
          </Link>
        ))}
        
        {!isAuthenticated && 
          <Link href="/signin" className={styles.a}>
            <a>
              Sign In
            </a>
          </Link>}

        {!isAuthenticated && 
          <Link href="/signup">
            <a className={styles.a}>
              Sign Up
            </a>
          </Link>}
        
        {isAuthenticated && 
        <li onClick={deauthenticate}>
          <a>
            Sign Out
          </a>
        </li>}
      </nav>
    </header>
  )
}

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  deauthenticate: PropTypes.func.isRequired
}