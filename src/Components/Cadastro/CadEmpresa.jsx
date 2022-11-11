import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Cadastro, H2Titulo } from '../../Styled/styled';
import Input from '../Forms/Input'
import Submit from '../Forms/Submit';

function CadEmpresa() {

    let {id} = useParams()

    const [novo, setNovo] = useState({
        id: id,
        nome: "",
        endereco: "",
        telefone: "",
        cnpj: "",
        quantidadeFuncionarios: ""
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

        fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/empresa/${id ? id : ""}`,{
            method:metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(novo)
        }).then(()=>{
            window.location = '/consulta-empresa'
        })
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/empresa/${id}`)
            .then((resp)=>{
                return(resp.json())
            }).then((data)=>{
                setNovo(data)
            })
        }
    }, [id])

  return (
    <Cadastro>
        <H2Titulo>Cadastro de Empresa</H2Titulo>
        <form onSubmit={handleSubmit}>
            <Input 
                label='Nome Da Empresa'
                type='text'
                name='nome'
                id='nome'
                value={novo.nome}
                handleChange={handleChange}
            />
            <Input 
                label='CNPJ'
                type='number'
                name='cnpj'
                id='cnpj'
                value={novo.cnpj}
                handleChange={handleChange}
            />
            <Input 
                label='Quantidade De Funcionarios'
                type='number'
                name='quantidadeFuncionarios'
                id='quantidadeFuncionarios'
                value={novo.quantidadeFuncionarios}
                handleChange={handleChange}
            />
            <Input 
                label='Endereço'
                type='text'
                name='endereco'
                id='endereco'
                value={novo.endereco}
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
            <Submit 
                valor={id ? 'Editar' : 'Cadastrar'}
            />
            <Link to='/consulta-empresa'>Cancelar</Link>
        </form>
    </Cadastro>
  );
}

export default CadEmpresa;