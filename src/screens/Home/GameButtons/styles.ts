import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
`

export const Content = styled.View`
  width: 60%;
  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap;
`

export const ButtonContainer = styled.View`
  margin-top: 16px;
  margin-right: 16px;
  height: 50px;
  min-width: 80px;
  background: ${({ theme }) => theme.colors.secondary.default};
  border-radius: 18px;
`
