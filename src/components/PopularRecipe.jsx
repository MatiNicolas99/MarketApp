import { useEffect, useState } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';


export const PopularRecipe = () => {
  const [popular, setPopular] = useState([])
  
  useEffect(() => {
    getPopular();  
  }, [])
  
  const getPopular = async () => {
    const check = localStorage.getItem('popular');

try {
  
  if( check ){
    setPopular(JSON.parse(check));
  }else {

    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=fee016ed14814a4a902a1c2d4425577b&number=4`)
    const data = await api.json();
    localStorage.setItem('popular', JSON.stringify(data.recipes));
    setPopular(data.recipes);
  
  };

} catch (error) {
  throw error
};
};

  return (
    <div>
        <Title>Tendencias</Title>
          <Wrapper>
            
            {popular.map((recipe) => {
              return(
                <Card>
                  <Link to={'/Recetas/' + recipe.id }>
                    <p> {recipe.title} </p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient/>
                  </Link>
                </Card>
              );
            })};
          </Wrapper>
    </div>
  );
};
const Title = styled.div`
    text-align: center;
    margin-top: 50px;
    font-size: 45px;
`
const Wrapper = styled.div`
  margin: 4rem 0rem; 
  display: grid; 
  grid-template-columns: repeat(3, minmax(80px, 1fr));
  grid-gap: 50px;
`
const Card = styled.div`
  min-height: 300px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
 
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`
