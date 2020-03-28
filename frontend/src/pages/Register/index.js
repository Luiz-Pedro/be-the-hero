import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { RegisterContainer, Content, SectionContent, Form, Logo } from './styles';

export default function Register(){
 
    return(
      <RegisterContainer>
            <Content>
                <SectionContent>
                    <Logo src={logo} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                    <Link to="/"><FiArrowLeft size={16} color="#e02041"/> Voltar para o logon</Link>
                </SectionContent>
                <Form>
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="WhatsApp"/>
                    <div>
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{width: 80}}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </Form>
            </Content>
      </RegisterContainer>
    );
}