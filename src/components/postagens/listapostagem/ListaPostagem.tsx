import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ModalPostagem from '../modalPostagem/ModalPostagem';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let history = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == '') {
      alert('Você precisa estar logado!')
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
       <Grid container spacing={2}>
      {
        posts.map(post => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
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