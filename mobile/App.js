import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    /**
     * tag View: pode ser utilizada como um container
     * tag text: usada para qualquer tipo de texto (paragrafo, h1, header...)
     * estilização usada apenas atraves do atributo style
     */
    <Routes />
  );
}
/**
 * todos componentes têm display flex por padrão
 * propriedades são camelCase e não com hífen
 * não existe herança de estilos (o estilo de um nó pai não é passado para o nó filho)
 */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'purple',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   title: {
//     color: 'pink',
//     fontWeight: 'bold',
//     fontSize: 20,
//   },

// });
