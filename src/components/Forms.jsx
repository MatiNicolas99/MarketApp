import * as React from 'react';
import { Card, CardContent, Grid, TextField, Button } from '@mui/material';

import styled from 'styled-components';



const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`

export const Forms = () => {


  
  return (
    <>

    <Card sx={{width: "500px", borderBox: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}} >
    <ButtonContainer>
    <Button 
    variant="contained" 
    color="success" 
    sx={{height: "50px", width: "200px", fontSize: "14px"}}
    >
   Agregar Producto
    </Button>
    </ButtonContainer>
      <CardContent>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField 
            label="Ingresa tu producto" 
            placeholder='Producto' 
            variant='outlined'
            fullWidth
            >
            </TextField> 
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField 
            label="Cantidad de productos" 
            placeholder='Cantidad' 
            variant='outlined'
            fullWidth
            required
            >
            </TextField> 
          </Grid>
          <Grid xs={12} item >
          <TextField 
            label="Acciones" 
            placeholder='Acción' 
            variant='outlined'
            fullWidth
            required
            >
            </TextField> 
          </Grid>
          <Grid xs={12} item >

          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </>
  );
}