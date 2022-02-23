import { useState } from "react"

import { FaTimes } from "react-icons/fa"
import { CgMenuRight } from "react-icons/cg"
import { IconContext } from "react-icons"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarStyles"
import { useLocation, useNavigate } from "react-router"
import { data } from "../../data/NavbarData"

const Navbar = () => {
  const [show, setShow] = useState(false)

  let navigate = useNavigate()
  let location = useLocation()

  const handleClick = () => {
    setShow(!show)
  }

  const scrollTo = (id) => {
    const element = document.getElementById(id)

    element?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === "/") {
      scrollTo(id)
    }

    navigate(to)
    setShow(false)
  }

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon src="./assets/logo.png" alt="logo" />
              Delta
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {show ? <FaTimes /> : <CgMenuRight />}
            </MobileIcon>
            <NavMenu show={show}>
              {data.map((element, index) => (
                <NavItem key={index}>
                  <NavLinks
                    onClick={() => closeMobileMenu(element.to, element.id)}
                  >
                    {element.text}
                  </NavLinks>
                </NavItem>
              ))}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar
