import styled from "styled-components";

const Container = styled.div`
  height: 45px;
  background-color: #1e1e27;;
  color: #b5aec4;;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 150px;
  padding-right: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: black solid 2px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Hr = styled.hr`
  background-color: #bab5b5;
  border: none;
  width: 0.05px;
  height: 45px;
  margin-left: 15px;
`;

const Announcement = () => {
  return <Container>
    <Wrapper>
      <Left>
       FREE SHIPPING ON ALL U.S ORDERS OVER $50
      </Left>
      <Right>
          <Language>EN</Language>
          <Hr/>
          <MenuItem>REGISTER</MenuItem>
          <Hr/>
          <MenuItem>SIGN IN</MenuItem>
        </Right>
    </Wrapper>
  </Container>;
};

export default Announcement;
