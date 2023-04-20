import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoal-4k5f.onrender.com/'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

/*Aciona o método busca, que vai fazer uma listagem de postagem ou uma 
  listagem de temas, nesse método busca ele precisa de 3 parametros:
  - URL: a rota onde quero listar os temas, ou listar postagens
  - header(token): dentro do header tem o token pra autenticar o usuario (usuario fazendo este tipo de requisicao precisa estar autenticado)
  - se a API confirmar que este é um usuario válido, ela vai retornar esses dados e armazenar dentro da variável resposta
  uma vez que os dados estão armazenados dentro da variável resposta, 
  ela atribui eles a essa função setDados, feito isso eu vou poder 
  atribuir esse dados ao frontend por meio do hook 
*/

export const busca = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const buscaId = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.post(url,dados,header)
    setDado(resposta.data)
}

export const put = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url,dados,header)
    setDado(resposta.data)
}

export const deleteId = async (url: any, header: any) => {
   await api.delete(url, header)
}



