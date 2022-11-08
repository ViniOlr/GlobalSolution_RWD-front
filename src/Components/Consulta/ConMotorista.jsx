import React from 'react';
import { Link } from 'react-router-dom';
import { Consulta, H2Titulo, TableResponsive } from '../../Styled/styled';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs'

function ConMotorista() {
  return (
    <Consulta>
        <H2Titulo>Consulta de Motorista</H2Titulo>
        <TableResponsive>
            <table className='responsive'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>RG</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Data de Nascimento</th>
                        <th>Num. da Habilitação</th>
                        <th>Cat. da Habilitação</th>
                        <th>Data de expedição</th>
                        <th colSpan='2' className='acoes'>Ações</th>
                        <th>a</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>45</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>326893458168</td>
                        <td>AB</td>
                        <td>24/06/2022</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>326893458168</td>
                        <td>AB</td>
                        <td>24/06/2022</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>326893458168</td>
                        <td>AB</td>
                        <td>24/06/2022</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>326893458168</td>
                        <td>AB</td>
                        <td>24/06/2022</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>326893458168</td>
                        <td>AB</td>
                        <td>24/06/2022</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>326893458168</td>
                        <td>AB</td>
                        <td>24/06/2022</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                </tbody>
            </table>
        </TableResponsive>
    </Consulta>
  );
}

export default ConMotorista;