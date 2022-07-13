import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 5;
  background: transparent;
  &.fixed{
    background: white;
    transition: .3s ease-in-out;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #1440a8;
  margin-left: 30px;
`;


const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border-bottom: 2px solid #1440a8;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;


const Input = styled.input`
  border: none;
  background: transparent;
  &:focus{
    outline: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px; 
`;

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  
  const changeBackground = () => {
    if (window.scrollY>=80) {
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <Container className={navbar ? 'fixed' : ""}>
      <Wrapper>
        <Left>
        <Logo>SHOPPER</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> 
        </Center>
        <Right>
          <Language>HOME</Language>
          <MenuItem>PROMOTION</MenuItem>
          <MenuItem>CONTACT</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
