import { Route, Routes } from 'react-router';
import './App.css'
import CadCarro from './Components/Cadastro/CadCarro';
import CadEmpresa from './Components/Cadastro/CadEmpresa';
import CadMotorista from './Components/Cadastro/CadMotorista';
import CadUsuario from './Components/Cadastro/CadUsuario';
import ConCarro from './Components/Consulta/ConCarro';
import ConEmpresa from './Components/Consulta/ConEmpresa';
import ConMotorista from './Components/Consulta/ConMotorista';
import ConUsuario from './Components/Consulta/ConUsuario';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />

        <Route path='/cadastro-usuario' element={<CadUsuario />} />
        <Route path='/consulta-usuario' element={<ConUsuario />} />
        <Route path='/editar-usuario/:id' element={<CadUsuario />} />

        <Route path='/cadastro-motorista' element={<CadMotorista />} />
        <Route path='/consulta-motorista' element={<ConMotorista />} />
        <Route path='/editar-motorista/:id' element={<CadMotorista />} />

        <Route path='/cadastro-carro' element={<CadCarro />} />
        <Route path='/consulta-carro' element={<ConCarro />} />
        <Route path='/editar-carro/:id' element={<CadCarro />} />

        <Route path='/cadastro-empresa' element={<CadEmpresa />} />
        <Route path='/consulta-empresa' element={<ConEmpresa />} />
        <Route path='/editar-empresa/:id' element={<CadEmpresa />} />
      </Routes>
    </>
  );
}

export default App;
