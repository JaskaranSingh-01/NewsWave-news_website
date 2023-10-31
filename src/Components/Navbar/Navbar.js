import React, { useState } from 'react'; // Make sure you import 'useState' from 'react'
import {
  COffcanvas, // Ensure you have this import
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarToggler,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
  CDropdownHeader,
} from '@coreui/react';

import './Navbar.css'




function Navbar(props) {
  const [visible, setVisible] = useState(false);
  const { category, setCategory, searchTerm, setSearchTerm } = props;
  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  };


  const [input, setInput] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(input.toUpperCase());
    setCategory(input.toUpperCase());
    setInput("");

  };

  return (
    <CNavbar colorScheme="dark" className="bg-dark">
      <CContainer fluid>
        <CNavbarBrand className='txt-col'> NewsWave</CNavbarBrand>
        <CNavbarToggler
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          onClick={() => setVisible(!visible)}
        />
        <COffcanvas className='bg-dark' id="offcanvasNavbar" placement="end" portal={false} visible={visible} onHide={() => setVisible(false)}>
          <COffcanvasHeader>
            <COffcanvasTitle>
              <CNavLink href="#"><i class="fa-brands fa-github fa-xl icon-color"></i>  Github</CNavLink>
            </COffcanvasTitle>
            <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
          </COffcanvasHeader>
          <COffcanvasBody>
            <div className='nav-pad'>
              <CForm className="d-flex">
                <CFormInput type="search" name="search" className="me-2" placeholder="Search" value={input} onChange={(e) => { setInput(e.target.value) }} />
                <CButton type="button" color="success" variant="outline" onClick={handleSearch}>
                  Search
                </CButton>
              </CForm>
            </div>
            <CNavbarNav >
              <CNavItem>
                <CNavLink href="#" active>
                  <h2>Categories</h2>
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink onClick={() => handleCategoryClick("WORLD")}>
                  World
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink onClick={() => handleCategoryClick("HEALTH")}>
                  Health
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink onClick={() => handleCategoryClick("TECHNOLOGY")}>
                  Technology
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink onClick={() => handleCategoryClick("SPORTS")}>
                  Sports
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink onClick={() => handleCategoryClick("POLITICS")}>
                  Politics
                </CNavLink>
              </CNavItem>
            </CNavbarNav>

          </COffcanvasBody>
        </COffcanvas>
      </CContainer>
    </CNavbar>
  )
}

export default Navbar