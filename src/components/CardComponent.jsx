import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export const CardComponent = () => {

  return (
    <Card sx={{ width: "900px", height: "600px"}}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"

      />
      <CardMedia
        component="img"
        height="300"
        width="900"
        image="https://dinnerthendessert.com/wp-content/uploads/2020/06/Shrimp-in-Lobster-Sauce.jpg"
        alt="Paella dish"
      />
      <CardContent sx={{display: "flex", justifyContent: "space-around"}}>
        <Typography variant="body2" color="text.secondary" sx={{width: "200px"}}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <ul>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
      <Collapse  timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
  );
}