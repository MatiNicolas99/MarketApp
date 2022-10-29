import styled from "styled-components"
import { PopularRecipe } from "../components/PopularRecipe"

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
  
  
`
export const Recipe = () => {
  return (
    <Container>
    <ContainerTitle>
        <Title>
        <>Te recomendamos exquisitas recetas, elige la que mas te guste</>
        </Title>
    </ContainerTitle>
    <ContainerRecipe>
        <PopularRecipe />
    </ContainerRecipe>
    </Container>
  )
}
