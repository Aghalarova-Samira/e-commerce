// import styled from "styled-components";
// import Navbar from "../components/Navbar";
// import Announcement from "../components/Announcement";
// import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
// import Footer from "../components/Footer";


// const Container = styled.div``;

// const Title = styled.h1`
//   margin: 20px;
// `;

// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const Filter = styled.div`
//   margin: 20px;

// `;

// const FilterText = styled.span`
//   font-size: 20px;
//   font-weight: 600;
//   margin-right: 20px;
// `;

// const Select = styled.select`
//   padding: 10px;
//   margin-right: 20px;
// `;
// const Option = styled.option``;

// const ProductList = () => {
//   return (
//     <Container>
//       <Navbar />
//       <Announcement />
//       <Title>Dresses</Title>
//       <FilterContainer>
//         <Filter>
//           <FilterText>Filter Products:</FilterText>
//           <Select>
//             <Option disabled selected>
//               Color
//             </Option>
//             <Option>White</Option>
//             <Option>Black</Option>
//             <Option>Red</Option>
//             <Option>Blue</Option>
//             <Option>Yellow</Option>
//             <Option>Green</Option>
//           </Select>
//           <Select>
//             <Option disabled selected>
//               Size
//             </Option>
//             <Option>XS</Option>
//             <Option>S</Option>
//             <Option>M</Option>
//             <Option>L</Option>
//             <Option>XL</Option>
//           </Select>
//         </Filter>
//         <Filter>
//           <FilterText>Sort Products:</FilterText>
//           <Select>
//             <Option selected>Newest</Option>
//             <Option>Price (asc)</Option>
//             <Option>Price (desc)</Option>
//           </Select>
//         </Filter>
//       </FilterContainer>
//       <Products />
//       <Newsletter />
//       <Footer />
//     </Container>
//   );
// };

// export default ProductList;

//******************************************************************************************* */
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";



const Container = styled.div`
 width: 100%;
 `;

const Top = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1`
 margin: 20px;
`;

const Filter = styled.div`
 margin: 20px;
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option``;

const ProductCon = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;
    
`

const Left = styled.div`
    width: 25%;
    border: black solid 2px;
    display: flex;
    flex-direction: column;
`
const ProductCat = styled.h3`
    color: #282828;
    font-weight: 500;
    margin-top: 80px;
    margin-left: 90px;
    margin-bottom: 30px;
`

const ProductCatList = styled.ul`
    list-style: none;
    display: flex;
    padding-left: 0;
    flex-direction: column;
    width: 30%;
    margin-left: 90px;
`

const ProductCatItem = styled.li`
    font-size: 15px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #51545f;
    margin-bottom: 10px;
    a{
        text-decoration: none;
        color: #51545f;
        font-size: 14px;
        font-weight: 400;
    }
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 60%;
  margin-left: 90px;
`;

const FilterPrice = styled.div`
    width: 50%;
    margin-left: 90px;
    margin-bottom: 30px;
    .selectPrice{
        width: 100%;
    }
`




const Right = styled.div`
    width: 75%;
    border: black solid 2px;
`



const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Top>
                <Title>Dresses</Title>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </Top>
            <ProductCon>
                <Left>
                    <ProductCat>
                        Product Category
                    </ProductCat>
                    <ProductCatList>
                        <ProductCatItem><a href="">Men</a></ProductCatItem>
                        <ProductCatItem><a href="">Women</a></ProductCatItem>
                        <ProductCatItem><a href="">Accessories</a></ProductCatItem>
                        <ProductCatItem><a href="">New Arrivals</a></ProductCatItem>
                        <ProductCatItem><a href="">Collection</a></ProductCatItem>
                    </ProductCatList>
                    <Hr />
                    <ProductCat>
                        Filter by Price
                    </ProductCat>
                    <FilterPrice>
                    <Select className="selectPrice">
                        <Option selected>Price</Option>
                        <Option>0-100</Option>
                        <Option>100-500</Option>
                        <Option>500-1000</Option>
                        <Option>1000...</Option>
                    </Select>
                    </FilterPrice>
                    <Hr />
                    <ProductCat>
                        Filter by Price
                    </ProductCat>
                    <FilterPrice>
                    <Select className="selectPrice">
                        <Option selected>Sizes</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                    </FilterPrice>
                    <Hr />
                    <ProductCat>
                        Filter by Price
                    </ProductCat>
                    <FilterPrice>
                    <Select className="selectPrice">
                        <Option selected>Color</Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                        <Option>Orange</Option>
                        <Option>Pink</Option>
                        <Option>Yellow</Option>
                        <Option>Red</Option>
                    </Select>
                    </FilterPrice>
                    <Hr />
                    
              
                </Left>
                <Right>
                <Products />
                </Right>
            </ProductCon>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
