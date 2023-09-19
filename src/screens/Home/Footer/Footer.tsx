import { Toast } from '@components/Toast'
import * as S from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'
import { UserAnswerEnum, UserAnswerType } from '../types'

type Props = {
  checkAnswer: () => void
  btnConfigs: { label: string; bg: string; color: string }
  feedbackText: string
  userAnswer: UserAnswerType
  goToNextQuestion: () => void
  toastConfig: {
    [UserAnswerEnum.CORRECT]: string
    [UserAnswerEnum.WRONG]: string
    [UserAnswerEnum.BLANK]: string
  }
}

export function Footer({
  checkAnswer,
  btnConfigs,
  toastConfig,
  feedbackText,
  userAnswer,
  goToNextQuestion,
}: Props) {
  const insets = useSafeAreaInsets()

  if (userAnswer === UserAnswerEnum.BLANK) {
    return (
      <S.ButtonContainer insets={insets}>
        <S.CTAButton
          color={btnConfigs.color}
          bg={btnConfigs.bg}
          title={btnConfigs.label}
          onPress={checkAnswer}
        />
      </S.ButtonContainer>
    )
  }

  return (
    <Toast insets={insets} bg={toastConfig[userAnswer]}>
      <S.Feedback>
        <S.FeedbackText>{feedbackText}</S.FeedbackText>
        <FontAwesome name="flag" size={18} color="white" />
      </S.Feedback>
      <S.CTAButton
        onPress={goToNextQuestion}
        color={toastConfig[userAnswer]}
        title="CONTINUE"
      />
    </Toast>
  )
}
