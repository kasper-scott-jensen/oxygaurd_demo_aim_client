// @ts-nocheck
import { activeQuestion } from '../stores/applications'

// Function to activate a question and set others to false
export function activateQuestion(index) {
    activeQuestion.update((value) => {
        return value.map((item, i) => {
            return i === index ? true : false
        })
    })
}
