import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Cadastro, H2Titulo } from '../../Styled/styled';
import Input from '../Forms/Input'
import Submit from '../Forms/Submit';

function CadCarro() {

    let {id} = useParams()

    const [novo, setNovo] = useState({
        id: id,
        marca: "",
        modelo: "",
        placa: "",
        ano: "",
        kmPorLitro: ""    
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

        fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/carro/${id ? id : ""}`,{
            method:metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(novo)
        }).then(()=>{
            window.location = '/consulta-carro'
        })
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/GlobalSolution_RWD_back/rest/carro/${id}`)
            .then((resp)=>{
                return(resp.json())
            }).then((data)=>{
                setNovo(data)
            })
        }
    }, [id])

  return (
    <Cadastro>
        <H2Titulo>Cadastro de Carro</H2Titulo>
        <form onSubmit={handleSubmit}>
            <Input 
                label='Marca'
                type='text'
                name='marca'
                id='marca'
                value={novo.marca}
                handleChange={handleChange}
            />
            <Input 
                label='Modelo'
                type='text'
                name='modelo'
                id='modelo'
                value={novo.modelo}
                handleChange={handleChange}
            />
            <Input 
                label='Ano'
                type='number'
                name='ano'
                id='ano'
                value={novo.ano}
                handleChange={handleChange}
            />
            <Input 
                label='Placa'
                type='text'
                name='placa'
                id='placa'
                value={novo.placa}
                handleChange={handleChange}
            />
            <Input 
                label='KM Por Litro'
                type='number'
                name='kmPorLitro'
                id='kmPorLitro'
                value={novo.kmPorLitro}
                handleChange={handleChange}
            />
            <Submit 
                valor={id ? 'Editar' : 'Cadastrar'}
            />
            <Link to='/consulta-carro'>Cancelar</Link>
        </form>
    </Cadastro>
  );
}

export default CadCarro;