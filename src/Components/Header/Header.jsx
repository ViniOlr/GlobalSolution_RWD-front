import React from 'react';
import { Container, SectionHeader } from '../../Styled/styled';

const Header = ()=> {

  return (
    <SectionHeader>
        <Container>
            <div className="logo">
                <h1>Saving Employees</h1>
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
                            Editar
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
                                <li><a href="">Usuario</a></li>
                                <li><a href="">Motorista</a></li>
                                <li><a href="">Carro</a></li>
                                <li><a href="">Empresa</a></li>
                            </ul>
                        </li>
                        <li><a href="/login"><button>Login</button></a></li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </Container>
    </SectionHeader>
  );
}

export default Header;