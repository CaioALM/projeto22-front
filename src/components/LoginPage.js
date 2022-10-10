import axios from "axios";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from 'react-router';
import Logo from "../assets/images/oldschool.jpeg";

import UserContext from "../contexts/UserContext";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

    const { setUserInfo } = useContext(UserContext);


    const [userSignIn, setUserSignIn] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    async function postLogin(e) {
        e.preventDefault();
        try {
            const data = {
                name: userSignIn.name,
                email: userSignIn.email,
                };

                const response = await axios.post("http://localhost:4000/login", data);
                registerLogin(response.data);
                navigate("/payments");
              
        } catch (e) {
            alert(e.response.data);
            setUserSignIn({ email: "", password: ""});
        }
    }

    function montaformularioSignIn() {
        return (
            <>
                <input type="email" id="email" value={userSignIn.email} placeholder="E-mail" required
                    onChange={(e) => setUserSignIn({ ...userSignIn, email: e.target.value })} />

                <input type="password" id="password" value={userSignIn.password} placeholder="Senha" required
                    onChange={(e) => setUserSignIn({ ...userSignIn, password: e.target.value })} />
                <div>
                    <Button type="submit">Entrar</Button>
                </div>
            </>
        )
    }
    function registerLogin(obj) {
            setUserInfo({
            config: {
              headers: {
                authorization: `Bearer ${obj.token}`,
              },
            },
          });

      navigate("/payments");
    }
  


    const formularioSignIn = montaformularioSignIn();

    return (
        <>
            <Main>
                <img src={Logo} alt="Logo" />
                <h1> Magoo & Max  Jiu Jitsu </h1>
                <FormularioCompra onSubmit={postLogin}>
                    {formularioSignIn}
                </FormularioCompra>
                <StyledLink to="/register"> Não é cadastrado, cadastre-se agora </StyledLink>
            </Main>
        </>

    )
}


const FormularioCompra = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    
    input {
        
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 13px;
    border: none;
    font-size: 20px;
    line-height: 23px;
    }
   
`;

const Main = styled.main`
    margin: 80px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  
    height: 100%;
    background-color: grey;
    background-image: url('../assets/images/oldschool.jpeg');
    
    img { 
        margin-top:100px;
        width: 400px;
        border-radius: 80px;
    }
    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF; 
        background-color: black;
        border-radius: 15px;
        margin: 10px, 0px;
    }
    
` ;

const StyledLink = styled(Link)`
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;
        margin: 60px;
        padding-bottom: 100px;
`;

const Button = styled.button`
    width: 100%;
    height: 46px;
    background: black;
    border-radius: 5px;
    border: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    cursor: pointer;
`;