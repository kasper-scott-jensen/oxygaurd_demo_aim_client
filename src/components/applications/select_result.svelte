<script>
    import { onDestroy } from 'svelte'
    import {
        activeAnswerQ1,
        activeAnswerQ2,
        activeAnswerQ3,
        activeAnswerQ4,
        activeAnswerQ5,
        answerResume,
        awardedPointsQ1,
        awardedPointsQ2,
        awardedPointsQ3,
        awardedPointsQ4,
        awardedPointsQ5,
        combinationErrorAirSupply,
        currentlyShownRecommendation,
    } from '../../stores/applications'
    import { currentProducts } from '../../stores/rackbeat'
    import SolutionChart from './solution_chart.svelte'
    import RecommendationDetails from './recommendation_details.svelte'
    import { navigateToConfigurator } from '../../js/navigation'
    import { formIndex } from '../../stores/contact'
    import { link, navigate } from 'svelte-routing'
    import { activateQuestion } from '../../js/applications'
    import MoreHelp from './more_help.svelte'
    import SelectionReset from './selection_reset.svelte'
    import { activeConfigTab } from '../../stores/knowledge_center'

    // Initialize product and score variables
    let sd3055 = {
        product: $currentProducts.find((product) => product.id === '9410'),
        points:
            $awardedPointsQ1[0] +
            $awardedPointsQ2[0] +
            $awardedPointsQ3[0] +
            $awardedPointsQ4[0] +
            $awardedPointsQ5[0],
    }

    let fdhighv = {
        product: $currentProducts.find((product) => product.id === '9027'),
        points:
            $awardedPointsQ1[1] +
            $awardedPointsQ2[1] +
            $awardedPointsQ3[1] +
            $awardedPointsQ4[1] +
            $awardedPointsQ5[1],
    }

    let fd310 = {
        product: $currentProducts.find((product) => product.id === '9000'),
        points:
            $awardedPointsQ1[2] +
            $awardedPointsQ2[2] +
            $awardedPointsQ3[2] +
            $awardedPointsQ4[2] +
            $awardedPointsQ5[2],
    }

    let fd400 = {
        product: $currentProducts.find((product) => product.id === '9044'),
        points:
            $awardedPointsQ1[3] +
            $awardedPointsQ2[3] +
            $awardedPointsQ3[3] +
            $awardedPointsQ4[3] +
            $awardedPointsQ5[3],
    }

    let airbox = {
        product: $currentProducts.find((product) => product.id === '9302'),
        points:
            $awardedPointsQ1[4] +
            $awardedPointsQ2[4] +
            $awardedPointsQ3[4] +
            $awardedPointsQ4[4] +
            $awardedPointsQ5[4],
    }

    // Define arrays for highest scoring products and scores
    let highestScoringProduct = []
    let scores = [
        sd3055.points,
        fdhighv.points,
        fd310.points,
        fd400.points,
        airbox.points,
    ]

    // Calculate the highest score and update the highestScoringProduct array
    $: {
        let highestScore = Math.max(
            sd3055.points,
            fdhighv.points,
            fd310.points,
            fd400.points,
            airbox.points,
        )

        if (sd3055.points === highestScore) {
            highestScoringProduct.push(sd3055)
        }
        if (fdhighv.points === highestScore) {
            highestScoringProduct.push(fdhighv)
        }
        if (fd310.points === highestScore) {
            highestScoringProduct.push(fd310)
        }
        if (fd400.points === highestScore) {
            highestScoringProduct.push(fd400)
        }
        if (airbox.points === highestScore) {
            highestScoringProduct.push(airbox)
        }
    }

    // Update product based on the currently shown recommendation
    $: product =
        highestScoringProduct[$currentlyShownRecommendation]?.product || {}

    // Reset the currently shown recommendation when the component is destroyed
    onDestroy(() => {
        currentlyShownRecommendation.set(0)
    })
</script>

