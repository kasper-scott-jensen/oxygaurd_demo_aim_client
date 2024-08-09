<script>
    // Import necessary modules and functions from svelte-routing and stores/applications
    import { link } from 'svelte-routing'
    import {
        activeAnswerQ1,
        activeAnswerQ2,
        activeAnswerQ3,
        activeAnswerQ4,
        activeAnswerQ5,
        activeQuestion,
        answerResume,
        awardedPointsQ1,
        awardedPointsQ2,
        awardedPointsQ3,
        awardedPointsQ4,
        awardedPointsQ5,
    } from '../../stores/applications'
    import { activateQuestion } from '../../js/applications'
</script>

{#if $activeAnswerQ1 !== null || $activeAnswerQ2 !== null || $activeAnswerQ3 !== null || $activeAnswerQ4 !== null || $activeAnswerQ5 !== null}
    <!-- Check if any activeAnswerQ variables are not null. If so, render the following block. -->

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- Ignore certain accessibility warnings for the following div element. -->

    <div
        class="flex w-full text-end pt-12 group"
        on:click|preventDefault={() => {
            // Define an inline click event handler to reset all activeAnswerQ variables to null and activate the first question.
            activeAnswerQ1.set(null)
            activeAnswerQ2.set(null)
            activeAnswerQ3.set(null)
            activeAnswerQ4.set(null)
            activeAnswerQ5.set(null)
            awardedPointsQ1.set([0, 0, 0, 0, 0])
            awardedPointsQ2.set([0, 0, 0, 0, 0])
            awardedPointsQ3.set([0, 0, 0, 0, 0])
            awardedPointsQ4.set([0, 0, 0, 0, 0])
            awardedPointsQ5.set([0, 0, 0, 0, 0])
            activateQuestion(0)
            answerResume.set(['', '', '', '', ''])
            scrollTo(0, 0)
        }}
    >
        <a
            use:link
            href={null}
            target="_blank"
            class="inline-flex justify-center items-center text-sm font-medium text-center text-gray-900 rounded-lg cursor-pointer group-hover:text-primary-700"
        >
            <!-- Link component using svelte-routing's link action. -->

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 me-2"
            >
                <!-- SVG icon for the reset button. -->

                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>

            Reset Questionnaire
            <!-- Text label for the reset button. -->
        </a>
    </div>
{/if}
