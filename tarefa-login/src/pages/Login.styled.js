import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #363740;

  form {
    display: flex;
    flex-direction: column;
    padding: 40px 32px;
    gap: 24px;
    border-radius: 8px;
    background-color: white;
  };

  h1 {
    font-size: 24px;
  };

  button {
    color: white;
    background-color: #3751FF;
    border: 1px solid #3751FF;
    border-radius: 8px;
    padding: 15px 0;
  };

  button:hover {
    cursor: pointer;
    background-color: #243cdb;
  }

  label {
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    color: #9FA2B4;
  };

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