import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTema() {

  const[temas, setTemas] = useState<Tema[]>([])
  let history = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  
  useEffect(() => {
    if(token == ''){
      toast.warn('Você precisa estar logado!', {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
    });
      history('/login')
    }
  },[token])

  async function getTema(){
    await busca('/temas', setTemas, {
      headers: {
        'Authorization' : token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length]) //sempre que a tema sofrer alguma modificacao ele vai acionar o get temas

  return (
    <>
    <Grid className='grid2'>
      <Link to='/formularioTema' className='text-decorator-none'>
      <Button variant="contained" size='small' className='buttonList'>Cadastrar Tema</Button>
      </Link>
    </Grid>
    {
      temas.map(tema => ( 
      <Box m={2} >
        <Card variant="outlined" className='card2'>
          <CardContent>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="update" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary" className="delete">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))}
    </>
  );
}


export default ListaTema;