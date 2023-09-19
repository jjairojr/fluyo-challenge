import { EdgeInsets } from 'react-native-safe-area-context'
import * as S from './styles'

type Props = {
  children: React.ReactNode
  bg: string

  insets?: EdgeInsets
}

export function Toast({ children, bg, insets }: Props) {
  return (
    <S.Container insets={insets} bg={bg}>
      {children}
    </S.Container>
  )
}
