import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { LogonContainer, Form, Logo, Imagem } from './styles';

import api from '../../services/api';

export default function Logon(){
 
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('/sessions', { id });

            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        }catch(error){
            alert('Id não cadastrado');
            setId('');
        }

    }

    return(
       <LogonContainer>
           <Form>
                <Logo src={logo} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input value={id} onChange={e => setId(e.target.value)} placeholder="Sua ID" maxLength="8"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register"><FiLogIn size={16} color="#e02041"/> Não tenho cadastro</Link>
                </form>
           </Form>
           <Imagem src={heroesImg} alt="Heroes"/>
       </LogonContainer>
    );
}