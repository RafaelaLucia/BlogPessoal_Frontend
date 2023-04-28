import {createStore} from 'redux';
import { tokenReducer } from './tokens/tokensReducer';

const store = createStore(tokenReducer);
//constante nome = criarReserva(reduzidor)
export default store;
//exporta este reserva

//deprecated não é depreciado, é obsoleto


