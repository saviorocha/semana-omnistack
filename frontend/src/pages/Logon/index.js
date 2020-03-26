import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';//usado para evitar que o react recarregue a pagina inteira toda vez 

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('session', { id });
            console.log(response.data.name);

            localStorage.setItem('ongId', id); //salvando no storage do navegador pra ser usado em profile
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login tente novamente.');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be the hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link to="/register" className="back-link"> 
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link> 
                </form>
            </section>
            <img src={heroesImg} alt="heroes" />
        </div>
    );
}