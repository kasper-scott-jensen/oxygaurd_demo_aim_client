<script>
    // Importing necessary modules from Svelte and the alerts store
    import { onMount } from 'svelte'
    import { productInterfaceAlert } from '../../stores/alerts'

    // Variable to track if the alert has been read
    let hasReadAlert

    // Svelte lifecycle function to run code after the component is mounted
    onMount(() => {
        // Initialize the hasReadAlert variable with the current value of productInterfaceAlert
        hasReadAlert = $productInterfaceAlert
    })

    // Reactive statement that updates hasReadAlert whenever productInterfaceAlert changes
    $: if (hasReadAlert) {
        hasReadAlert = $productInterfaceAlert
    }

    // Function to handle the click event on the alert, setting the productInterfaceAlert to false
    function handleAlertClick() {
        productInterfaceAlert.set(false)
    }
</script>

<!-- Svelte ignore rules for accessibility -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

{#if hasReadAlert}
    <!-- Conditional rendering of the alert div based on hasReadAlert -->
    <div
        on:click|preventDefault={() => handleAlertClick()}
        class="hover:opacity-70 group hover:cursor-pointer flex items-center p-4 text-sm text-gray-900 border border-blue-300 rounded-lg bg-blue-50 shadow-md"
        role="alert"
    >
        <!-- SVG icon for the alert -->
        <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
            />
        </svg>
        <!-- Main content of the alert -->
        <div class="flex w-full justify-between">
            <div>Please contact us for information on your specific setup.</div>
            <!-- Close button for the alert with an SVG icon -->
            <div
                class="font-medium group-hover:underline inline-flex items-center"
            >
                <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-900 ms-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 8.586z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </div>
        </div>
    </div>
{/if}
