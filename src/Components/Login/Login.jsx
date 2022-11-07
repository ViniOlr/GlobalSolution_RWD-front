import React from 'react';
import { Container, SectionLogin } from '../../Styled/styled';
import Input from '../Forms/Input';
import Submit from '../Forms/Submit';

const Login = ()=> {
  return (
    <SectionLogin>
        <Container>
            <form action="">
                <h2>Saving Employees</h2>
                <Input 
                    label='Login'
                    type='text'
                    name='login'
                    id='login'
                />
                <Input 
                    label='Senha'
                    type='password'
                    name='senha'
                    id='senha'
                />
                <Submit
                    valor='Logar'
                />
            </form>
        </Container>
    </SectionLogin>
  );
}

export default Login;