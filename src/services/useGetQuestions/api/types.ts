type IQuestion = {
  word: string

  translatedWord: string

  wordToBeTranslated: string
}

export type IGetQuestions = {
  question: IQuestion[]
  alternatives: string[]
}
