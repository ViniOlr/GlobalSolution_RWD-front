import React from 'react';
import { Link } from 'react-router-dom';
import { Consulta, H2Titulo, TableResponsive } from '../../Styled/styled';
import Input from '../Forms/Input';

function ConUsuario() {
  return (
    <Consulta>
        <H2Titulo>Consulta de Usuário</H2Titulo>
        <TableResponsive>
            <table className='responsive'>
                <thead>
                    <tr>
                        <th>RM</th>
                        <th>Nome</th>
                        <th>RG</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Data de Nascimento</th>
                        <th>Setor</th>
                        <th>Login</th>
                        <th>Senha</th>
                        <th colSpan='2' className='acoes'>Ações</th>
                        <th>a</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>93613</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>Administrativo</td>
                        <td>ViniOlr</td>
                        <td>123</td>
                        <td className='excluir'>Excluir</td>
                        <td><Link to=''>Editar</Link></td>
                    </tr>
                    <tr>
                        <td>93613</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>Administrativo</td>
                        <td>ViniOlr</td>
                        <td>123</td>
                        <td className='excluir'>Excluir</td>
                        <td><Link to=''>Editar</Link></td>
                    </tr>
                    <tr>
                        <td>93613</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>Administrativo</td>
                        <td>ViniOlr</td>
                        <td>123</td>
                        <td className='excluir'>Excluir</td>
                        <td><Link to=''>Editar</Link></td>
                    </tr>
                    <tr>
                        <td>93613</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>Administrativo</td>
                        <td>ViniOlr</td>
                        <td>123</td>
                        <td className='excluir'>Excluir</td>
                        <td><Link to=''>Editar</Link></td>
                    </tr>
                    <tr>
                        <td>93613</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>Administrativo</td>
                        <td>ViniOlr</td>
                        <td>123</td>
                        <td className='excluir'>Excluir</td>
                        <td><Link to=''>Editar</Link></td>
                    </tr>
                    <tr>
                        <td>93613</td>
                        <td>Vinicius de Oliveira</td>
                        <td>12345678901234</td>
                        <td>526761451847</td>
                        <td>(11) 96630-9946</td>
                        <td>vini@gmail.com</td>
                        <td>15/05/2003</td>
                        <td>Administrativo</td>
                        <td>ViniOlr</td>
                        <td>123</td>
                        <td className='excluir'>Excluir</td>
                        <td><Link to=''>Editar</Link></td>
                    </tr>
                </tbody>
            </table>
        </TableResponsive>
    </Consulta>
  );
}

export default ConUsuario;