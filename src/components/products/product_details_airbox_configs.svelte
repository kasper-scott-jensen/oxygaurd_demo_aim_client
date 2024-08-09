<script>
    // Import necessary modules and components
    import { link } from 'svelte-routing'
    import { allProducts } from '../../stores/rackbeat'
    import { airboxConfig } from '../../stores/product_catalogue'
    import { onMount } from 'svelte'

    // Configuration objects
    let config1 = $allProducts.find((item) => item.id === '9311')
    let config2 = $allProducts.find((item) => item.id === '9308')
    let config3 = $allProducts.find((item) => item.id === '9309')
    let config4 = $allProducts.find((item) => item.id === '9310')

    // Array of configuration objects with their respective titles
    let configArray = [
        {
            airbox: 1,
            title: `30/55 cc Syringe`,
            config: config1,
        },
        {
            airbox: 2,
            title: '310 ml Cartridge',
            config: config2,
        },
        {
            airbox: 3,
            title: '2K Cartridge 1:1',
            config: config3,
        },
        {
            airbox: 4,
            title: '2K Cartridge 1:2',
            config: config4,
        },
    ]

    // Choose the configuration to display
    function handleConfigClicked(airbox) {
        airboxConfig.set(airbox)
    }

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
            airboxConfig.set(0)
        }
    }
</script>

<!-- Configurations header -->
{#if true}
    <div class="flex flex-row items-start justify-between w-full text-start">
        <p class="mb-4 text-xs font-bold text-gray-900 uppercase">
            Configurations
        </p>
        {#if $airboxConfig !== 0}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="flex flex-row cursor-pointer"
                on:click={() => airboxConfig.set(0)}
            >
                <p class="me-3 text-sm mt-0.5">Clear</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#222C56"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
            </div>
        {/if}
    </div>
{/if}

<!-- Configuration cards -->
<div
    class="grid grid-cols-2 xl:grid-cols-4 w-full items-center justify-center gap-3 pb-4"
>
    {#each configArray as config, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            on:click|preventDefault={() => handleConfigClicked(config.airbox)}
            class="group flex flex-col w-full justify-start cursor-pointer p-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 shadow-sm {index ===
            $airboxConfig - 1
                ? 'border-primary-700'
                : ''}"
        >
            <p class="text-gray-900 text-xs uppercase font-semibold mb-2">
                Config {index + 1}
                {index === 2 || index === 3 ? '*' : ''}
            </p>
            <p class="font-bold text-primary-700">
                {config.title}
            </p>
            <a
                href="#!"
                class="inline-flex items-center text-sm font-medium text-[#222c56] hover:underline group-hover:underline mt-1 group-hover:text-primary-700"
            >
                Apply Config
                <svg
                    class="w-3 h-3 ms-2 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                </svg>
            </a>
        </div>
    {/each}
</div>

<!-- Footer note for configurations -->
<div class="flex w-full text-start">
    <p class="text-gray-900 text-xs font-normal mb-4">
        * More ratios available upon request.
    </p>
</div>
