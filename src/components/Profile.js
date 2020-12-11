import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

const Profile = () => {
  const { name } = getCurrentUser()

  return (
    <View title="Your Profile">
      <p>Bienvenue sur votre page de profil, {name}!</p>
    </View>
  )
}

export default Profile

