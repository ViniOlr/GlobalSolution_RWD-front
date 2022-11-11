import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SectionHeader } from '../../Styled/styled';

const Header = ()=> {

    const logout = ()=>{
        sessionStorage.removeItem("usuario-validado")
        window.location = '/'
    }
    
    const login = (()=>{
        window.location = '/login'
    })

    const usuario = sessionStorage.getItem("usuario-validado")

  return (
    <SectionHeader>
        <Container>
            <div className="logo">
                <Link to='/'>
                    <h1>Saving Employees</h1>
                </Link>
            </div>
            <div className="menuDesktop">
                <nav>
                    <ul className='menu'>
                        <li>
                            Cadastrar
                            <ul className="dropBox">
                                <li><Link to='/cadastro-usuario'>Usuário</Link></li>
                                <li><Link to='/cadastro-motorista'>Motorista</Link></li>
                                <li><Link to='/cadastro-carro'>Carro</Link></li>
                                <li><Link to='/cadastro-empresa'>Empresa</Link></li>
                            </ul>
                        </li>
                        <li>
                            Consultar
                            <ul className="dropBox">
                                <li><Link to='/consulta-usuario'>Usuário</Link></li>
                                <li><Link to='/consulta-motorista'>Motorista</Link></li>
                                <li><Link to='/consulta-carro'>Carro</Link></li>
                                <li><Link to='/consulta-empresa'>Empresa</Link></li>
                            </ul>
                        </li>
                        <li><button onClick={usuario ? logout : login}>{usuario ? 'Logout' : 'Logar'}</button></li>
                    </ul>
                </nav>
            </div>
        </Container>
    </SectionHeader>
  );
}

export default Header;