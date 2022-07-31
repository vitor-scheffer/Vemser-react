import styled from "styled-components";

export const ModalPeople = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px;
  width: 550px;
  height: 400px;
  background-color: white;
  color: black;
  border-radius: 12px;
  text-align: center;

  h1 {
    font-size: 28px;
    width: 100%;
    padding-top: 35px;
  }

  p {
    width: 100%;
    font-size: 25px;
  }
`;

export const ModalEndereco = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  width: 800px;
  height: 100%;
  background-color: white;
  color: black;
  border-radius: 12px;
  text-align: center;
  padding: 0 !important;
`;