import styled from "styled-components";
import { colorPrimary, colorWhite } from '../../consts'

export const Button = styled.button(({width, backgroundColor, border, padding}) => ({
  width: width ? width : 130,
  padding: padding ? padding : 13,
  color: colorWhite,
  backgroundColor: backgroundColor ? backgroundColor : colorPrimary,
  borderRadius: 8,
  border: border ? border : `1px solid ${colorPrimary}`
}));