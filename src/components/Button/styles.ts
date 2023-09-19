import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type ContainerProps = {
  bg: string
  disabled?: boolean
}

type TitleProps = {
  color?: string
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  background-color: ${({ bg }) => bg};

  border-radius: 18px;

  justify-content: center;
  align-items: center;
  padding: 16px 24px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, color }) => color || theme.colors.primary.dark};
  font-weight: 700;
`
