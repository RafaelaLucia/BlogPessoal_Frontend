import React from 'react';
import './Cadastro.css'
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import PhotoSingup from '../../assets/imgCadastro.png';

function Cadastro() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>

            <Grid alignItems='center' xs={6}>
                <Box paddingX={20} style={{marginTop: '50px'}}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Cadastrar</Typography>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="selecionar-imagem"
                            type="file"
                        />
                        <label htmlFor="selecionar-imagem">
                            <Button variant="outlined" fullWidth color="primary" component="span">
                                Selecionar foto perfil
                            </Button>
                        </label>

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Já possui uma conta?</Typography>
                        </Box>
                        <Link to='/login'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>Logar</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>


            <Grid xs={3}>
                <img src={PhotoSingup} alt="" style={{ width: '400px', height: '400px' }} />
            </Grid>

        </Grid>
    );
}

export default Cadastro;