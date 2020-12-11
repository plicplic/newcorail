import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

const Contacts = () => {
  const { name } = getCurrentUser()

  return (
    <View title="Contacts">
      <p>Cher { name }, pour nous contacter, utilisez le formulaire ci-dessous:</p>
      <p>
        <em>On disait qu'ici il y avait un formulaire de contact :-)</em>.
      </p>
    </View>
  )
}

export default Contacts

