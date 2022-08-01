import styled from "styled-components"
import { fontMd, fontLg, fontSm, fontXl, colorTittlePage, colorTittle, colorActiveMenu } from '../../consts'

export const Tittle = styled.h1(({color}) => ({
  fontSize: fontXl,
  color: color ? color : colorTittlePage,
}));

export const Subtitle = styled.h2(({color}) => ({
  fontSize: fontLg,
  color: color ? color : colorTittle,
}));

export const Text = styled.p(({color}) => ({
  fontSize: fontMd,
  color: color ? color : colorActiveMenu,
}));

export const TextSm = styled.span(({color, fontSize}) => ({
  fontSize: fontSize ? fontSize : fontSm,
  color: color ? color : colorTittlePage,
  fontWeight: 500,
}));



