import { EdgeInsets } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type ContainerProps = {
  bg: string
  insets?: EdgeInsets
}

export const Container = styled.View<ContainerProps>`
  background: ${({ bg }) => bg};
  margin-top: auto;
  padding: 0 24px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  height: 200px;

  ${({ insets }) =>
    insets &&
    css`
      padding-bottom: ${insets.bottom}px;
    `};
`
