import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { NewIncidentContainer, Content, SectionContent, Form, Logo } from './styles';

import api from '../../services/api';

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongID = localStorage.getItem('ongID');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {title, description, value};

        try {
            await api.post('/incidents', data, {
                headers:{
                    Authorization: ongID,
                }
            })
            history.push('/profile');
        } catch (error) {
            alert('Erro ao criar caso');
        }
    }
    
    return(
    <NewIncidentContainer>
           <Content>
                <SectionContent>
                    <Logo src={logo} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolvê-lo.</p>
                    <Link to="/profile"><FiArrowLeft size={16} color="#e02041"/> Voltar para home</Link>
                </SectionContent>
                <Form onSubmit={handleNewIncident}>
                    <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título do caso"/>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição"/>
                    <input value={value} onChange={e => setValue(e.target.value)} placeholder="Valor em Reais"/>
                    <button className="button" type="submit">Cadastrar</button>
                </Form>
            </Content>
      </NewIncidentContainer> 
    );
}