import styled from "styled-components";

export const ModalPeople = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 500px;
    background-color: white;
    color: black;
  };

`;