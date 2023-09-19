import styled, { css } from 'styled-components/native'

type WordProps = {
  bold?: boolean
  underline?: boolean
}

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.primary.default};
  flex: 1;
`

export const Content = styled.View`
  background: ${({ theme }) => theme.colors.primary.dark};
  height: 80%;
  margin-top: auto;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`

export const Challenge = styled.Text`
  text-align: center;
  margin-top: 64px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: 300;
`

export const Wrapper = styled.View`
  height: 64px;
  justify-content: center;
`

export const SentenceToTranslate = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Word = styled.Text<WordProps>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ theme }) => theme.fontSizes[32]};
  color: ${({ theme }) => theme.colors.white};
  margin: 0px 6px;

  ${({ theme, underline }) =>
    underline &&
    css`
      text-decoration: underline;
      text-decoration-color: ${theme.colors.white};
    `};
`

export const WordTranslated = styled(Word)`
  font-size: ${({ theme }) => theme.fontSizes[18]};
  font-weight: bold;
`

export const WordToBeTranslated = styled(SentenceToTranslate)``

export const Line = styled.View`
  width: 150px;
  background: ${({ theme }) => theme.colors.white};
  margin-right: 6px;
  height: 1px;

  margin-top: auto;
`
