import { useState } from 'react';
import styled, { css } from 'styled-components';
import Botao from "./Botao";
import logoQuadrada from '../assets/logoQuadrada.svg';

const InicioContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around; /* distribui em colunas */
    padding: 160px 60px 160px 0; /* vertical e horizontal */
    background-color: #F5FAFC;
    box-shadow: 0 1px 5px rgba(10, 82, 138, 0.45);
    position: relative;
    z-index: 20;
`;

const ConteudoEsquerdo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 795px;
`;

const ConteudoDireita = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Titulo = styled.h1`
    font-size: 64px;
    font-weight: 800;
    color: #030214;
    margin: 0;
    line-height: 1.2;

    strong {
        font-weight: 900; /* Deixa "NEXO" ainda mais destacado */
    }
`;

const Subtitulo = styled.p`
    font-size: 52px;
    font-weight: 500;
    color: #030214;
    margin: 0;
    margin-bottom: 20px;
`;

const FormContainer = styled.form`
    display: flex;
    gap: 30px;
    margin-top: 20px;
`;

const InputEmail = styled.input`
    background-color: #F5FAFC;
    padding: 8px 20px;
    font-size: 22px;
    font-weight: 500;
    color: #0A528A;
    border: 2px solid #0A528ACC;
    border-radius: 50px;
    width: 620px;
    height: 40px;
    outline: none;
    font-family: inherit;

    &::placeholder {
        color: #0A528ACC;
    }

    &:focus {
        order-color: #5B82E9; 
        box-shadow: 0 0 0 3px #5b82e948;
    }
`;

const LogoInicio = styled.img`
    max-width: 500px;
    height: auto;
`;

function Inicio({ onCadastrarClick }) {

    const [email, setEmail] = useState('');

    const handleSubmit = (evento) => {
        evento.preventDefault();
        onCadastrarClick(email);
    }

    return (
        <InicioContainer id='inicio'>
            <ConteudoEsquerdo>
                <Titulo>
                    Crie projetos incríveis com o <strong>NEXO</strong>
                </Titulo>
                <Subtitulo>Conecte-se, colabore, conquiste.</Subtitulo>
                <FormContainer onSubmit={handleSubmit}>
                    <InputEmail
                        type='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Botao variant="CadastrarSecaoInicio" type='submit'>Cadastrar</Botao>
                </FormContainer>
            </ConteudoEsquerdo>
            <ConteudoDireita>
                <LogoInicio src={logoQuadrada} alt='Logo Nexo' />
            </ConteudoDireita>
        </InicioContainer>
    );
}

export default Inicio;