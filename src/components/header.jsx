import React, {useState} from 'react'; //importação completa
import styled, { css } from 'styled-components';
import Botao from './Botao.jsx';
import logoNexo from '../assets/logo.svg';
import {FiMenu, FiX} from "react-icons/fi"; //importação dos ícones

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 40px;
    background-color: #F5FAFC;
    box-shadow: 0 3px 6px rgba(124, 34, 86, 0.45);
    position: sticky;
    top: 0; 
<<<<<<< HEAD
    z-index: 30;
=======
    z-index: 10;

    @media(max-width: 768px){
        padding: 8px 20px;
    }
>>>>>>> 7b7094a0e1b6c3d4148bace731cfa5c496f75da0
`;

const NavBotoes = styled.nav`
  display: flex;
  gap: 14px; /* Cria um espaço entre os botões */
 
    @media(max-width: 768px){
        display: none;
    }
  `;

// Placeholder para o logo, só para ter algo no lugar
const Logo = styled.img`
    width: 170px;
    z-index: 11;
    @media (max-width: 768px) {
        width: 140px;
    }
`;

//links do menu hamburguer :)
const NavLinks = styled.nav` 
    display: flex;
    @media (max-width: 768px) {
        background-color: rgba(245, 250, 252, 0.98);
        backdrop-filter: blur(5px);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: ${props => props.$menuAberto ? 'flex' : 'none'};
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const ListaLinks = styled.ul`
    list-style: none; 
    padding: 0;
    margin: 0 0 0 100px;
    display: flex;
    gap: 45px;

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        gap: 40px;
        text-align: center;
    }
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
    
    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

<<<<<<< HEAD
// O componente abaixo está recendo duas propriedades
function Header({ onLoginClick, onSignupClick }) {
    return (
=======
const MenuHamburguer = styled.div`
    display: none;
    z-index: 11;

    @media (max-width: 768px) {
        display: block;
        cursor: pointer;
    }
`;

// Container para os botões que só aparecem no menu mobile
const NavBotoesMobile = styled.div`
  display: none; /* Escondido por padrão */

  @media (max-width: 768px) {
    display: flex; 
    flex-direction: row; 
    gap: 20px; 
    margin-top: 80px; 
  }
`;

function Header({ onLoginClick, onSignupClick }){
    const [menuAberto, setMenuAberto] = useState(false);
    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return(
>>>>>>> 7b7094a0e1b6c3d4148bace731cfa5c496f75da0
        <HeaderEstilizado>
            <Logo src={logoNexo} alt="Logo da empresa Nexo" />

            <NavLinks $menuAberto = {menuAberto}>
                <ListaLinks>
<<<<<<< HEAD
                    <li><LinkEstilizado href="#inicio">Início</LinkEstilizado></li>
                    <li><LinkEstilizado href="#como-funciona">Como Funciona</LinkEstilizado></li>
                    <li><LinkEstilizado href="#sobre-nos">Sobre nós</LinkEstilizado></li>
                    <li><LinkEstilizado href="#contatos">Contatos</LinkEstilizado></li>
=======
                    <li><LinkEstilizado href="#inicio" onClick={toggleMenu}>Início</LinkEstilizado></li>
                    <li><LinkEstilizado href="#como-funciona" onClick={toggleMenu}>Como Funciona</LinkEstilizado></li>
                    <li><LinkEstilizado href="#sobre-nos" onClick={toggleMenu}>Sobre nós</LinkEstilizado></li>
                    <li><LinkEstilizado href="#contatos" onClick={toggleMenu}>Contatos</LinkEstilizado></li>
>>>>>>> 7b7094a0e1b6c3d4148bace731cfa5c496f75da0
                </ListaLinks>
                <NavBotoesMobile>
                    <Botao variant="EntrarMenuHamburguer" onClick={onLoginClick}>Entrar</Botao>
                    <Botao variant="CadastrarMenuHamburguer" onClick={onSignupClick}>Cadastre-se</Botao>
                </NavBotoesMobile>
            </NavLinks>
            <NavBotoes>
                {/* O evento de clique é conectado diretamente com
<<<<<<< HEAD
                        as funções que o header recebeu como propriedade */}
=======
                    as funções que o header recebeu como propriedade */}
>>>>>>> 7b7094a0e1b6c3d4148bace731cfa5c496f75da0
                <Botao variant="Entrar" onClick={onLoginClick}>Entrar</Botao>
                <Botao variant="Cadastrar" onClick={onSignupClick}>Cadastre-se</Botao>
            </NavBotoes>
            <MenuHamburguer onClick={toggleMenu}>
                {menuAberto ? <FiX size={30} color='#0A528A'/> : <FiMenu size={30} color="#0A528A" />}
            </MenuHamburguer>
        </HeaderEstilizado>
    );
}

export default Header;