import Link from 'next/link'
import {useDispatch} from 'react-redux'
import styles from './navbar.module.css'
import {links} from 'config/navbar.config'

export default function NavBar({isAuthenticated, deauthenticate}) {
  const dispatch = useDispatch()

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
          <Link href="/auth/signIn">
            <a className={styles.a}>
              Sign In
            </a>
          </Link>}

        {!isAuthenticated && 
          <Link href="/auth/signUp">
            <a className={styles.a}>
              Sign Up
            </a>
          </Link>}
        
        {isAuthenticated && 
          <li className={styles.a} onClick={() => dispatch(deauthenticate())}>
            <a>
              Sign Out
            </a>
          </li>}
      </nav>
    </header>
  )
}