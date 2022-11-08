import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SectionHeader } from '../../Styled/styled';

const Header = ()=> {

  return (
    <SectionHeader>
        <Container>
            <div className="logo">
                <Link to='/'><h1>Saving Employees</h1></Link>
            </div>
            <div className="menuDesktop">
                <nav>
                    <ul className='menu'>
                        <li>
                            Cadastrar
                            <ul className="dropBox">
                                <li><a href="">Usuario</a></li>
                                <li><a href="">Motorista</a></li>
                                <li><a href="">Carro</a></li>
                                <li><a href="">Empresa</a></li>
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
                        <li><Link to='/login'><button>Login</button></Link></li>
                    </ul>
                </nav>
            </div>
        </Container>
    </SectionHeader>
  );
}

export default Header;