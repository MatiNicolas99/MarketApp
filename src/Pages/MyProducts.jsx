import * as React from 'react';
import styled from 'styled-components';
import { Forms } from '../components/Forms';
import { TableProduct } from '../components/TableProduct';


const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const MyProduct = styled.div`
    background-image: url("https://www.stopfoodwaste.com.au/wp-content/uploads/2021/02/shutterstock_1462236275-1-scaled.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 90vh;
    display: flex;
    align-items: center;
`
const MyProductTitle = styled.div`
    font-size: 70px;
    display: flex;
    align-content: center;
    width: 800px;
    padding-bottom: 5%;
`
const MyProductContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5% 2%;
`


export const MyProducts = () => {
  return (
    <>
    <MyProduct>
        <MyProductTitle>
            <>
            Bienvenido a tu despensa, revisa tus productos
            </>
            </MyProductTitle>
    </MyProduct>
    <ProductsContainer>
        <MyProductContainer>
            <TableProduct />
        </MyProductContainer>
        <MyProductContainer>
            <Forms />
        </MyProductContainer>
    </ProductsContainer>
    </>
  );
}

