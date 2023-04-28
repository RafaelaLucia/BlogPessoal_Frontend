import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Banner from '../../../assets/bannermenu.png'
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import { Link } from 'react-router-dom';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value} >
                <AppBar position="static" className="all_container">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">

                    <Grid container justifyContent='center' style={{ height: '200px', marginTop: '50px' }}>
                        <Grid container item justifyContent='space-between' alignItems='center' style={{ width: '50%' }}>
                            <Grid item className='BoxIcons'>
                                <CreateRoundedIcon style={{ fontSize: 60, color: "black" }} />
                                <h3>Publique reflexões</h3>
                            </Grid>
                            <Grid item className='BoxIcons'>
                                <MessageRoundedIcon style={{ fontSize: 60, color: "black" }} />
                                <h3>Discuta Interesses</h3>
                            </Grid>
                            <Grid item className='BoxIcons'>
                                <AddRoundedIcon style={{ fontSize: 60, color: "black" }} />
                                <h3>Crie seus temas</h3>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" style={{ height: '400px', marginTop: '20px' }}>
                        <Grid item>
                            <img src={Banner} alt="" />
                        </Grid>
                        <Grid item className='TextBanner'>
                            <h2 style={{ textAlign: 'center' }}>Exponha seus temas favoritos!</h2>
                            <p>Nosso Blog Pessoal é o lugar perfeito para discutir seus interesses com os outros! Crie seus temas prediletos e publique suas opiniões no nosso fórum </p>
                            <Link to='/formularioPostagem' className='text-decorator-none'>
                            <Button className='btn-start'>Criar post</Button>
                            </Link>
                        </Grid>
                    </Grid>

                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;