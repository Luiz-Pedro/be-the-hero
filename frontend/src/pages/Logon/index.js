import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { LogonContainer, Form, Logo, Imagem } from './styles';

export default function Logon(){
 
    return(
       <LogonContainer>
           <Form>
                <Logo src={logo} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register"><FiLogIn size={16} color="#e02041"/> Não tenho cadastro</Link>
                </form>
           </Form>
           <Imagem src={heroesImg} alt="Heroes"/>
       </LogonContainer>
    );
}