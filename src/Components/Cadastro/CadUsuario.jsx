import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Cadastro, H2Titulo } from '../../Styled/styled';
import Input from '../Forms/Input'
import Submit from '../Forms/Submit';

function CadUsuario() {

    let {id} = useParams()

    const [novo, setNovo] = useState({
        rm:id,
        nome: "",
        email: "",
        dataNascimento: "",
        telefone: "",
        setor: "",
        login: "",
        senha: "",
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

        fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/usuario/${id ? id : ""}`,{
            method:metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(novo)
        }).then(()=>{
            window.location = '/consulta-usuario'
        })
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/usuario/${id}`)
            .then((resp)=>{
                return(resp.json())
            }).then((data)=>{
                setNovo(data)
            })
        }
    }, [id])

    const verificar = sessionStorage.getItem("usuario-validado")

    useEffect(()=>{
        if (verificar == null) {
            window.location = '/'
        }
    })

  return (
    <Cadastro>
        <H2Titulo>Cadastro de Usuario</H2Titulo>
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
                label='Setor'
                type='text'
                name='setor'
                id='setor'
                value={novo.setor}
                handleChange={handleChange}
            />
            <Input 
                label='Login'
                type='text'
                name='login'
                id='login'
                value={novo.login}
                handleChange={handleChange}
            />
            <Input 
                label='Senha'
                type='text'
                name='senha'
                id='senha'
                value={novo.senha}
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

export default CadUsuario;