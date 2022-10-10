import styled from 'styled-components';
import logo from '../assets/images/oldschool.jpeg'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router'


function SchedulesPage() {
    const navigate = useNavigate();
    
    function renderPayments(e) {

        // let name = prompt("Qual o seu nome?")
        let mensagem = `Olá, gostaria de marcar uma visita \n
         ${e} \n `;
        
          window.open(
            "https://wa.me/5524992587501?text=" + encodeURIComponent(mensagem)
          );
    }
  return (
    <div>
      <Container>

        <h1> Conheça nossos horários de treino abaixo: </h1>
        <Main>
                <Button >
                     <h2>Treino da Noite</h2> 
                    <h3>Segunda, Quarta e Sexta</h3>
                    <h4>Horário: 20h as 22h</h4>
                </Button>
                <Button >
                     <h2>Treino da Manhã</h2> 
                    <h3> Terça e Quinta </h3>
                    <h4>Horário: 09h as 11h</h4>
                </Button>
                

                <StyledLink to="/register"> Novo por aqui? Cadastre-se </StyledLink>
                <StyledLink to="/login"> Possui uma conta? </StyledLink>
        </Main>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-left: 0px;
  margin-top: 80px;
  display: flex;

  align-items: center;
  flex-direction: column;
  background-color: grey;
  h1 {
    margin-top: 90px;
    height: 100px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img { 
        margin-top:100px;
        width: 400px;
        border-radius: 80px;
    }
`;

const Main = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black url("src/assets/images/oldschool.jpeg");
`;

const StyledLink = styled(Link)`
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;
`;
const Button = styled(Link)`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        background-color: black;
        border-radius: 40px;
        text-decoration: none;

        margin: 10px;
        padding: 10px;
      
`;

export default SchedulesPage;