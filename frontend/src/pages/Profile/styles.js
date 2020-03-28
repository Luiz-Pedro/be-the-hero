import styled from 'styled-components';


export const ProfileContainer = styled.div`
    width:100%;
    max-width:80%;
    padding: 0 30px;
    margin: 32px auto;

    h1{
        margin-top: 80px;
        margin-bottom: 24px;
    }
`;

export const ProfileHeader = styled.header`
    display: flex;
    align-items: center;
    span{
        font-size: 20px;
        margin-left: 24px;
    }
    a{
        width: 260px;
        margin-left: auto;
        margin-top: 0;
    }
    button{
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        background: transparent;
        margin-left: 16px;
        transition: border-color 0.2s;
        &:hover{
            border-color: #999
        }
    }
`;

export const Logo = styled.img`
    height: 64px;
`;

export const CasosUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
    list-style: none;
    
    
    li{
        background: #fff;
        padding: 24px;
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
            margin-bottom: 16px;
            color: #41414d;
        }

        p + strong{
            margin-top: 32px;
        }

        p{
            color: #737380;
            line-height: 21px;
            font-size: 16px;
        }

        button{
            position: absolute;
            right: 24px;
            top: 24px;
            border: 0;
            background: transparent;
            color: #a8a8b3;
            &:hover{
                color: #e02041;
            }
        }
    }
`;