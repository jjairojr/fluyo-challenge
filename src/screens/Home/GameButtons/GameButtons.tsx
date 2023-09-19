import { Button } from '@components/Button'
import * as S from './styles'

type Props = {
  words: string[]
  setAlternative: (word: string) => void
  alternative: string
  disableButtons?: boolean
}

export function GameButtons({
  words,
  setAlternative,
  alternative,
  disableButtons,
}: Props) {
  function handleSetAlternative(word: string) {
    setAlternative(word)
  }

  return (
    <S.Container>
      <S.Content>
        {words.map((word) => (
          <S.ButtonContainer key={word}>
            {alternative !== word && (
              <Button
                disabled={disableButtons}
                onPress={() => handleSetAlternative(word)}
                title={word}
              />
            )}
          </S.ButtonContainer>
        ))}
      </S.Content>
    </S.Container>
  )
}
