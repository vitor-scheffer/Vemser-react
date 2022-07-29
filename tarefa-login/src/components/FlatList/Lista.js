import { colorBorder, colorWhite } from '../../consts'

export const Lista = styled.ul(({}) => ({
  display: flex,
  flexDirection: column,
  width: '100%',
  backgroundColor: colorWhite,
  borderTop: `1px solid ${colorBorder}`
}));

export const Item = styled.li(({}) => ({
  display: flex,
  justifyContent: spaceBetween,
  width: '100%',
  paddingLeft: 32,
  paddingRight: 32,
  backgroundColor: colorWhite,
  borderBottom: `1px solid ${colorBorder}`
}));

