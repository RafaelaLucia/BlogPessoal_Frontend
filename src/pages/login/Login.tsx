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
import { toast } from 'react-toastify';

function Login() {

    let history = useNavigate();
    const dispatch = useDispatch(); //envio(disparar), serve pra disparar a ação (pacote) com as informações que precisam ser atualizadas
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
            toast.success('Usuário Logado com Sucesso!', {
                position: "top-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        } catch (error) {
            toast.error('Dados inconsistentes. Erro ao Logar!', {
                position: "top-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <Grid container className="GridWrap">

            <Grid item xs={4} md={3}>
                <img src={PhotoLogin} alt="" className='loginImg' />
            </Grid>

            <Grid className='gridForm' item xs={8} md={6}>
                <Box flexDirection='column' style={{ display: 'flex' }} paddingX={20}>
                    <form className="myForm" onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textInform">Entrar</Typography>
                        <TextField value={usuarioLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' className='inputlogin' fullWidth />
                        <TextField value={usuarioLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' className='inputlogin' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary' className='buttonLogin'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2} className='box_signup'>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className="font" >Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro' className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align='center' className="font fontLink" style={{ fontWeight: 'bold' }}>cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;