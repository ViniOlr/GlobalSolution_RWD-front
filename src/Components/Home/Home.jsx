import React from 'react';
import { Container, SectionHome } from '../../Styled/styled';


const Home = ()=> {
  return (
    <SectionHome>
        <Container>
            <div className="text">
                <h2>Seja <span>Bem-Vindo</span></h2>
                <p>Faça login em nossa plataforma para ter acesso aos nossos recursos</p>
            </div>
        </Container>
    </SectionHome>
  );
}

export default Home;