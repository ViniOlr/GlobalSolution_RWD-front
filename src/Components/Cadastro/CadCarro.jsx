import React from 'react';
import { Cadastro, H2Titulo } from '../../Styled/styled';
import Input from '../Forms/Input'
import Submit from '../Forms/Submit';

function CadCarro() {
  return (
    <Cadastro>
        <H2Titulo>Cadastro de Carro</H2Titulo>
        <form action="">
            <Input 
                label='Marca'
                type='text'
                name='marca'
                id='marca'
            />
            <Input 
                label='Modelo'
                type='text'
                name='modelo'
                id='modelo'
            />
            <Input 
                label='Ano'
                type='number'
                name='ano'
                id='ano'
            />
            <Input 
                label='Placa'
                type='text'
                name='placa'
                id='placa'
            />
            <Input 
                label='KM Por Litro'
                type='number'
                name='kmPorLitro'
                id='kmPorLitro'
            />
            <Submit 
                valor='Cadastrar'
            />
        </form>
    </Cadastro>
  );
}

export default CadCarro;