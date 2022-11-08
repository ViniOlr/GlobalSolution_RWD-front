import React from 'react';
import { Cadastro, H2Titulo } from '../../Styled/styled';
import Input from '../Forms/Input'
import Submit from '../Forms/Submit';

function CadUsuario() {
  return (
    <Cadastro>
        <H2Titulo>Cadastro de Usuario</H2Titulo>
        <form action="">
            <Input 
                label='Nome'
                type='text'
                name='nome'
                id='nome'
            />
            <Input 
                label='RG'
                type='number'
                name='rg'
                id='rg'
            />
            <Input 
                label='CPF'
                type='number'
                name='cpf'
                id='cpf'
            />
            <Input 
                label='Telefone'
                type='text'
                name='telefone'
                id='telefone'
            />
            <Input 
                label='Email'
                type='text'
                name='email'
                id='email'
            />
            <Input 
                label='Data de Nascimento'
                type='date'
                name='dataNascimento'
                id='dataNascimento'
            />
            <Input 
                label='Setor'
                type='text'
                name='setor'
                id='setor'
            />
            <Input 
                label='Login'
                type='text'
                name='login'
                id='login'
            />
            <Input 
                label='Senha'
                type='text'
                name='senha'
                id='senha'
            />
            <Submit 
                valor='Cadastrar'
            />
        </form>
    </Cadastro>
  );
}

export default CadUsuario;