import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type Props = TouchableOpacityProps & {
  title: string
  color?: string
  bg?: string
}

export function Button({ title, bg = 'white', color, ...rest }: Props) {
  return (
    <S.Container bg={bg} {...rest}>
      <S.Title color={color}>{title}</S.Title>
    </S.Container>
  )
}
