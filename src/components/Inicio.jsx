import styled, { css } from 'styled-components';
import Botao from "./Botao";
import logoQuadrada from '../assets/logoQuadrada.svg';
import detalhes from '../assets/detalhes.svg';

const InicioEstilizado = styled.section`
    background-color: #F5FAFC;
    position: relative;
    overflow: hidden;
    width: 100%;
`;

const DetalhesBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
`;

/*NOVO CONST PRO INICIO RESPONSIVO*/
const ConteudoInicio = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 40px;
    min-height: 80vh;
    max-width: 1700px;
    margin: 0 auto;
    box-sizing: border-box;
    gap: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 40px;
        padding: 60px 20px;
    }
`;

const ConteudoEsquerdo = styled.div`
   /* max-width: 550px;
    /*position: relative;*/
    z-index: 2;
    */
    flex: 1;
    max-width: 700px;
    z-index: 1;
    /*
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
    align-items: center;
    }
    */
`;

const Titulo = styled.h1`
    font-size: 64px;
    font-weight: 800;
    color: #030214;
    margin-bottom: 2px;
    line-height: 1.2;
`;

const Subtitulo = styled.p`
    font-size: 52px;
    font-weight: 500;
    color: #030214;
    margin-bottom: 60px;
    line-height: 1; /*checar*/
`;

const FormCadastro = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const InputEmail = styled.input`
    padding: 0 15px 0 15px;
    font-size: 24px;
    border: 1px solid #0A528ACC;
    border-radius: 50px;
    width: 620px;
    height: 60px;
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
    /*max-width: 550px;
    user-select: none; *
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500;

    img {
        width: 100%
        user-select:none;
    }
`;
/*
const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 450px;
    z-index: 1;

    @media (max-width: 768px) {
        max-width: 250px;
    }
`;
*/



function Inicio() {
    return(
        <InicioEstilizado>
            <DetalhesBackground src={detalhes} alt="Detalhes de fundo" />
                
                <ConteudoInicio>
                <ConteudoEsquerdo>
                    <Titulo>Crie projetos incríveis com o NEXO</Titulo>
                    <Subtitulo>Conecte-se, colabore, conquiste.</Subtitulo>
                    <FormCadastro>
                        <InputEmail type='email' placeholder='E-mail...'/>
                        <Botao variant="CadastrarSecaoInicio">Cadastrar</Botao>
                    </FormCadastro>
                </ConteudoEsquerdo>

                <LogoInicio src={logoQuadrada} alt='Logo Nexo'/>
            </ConteudoInicio>

        </InicioEstilizado>
    );
}

export default Inicio;