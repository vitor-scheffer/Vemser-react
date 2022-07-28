import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  color: #A4A6B3;
  background: #363740;

  a {
    color: #A4A6B3;
    list-style-type: none;
    text-decoration: none;
  };

  button {
    color: white;
    background-color: #3751FF;
    border: 1px solid #3751FF;
    border-radius: 8px;
    padding: 15px 0;
    width: 100px;
  };

  button:hover {
    cursor: pointer;
    background-color: #243cdb;
  }

  nav {
    display: flex;
    gap: 50px;
  };

  nav ul {
    display: flex;
    gap: 20px;
  }
`;