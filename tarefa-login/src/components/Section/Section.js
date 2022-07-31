import { colorBgSection } from '../../consts'
import styled from "styled-components"

export const Section = styled.section(({}) => ({
  width: '100vw',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '33px',
  paddingBottom: '30px',
  paddingTop: '30px',
  backgroundColor: colorBgSection
}));