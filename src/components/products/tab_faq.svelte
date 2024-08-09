<script>
    // Import necessary functions
    import { onDestroy, onMount } from 'svelte'

    // Export the product prop to be received from the parent component
    export let product

    // State to manage the currently open section in the FAQ
    let openSection = null
    // Array to store FAQ data
    let faq = []

    // Reactive statement to populate the FAQ array when the product is set
    $: if (product) {
        faq = product.faq
            .filter((item) => item !== null && item.trim() !== '')
            .map((item, index) => {
                const [title, ...bodyParts] = item.split('\n')
                return {
                    id: `collapse-${index + 1}`,
                    title: title.replace(/\*/g, '').trim(),
                    body: bodyParts.join('\n').trim(),
                }
            })
    }

    // Function to toggle the open section
    function toggleSection(section) {
        openSection = openSection === section ? null : section
    }
</script>

<!-- FAQ Section -->
<div class="border border-gray-300 rounded-lg bg-white shadow-md">
    {#each faq as { id, title, body }, index}
        <div
            class:border-b={index !== faq.length - 1}
            class="relative border-gray-300 group"
        >
            <!-- FAQ Question -->
            <h6 class="mb-0">
                <button
                    class="relative flex items-center w-full p-4 font-medium text-sm text-left cursor-pointer border-gray-200 text-gray-900 rounded-t-1 group text-dark-500 hover:bg-gray-50"
                    on:click={() => toggleSection(index)}
                    aria-expanded={openSection === index}
                    aria-controls={id}
                >
                    <span class="flex items-center">
                        <svg
                            class="w-5 h-5 me-2 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                    <span class="group-hover:text-primary-700">{title}</span>
                    <svg
                        class="absolute right-4 w-4 h-4 transition-transform {openSection ===
                        index
                            ? 'rotate-90'
                            : 'rotate-0'}"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                </button>
            </h6>
            <!-- FAQ Answer -->
            <div
                {id}
                class:h-0={openSection !== index}
                class:overflow-hidden={openSection !== index}
                class:border-t={openSection === index}
            >
                <div class="p-4 -mt-2 text-sm leading-normal text-gray-500">
                    {#each body.split('\n') as line}
                        <p>{line}</p>
                    {/each}
                </div>
            </div>
        </div>
    {/each}
</div>

<!-- Styles for rotation animations -->
<style>
    .rotate-90 {
        transform: rotate(90deg);
    }
    .rotate-0 {
        transform: rotate(0deg);
    }
</style>
