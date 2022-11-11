import React, { useEffect, useState } from 'react';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Consulta, H2Titulo, TableResponsive } from '../../Styled/styled';

function ConEmpresa() {

    const [empresas, setEmpresas] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/GlobalSolution_RWD_back/rest/empresa")
            .then((resp)=>{
                return resp.json()
            })
            .then((resp)=>{
                setEmpresas(resp)
                console.log(resp)
            }).catch((error)=>{
                console.lof(error)
            })
    }, [])

    const handleDelete = (id)=>{
        fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/empresa/${id}`, {
            method:"delete"
        }).then(()=>{
            window.location = "/consulta-empresa"
        }).catch((error)=>{
            console.log(error)
        })
    }

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
                        {empresas.map((empresa)=>(
                            <tr key={empresa.id}>
                                <td>{empresa.id}</td>
                                <td>{empresa.cnpj}</td>
                                <td>{empresa.nome}</td>
                                <td>{empresa.quantidadeFuncionarios}</td>
                                <td>{empresa.endereco}</td>
                                <td>{empresa.telefone}</td>
                                <td className='excluir'><button onClick={handleDelete.bind(this, empresa.id)}><BsTrashFill /></button></td>
                                <td><Link to={`/editar-empresa/${empresa.id}`}><BsPencilFill /></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableResponsive>
        </Consulta>
    );
}

export default ConEmpresa;