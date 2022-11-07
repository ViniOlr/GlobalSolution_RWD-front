import { Route, Routes } from 'react-router';
import './App.css'
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
      </Routes>
    </>
  );
}

export default App;
