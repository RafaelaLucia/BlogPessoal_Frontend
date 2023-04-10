import React from 'react';
import './Home.css';

import Photo from '../../assets/HomePhoto.png'

let data = new Date();
let hora = data.getHours();
let mensagem = '';

function Home() {

    if(hora >= 6 && hora < 12){
        mensagem = 'Bom dia!'
    } else if(hora >= 12 && hora < 19){
        mensagem = 'Boa tarde!'
    } else if(hora >= 19 && hora <= 0o0){
        mensagem = 'Boa noite!'
    }

    return(
        <>
        <h3 className='titulo'>{mensagem}</h3>
        <h1 className="titulo">Bem vindo(a)</h1>
        <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quam quod laudantium, repudiandae ex aperiam officiis nihil, est ab amet deserunt veritatis sit debitis blanditiis beatae temporibus saepe quos officia.</p>
        <img src={Photo} alt="Imagem Tela Inicial" className = 'img'/>
        </>
    );
}

export default Home;