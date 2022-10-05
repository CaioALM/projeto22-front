import styled from 'styled-components';
import Logo from '../../assets/images/oldschool.jpeg'

function Header() {
  return (
    <Content>
      <img src={Logo} alt="Logo" />
      <h1>OldSchool Jiu Jitsu</h1>
    </Content>
  );
}

const Content = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    font-size: 34px;
    text-transform: uppercase;
    color: grey;
  }

  img {
    height: 70px;
  }
`;

export default Header;