import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <AppBar position="static" color="success" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FoodBankIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RESCUEFOOD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link style={{textDecoration: "none", color:"black"}} to={"/"}>Inicio</Link></Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link style={{textDecoration: "none", color:"black"}} to={"/Despensa"}>Tu Despensa</Link></Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link style={{textDecoration: "none", color:"black"}} to={"/Recetas"}>Recetas</Link></Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link style={{textDecoration: "none", color:"black"}} to={"/Donar"} >Donar</Link></Typography>
                </MenuItem>
            </Menu>
          </Box>
          <FoodBankIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RESCUEFOOD
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              <Button
              
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex' }}
              ><Link style={{textDecoration: "none", color:"white"}} to={"/"}>
                Inicio
                </Link>
              </Button>

              <Button
              
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex' }}
              ><Link style={{textDecoration: "none", textDecoration: "none", color:"white"}} to={"/Despensa"}>
                Tu Despensa
                </Link>
              </Button>
              <Button
              
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex' }}
              ><Link style={{textDecoration: "none", textDecoration: "none", color:"white"}} to={"/Recetas"}>
              Recetas
              </Link>
              </Button>
              <Button
              
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex' }}
              ><Link style={{textDecoration: "none", textDecoration: "none", color:"white"}} to={"/Donar"}>
             Donar
              </Link>
              </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
