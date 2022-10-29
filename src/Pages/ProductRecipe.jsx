import { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from 'react-router-dom' ;
import { CardComponent } from "../components/CardComponent";

const ContainerTitle = styled.div`
    background-image: url("https://149449856.v2.pressablecdn.com/wp-content/uploads/2022/09/Supermarket-News-Feature-Image-2022-09-06T081044.227.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 90vh;
    display: flex;
    align-items: center;

 `
 const Title = styled.div`
 font-size: 70px;
 display: flex;
 align-content: center;
 width: 700px;
 padding-bottom: 5%;
 `
const Container = styled.div`

  
`
const ContainerRecipe = styled.div`
      display: flex;
    justify-content: center;
    margin-top: 50px;
  
`
export const ProductRecipe = () => {
  
  let params = useParams();

  const [product, setProduct] = useState('intructions');

  const fetchDetails = async() => {
    
    const data = await fetch (`https://api.spoonacular.com/recipes/${params.nombre}/information?apiKey=fee016ed14814a4a902a1c2d4425577b`)
    const detailData = await data.json();

    setProduct(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.nombre]);

  return (
   
    <Container>
    <ContainerTitle>
        <Title>
        <>Te recomendamos exquisitas recetas, elige la que mas te guste</>
        </Title>
    </ContainerTitle>
    <ContainerRecipe>
        <CardComponent />
    </ContainerRecipe>
    </Container>
  );
};


