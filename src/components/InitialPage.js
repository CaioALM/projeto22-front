import styled from 'styled-components';
import logo from '../assets/images/oldschool.jpeg'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router'

function InitialScreen() {
    const navigate = useNavigate();
    
  return (
    <div>
      <Container>
        <h1>Seja bem vindo a maior equipe de Jiu Jitsu do sul do estado</h1>
        <Main>
                <Button>
                  <StyledLink to="/horarios"> <h2>Horários de treinos</h2> </StyledLink>
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
    height: 100px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
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
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;
`;

export default InitialScreen;