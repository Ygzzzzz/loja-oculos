import React from "react";
import './style.css'

export default function SecaoSobre() {
    return (
        <section className="SecaoSobre">
            <div className="limitar-secao QuemSomos">
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className="card-sobre">
                    <img src="assets/loja.png" alt="Foto da Loja"/>
                    <div className="card-sobre-info">
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="card-sobre-info order2">
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img src="assets/atendimento.png" alt="Foto atendimento"/>
                </div>
            </div>
        </section>
    )
}