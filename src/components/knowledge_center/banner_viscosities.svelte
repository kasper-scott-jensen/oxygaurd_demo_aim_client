<script>
    import { navigate } from 'svelte-routing'

    let viscosities = [
        {
            name: 'Cyanoacrylate',
            visc: '100',
            applications: 'Quick fixes, small parts, plastic, metal',
        },
        {
            name: 'Epoxy Resin',
            visc: '10,000',
            applications: 'Strong bonding, repairs, construction',
        },
        {
            name: 'Silicone Adhesive / Sealant',
            visc: '30,000',
            applications: 'Sealing, waterproofing, electronics',
        },
        {
            name: 'Thermal Heat Sink Compound',
            visc: '30K - 60K',
            applications: 'Strong bonding, repairs, construction',
        },
    ]
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    on:click|preventDefault={() => {
        navigate('/knowledge-center/viscosities')
    }}
    class="flex h-full w-full group clear-right cursor-pointer"
>
    <div
        class="w-full p-8 bg-white border border-gray-300 rounded-lg shadow-md sm:p-8 hover:bg-gray-50"
    >
        <div class="flex items-center justify-between mb-4">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Material Viscosities
            </h5>
            <button
                type="button"
                class="flex items-center text-sm font-medium text-center text-primary-700 border-white rounded-lg group-hover:underline"
            >
                View All
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
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </button>
        </div>
        <div class="flow-root">
            <p class="mb-3 font-normal text-gray-500">
                Click here to learn more about the viscosities of different
                materials. This information can help you choose the right
                solution for your application.
            </p>
            <ul role="list" class="divide-y divide-gray-200">
                {#each viscosities as visc, index}
                    <li
                        class={`py-3 sm:py-4 ${index === viscosities.length ? 'border-b' : ''}`}
                    >
                        <div class="flex items-center">
                            <div class="flex-1 min-w-0">
                                <p
                                    class="text-md font-semibold text-gray-900 truncate"
                                >
                                    {visc.name}
                                </p>
                                <p class="text-sm text-gray-500 truncate">
                                    {visc.applications}
                                </p>
                            </div>
                            <div
                                class="inline-flex items-center text-base font-semibold text-gray-900"
                            >
                                {visc.visc} cP
                            </div>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
