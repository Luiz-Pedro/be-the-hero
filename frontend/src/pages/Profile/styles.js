import styled from 'styled-components';


export const ProfileContainer = styled.div`
    width:100%;
    max-width:80%;
    margin: 4em auto;

    h1{
        margin-top: 4em;
        margin-bottom: 1em;
    }
`;

export const ProfileHeader = styled.header`
    display: flex;
    align-items: center;
    span{
        font-size: 1.3em;
        margin-left: 2em;
        font-weight: 500;
    }
    a{
        width: 15em;
        margin-left: auto;
        margin-top: 0;
    }
    button{
        height: 60px;
        width: 60px;
        border-radius: 8px;
        border: 1px solid #dcdce6;
        background: transparent;
        margin-left: 1em;
        transition: border-color 0.2s;
        &:hover{
            border-color: #999
        }
    }
`;

export const Logo = styled.img`
    height: 6em;
    width: auto;
`;

export const CasosUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
    list-style: none;
    
    
    li{
        background: #fff;
        padding: 2em;
        border-radius: 8px;
        position: relative;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
        transition: 0.3s;
        &:hover{
            transform: scale(1.03);
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
        }

        strong{
            display: block;
            margin-bottom: 1em;
            color: #41414d;
        }

        p + strong{
            margin-top: 2.1em;
        }

        p{
            color: #737380;
            line-height: 21px;
            font-size: 1.1em;
        }

        button{
            position: absolute;
            right: 1.7em;
            top: 1.4em;
            border: 0;
            background: transparent;
            color: #a8a8b3;
            &:hover{
                color: #e02041;
            }
        }
    }
`;