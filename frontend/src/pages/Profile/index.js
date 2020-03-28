import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { ProfileContainer, Logo, ProfileHeader, CasosUl } from './styles';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';


export default function Profile(){

    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem('ongName');
    const ongID = localStorage.getItem('ongID');

    const history = useHistory();

    useEffect(() => {
        api.get('/profile', {
            headers:{
                Authorization: ongID,          
            } 
        }).then(response => {
            setIncidents(response.data);
        })

    }, [ongID]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongID,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id))

        } catch (error) {
            alert('Erro ao deletar caso')
        }
    }  
    
    function handleLogout(){
        localStorage.removeItem('ongID');
        localStorage.removeItem('ongName');
        history.push('/');
    }

    return(
        <ProfileContainer>
            <ProfileHeader>
                <Logo src={logo} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </ProfileHeader>

            <h1>Casos cadastrados</h1>

            <CasosUl>
                {incidents.map(incident => (
                <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-br', {style:'currency', currency: 'BRL'}).format(incident.value)}</p>
                    <button onClick={() => handleDeleteIncident(incident.id)} type="button"> 
                        <FiTrash2 size={20} />
                    </button>
                </li>
                ))}
            </CasosUl>
        </ProfileContainer>
    );
}