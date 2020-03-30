import React from "react"
import { useAuth } from "react-use-auth"
import { Button } from "rebass"

export const LoginButton = () => {
  // protip: isAuthenticated is a function, gets me every time
  const { isAuthenticated, userId, login, logout } = useAuth()

  // render a login button
  // make sure users can logout as well
  return null
}
