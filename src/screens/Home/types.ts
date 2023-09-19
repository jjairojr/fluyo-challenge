export enum UserAnswerEnum {
  CORRECT = 'CORRECT',
  WRONG = 'WRONG',
  BLANK = 'BLANK',
}

export type UserAnswerType = keyof typeof UserAnswerEnum
