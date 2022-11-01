import React from "react";
import SecaoCapa from "../SecaoCapa";
import SecaoProdutos from "../SecaoProdutos";
import SecaoSobre from "../SecaoSobre";
import SecaoContato from "../SecaoContato";

export default function Main() {
    return (
        <main>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
        </main>
    )
}