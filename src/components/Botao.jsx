import styled, { css } from 'styled-components';


const BotaoEstilizado = styled.button`
  background-color: #7C2256; /* Fundo padrão */
  color: #F5FAFC; /* Texto branco */
  font-size: 21px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 2px solid transparent;

  ${(props) => {
    switch (props.variant) {

      case 'CadastrarSecaoInicio':
        return css`
          background-color: #0A528A1A; 
          color: #0A528A; 
          border: 1px solid #0A528A;
          height: 45px;

          &:hover {
          background-color: #0A528A; 
          color: #F5FAFC; 
          }
        `;
      case 'Cadastrar':
        // Estilos para o botão secundário
        return css`
          background-color: transparent; 
          color: #7C2256; 
          border-color: #7C2256; 

          &:hover {
          background-color: #7C2256; /* Fundo padrão */
          color: #F5FAFC; /* Texto branco */

          }
        `;
      case 'Entrar':
      default:
        // Estilos para o botão primário (e o padrão, caso nenhuma variant seja passada)
        return css`
          &:hover {
            background-color: #F5FAFC; /* Fundo padrão */
            color: #7C2256; /* Texto branco */
            border-color: #7C2256; 
          }
        `;
    }
  }}
`;

// O componente Botao agora precisa passar as props para o BotaoEstilizado
function Botao(props) {
  // Passamos todas as props (...props) para que o styled.button tenha acesso a 'variant'
  return <BotaoEstilizado {...props}>{props.children}</BotaoEstilizado>;
}

export default Botao;