import React, { useState } from 'react'; 
import axios from 'axios'

import './style.css'


export default function List(){

    const [cep, setCep] = useState({cep: ''})
    const [info, setInfo] = useState({
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        gia: ''
    })

    const getInformacoes = () =>{
        axios.get('http://viacep.com.br/ws/' + cep + '/json/')
            .then(response =>{
                setInfo(response.data)
            })
            .catch(err =>{
                setInfo(err)
            })
    }

    const handlingCep = (e) => {
        setCep(e.target.value)
    }

    return( 
        <div className ='Container'>

        
        <h1>Consultar Cep</h1>
        <input type="text" onChange = {(e) =>{handlingCep(e)} } placeholder = 'Digite o Cep'/>
        <button onClick = {getInformacoes}>Pesquisar</button>

        <ul>
            <li>Cep: {info['cep']} </li>
            <li>Logradouro: {info['logradouro']}</li>
            <li>Complemento: {info['complemento']}</li>
            <li>Bairro: {info['bairro']}</li>
            <li>Localidade: {info['localidade']}</li>
            <li>UF: {info['uf']}</li>
            <li>IBGE: {info['ibge']}</li>
            <li>GIA: {info['gia']}</li>
        </ul>
        </div>
    )

}