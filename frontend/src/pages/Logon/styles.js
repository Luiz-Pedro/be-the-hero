import styled from 'styled-components';

export const LogonContainer = styled.div`
    width:100%;
    max-width:1120px;
    height: 100vh;
    margin: 0 auto;
    display: flex;   
    align-items: center;
    justify-content: space-evenly;
`;

export const Form = styled.section`
    width:100%;
    max-width:350px;

    form{
        margin-top: 6em;

        h1{
            font-size: 2em;
            margin-bottom: 1em;
        }
        a{
            display: flex;
            align-items: center;
            margin-top: 2em;
            color: #41414d;
            font-size: 1.3em;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.2s;
            &:hover{
                opacity: 0.8;
            }

            svg{
                margin-right: 0.5em;
            }
        }
    }
`;

export const Logo = styled.img`
    
`;

export const Imagem = styled.img`
    width: auto;
    height: 60%;
`;