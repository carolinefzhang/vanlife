import { Outlet, Navigate, useLocation } from 'react-router'

const AuthRequired = () => {
  const isLoggedIn = localStorage.getItem("loggedIn")
  const location = useLocation()
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{message: "You must login first", from: location.pathname}} replace />
  }
  return <Outlet />
}

export default AuthRequired
