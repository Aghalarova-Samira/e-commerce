import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";


const Container = styled.div`
 
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 60px;
`

const ProductImg = styled.div`
width: 55%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
`

const ImgLeft = styled.div`
  display: flex;
  width: 25%;
  height: 80%;
  flex-direction: column;
  margin-right: 10px;
  img{
    width: 90%;
    height: 32%;
    margin-bottom: 10px;
  }
`

const ImgRight = styled.div`
  width: 60%;
  height: 80%;
   img{
    width: 100%;
    height: 100%;
  }
`


const ProductCon = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    h2{
      font-size: 40px;
      font-weight: 500;
      margin-top: 30px;
      margin-bottom: 20px;
      font-family: 'Poppins',sans-serif;
    }
    p{
      font-family: 'Poppins',sans-serif;
      margin-bottom: 25px;
    }
    h1{
       margin-bottom: 25px
    }
`

const SelectArea = styled.div`
  display: flex;
  margin-bottom: 40px;
`

const Select = styled.select`
width: 20%;
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option``;



const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  width: 30%;
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;



const Product = () => {
  return (
   <Container>
     <Navbar/>
    <Announcement/>
    <Wrapper>
        <ProductImg>
          <ImgLeft>
          <img src="https://image.made-in-china.com/202f0j00pkoGbZcRHBqU/Summer-Dress-Puff-Sleeve-Short-Sleeve-Dress-Fashion-Clothes.jpg"/>
          <img src="https://image.made-in-china.com/202f0j00pkoGbZcRHBqU/Summer-Dress-Puff-Sleeve-Short-Sleeve-Dress-Fashion-Clothes.jpg"/>
          <img src="https://image.made-in-china.com/202f0j00pkoGbZcRHBqU/Summer-Dress-Puff-Sleeve-Short-Sleeve-Dress-Fashion-Clothes.jpg"/>
          </ImgLeft>
          <ImgRight>
          <img src="https://image.made-in-china.com/202f0j00pkoGbZcRHBqU/Summer-Dress-Puff-Sleeve-Short-Sleeve-Dress-Fashion-Clothes.jpg"/>
          </ImgRight>
        </ProductImg>
        <ProductCon>
        <h2>Dress</h2>
           <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
           <h1>$495.00 </h1>
           <SelectArea>
           <Select className="selectPrice">
              <Option selected>Select Color</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>black</Option>
              <Option>white</Option>
              <Option>yellow</Option>
              <Option>green</Option>
            </Select>
           <Select className="selectPrice">
              <Option selected>Select Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
           </SelectArea>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
        </ProductCon>
    </Wrapper>
    <Newsletter />
    <Footer />
   </Container>
  )
}

export default Product
