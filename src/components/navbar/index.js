import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          
          <NavLink to="/BookingCalendar" activeStyle>
            BookingCalendar
          </NavLink>
          <NavLink to="/Documents" activeStyle>
            Documents
          </NavLink>
          <NavLink to="/Clients" activeStyle>
            Clients
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
