import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { RegisterContainer, Content, SectionContent, Form, Logo } from './styles';

import api from '../../services/api';

export default function Register(){

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {name, email, whatsapp, city, uf};

        try{
            const response = await api.post('/ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
            
        }catch(error){
            alert('Erro no cadastro')
        }
        
    }

    return(
      <RegisterContainer>
            <Content>
                <SectionContent>
                    <Logo src={logo} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                    <Link to="/"><FiArrowLeft size={16} color="#e02041"/> Voltar para o logon</Link>
                </SectionContent>
                <Form onSubmit={handleRegister}>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome da ONG"/>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail"/>
                    <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="WhatsApp"/>
                    <div> 
                        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade"/>
                        <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" maxLength="2" style={{width: 80}}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </Form>
            </Content>
      </RegisterContainer>
    );
}