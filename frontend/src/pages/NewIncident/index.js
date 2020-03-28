import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { NewIncidentContainer, Content, SectionContent, Form, Logo } from './styles';

export default function NewIncident(){
    
    return(
    <NewIncidentContainer>
           <Content>
                <SectionContent>
                    <Logo src={logo} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolvê-lo.</p>
                    <Link to="/profile"><FiArrowLeft size={16} color="#e02041"/> Voltar para home</Link>
                </SectionContent>
                <Form>
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em Reais"/>
                    <button className="button" type="submit">Cadastrar</button>
                </Form>
            </Content>
      </NewIncidentContainer> 
    );
}