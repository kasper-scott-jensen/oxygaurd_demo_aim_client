<script>
    // Import the onMount lifecycle function from Svelte and necessary stores
    import { onMount } from 'svelte'
    import {
        activeAnswerQ1,
        activeAnswerQ2,
        activeAnswerQ3,
        activeAnswerQ4,
        activeAnswerQ5,
        activeQuestion,
    } from '../../stores/applications'
    import StepItem from './step_item.svelte' // Import the StepItem component
</script>

<div class="flex w-full items-center justify-center">
    <!-- Container with flexbox to center items -->
    <ol
        class="items-center w-full space-y-4 grid xs:grid-cols-1 sm:grid-cols-3 lg:flex lg:space-x-8 lg:space-y-0 justify-center"
    >
        <!-- Ordered list with different grid and flexbox layouts for various screen sizes -->

        <!-- Step item for question 1 -->
        <StepItem
            step="1"
            description="Precision and Volume"
            active={$activeQuestion[0]}
            isAnswered={$activeAnswerQ1 !== null}
        />
        <!-- Horizontal rule, hidden on small screens, displayed on large screens -->
        <hr class="w-8 border-gray-900 hidden lg:block" />

        <!-- Step item for question 2 -->
        <StepItem
            step="2"
            description="Manoeuvrability"
            active={$activeQuestion[1]}
            isAnswered={$activeAnswerQ2 !== null}
        />
        <hr class="w-8 border-gray-900 hidden lg:block" />

        <!-- Step item for question 3 -->
        <StepItem
            step="3"
            description="Material Container"
            active={$activeQuestion[2]}
            isAnswered={$activeAnswerQ3 !== null}
        />
        <hr class="w-8 border-gray-900 hidden lg:block" />

        <!-- Step item for question 4 -->
        <StepItem
            step="4"
            description="Air Supply"
            active={$activeQuestion[3]}
            isAnswered={$activeAnswerQ4 !== null}
        />
        <hr class="w-8 border-gray-900 hidden lg:block" />

        <!-- Step item for question 5 -->
        <StepItem
            step="5"
            description="Viscosity"
            active={$activeQuestion[4]}
            isAnswered={$activeAnswerQ5 !== null}
        />
        <hr class="w-8 border-gray-900 hidden lg:block" />

        <!-- Step item for the final result -->
        <StepItem
            step="6"
            description="Result"
            active={$activeQuestion[5]}
            isAnswered={false}
        />
    </ol>
</div>
