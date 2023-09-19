import * as S from './styles'
import { Button } from '@components/Button'
import { GameButtons } from './GameButtons'
import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { Footer } from './Footer'
import { useGetQuestions } from '@services/useGetQuestions'
import { UserAnswerEnum, UserAnswerType } from './types'

export function Home() {
  const { colors } = useTheme()
  const { data: translateGame } = useGetQuestions()

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [alternative, setAlternative] = useState('')
  const [userAnswer, setUserAnswer] = useState<UserAnswerType>('BLANK')
  const [correctAnswer, setCorrectAnswer] = useState('')

  function checkAnswer() {
    if (!translateGame) return

    const pqp = translateGame[currentQuestion].question
    const wordToBeTranslated = pqp.filter((item) => item.wordToBeTranslated)

    const [{ translatedWord: correctAnswer }] = wordToBeTranslated

    setCorrectAnswer(correctAnswer)

    if (correctAnswer === alternative)
      return setUserAnswer(UserAnswerEnum.CORRECT)

    setUserAnswer(UserAnswerEnum.WRONG)
  }

  const feedbackText = {
    [UserAnswerEnum.CORRECT]: 'Good Job!',
    [UserAnswerEnum.WRONG]: `Answer: ${correctAnswer}`,
    [UserAnswerEnum.BLANK]: '',
  }

  const buttonConfigs = {
    label: alternative ? 'CHECK ANSWER' : 'CONTINUE',
    bg: alternative ? colors.primary.light : colors.secondary.default,
    color: colors.white,
  }

  const toastConfig = {
    [UserAnswerEnum.CORRECT]: colors.primary.light,
    [UserAnswerEnum.WRONG]: colors.tertiary.default,
    [UserAnswerEnum.BLANK]: colors.white,
  }

  function goToNextQuestion() {
    if (!translateGame) return

    if (currentQuestion === translateGame.length - 1) {
      setCurrentQuestion(0)
      setAlternative('')
      setUserAnswer(UserAnswerEnum.BLANK)

      return
    }

    setCurrentQuestion((prev) => prev + 1)
    setAlternative('')
    setUserAnswer(UserAnswerEnum.BLANK)
  }

  if (!translateGame || !translateGame.length) return null

  return (
    <S.Container>
      <S.Content>
        <S.Challenge>Fill in the missing word</S.Challenge>
        <S.SentenceToTranslate>
          {translateGame[currentQuestion].question.map((item) => (
            <S.Word
              underline={!!item.wordToBeTranslated}
              bold={!!item.wordToBeTranslated}
              key={item.word}
            >
              {item.word}
            </S.Word>
          ))}
        </S.SentenceToTranslate>

        <S.Wrapper>
          <S.SentenceToTranslate>
            {translateGame[currentQuestion].question.map((item) =>
              item.wordToBeTranslated ? (
                alternative ? (
                  <Button
                    key={`${alternative} ${currentQuestion}`}
                    color={
                      userAnswer !== UserAnswerEnum.BLANK
                        ? colors.white
                        : colors.primary.dark
                    }
                    bg={toastConfig[userAnswer]}
                    title={alternative}
                  />
                ) : (
                  <S.Line key={item.translatedWord} />
                )
              ) : (
                <S.WordTranslated key={item.translatedWord}>
                  {item.translatedWord}
                </S.WordTranslated>
              ),
            )}
          </S.SentenceToTranslate>
        </S.Wrapper>

        <GameButtons
          disableButtons={userAnswer !== UserAnswerEnum.BLANK}
          alternative={alternative}
          setAlternative={setAlternative}
          words={translateGame[currentQuestion].alternatives}
        />

        <Footer
          toastConfig={toastConfig}
          feedbackText={feedbackText[userAnswer]}
          btnConfigs={buttonConfigs}
          checkAnswer={checkAnswer}
          userAnswer={userAnswer}
          goToNextQuestion={goToNextQuestion}
        />
      </S.Content>
    </S.Container>
  )
}
