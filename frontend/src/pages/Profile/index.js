import React, { useState, useEffect } from 'react';//usado para disparar uma função em algum momento
import logoImg from '../../assets/logo.svg'; 

import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    console.log(incidents);

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();
    //useEffect((), {}) -> primeiro parametro: qual função; segundo parametro: quando ela será executada
    useEffect(() => {
        api.get('/profile',{
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);//(no caso do array, vai ser quando ele for alterado)

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));//realizando um filtro nos ids
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear()
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>
                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (//map: retorna um iterador sobre os dados
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
    
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>
    
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}