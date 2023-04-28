/*bibliotecario
organizar as estantes (estados globais da aplicação)*/

import {Action} from './actions';

//Estantes (estados)
export interface TokenState {
    tokens : string //definindo categorias dos livros (terror, aventura)
}

//definindo como as estantes são inicializadas (são iniciadas vazias)
const initialState = {
    tokens : ""
}

//bibliotecario trabalhando
//recebe o estado inicial e a ação que vai atualizar o estado inicial 
export const tokenReducer = (state : TokenState = initialState, action : Action) => {
                            //nome = estantes = vazias
                            //em linhas gerais tem um objeto aqui chamado token e ele está vazio
    
        //
        switch(action.type){ //verifica caso a caso se as informacoes estão batendo
            //exemplo da biblioteca, recebi um livro de terror e estou vendo estante por estante até eu achar a estante correta
             
        //caso o campo que está neste parametro seja add_token eu retorno:
        case "ADD_TOKEN" : {
            return {tokens : action.payload} //acessar a estante, a categoria da estante e a acionar o payload(cargo)
        }
   //em linhas gerais, pega o campo tokens que estava vazio e adicionadno o token criptografado 
        default:
            return state ///caso venha qualquer coisa diferente de add_token deixa do jeito que tá
    }
}

//reducer recebe:
// const reduzidor = ({tokens : ''}, {tipo: ..., carga(payload): "Basic ..." }) => {}