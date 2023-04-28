export type Action = {type: "ADD_TOKEN"; payload: string};

export const addToken = (token: string) : Action => ({
    type: "ADD_TOKEN",
    payload: token, 
});

/*
export type Action = {
    type: "ADD_TOKEN";
     payload: string
};

interface - mais usado na criação de objetos
type - mais usado para tipar(objetos, variaveis, etc)
String, Number são tipagens (em java)
Neste contexto está sendo criado uma tipagem chamada Action
ela tem os parametros:
type - recebe todas as ações obrigatoriamente do add token
payload(carga) - é o conteúdo que vamos querer guardar

funcoes no java primeiro fala o tipo do retorno, a palavra reservada funcition
o nome, abre fecha chaves e no final vai retornar um resultado daquele respectivo tipo

int function soma(int a, int b){
    return(int...)
}

no final de tudo que ela fez aqui ela deve retornar um objeto (action) com as informacoes (type e payload)
export const addToken = (token: string) : Action => ({
    type: "ADD_TOKEN",
    payload: token, 
});

analogia em java:
function addToken = (token: string) : Action {
    return(
        {
            type: "ADD_TOKEN",
            payload: token, 
        }
    )
});

função addToken recebe uma string(token ) e deve retornar um tipo Action(seria tipo um tipo int)
export const addToken = (token: string) : Action => ({
    type: "ADD_TOKEN",
    payload: token, 
});

maquina
poe um novelo de lã na maquina
e por alguma razão a maquina faz um processo que te traz duas coisas
- uma roupa de lã 
e dentro dessa roupa de lã a etiqueta com a marca

essa é a ação da função



*/