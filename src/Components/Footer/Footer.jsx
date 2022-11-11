import React from 'react';
import { Container, SectionFooter } from '../../Styled/styled';

const Footer = ()=> {
  return (
    <SectionFooter>
        <Container>
            <div className="integrantes">
                <h3>Integrantes:</h3>
                <ul>
                    <li>
                        <p><b>Nome: </b><a href="https://github.com/ViniOlr" target="_blank" rel="noreferrer">Vinicius de Oliveira</a></p>
                        <p><b>RM: </b>93613</p>
                        
                    </li>
                </ul>
            </div>
            <div className="repos">
                <p><b>Link do repositório da API (Java): </b><a href="https://github.com/ViniOlr/GlobalSolution_RWD_back" target="_blank" rel="noreferrer">GlobalSolution_RWD_back</a>.</p>
                <p><b>Link do repositório do site (React): </b><a href="https://github.com/ViniOlr/GlobalSolution_RWD-front" target="_blank" rel="noreferrer">GlobalSolution_RWD-front</a>.</p>
            </div>
        </Container>
    </SectionFooter>
  );
}

export default Footer;