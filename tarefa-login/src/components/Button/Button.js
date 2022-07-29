import styled from "styled-components";
import { colorPrimary, colorWhite } from '../../consts'

export const Button = styled.button(({width, backgroundColor}) => ({
  width: width ? width : 130,
  padding: 13,
  color: colorWhite,
  backgroundColor: backgroundColor ? backgroundColor : colorPrimary,
  borderRadius: 8,
  border: `1px solid ${colorPrimary}`
}));