<script>
    import { activeQuestion } from '../../stores/applications' // Import the activeQuestion store

    // Declare and export props
    export let step
    export let description
    export let active
    export let isAnswered

    // Function to handle step click
    function handleStepClick(step) {
        activeQuestion.update((item) => {
            // Update the activeQuestion store to set the clicked step as active
            return item.map((_, index) => (index === step - 1 ? true : false))
        })
    }

    // SVG markup for the checkmark icon
    let checkmark = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    `
</script>

<!-- List item representing a step -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<li
    on:click|preventDefault={() => handleStepClick(step)}
    id={`item-${step}`}
    class={`flex items-center space-x-2.5 group cursor-pointer ${active ? 'text-primary-700' : 'text-gray-500'}`}
>
    <!-- Span element for the step number or checkmark -->
    <span
        id={`step-${step}`}
        class={`flex items-center justify-center w-8 h-8 group-hover:text-primary-700 group-hover:border-primary-700 border  rounded-full shrink-0 ${active ? 'border-primary-700' : 'border-gray-500'}`}
    >
        <!-- Render step number or checkmark based on isAnswered status -->
        {@html isAnswered ? checkmark : step}
    </span>
    <!-- Span element for the description -->
    <span>
        <h3 class="font-bold leading-tight group-hover:text-primary-700">
            {description}
        </h3>
        <!-- Step description -->
    </span>
</li>
