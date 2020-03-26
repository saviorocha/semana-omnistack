import React from 'react';

export default function Header({ children }) {//children -> propriedade, semelhante a um atributo html
    return (//propriedade precisa estar entre parentesis quando passado como parametro
        <header>
            <h1>{children}</h1>
        </header>
    );
}