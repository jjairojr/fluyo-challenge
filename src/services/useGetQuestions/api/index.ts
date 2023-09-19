import { doc, getDoc } from 'firebase/firestore'
import { firestoreDB } from '@lib/firebase'
import { IGetQuestions } from './types'

export async function getQuestions(): Promise<IGetQuestions[]> {
  const docRef = doc(firestoreDB, 'questions', '4')
  const docSnap = await getDoc(docRef)
  const data = docSnap.data()

  const translateGame = data!.translateGame

  return translateGame
}
