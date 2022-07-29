import styled from "styled-components";
import { colorSecondary } from '../../consts'

export const NavBar = styled.div(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 255,
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  paddingLeft: 32,
  paddingBottom: 37,
  paddingTop: 37,
  backgroundColor: colorSecondary
}));