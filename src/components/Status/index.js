import React from "react"
import { Link, navigate } from "@reach/router"
import { getCurrentUser, isLoggedIn, logout } from "../../utils/auth"
import styles from "./status.module.css"

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <p className={styles[`status__text`]}>
      Pour accédez à toutes les fonctionnalités, vous devez vous         

        {` `}
        <Link to="/app/login">connecter</Link>.
      </p>
    )
  } else {
    const { name } = getCurrentUser()

    details = (
      <p className={styles[`status__text`]}>
        Connecté avec l'utilisateur {name}
        !
        {` `}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          log out
        </a>
      </p>
    )
  }

  return <div className={styles.status}>{details}</div>
}

