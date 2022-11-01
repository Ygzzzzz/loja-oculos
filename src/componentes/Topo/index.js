import React from 'react';
import './style.css';

export default function Topo() {
    return (
        <header>
            <div className='limitar-secao topo'>
                <img src='/assets/logo.png'/>

                <nav>
                    <a href=''>Produto</a>
                    <a href=''>Sobre</a>
                    <a href=''>Contato</a>
                </nav>
            </div>
        </header>
    )
}