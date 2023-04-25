import React, { ChangeEvent, useEffect, useState } from 'react';
import './Login.css'
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UsuarioLogin from '../../models/UsuarioLogin';
import PhotoLogin from '../../assets/imgLogin.png';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';

function Login() {

    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, usuarioLogin, setToken)
            alert('Usuario logado com sucesso');

        } catch (error) {
            alert('dados do usuário inconsistentes. Erro ao logar!')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>

            <Grid item xs={3}>
                <img src={PhotoLogin} alt="" style={{ width: '400px', height: '400px' }} />
            </Grid>

            <Grid className='gridForm' item xs={6}>
                <Box flexDirection='column' style={{ display: 'flex' }} paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField value={usuarioLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={usuarioLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;