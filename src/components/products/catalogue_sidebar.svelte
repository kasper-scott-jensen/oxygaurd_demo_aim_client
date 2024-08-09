<script>
    import {
        categoryMenu,
        searchText,
        sortingIndex,
    } from '../../stores/product_catalogue.js'
    import {
        setCategoriesMenuToFalse,
        clearSearchText,
        handleCategoryClick,
    } from '../../js/products.js'
</script>

<!-- Sorting Section -->
<div class="flex flex-col w-full pb-8">
    <h3 class="mb-4 text-gray-900 text-xs uppercase font-semibold">Sort By</h3>
    <form class="mx-auto w-full" id="sort-form">
        <!-- Sorting Dropdown -->
        <select
            id="sorting"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 hover:bg-gray-50 shadow-sm cursor-pointer"
            placeholder="Name"
            bind:value={$sortingIndex}
        >
            <option value="0" class="py-4">Name</option>
            <option value="1" class="py-4">Product No.</option>
        </select>
    </form>
</div>

<!-- Search Section -->
<div class="flex w-full justify-between">
    <h3 class="mb-4 text-gray-900 text-xs uppercase font-semibold">Search</h3>
    <!-- Clear Search Button -->
    {#if $searchText && $searchText !== ''}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="flex flex-row cursor-pointer hover:text-primary-700"
            on:click={clearSearchText}
        >
            <p class="me-3 text-sm mt-0.5">Clear</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
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
<form class="mx-auto pb-8" on:submit|preventDefault>
    <div class="relative">
        <!-- Search Input Field -->
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
            placeholder="Enter name or product number..."
        />
    </div>
</form>

<!-- Categories Section -->
<div class="flex w-full justify-between">
    <h3 class="mb-4 text-gray-900 text-xs uppercase font-semibold">
        Categories
    </h3>
    <!-- Clear Categories Button -->
    {#if $categoryMenu.filter((cat) => cat.state).length > 0}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="flex flex-row cursor-pointer hover:text-primary-700"
            on:click={() => {
                setCategoriesMenuToFalse()
            }}
        >
            <p class="me-3 text-sm mt-0.5">Clear</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
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
<ul
    class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md mb-4 shadow-sm"
>
    <!-- Category List Items -->
    {#each $categoryMenu as cat, index}
        <li class="w-full border-b rounded-t-lg h-full hover:bg-gray-50 group">
            <div class="flex items-center ps-3">
                <input
                    id={`cat-${index}`}
                    type="checkbox"
                    checked={cat.state}
                    class="text-gray-700 w-5 h-5 bg-gray-100 border-gray-300 rounded cursor-pointer group-hover:text-primary-700"
                    on:click={() => handleCategoryClick(index)}
                />
                <label
                    for={`cat-${index}`}
                    class="w-full py-3 ms-2 text-sm font-medium text-gray-900 capitalize cursor-pointer group-hover:text-primary-700"
                >
                    <span
                        class={`${cat.color} inline-block w-2.5 h-2.5 mr-1 mx-2 rounded-full`}
                    ></span>
                    {cat.cat}
                </label>
            </div>
        </li>
    {/each}
</ul>
