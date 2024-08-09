<script>
    import { onMount } from 'svelte' // Import onMount lifecycle function from Svelte
    import { activateQuestion } from '../../js/applications' // Import function to activate a question
    import {
        activeAnswerQ5,
        answerResume,
        awardedPointsQ5,
    } from '../../stores/applications' // Import stores for the active answers of questions 4 and 5
    import SelectionReset from './selection_reset.svelte' // Import SelectionReset component

    // Award indecies are as follow:
    // 1: SD 30/55
    // 2: FD HIGHV
    // 3: FD 310
    // 4: FD 400
    // 5: AirBox

    // Define the answers array with titles and descriptions
    let answers = [
        {
            award: [1],
            desc: 'Low to medium viscosity - typically less than 20,000 cP.',
        },
        {
            award: [2, 3, 4, 5],
            desc: 'Medium viscosity - typically between 50,000 and 500,000 cP.',
        },
    ]

    // Add event listener for escape key press on mount
    onMount(() => {
        window.addEventListener('keydown', handleEscapeKeyPressed)
        return () => {
            window.removeEventListener('keydown', handleEscapeKeyPressed)
        }
    })

    // Function to handle escape key press for closing the modal
    function handleEscapeKeyPressed(event) {
        if (event.key === 'Escape') {
            activeAnswerQ5.set(null)
            awardedPointsQ5.set([0, 0, 0, 0, 0])
            answerResume.update((resume) => {
                resume[4] = ''
                return resume
            })
        }
    }

    // Function to award points based on the selected answer
    function handleAwardPoints(index) {
        awardedPointsQ5.update((points) => {
            points = [0, 0, 0, 0, 0]
            answers[index].award.forEach((award) => {
                points[award - 1] += 1
            })
            return points
        })
        answerResume.update((resume) => {
            resume[4] = answers[index].desc
            return resume
        })
    }
</script>

<!-- Main container with padding -->
<div class="p-16 w-full">
    <!-- Header section with title and navigation buttons -->
    <div class="flex flex-row w-full justify-between">
        <div>
            <h2
                class="mb-4 text-3xl lg:text-3xl tracking-tight font-extrabold text-gray-700"
            >
                Viscosity
            </h2>
        </div>
        <!-- Component for resetting selections -->

        <div>
            <div class="flex items-center">
                <!-- Previous button to navigate to the previous question -->
                <a
                    on:click|preventDefault={() => {
                        activateQuestion(3)
                    }}
                    href="#!"
                    class="inline-flex items-center text-sm capitalize font-medium text-gray-900 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm hover:bg-gray-50 me-2 hover:text-primary-700"
                >
                    <svg
                        class="w-3 h-3 me-2 rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                    Previous
                </a>
                <!-- Next button, visible only if a question is answered -->
                <a
                    on:click|preventDefault={() => {
                        activateQuestion(5)
                    }}
                    href="#!"
                    class="inline-flex items-center text-sm capitalize font-medium text-gray-900 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm hover:bg-gray-50 hover:text-primary-700"
                >
                    Finish
                    <svg
                        class="w-3 h-3 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <!-- Description paragraph -->
    <p class="mb-6 font-light text-gray-500 md:text-lg max-w-screen-lg">
        The viscosity of the materials you are working with will affect the
        choice of dispensing equipment to ensure smooth and consistent
        application.
    </p>

    <!-- Grid container for answer options -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 w-full">
        {#each answers as answer, index}
            <!-- Answer option, clickable to set the active answer -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                on:click|preventDefault={() => {
                    activeAnswerQ5.set(index)
                    handleAwardPoints(index)
                }}
                class={`group flex flex-col w-full justify-start cursor-pointer p-5 bg-white border-2 rounded-lg hover:bg-gray-50 shadow-sm h-40 sm:h-32 ${$activeAnswerQ5 === index ? 'border-primary-700' : 'border-gray-300'}`}
            >
                <p
                    class={`text-gray-900 group-hover:text-primary-700 text-xs uppercase font-semibold mb-2 ${$activeAnswerQ5 === index ? 'text-primary-700' : 'text-gray-500'}`}
                >
                    Answer {index + 1}
                </p>
                <p class="font-medium text-gray-500 text-md flex">
                    {answer.desc}
                </p>
            </div>
        {/each}
    </div>
    <SelectionReset />
</div>
