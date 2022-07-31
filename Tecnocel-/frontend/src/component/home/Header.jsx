import React, { useRef } from "react";
import "./Header.css";
import { Link as LinkRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import logoTecnocel from "../../Assets/Tecnocel.png";

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import userActions from '../../redux/actions/userActions';
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



let pages=[
  {name:"Inicio",
   to:"/"},
   {name:"Nosotros",
   to:"/about"},
   {name:"Productos",
   to:"/products"},
   {name:"Politicas",
   to:"/politicas"},
   {name:"Contacto",
   to:"/contact"}]

const Header = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [reload, setReload] = React.useState(false)


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const navigate = useNavigate ()
  const dispatch = useDispatch ()


  const logOutSession= () => {
    dispatch(userActions.signOutUser())
    navigate("/")
    window.location.reload()
    
  }



  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }


  let user = useSelector(store => store.userReducer.user)

  const switcherTab = useRef(null);

  const handleReload = () => {
    setReload(!reload);
  };

  // window.addEventListener("scroll", () => {
  //   if (window.pageYOffset > 100) {
  //     document.querySelector(".navbar").classList.add("active");
  //   }
  //   else {
  //     document.querySelector(".navbar").classList.remove("active");
  //   }
  // })

  return (
    <div className="Header">
      {/* Header TopBar */}
      <div className="Header__topbar space__beetween">
        {/* Topbar Left */}
        <div className="logo pxy__10">
          <LinkRouter to="/">
            <img
              src={logoTecnocel}
              alt=""
              className="logo"
              style={{
                width: "150px",
                height: "100px",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </LinkRouter>
        </div>
        {/* Topbar Middle */}

        <div
          className="searchBoxHome"
          style={{
            width: "50%",
            position: "relative",
          }}
        >
          <div
            className="inputBox"
            style={{
              display: "flex",
              alignItems: "center",
              height: "40px",
              width: "100%",
              background: "#88d317",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "30px",
                fontFamily: "Poppins,sans-serif"
              }}
            >
              ¡BIENVENIDOS A TECNOCEL 💻!
            </span>
          </div>
        </div>

        <div
          className="flex align__items__center email-header"
          style={{
            margin: "0px 10px",
          }}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
              style={{
                color: "#535353"
              }}
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "1.9rem",
              color: "#88D317"
            }}
          >
            <strong style={{
              padding: "0px 5px",
              color: "white"
            }}>Email:</strong> tecnocelcba.oficial@gmail.com
          </span>
        </div>
      </div>
      {/* Header Navbar */}
      <div className="navbar flex pz__10 space__beetween" ref={switcherTab}>
      
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="menu-despleg" />
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
                display: { xs: 'flex', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                   <LinkRouter className="Linkrouter-short" to={page.to}>
              {page.name}
            </LinkRouter>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
              <LinkRouter className="Linkrouter" to={page.to}>
              {page.name}
            </LinkRouter>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    
        {/* <div
          className="navigation"
          style={{
            padding: "0px 50px"
          }}
        >
          <ul
            style={{
              fontFamily: "sans-serif",
              cursor: "pointer",
              display: "flex",
              listStyle: "none",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              margin: ".5rem",
            }}
          >
            <LinkRouter to="/">
              <li className="buttonnav">Inicio</li>
            </LinkRouter>
            <LinkRouter to="/about">
              <li className="buttonnav" >Nosotros</li>
            </LinkRouter>
            <LinkRouter to="/products">
              <li className="buttonnav" >Productos</li>
            </LinkRouter>     
            <LinkRouter  to="/politicas">
              <li className="buttonnav" >Politicas</li>
            </LinkRouter>
            <LinkRouter to="/contact">
              <li className="buttonnav" >Contacto</li>
            </LinkRouter>
          </ul>
        </div> */}
        

        <div className="rightOption flex align__items__center">

        {/* {user ?
          <IconButton onClick={()=> likesOrDislikes (user._id)} aria-label="add to favorites">
             {user?.likes.includes(user.user?.id) ? 
              <FavoriteIcon style={{ color: 'red' }} /> 
              :
              <FavoriteBorderIcon />}
            
          </IconButton>
          :
          <IconButton onClick={noUser}  aria-label="add to favorites">
            <FavoriteBorderIcon />
            
          </IconButton>
        } */}

          
          {user && user.role=="admin" &&  <LinkRouter  to="/admin">
             <AdminPanelSettingsIcon className="panel"/> 
            </LinkRouter>}
            
      
         
          <div className="cart__items flex align__items__center">
            <div className="cart__items flex pointer relative">
              <LinkRouter to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#535353"
                  className="bi bi-cart3 pxz__20 black"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </LinkRouter>
             
            </div>
          </div>
          <Box sx={{ flexGrow: 0 }}>
          </Box><Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                {user ? <Avatar alt="photo" src={user.user?.photo} sx={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'rgb(105,24,152)',
                  backgroundColor: '#121212',
                  marginLeft: '15px',
                  textDecoration: 'none',
                  borderRadius: '20px'}} /> :
                  <LinkRouter to="/login">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    marginleft="1px"
                    fill="rgb(105,24,152)"
                    className="userr"
                    viewBox="0 0 16 16"
                   >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </LinkRouter>}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user ? (
                <Box>
                  <LinkRouter to={`/profile/${user.user?.id}`}>
                 {/*    <MenuItem sx={{'&:hover': {bgcolor: 'rgb(224,224,224)'}}} onClick={handleCloseUserMenu}>
                      <Typography sx={{padding: '2px', paddingLeft: '6px', paddingRight: '6px', color: 'rgb(2,0,3)'}}>{user.user?.name.charAt(0).toUpperCase()+user.user?.name.slice(1).toLowerCase()}</Typography>
                    </MenuItem> */}
                  </LinkRouter>
                  <MenuItem sx={{'&:hover': {bgcolor: '#141414c7'}}} handleReload={handleReload} onClick={handleCloseUserMenu}>
                    <Typography sx={{padding: '2px', paddingLeft: '6px', paddingRight: '6px', color: '#88d317c7'}} handleReload={handleReload} onClick={logOutSession}>Sign Out</Typography>
                  </MenuItem>
                </Box>
              ) : 
                <LinkRouter to="/login">
   {/*       <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#535353"
                className="bi bi-person pxz__20 black"
                viewBox="0 0 16 16"
               >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg> */}
                </LinkRouter>
}
            </Menu>
          </Box>
{/*           <div className="user__account flex pointer">
            <LinkRouter to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#535353"
                className="bi bi-person pxz__20 black"
                viewBox="0 0 16 16"
               >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </LinkRouter>
          </div> */}
        </div>
      </div>
    </div>
    

  );
}

export default Header;