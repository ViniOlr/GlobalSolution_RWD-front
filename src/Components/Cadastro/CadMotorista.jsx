import React from 'react';
import { Cadastro, H2Titulo } from '../../Styled/styled';
import Input from '../Forms/Input'
import Submit from '../Forms/Submit';

function CadMotorista() {
  return (
    <Cadastro>
        <H2Titulo>Cadastro de Motorista</H2Titulo>
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
                label='Número Da Habilitação'
                type='number'
                name='numeroDaHabilitacao'
                id='numeroDaHabilitacao'
            />
            <Input 
                label='Categoria Da Habilitação'
                type='text'
                name='categoriaDaHabilitacao'
                id='categoriaDaHabilitacao'
            />
            <Input 
                label='Data de Expedição'
                type='date'
                name='dataExpedicao'
                id='dataExpedicao'
            />
            <Submit 
                valor='Cadastrar'
            />
        </form>
    </Cadastro>
  );
}

export default CadMotorista;