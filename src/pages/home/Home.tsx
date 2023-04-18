import React from 'react';
import { Paper, Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import Bloguinho from '../../assets/bloguinho.png'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {

    return (
        <>
            <Grid container className='bg-welcome'>

                <Grid alignItems="center" item xs={6} >
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='boldWhiteText'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='WhiteText'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box className='IconFlex'>
                        <Box marginRight={1}>
                        </Box>

                    </Box>
                </Grid>

                <Grid item xs={6} >
                    <img src={Bloguinho} alt="Imagem do Banner" className='imgSize'/>
                </Grid>

                <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>

            </Grid>
           
            <Grid xs={12} className="postagens">
                <TabPostagem/>
            </Grid>
        </>
    );
}

export default Home;