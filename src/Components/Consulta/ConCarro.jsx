import React, { useEffect, useState } from 'react';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Consulta, H2Titulo, TableResponsive } from '../../Styled/styled';

function ConCarro() {

    const [carros, setCarros] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/GlobalSolution_RWD_back/rest/carro")
            .then((resp)=>{
                return resp.json()
            })
            .then((resp)=>{
                setCarros(resp)
                console.log(resp)
            }).catch((error)=>{
                console.lof(error)
            })
    }, [])

    const handleDelete = (id)=>{
        fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/carro/${id}`, {
            method:"delete"
        }).then(()=>{
            window.location = "/consulta-carro"
        }).catch((error)=>{
            console.log(error)
        })
    }

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
                    {carros.map((carro)=>(
                        <tr>
                            <td>{carro.id}</td>
                            <td>{carro.marca}</td>
                            <td>{carro.modelo}</td>
                            <td>{carro.ano}</td>
                            <td>{carro.placa}</td>
                            <td>{carro.kmPorLitro} km/l</td>
                            <td className='excluir'><button onClick={handleDelete.bind(this, carro.id)}><BsTrashFill /></button></td>
                            <td><Link to={`/editar-carro/${carro.id}`}><BsPencilFill /></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableResponsive>
    </Consulta>
  );
}

export default ConCarro;