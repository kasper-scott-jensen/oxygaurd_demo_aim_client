<script>
    // Import necessary stores and components
    import {
        activeQuestion,
        awardedPointsQ1,
        awardedPointsQ2,
        awardedPointsQ3,
        awardedPointsQ4,
        awardedPointsQ5,
    } from '../../stores/applications'
    import Stepper from './stepper.svelte'
    import SelectQ1 from './select_q1.svelte'
    import SelectQ2 from './select_q2.svelte'
    import SelectQ3 from './select_q3.svelte'
    import SelectQ4 from './select_q4.svelte'
    import SelectQ5 from './select_q5.svelte'
    import SelectResult from './select_result.svelte'
    import SelectionReset from './selection_reset.svelte'
    import MoreHelp from './more_help.svelte'
    import UseCaseBanner from './use_case_banner.svelte'
    import RunningResult from './running_result.svelte'
    import NotAvailableSolutions from '../utility/not_available_solutions.svelte'
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'

    onMount(() => {
        breadcrumb.set([
            { title: 'Solutions', link: '/solutions' },
            {
                title: 'Selecting Your Solution',
                link: '/solutions/selecting-your-solution',
            },
        ])
    })
</script>

<section class="dark:bg-gray-900 pb-24">
    <!-- Main section with dark background and padding at the bottom -->
    <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
        <!-- Container with horizontal padding, centered content, and max width for large screens -->
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <!-- Centered text container with margin at the bottom -->
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                <!-- Heading with specific styling for margin, font size, tracking, weight, and color -->
                Selecting Your Dispensing Solution
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl">
                <!-- Paragraph with light font weight, gray color, margin for large screens, and responsive font size -->
                Find the perfect Aim Robotics unit for you - just follow the steps
                below.
            </p>
        </div>
        <NotAvailableSolutions />
        <div class="hidden xl:block">
            <Stepper />
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div
                    class={`flex ${$activeQuestion[5] ? 'lg:col-span-4' : 'lg:col-span-3'}`}
                >
                    <div
                        class="flex w-full min-h-[650px] border border-gray-300 bg-white rounded-lg shadow-md mt-12"
                    >
                        <!-- Container for the selection components with flex display, full width, minimum height, border, background color, rounded corners, shadow, and margin at the top -->
                        {#if $activeQuestion[0]}
                            <!-- Conditional rendering based on the value of $activeQuestion -->
                            <SelectQ1 />
                        {:else if $activeQuestion[1]}
                            <SelectQ2 />
                        {:else if $activeQuestion[2]}
                            <SelectQ3 />
                        {:else if $activeQuestion[3]}
                            <SelectQ4 />
                        {:else if $activeQuestion[4]}
                            <SelectQ5 />
                        {:else if $activeQuestion[5]}
                            <SelectResult />
                        {/if}
                        <!-- Render the appropriate selection component based on the current active question -->
                    </div>
                </div>
                {#if !$activeQuestion[5]}
                    <div class="flex lg:col-span-1">
                        <div
                            class="flex w-full min-h-[650px] border border-gray-300 bg-white rounded-lg shadow-md lg:mt-12"
                        >
                            <RunningResult />
                        </div>
                    </div>
                {/if}
            </div>
        </div>
        <UseCaseBanner />
        <MoreHelp />
    </div>
</section>
