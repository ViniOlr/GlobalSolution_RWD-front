import React, { useEffect, useState } from 'react';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Consulta, H2Titulo, TableResponsive } from '../../Styled/styled';

function ConUsuario() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/GlobalSolution_RWD_back/rest/usuario").then((resp)=>{
            return resp.json()
        }).then((resp) => {
            setUsuarios(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const handleDelete = (id)=>{
        fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/usuario/${id}`, {
            method:"delete"
        }).then(()=>{
            window.location = "/consulta-usuario"
        }).catch((error)=>{
            console.log(error)
        })
    }

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
                    {usuarios.map((usuario)=>(
                        <tr key={usuario.rm}>
                            <td>{usuario.rm}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.rg}</td>
                            <td>{usuario.cpf}7</td>
                            <td>{usuario.telefone}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.dataNascimento}</td>
                            <td>{usuario.setor}</td>
                            <td>{usuario.login}</td>
                            <td>{usuario.senha}</td>
                            <td className='excluir'><button onClick={handleDelete.bind(this, usuario.rm)}><BsTrashFill /></button></td>
                            <td><Link to={`/editar-usuario/${usuario.rm}`}><BsPencilFill /></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableResponsive>
    </Consulta>
  );
}

export default ConUsuario;