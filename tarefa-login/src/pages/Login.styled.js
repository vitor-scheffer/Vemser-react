import styled from "styled-components";
import { colorSecondary, colorPrimaryDark } from '../consts'

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${colorSecondary};

  a {
    text-decoration: none;
    padding-left: 5px;
  }

  Form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 48px;
    margin-bottom: 32px;
  }

  Form div {
    display: flex;
    flex-direction: column;
  }

  input {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: #FCFDFE;
    border: 1px solid #DFE0EB;
    padding: 11px 16px;
    border-radius: 8px;
  };

  input::placeholder {
    color: #4B506D;
    font-weight: 500;
    letter-spacing: 0.3px;
    opacity: 0.4;
  }
`;