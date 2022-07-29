import styled from "styled-components";

export const ContainerPessoa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E5E5E5;

  h1 {
    align-self: start;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 40px 32px;
    width: 80%;
    gap: 24px;
    border-radius: 8px;
    background-color: white;
  };

  form div {
    display: flex;
    flex-direction: column;
  };

  label {
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    color: #9FA2B4;
  };

  form button {
    color: white;
    background-color: #3751FF;
    border: 1px solid #3751FF;
    border-radius: 8px;
    padding: 15px 0;
  };

  form button:hover {
    cursor: pointer;
    background-color: #243cdb;
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
  };
`;

export const CardColabs = styled.div`
    padding: 32px 0;
    width: 95%;
    background-color: white;
    border: 1px solid #DFE0EB;
    border-radius: 8px;
    margin: 32px 0;

    h2 {
      padding-left: 32px;
    };

    button {
    color: white;
    background-color: #3751FF;
    border: 1px solid #3751FF;
    border-radius: 8px;
    padding: 15px 0;
    width: 65px;
    };

    button:hover {
      cursor: pointer;
      background-color: #243cdb;
    }

    p {
      width: 250px;
    }

`;