import styled from "styled-components";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

const ProductWrapper = styled.div`
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #e0f2fe;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  transition: box-shadow 0.15s, transform 0.15s;
`;

const WhiteBox = styled(Link)`
  /* background-color: red; */
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  width: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 150px;
  }
  @media screen and (min-width: 768px) {
    /*  */
    width: 210px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
  @media screen and (min-width: 768px) {
    /*  */
    text-align: center;
    font-size: 0.7rem;
  }
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  /* background-color: red; */
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
    width: 150px;
    padding-inline: 10px;
    flex-direction: column;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  color: #1e293b;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
    font-weight: 600;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    text-align: center;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt="product image" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Price>₹{price}</Price>
        <PriceRow>
          <Title href={url}>{title}</Title>
          <Button block onClick={() => addProduct(_id)} primary outline>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
