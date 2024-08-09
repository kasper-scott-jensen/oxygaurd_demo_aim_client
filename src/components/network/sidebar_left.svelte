<script>
    // Import necessary functions and stores
    import {
        clearSearchText,
        handleCobotsClick,
        setCobotsMenuToFalse,
    } from '../../js/network.js'
    import {
        cobotsMenu,
        searchText,
        sortingIndex,
        integratorOption,
    } from '../../stores/network_catalogue.js'
</script>

<!-- Sorting Section -->
<div class="flex flex-col w-full pb-8">
    <h3 class="mb-4 text-gray-900 text-xs uppercase font-semibold">Sort By</h3>
    <form class="mx-auto w-full" id="sort-form">
        <select
            id="sorting"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 hover:bg-gray-50 shadow-sm cursor-pointer"
            placeholder="Name"
            bind:value={$sortingIndex}
        >
            <option value="0" class="py-4">Company</option>
            <option value="1" class="py-4">Country</option>
        </select>
    </form>
</div>

<!-- Search Section -->
<div class="flex w-full justify-between">
    <h3 class="mb-4 text-gray-900 text-xs uppercase font-semibold">Search</h3>
    {#if $searchText && $searchText !== ''}
        <!-- Clear Search Text -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="flex flex-row cursor-pointer group"
            on:click|preventDefault={() => clearSearchText()}
        >
            <p class="me-3 text-sm mt-0.5 group-hover:text-primary-700">
                Clear
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 group-hover:text-primary-700"
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

<!-- Search Input Form -->
<form class="mx-auto pb-8 w-full" on:submit|preventDefault>
    <div class="relative">
        <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
            <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
            </svg>
        </div>
        <input
            bind:value={$searchText}
            type="search"
            id="default-search"
            class="caret block w-full p-3 ps-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 shadow-sm"
            placeholder="Enter name or country..."
        />
    </div>
</form>

<!-- Sorting Section -->
<div class="flex flex-col w-full pb-8">
    <h3 class="mb-4 text-gray-900 text-xs uppercase font-semibold">
        Partner Type
    </h3>
    <form class="mx-auto w-full" id="sort-form">
        <select
            id="sorting"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 hover:bg-gray-50 shadow-sm cursor-pointer"
            bind:value={$integratorOption}
        >
            <option value="0" class="py-4">Distributor</option>
            <option value="1" class="py-4">Integrator</option>
        </select>
    </form>
</div>

<!-- Manufacturers Section -->
<div class="flex w-full justify-between">
    <h3 class="mb-4 text-gray-900 text-xs uppercase font-semibold">
        Supported Cobots
    </h3>
    {#if $cobotsMenu.filter((cobot) => cobot.state).length > 0}
        <!-- Clear Manufacturers Filter -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="flex flex-row cursor-pointer group"
            on:click|preventDefault={() => setCobotsMenuToFalse()}
        >
            <p class="me-3 text-sm mt-0.5 group-hover:text-primary-700">
                Clear
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 group-hover:text-primary-700"
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

<!-- Manufacturers Filter List -->
<ul
    class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm mb-8"
>
    {#each $cobotsMenu as cobot, index}
        <!-- Cobot Item -->
        <li
            class="w-full border-b rounded-t-lg hover:bg-gray-50 cursor-pointer group"
        >
            <div class="flex items-center ps-3 cursor-pointer">
                <input
                    id={`cobot-${index}`}
                    type="checkbox"
                    checked={cobot.state}
                    class="text-gray-700 w-5 h-5 bg-gray-100 border-gray-300 rounded cursor-pointer group-hover:text-primary-700"
                    on:click={() => handleCobotsClick(index)}
                />
                <div class="p-2 w-24 flex flex-row justify-center ms-4">
                    <img
                        src={cobot.logo}
                        alt="logo"
                        class="max-w-10 max-h-3 h-auto w-auto"
                    />
                </div>
                <label
                    for={`cobot-${index}`}
                    class="w-full py-3 ms-5 text-sm font-medium text-gray-900 capitalize cursor-pointer group-hover:text-primary-700"
                >
                    {cobot.cobot}
                </label>
            </div>
        </li>
    {/each}
</ul>
