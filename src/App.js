import logo from './logo.svg';
import './App.css';

import Topo from './componentes/Topo';
import Main from './componentes/Conteudo';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div>
      <Topo/>
      <Main/>
      <Rodape />
    </div>
  );
}

export default App;
