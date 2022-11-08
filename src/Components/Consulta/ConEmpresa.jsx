import React from 'react';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Consulta, H2Titulo, TableResponsive } from '../../Styled/styled';

function ConEmpresa() {
  return (
    <Consulta>
        <H2Titulo>Consulta de Empresa</H2Titulo>
        <TableResponsive>
            <table className='responsive'>
                <thead>
                    <tr>
                        <th>#</th>                        
                        <th>CNPJ</th>                        
                        <th>Nome da empresa</th>                        
                        <th>Qtd. de Funcionários</th>                        
                        <th>Endereço</th>                        
                        <th>Telefone</th>                        
                        <th colSpan='2' className='acoes'>Ações</th>
                        <th>a</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>45</td>
                        <td>52676451847</td>
                        <td>Empresa do Vinicius</td>
                        <td>145</td>
                        <td>Rua Lira Cearense, 190</td>
                        <td>(11)96630-9946</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td>52676451847</td>
                        <td>Empresa do Vinicius</td>
                        <td>145</td>
                        <td>Rua Lira Cearense, 190</td>
                        <td>(11)96630-9946</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td>52676451847</td>
                        <td>Empresa do Vinicius</td>
                        <td>145</td>
                        <td>Rua Lira Cearense, 190</td>
                        <td>(11)96630-9946</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td>52676451847</td>
                        <td>Empresa do Vinicius</td>
                        <td>145</td>
                        <td>Rua Lira Cearense, 190</td>
                        <td>(11)96630-9946</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td>52676451847</td>
                        <td>Empresa do Vinicius</td>
                        <td>145</td>
                        <td>Rua Lira Cearense, 190</td>
                        <td>(11)96630-9946</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                </tbody>
            </table>
        </TableResponsive>
    </Consulta>
  );
}

export default ConEmpresa;