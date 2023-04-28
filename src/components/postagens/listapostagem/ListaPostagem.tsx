import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import foto from '../../../assets/profile.png';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let history = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == '') {
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
  }, [token])

  async function getPost() {
    await busca('/postagens', setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPost()
  }, [posts.length]) //sempre que a postagem sofrer alguma modificacao ele vai acionar o get temas

  return (
    <>
       <Grid container spacing={2} className='grid'>
      {
        posts.map(post => (
          <Grid item xs={12} sm={6} md={4} lg={3} >
          <Box m={2} >
            <Card variant="outlined" className="card">
              <CardContent>
                <Box className="wrap">
                <img src={foto} alt="" className='profile' />
                <Typography variant="h5" component="h2" className='title'>
                  {post.titulo}
                </Typography>
                </Box>
                <Box className='wraptext'>
                <Typography variant="body2" component="p" className='theme'>
                  {post.tema?.descricao}
                </Typography>
                <Typography variant="body2" component="p" className='text'>
                  {post.texto}
                </Typography>
                </Box>
               
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="update" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
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
          </Grid>
        ))
      }
      </Grid>
    </>)
}

export default ListaPostagem;