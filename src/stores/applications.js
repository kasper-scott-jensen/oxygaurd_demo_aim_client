// @ts-nocheck
import { derived, writable } from 'svelte/store'

// Store to keep track of the current industry
export const currentIndustry = writable('')

// Store to keep track of the current article
export const currentArticle = writable('')

// Store to keep track of active step in dispensing selection
export const activeQuestion = writable([
    true,
    false,
    false,
    false,
    false,
    false,
])

// Store to keep track of active answer in step 1
export const activeAnswerQ1 = writable(null)

// Store to keep track of active answer in step 2
export const activeAnswerQ2 = writable(null)

// Store to keep track of active answer in step 3
export const activeAnswerQ3 = writable(null)

// Store to keep track of active answer in step 4
export const activeAnswerQ4 = writable(null)

// Store to keep track of active answer in step 5
export const activeAnswerQ5 = writable(null)

// Store to keep track of awarded points in step 1
export const awardedPointsQ1 = writable([0, 0, 0, 0, 0])

// Store to keep track of awarded points in step 2
export const awardedPointsQ2 = writable([0, 0, 0, 0, 0])

// Store to keep track of awarded points in step 3
export const awardedPointsQ3 = writable([0, 0, 0, 0, 0])

// Store to keep track of awarded points in step 4
export const awardedPointsQ4 = writable([0, 0, 0, 0, 0])

// Store to keep track of awarded points in step 5
export const awardedPointsQ5 = writable([0, 0, 0, 0, 0])

// Store to keep track of the current recommendation shown
export const currentlyShownRecommendation = writable(0)

// Derived store to keep track of the running result points
export let totalPoints = derived(
    [
        awardedPointsQ1,
        awardedPointsQ2,
        awardedPointsQ3,
        awardedPointsQ4,
        awardedPointsQ5,
    ],
    ([$q1, $q2, $q3, $q4, $q5]) => {
        return [
            $q1[0] + $q2[0] + $q3[0] + $q4[0] + $q5[0],
            $q1[1] + $q2[1] + $q3[1] + $q4[1] + $q5[1],
            $q1[2] + $q2[2] + $q3[2] + $q4[2] + $q5[2],
            $q1[3] + $q2[3] + $q3[3] + $q4[3] + $q5[3],
            $q1[4] + $q2[4] + $q3[4] + $q4[4] + $q5[4],
        ]
    },
)

// Store to hold answers for the running result sidebar
export const answerResume = writable(['', '', '', '', ''])

// Derive a store that triggers when combination errors occur
export let combinationErrorAirSupply = derived(
    [activeAnswerQ3, activeAnswerQ4],
    ([$q3, $q4]) => {
        return (
            ($q3 === 1 && $q4 === 0) ||
            ($q3 === 1 && $q4 === 2) ||
            ($q3 === 2 && $q4 === 0)
        )
    },
)
