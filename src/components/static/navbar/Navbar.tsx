import React, { useState } from 'react';
import './Navbar.css'

// IMPORTAÇÕES
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { MenuItem, Toolbar, Button, Typography, IconButton, InputBase, Menu, AppBar, Badge } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
//icons e img
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from '../../../assets/logo.png';
import blog from '../../../assets/blog.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
  let history = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    alert('Usuário deslogado')
    history('/login')
  }

  var navbarComponent;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  if(token != ""){
     navbarComponent = <AppBar className='backgroundColorBlue' position="static">
     <Toolbar>
       <IconButton
         edge="start"
         className='marginRight'
         color="inherit"
         aria-label="open drawer"
       >
         <MenuIcon />
       </IconButton>
       <Link to='/home' className='text-decorator-none'>
         <Typography style={{ display: 'flex', alignItems: 'center' }} variant="h6" noWrap>
           <img src={logo} alt="" className='logo_input' style={{ marginTop: '11px' }} />
           {/* <span style={{marginLeft: 15, color: 'black', fontWeight: 'bold', fontFamily: 'Arial'}}>Blog Pessoal</span> */}
           <img src={blog} alt="" style={{ width: '110px', height: '50px' }} />
         </Typography>
       </Link>
       <div className={classes.search}>
         <div className='searchIcon'>
           <SearchIcon />
         </div>
         <InputBase
           placeholder="Pesquisar…"
           className='inputRoot'
           classes={{
             input: classes.inputInput,
           }}
           inputProps={{ 'aria-label': 'search' }}
         />
       </div>
       <div style={{ display: 'flex', width: '490px', justifyContent: 'space-evenly' }}>
         <Link to='/posts' className='text-decorator-none'><Typography color="inherit" style={{ cursor: 'pointer' }}>Postagens</Typography></Link>
         <Link to='/temas' className='text-decorator-none'><Typography color="inherit" style={{ cursor: 'pointer' }}>Temas</Typography></Link>
         <Link to='/formularioTema' className='text-decorator-none'><Typography color="inherit" style={{ cursor: 'pointer' }}>Cadastrar Tema</Typography></Link>
       </div>
       <div className='grow' />
       <div className={classes.sectionDesktop}>
         {/*  <AccountCircle style={{ cursor: "pointer", width: "40px", height: "40px"}} /> */}
         <Button variant='contained' color='primary' onClick={goLogout}>Sair</Button>
       </div>
       <div className={classes.sectionMobile}>

         <IconButton
           aria-label="show more"
           aria-controls={mobileMenuId}
           aria-haspopup="true"
           onClick={handleMobileMenuOpen}
           color="inherit"
         >
           <MoreIcon />
         </IconButton>
       </div>
     </Toolbar>
   </AppBar>
   {renderMobileMenu}
   {renderMenu}
  }

  return (
    <div className='grow' >
     {navbarComponent}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);

export default Navbar;