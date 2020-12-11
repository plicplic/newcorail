import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <h1 className={styles[`header__heading`]}>
        <Link
          to="/"
          className={`${styles[`header__link`]} ${
            styles[`header__link--home`]
          }`}
        >
          IT Corail
        </Link>
      </h1>
      <nav role="main" className={styles[`header__nav`]}>
        <Link to="/app/profile" className={styles[`header__link`]}>
          Profil
        </Link>
        <Link to="/app/details" className={styles[`header__link`]}>
          Détails
        </Link>
        <Link to="/app/contacts" className={styles[`header__link`]}>
          Contacts
        </Link>
      </nav>
    </div>
  </header>
)

export default Header

