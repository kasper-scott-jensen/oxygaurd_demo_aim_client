<script>
    import { onMount } from 'svelte'
    import {
        activeAnswerQ1,
        activeQuestion,
        answerResume,
        awardedPointsQ1,
    } from '../../stores/applications'
    import { link } from 'svelte-routing'
    import { activateQuestion } from '../../js/applications'
    import SelectionReset from './selection_reset.svelte'

    // Award indecies are as follow:
    // 1: SD 30/55
    // 2: FD HIGHV
    // 3: FD 310
    // 4: FD 400
    // 5: AirBox

    // Define the answers array with titles and descriptions
    let answers = [
        {
            award: [1, 5],
            desc: 'You need very high dispensing precision and/or very small doses (in the microliter range) or beads smaller than 2mm.',
        },
        {
            award: [5],
            desc: 'You want a versatile solution that allows you to adapt different types of cartridges, syringes, materials, and viscosities.',
        },
        {
            award: [2, 3, 4],
            desc: 'You require high dispensing precision and good control over the start and end-point bead profiles.',
        },
        {
            award: [2],
            desc: 'You require larger dispensing volumes and/or long unattended dispensing intervals.',
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
            activeAnswerQ1.set(null)
            awardedPointsQ1.set([0, 0, 0, 0, 0])
            answerResume.update((resume) => {
                resume[0] = ''
                return resume
            })
        }
    }

    // Function to award points based on the selected answer
    function handleAwardPoints(index) {
        awardedPointsQ1.update((points) => {
            points = [0, 0, 0, 0, 0]
            answers[index].award.forEach((award) => {
                points[award - 1] += 1
            })
            return points
        })
        answerResume.update((resume) => {
            resume[0] = answers[index].desc
            return resume
        })
    }
</script>

<!-- Main container with padding -->
<div class="p-16 w-full">
    <!-- Header section with title and next button -->
    <div class="flex flex-row w-full justify-between">
        <div>
            <h2
                class="mb-4 text-3xl lg:text-3xl tracking-tight font-extrabold text-gray-700"
            >
                Precision and Volume
            </h2>
        </div>
        <div>
            <!-- Next button, visible only if a question is answered -->
            <a
                on:click|preventDefault={() => {
                    activateQuestion(1)
                }}
                href="#!"
                class="inline-flex items-center text-sm capitalize font-medium text-gray-900 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm hover:bg-gray-50 hover:text-primary-700"
            >
                Next
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

    <!-- Description paragraph -->
    <p class="mb-6 font-light text-gray-500 md:text-lg max-w-screen-lg">
        Dispensing precision and volume are critical factors in ensuring
        accurate and efficient application of materials. Consider your specific
        needs in terms of dose size, bead profiles, and versatility of the
        equipment.
    </p>

    <!-- Grid container for answer options -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
        {#each answers as answer, index}
            <!-- Answer option, clickable to set the active answer -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                on:click|preventDefault={() => {
                    activeAnswerQ1.set(index)
                    handleAwardPoints(index)
                }}
                class={`group flex flex-col w-full justify-start cursor-pointer p-5 bg-white border-2 rounded-lg hover:bg-gray-50  shadow-sm h-40 sm:h-32 ${$activeAnswerQ1 === index ? 'border-primary-700' : 'border-gray-300'}`}
            >
                <p
                    class={`text-gray-900 text-xs group-hover:text-primary-700 uppercase font-semibold mb-2 ${$activeAnswerQ1 === index ? 'text-primary-700' : 'text-gray-500'}`}
                >
                    Answer {index + 1}
                </p>
                <p class="font-medium text-gray-500 text-md">{answer.desc}</p>
            </div>
        {/each}
    </div>
    <SelectionReset />
</div>
