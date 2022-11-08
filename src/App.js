import { Route, Routes } from 'react-router';
import './App.css'
import ConCarro from './Components/Consulta/ConCarro';
import ConMotorista from './Components/Consulta/ConMotorista';
import ConUsuario from './Components/Consulta/ConUsuario';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { AjusteHeader } from './Styled/styled';

function App() {
  return (
    <>
      <Header />
      <AjusteHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/consulta-usuario' element={<ConUsuario />} />
        <Route path='/consulta-motorista' element={<ConMotorista />} />
        <Route path='/consulta-carro' element={<ConCarro />} />
      </Routes>
    </>
  );
}

export default App;
