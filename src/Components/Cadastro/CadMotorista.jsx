import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Cadastro, H2Titulo } from '../../Styled/styled';
import Input from '../Forms/Input'
import Submit from '../Forms/Submit';

function CadMotorista() {

    let {id} = useParams()

    const [novo, setNovo] = useState({
        id:id,
        nome: "",
        email: "",
        dataNascimento: "",
        telefone: "",
        categoriaHabilitacao: "",
        dataExpedicao: "",
        numeroHabilitacao: "",
        cpf: "",
        rg: ""
    })

    let metodo = "post"

    if (id) {
        metodo = "put"
    }

    const handleChange = e =>{
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()

        fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/motorista/${id ? id : ""}`,{
            method:metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(novo)
        }).then(()=>{
            window.location = '/consulta-motorista'
        })
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/motorista/${id}`)
            .then((resp)=>{
                return(resp.json())
            }).then((data)=>{
                setNovo(data)
            })
        }
    }, [id])

  return (
    <Cadastro>
        <H2Titulo>Cadastro de Motorista</H2Titulo>
        <form onSubmit={handleSubmit}>
            <Input 
                label='Nome'
                type='text'
                name='nome'
                id='nome'
                value={novo.nome}
                handleChange={handleChange}
            />
            <Input 
                label='RG'
                type='text'
                name='rg'
                id='rg'
                value={novo.rg}
                handleChange={handleChange}
            />
            <Input 
                label='CPF'
                type='text'
                name='cpf'
                id='cpf'
                value={novo.cpf}
                handleChange={handleChange}
            />
            <Input 
                label='Telefone'
                type='text'
                name='telefone'
                id='telefone'
                value={novo.telefone}
                handleChange={handleChange}
            />
            <Input 
                label='Email'
                type='text'
                name='email'
                id='email'
                value={novo.email}
                handleChange={handleChange}
            />
            <Input 
                label='Data de Nascimento'
                type='text'
                name='dataNascimento'
                id='dataNascimento'
                value={novo.dataNascimento}
                handleChange={handleChange}
            />
            <Input 
                label='Número Da Habilitação'
                type='text'
                name='numeroHabilitacao'
                id='numeroHabilitacao'
                value={novo.numeroHabilitacao}
                handleChange={handleChange}
            />
            <Input 
                label='Categoria Da Habilitação'
                type='text'
                name='categoriaHabilitacao'
                id='categoriaHabilitacao'
                value={novo.categoriaHabilitacao}
                handleChange={handleChange}
            />
            <Input 
                label='Data de Expedição'
                type='text'
                name='dataExpedicao'
                id='dataExpedicao'
                value={novo.dataExpedicao}
                handleChange={handleChange}
            />
            <Submit 
                valor={id ? 'Editar' : 'Cadastrar'}
            />
            <Link to='/consulta-usuario'>Cancelar</Link>
        </form>
    </Cadastro>
  );
}

export default CadMotorista;