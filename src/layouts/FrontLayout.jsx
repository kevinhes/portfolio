// router
import { Outlet } from "react-router-dom"

// components
import HeaderNavbar from "../components/HeaderNavbar"
import FooterNavbar from "../components/FooterNavbar"

export default function FrontLayout() {
  return (
    <>
      <HeaderNavbar />
      <Outlet />
      <FooterNavbar />
    </>
  )
}