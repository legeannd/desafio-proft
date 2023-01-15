import styled from 'styled-components/native'
import { theme } from '../../../../themes'

export const IndicatorContainer = styled.View`
  margin: 24px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

interface IndicatorDotProps {
  active: boolean
}

export const IndicatorDot = styled.View<IndicatorDotProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 0 5px;
  background: ${(props) =>
    props.active ? theme['gray-700'] : theme['gray-300']};
`
