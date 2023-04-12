import React from 'react';
import { Paper, Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Photo from '../../assets/HomePhoto.png'
import Bloguinho from '../../assets/bloguinho.png'
import Banner from '../../assets/bannermenu.png'

function Home() {

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='bg-welcome'>
                
                <Grid alignItems="center" item xs={6} >
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        
                    </Box>
                </Grid>

                <Grid item xs={6} >
                    <img src={Bloguinho} alt="" width="330px" height="320px" />
                </Grid>

                <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
               
            </Grid>
            <Grid container justifyContent='center' style={{height:'200px', marginTop:'50px'}}>
                <Grid container item justifyContent='space-between' alignItems='center' style={{width:'50%'}}>
                   <Grid item className='BoxIcons'>
                    <CreateRoundedIcon style={{ fontSize: 60, color: "black" }} />
                    <h3>Publique reflexões</h3>
                   </Grid>
                   <Grid item className='BoxIcons'>
                    <MessageRoundedIcon style={{ fontSize: 60, color: "black" }} />
                    <h3>Discuta Interesses</h3>
                   </Grid>
                   <Grid item className='BoxIcons'>
                   <AddRoundedIcon style={{ fontSize: 60, color: "black" }}/>
                    <h3>Crie seus temas</h3>
                   </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" style={{height:'400px', marginTop:'20px'}}>
                <Grid item>
                    <img src={Banner} alt="" />
                </Grid>
                <Grid  item className='TextBanner'>
                    <h2 style={{textAlign:'center'}}>Exponha seus temas favoritos!</h2>
                    <p>Nosso Blog Pessoal é o lugar perfeito para discutir seus interesses com os outros! Crie seus temas prediletos e publique suas opiniões no nosso fórum </p>
                    <Button className='btn-start'>Começar</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;