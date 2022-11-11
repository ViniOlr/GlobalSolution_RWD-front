import React, { useState } from 'react';
import { Container, SectionLogin } from '../../Styled/styled';
import Input from '../Forms/Input';
import Submit from '../Forms/Submit';

const Login = ()=> {

    const [usuario, setUsuario] = useState({
        rm:"",
        nome: "",
        email: "",
        dataNascimento: "",
        telefone: "",
        setor: "",
        login: "",
        senha: "",
        cpf: "",
        rg: ""
    })

    const handleChange = (e)=>{
        setUsuario({...usuario, [e.target.name]:e.target.value})
    };

    const logar = async(e)=>{
        e.preventDefault();

        const requestOptions = {
            method : "post",
            headers : { "Content-Type" : "application/json"},
            body: JSON.stringify(usuario)
        };

        const response = await fetch(
            "http://localhost:8080/GlobalSolution_RWD_back/rest/login",
           requestOptions
        );

        const data = await response.json();

        console.log(data)

        if(data.login) {
            sessionStorage.setItem("usuario-validado", data.nome)
        }

        if (data) {
            window.location = '/consulta-usuario'
            alert(`Seja bem vindo ${data.nome}`)
        }else {
            window.location = '/'
        }
    }

  return (
    <SectionLogin>
        <Container>
            <form onSubmit={logar}>
                <h2>Saving Employees</h2>
                <Input 
                    label='Login'
                    type='text'
                    name='login'
                    id='login'
                    handleChange={handleChange}
                />
                <Input 
                    label='Senha'
                    type='password'
                    name='senha'
                    id='senha'
                    handleChange={handleChange}
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