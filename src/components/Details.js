import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

const Details = () => {
  const { name, legalName, email } = getCurrentUser()

  return (
    <View title="Le détail de votre compte">
      <ul>
        <li>Nom d'utilisateur: {name}</li>
        <li>Nom complet: {legalName}</li>
        <li>Email: {email}</li>
      </ul>
    </View>
  )
}

export default Details

