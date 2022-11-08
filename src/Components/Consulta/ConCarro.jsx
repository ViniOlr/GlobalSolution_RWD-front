import React from 'react';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Consulta, H2Titulo, TableResponsive } from '../../Styled/styled';

function ConCarro() {
  return (
    <Consulta>
        <H2Titulo>Consulta de Carro</H2Titulo>
        <TableResponsive>
            <table className='responsive'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Marca</th>                        
                        <th>Modelo</th>                        
                        <th>Ano</th>                        
                        <th>Placa</th>                        
                        <th>KM por litro</th>                        
                        <th colSpan='2' className='acoes'>Ações</th>
                        <th>a</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>95</td>
                        <td>Chevrolet</td>
                        <td>Tracker</td>
                        <td>2021</td>
                        <td>FGH1234</td>
                        <td>11 km/l</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>95</td>
                        <td>Chevrolet</td>
                        <td>Tracker</td>
                        <td>2021</td>
                        <td>FGH1234</td>
                        <td>11 km/l</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>95</td>
                        <td>Chevrolet</td>
                        <td>Tracker</td>
                        <td>2021</td>
                        <td>FGH1234</td>
                        <td>11 km/l</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>95</td>
                        <td>Chevrolet</td>
                        <td>Tracker</td>
                        <td>2021</td>
                        <td>FGH1234</td>
                        <td>11 km/l</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>95</td>
                        <td>Chevrolet</td>
                        <td>Tracker</td>
                        <td>2021</td>
                        <td>FGH1234</td>
                        <td>11 km/l</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>95</td>
                        <td>Chevrolet</td>
                        <td>Tracker</td>
                        <td>2021</td>
                        <td>FGH1234</td>
                        <td>11 km/l</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td>95</td>
                        <td>Chevrolet</td>
                        <td>Tracker</td>
                        <td>2021</td>
                        <td>FGH1234</td>
                        <td>11 km/l</td>
                        <td className='excluir'><BsTrashFill /></td>
                        <td><Link to=''><BsPencilFill /></Link></td>
                    </tr>
                </tbody>
            </table>
        </TableResponsive>
    </Consulta>
  );
}

export default ConCarro;