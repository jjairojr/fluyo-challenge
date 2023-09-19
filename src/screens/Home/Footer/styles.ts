import { Button } from '@components/Button'
import { EdgeInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type Props = {
  insets: EdgeInsets
}

export const ButtonContainer = styled.View<Props>`
  margin-top: auto;
  padding: 0px 24px;
  padding-bottom: ${({ insets }) => insets.bottom}px;
`

export const CTAButton = styled(Button)`
  border-radius: 100%;
  height: 64px;
  margin-bottom: 16px;
  margin-top: auto;
`
export const Feedback = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  align-items: flex-start;
`

export const FeedbackText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSizes[20]};
`
