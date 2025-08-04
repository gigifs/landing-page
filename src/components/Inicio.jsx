import styled, { css } from 'styled-components';
import Botao from "./Botao";
import logoQuadrada from '../assets/logoQuadrada.svg';
import detalhes from '../assets/detalhes.svg';

const DetalhesBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
`;

const InicioEstilizado = styled.section`
    background-color: #F5FAFC;
    background-image: url(${detalhes});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 80px 40px;
    min-height: 60vh;    
    box-shadow: 0 2px 4px #000000ff;
    position: relative;
`;

const ConteudoEsquerdo = styled.div`
    max-width: 550px;
    position: relative;
    z-index: 2;
`;

const Titulo = styled.h1`
    font-size: 44px;
    font-weight: 800;
    color: #030214;
    margin-bottom: 2px;
    line-height: 1.2;
`;

const Subtitulo = styled.p`
    font-size: 32px;
    font-weight: 500;
    color: #030214;
    margin-bottom: 60px;
    line-height: 18px;
`;

const FormCadastro = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const InputEmail = styled.input`
    padding: 0 15px 0 15px;
    font-size: 16px;
    border: 1px solid #0A528ACC;
    border-radius: 50px;
    width: 620px;
    height: 40px;
    outline: none;

    &::placeholder {
        color: #0A528A;
    }

    &:focus {
    border-color: #0A528ACC;
    box-shadow: 0 0 0 2px #0A528ACC;
    }
`;

const LogoInicio = styled.img`
    max-width: 350px;
    user-select: none;
`;

function Inicio() {
    return(
        <InicioEstilizado id="inicio">
            <DetalhesBackground src={detalhes} alt="Detalhes de fundo" />

            <ConteudoEsquerdo>
                <Titulo>Crie projetos incríveis com o NEXO</Titulo>
                <Subtitulo>Conecte-se, colabore, conquiste.</Subtitulo>
                <FormCadastro>
                    <InputEmail type='email' placeholder='E-mail...'/>
                    <Botao variant="CadastrarSecaoInicio">Cadastrar</Botao>
                </FormCadastro>
            </ConteudoEsquerdo>

            <LogoInicio src={logoQuadrada} alt='Logo Nexo'/>
        </InicioEstilizado>
    );
}

export default Inicio;