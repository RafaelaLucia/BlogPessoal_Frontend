import React, {useEffect, ChangeEvent, useState} from 'react';
import './CadastroUsuario.css'
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service';
import PhotoSingup from '../../assets/imgCadastro.png';
import Usuario from '../../models/Usuario';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/")
            console.log(userResult)
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            if (confirmarSenha == user.senha && user.senha.length >= 8) {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                alert('Usuario cadastrado com sucesso')
            } else {
                alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>

            <Grid alignItems='center' xs={6}>
                <Box paddingX={20} style={{ marginTop: '50px' }}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <TextField value={user.foto} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Insira o link da sua foto' variant='outlined' name='foto' margin='normal' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Já possui uma conta?</Typography>
                        </Box>
                        <Link to='/'>
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

export default CadastroUsuario;