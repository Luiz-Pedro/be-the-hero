import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { ProfileContainer, Logo, ProfileHeader, CasosUl } from './styles';
import { FiPower, FiTrash2 } from 'react-icons/fi'


export default function Profile(){

    return(
        <ProfileContainer>
            <ProfileHeader>
                <Logo src={logo} alt="Be The Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </ProfileHeader>

            <h1>Casos cadastrados</h1>

            <CasosUl>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button type="button"> 
                        <FiTrash2 size={20} />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button type="button"> 
                        <FiTrash2 size={20}/>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button type="button"> 
                        <FiTrash2 size={20}/>
                    </button>
                </li>
            </CasosUl>
        </ProfileContainer>
    );
}