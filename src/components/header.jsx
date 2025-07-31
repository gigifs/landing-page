import styled, { css } from 'styled-components';
import Botao from './Botao.jsx';
import logoNexo from '../assets/logo.svg';

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 40px;
    background-color: #F5FAFC;
    box-shadow: 0 2px 4px #7c225649;
`;

const NavBotoes = styled.nav`
  display: flex;
  gap: 14px; /* Cria um espaço entre os botões */
`;

// Placeholder para o logo, só para ter algo no lugar
const Logo = styled.img`
    width: 170px;
`;

const NavLinks = styled.nav`
`;

const ListaLinks = styled.ul`
    list-style: none; 
    padding: 0;
    margin: 0 0 0 100px;
    display: flex;
    gap: 45px;
`;

const LinkEstilizado = styled.a`
    text-decoration: none;
    color: #0A528A;
    font-weight: 400;
    font-size: 22px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover{
        color: #23328fff;
        font-weight: 500;
    }
`;

function Header(){
    return(
        <HeaderEstilizado>
            <Logo src={logoNexo} alt="Logo da empresa Nexo" />

            <NavLinks>
                <ListaLinks>
                    <li><LinkEstilizado href="#">Início</LinkEstilizado></li>
                    <li><LinkEstilizado href="#">Como Funciona</LinkEstilizado></li>
                    <li><LinkEstilizado href="#">Sobre nós</LinkEstilizado></li>
                    <li><LinkEstilizado href="#">Contatos</LinkEstilizado></li>
                </ListaLinks>
            </NavLinks>
            <NavBotoes>
                <Botao variant="Entrar">Entrar</Botao>
                <Botao variant="Cadastrar">Cadastre-se</Botao>
            </NavBotoes>
        </HeaderEstilizado>
    )
}

export default Header;