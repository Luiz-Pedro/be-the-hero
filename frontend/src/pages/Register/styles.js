import styled from 'styled-components';

export const RegisterContainer = styled.div`
    width:100%;
    max-width:80%;
    height: 100vh;
    margin: 0 auto;
    display: flex;   
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width:100%;
    padding: 6em;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SectionContent = styled.section`

    width: 100%;
    max-width: 380px;
    h1{
        margin: 2.5em 0 1em;
        font-size: 2em;
    }
    p{
        font-size: 1.2em;
        color: #737380;
        line-height: 2em;
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
    
`;

export const Form = styled.form`
    width: 100%;
    max-width: 450px;
    input{
        margin-top: 1em;
    }
    div{
        display: flex;

        input + input{
            margin-left: 8px;
        }
    }
`;

export const Logo = styled.img`
    
`;