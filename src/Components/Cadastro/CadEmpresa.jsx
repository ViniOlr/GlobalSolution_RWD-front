import React from 'react';
import { Cadastro, H2Titulo } from '../../Styled/styled';
import Input from '../Forms/Input'
import Submit from '../Forms/Submit';

function CadEmpresa() {
  return (
    <Cadastro>
        <H2Titulo>Cadastro de Empresa</H2Titulo>
        <form action="">
            <Input 
                label='Nome Da Empresa'
                type='text'
                name='nomeDaEmpresa'
                id='nomeDaEmpresa'
            />
            <Input 
                label='CNPJ'
                type='number'
                name='cnpj'
                id='cnpj'
            />
            <Input 
                label='Quantidade De Funcionarios'
                type='number'
                name='quantidadeDeFuncionarios'
                id='quantidadeDeFuncionarios'
            />
            <Input 
                label='Endereço'
                type='text'
                name='endereco'
                id='endereco'
            />
            <Input 
                label='Telefone'
                type='text'
                name='telefone'
                id='telefone'
            />
            <Submit 
                valor='Cadastrar'
            />
        </form>
    </Cadastro>
  );
}

export default CadEmpresa;