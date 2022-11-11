import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Consulta, H2Titulo, TableResponsive } from '../../Styled/styled';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs'

function ConMotorista() {

    const [motorista, setMotorista] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/GlobalSolution_RWD_back/rest/motorista").then((resp)=>{
            return resp.json()
        }).then((resp) => {
            setMotorista(resp)
            // console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const handleDelete = (id)=>{
        fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/motorista/${id}`, {
            method:"delete"
        }).then(()=>{
            window.location = "/consulta-motorista"
        }).catch((error)=>{
            console.log(error)
        })
    }

    const verificar = sessionStorage.getItem("usuario-validado")

    useEffect(()=>{
        if (verificar == null) {
            window.location = '/'
        }
    })

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
                    {motorista.map((motorista)=>(
                        <tr key={motorista.id}>
                            <td>{motorista.id}</td>
                            <td>{motorista.nome}</td>
                            <td>{motorista.rg}</td>
                            <td>{motorista.cpf}</td>
                            <td>{motorista.telefone}</td>
                            <td>{motorista.email}</td>
                            <td>{motorista.dataNascimento}</td>
                            <td>{motorista.numeroHabilitacao}</td>
                            <td>{motorista.categoriaHabilitacao}</td>
                            <td>{motorista.dataExpedicao}</td>
                            <td className='excluir'><button onClick={handleDelete.bind(this, motorista.id)}><BsTrashFill /></button></td>
                            <td><Link to={`/editar-motorista/${motorista.id}`}><BsPencilFill /></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableResponsive>
    </Consulta>
  );
}

export default ConMotorista;