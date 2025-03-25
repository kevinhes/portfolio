// router
import { Outlet } from "react-router-dom"

// components
import HeaderNavbar from "../components/HeaderNavbar"

export default function FrontLayout() {
  return (
    <>
      <HeaderNavbar />
      <Outlet></Outlet>
    </>
  )
}