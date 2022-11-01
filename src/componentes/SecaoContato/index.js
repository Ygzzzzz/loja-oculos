import React from "react";
import './style.css';

export default function SecaoContato() {
    return (
        <section className="SecaoContato">
            <div className="limitar-secao">
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="entre-contato">
                    <div className="contato-dados">
                        <p>Contato</p>
                        <figure>
                            <img src="assets/local.png"/>
                            <figcaption>Nova Iguaçu, RJ</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/telefone.png"/>
                            <figcaption>(21) 9999-9999</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/email.png"/>
                            <figcaption>contato@oticavida.com</figcaption>
                        </figure>
                    </div>
                    <div className="contato-dados">
                        <p>Nossas Redes Sociais</p>
                        <figure>
                            <img src="assets/fb.png"/>
                            <figcaption>/OticaVida</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/ig.png"/>
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/tt.png"/>
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}