{#if $activeAnswerQ1 !== null && $activeAnswerQ2 !== null && $activeAnswerQ3 !== null && $activeAnswerQ4 !== null && $activeAnswerQ5 !== null}
    <!-- Main container with padding -->
    <div class="p-16 w-full">
        <div class="flex w-full">
            <!-- Display the solution chart -->
            <SolutionChart {scores} />
        </div>
        <!-- Header section with title and navigation buttons -->
        <div
            class="flex flex-col xl:flex-row w-full items-center justify-between pt-16 mb-8"
        >
            <div>
                {#if $combinationErrorAirSupply}
                    <h2
                        class="mb-4 text-lg tracking-tight font-extrabold text-red-500 pb-4"
                    >
                        None of our solutions completely support your answers.
                    </h2>
                {/if}
                <h2
                    class="mb-4 text-3xl lg:text-3xl tracking-tight font-extrabold text-gray-900"
                >
                    Our Recommended Solution
                </h2>
                <p
                    class="max-w-screen-md text-base font-normal text-gray-500 pb-4"
                >
                    Explore the solution that best suits your needs. In some
                    cases, multiple solutions may be recommended. Feel free to
                    give us a call to learn more.
                </p>
                <!-- Action buttons for product details and quote request -->
                <div
                    class="mt-3 gap-3 sm:items-start flex flex-col sm:flex-row pb-4"
                >
                    <a
                        use:link
                        href={`/product-details/${product.id}`}
                        class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm hover:text-primary-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5 me-2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                        </svg>
                        Product Details
                    </a>
                    <a
                        on:click|preventDefault={() => {
                            formIndex.set(0)
                            navigate('/contact')
                        }}
                        href="#!"
                        target="_blank"
                        class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm hover:text-primary-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5 me-2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            />
                        </svg>
                        Request A Quote
                    </a>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a
                        on:click|preventDefault={() => {
                            navigateToConfigurator(product.id)
                        }}
                        class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm cursor-pointer hover:text-primary-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5 me-2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                            />
                        </svg>
                        Setup Configurator
                    </a>
                </div>
            </div>
            <div>
                <div class="flex items-center">
                    {#if highestScoringProduct.length > 1}
                        <!-- Previous button to navigate to the previous recommendation -->
                        <a
                            on:click|preventDefault={() => {
                                currentlyShownRecommendation.update((value) => {
                                    if (value === 0) {
                                        return highestScoringProduct.length - 1
                                    } else {
                                        return value - 1
                                    }
                                })
                            }}
                            href="#!"
                            class="inline-flex items-center text-sm capitalize font-medium text-gray-900 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm hover:bg-gray-50 me-4"
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
                        <p class="text-lg font-medium text-gray-900">
                            <span class="font-bold">
                                {$currentlyShownRecommendation + 1}
                            </span>
                            of
                            <span class="font-bold">
                                {highestScoringProduct.length}
                            </span>
                        </p>
                        <!-- Next button to navigate to the next recommendation -->
                        <a
                            on:click|preventDefault={() => {
                                currentlyShownRecommendation.update((value) => {
                                    if (
                                        value ===
                                        highestScoringProduct.length - 1
                                    ) {
                                        return 0
                                    } else {
                                        return value + 1
                                    }
                                })
                            }}
                            href="#!"
                            class="inline-flex items-center text-sm capitalize font-medium text-gray-900 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm hover:bg-gray-50 ms-4"
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
                    {/if}
                </div>
            </div>
        </div>
        <!-- Display product details -->
        <RecommendationDetails {product} />
        <SelectionReset />
    </div>
{:else}
    <!-- Prompt user to complete the questionnaire -->
    <div class="pt-32 p-16 w-full">
        <div class="flex flex-row w-full text-center justify-center">
            <div>
                <h2
                    class="mb-4 text-3xl lg:text-3xl tracking-tight font-extrabold text-gray-900"
                >
                    Please fill out the questionnaire as accurately as possible
                </h2>
            </div>
        </div>
        <p
            class="mb-6 font-light text-gray-500 md:text-lg justify-center text-center"
        >
            After answering all the questions, we will recommend the best suited
            solution for your application. Return to this step to view
            information on the result.
        </p>
        <div class="flex w-full justify-center">
            <a
                on:click|preventDefault={() => {
                    activateQuestion(0)
                }}
                href="#!"
                class="inline-flex items-center text-sm capitalize font-medium text-gray-900 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm hover:bg-gray-50 ms-4"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="size-4 me-2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                </svg>

                Try Again
            </a>
            <a
                on:click|preventDefault={() => {
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
                }}
                href="#!"
                class="inline-flex items-center text-sm capitalize font-medium text-gray-900 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm hover:bg-gray-50 ms-4"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="me-2 size-4"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                </svg>

                Reset
            </a>
        </div>
    </div>
{/if}
