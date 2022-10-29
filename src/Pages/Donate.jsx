import React from 'react'
import { Button, CardMedia } from '@mui/material';
import { Map } from '../components/Map';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`
const ContainerTitle = styled.div`
    background-image: url("https://www.nycfoodpolicy.org/wp-content/uploads/2020/02/shutterstock_619780853.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 90vh;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`
const Title = styled.div`
    font-size: 60px;
    display: flex;
    align-content: center;
    width: 600px;
    padding-bottom: 5%;
`

export const Donate = () => {
  return (
   <>

    <ContainerTitle>
        <Title>
        <>Rescata alimentos, dónalos a nuestros comercios asociados</>
        </Title>
    </ContainerTitle>
    <Container>
    <CardMedia>
    <Map /> 
    </CardMedia>
    <Button 
    variant="contained" 
    color="success" 
    sx={{height: "50px", width: "200px", fontSize: "30px", marginTop: "200px", marginRight: "200px"}}
    >
      ¡Dona! <FavoriteBorderIcon />
    </Button> 
    </Container>
    </>
  )
}
