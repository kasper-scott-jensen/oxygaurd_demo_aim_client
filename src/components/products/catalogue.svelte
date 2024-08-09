<script>
    // @ts-nocheck

    // Import necessary functions and components from Svelte and your project
    import { onMount } from 'svelte'
    import { derived, writable } from 'svelte/store'
    import { breadcrumb } from '../../stores/navigation.js'
    import {
        categoryMenu,
        searchText,
        sortingIndex,
    } from '../../stores/product_catalogue.js'
    import { currentProducts } from '../../stores/rackbeat.js'
    import ProductCardCompact from './product_card_compact.svelte'
    import ProductCatalogueSidebar from './catalogue_sidebar.svelte'
    import {
        clearSearchText,
        setCategoriesMenuToFalse,
    } from '../../js/products.js'

    // Set a fallback image URL for products without images
    let fallbackImg = '/img/fallback.webp'

    // Create a derived store to filter and sort products based on search text, selected categories, and sorting index
    let filteredProducts = derived(
        [currentProducts, searchText, categoryMenu, sortingIndex],
        ([$products, $searchText, $categoryMenu, $sortingIndex]) => {
            // Convert the search text to lowercase and remove any spaces
            let lowerCaseSearchText = $searchText
                .trim()
                .toLowerCase()
                .replace(/\s+/g, '')

            // Create a list of active category indices based on the selected categories in the menu
            let activeCategoryIndices = $categoryMenu.reduce(
                (acc, cur, index) => {
                    if (cur.state) acc.push(index)
                    return acc
                },
                [],
            )

            // Filter products based on search text and selected categories
            let items = $products.filter((product) => {
                // Normalize product ID and name for comparison
                let normalizedId = product.id.toLowerCase().replace(/\s+/g, '')
                let normalizedName = product.name
                    .toLowerCase()
                    .replace(/\s+/g, '')

                // Check if the search text matches the product ID or name
                let searchTextMatch =
                    normalizedId.includes(lowerCaseSearchText) ||
                    normalizedName.includes(lowerCaseSearchText)

                // Check if the product's category matches any of the active categories
                let categoryMatch =
                    activeCategoryIndices.length === 0 ||
                    activeCategoryIndices.includes(product.category_id)

                // Return true if both search text and category match
                return searchTextMatch && categoryMatch
            })

            // Define properties to sort by: name and ID
            const sortProperties = ['name', 'id']

            // Determine the sort property based on the sorting index
            const sortProperty =
                sortProperties[$sortingIndex % sortProperties.length]

            // Sort the filtered items based on the sort property
            items.sort((a, b) => {
                if (a[sortProperty] < b[sortProperty]) {
                    return -1
                } else if (a[sortProperty] > b[sortProperty]) {
                    return 1
                }
                return 0
            })

            // Return the filtered and sorted list of products
            return items
        },
    )

    // Store to keep track of the number of products to display
    let itemsToShow = writable(12)

    // Function to load more products
    function loadMore() {
        itemsToShow.update((n) => n + 12)
    }

    // Function to handle Escape key press to clear search and category selections
    function handleEscapeKeyPressed(event) {
        if (event.key === 'Escape') {
            setCategoriesMenuToFalse()
            clearSearchText()
        }
    }

    // Lifecycle hook to set breadcrumb and add an event listener for Escape key
    onMount(() => {
        breadcrumb.set([
            { title: 'Products', link: '/products' },
            { title: 'Catalogue', link: '/products/catalogue' },
        ])
        window.addEventListener('keydown', handleEscapeKeyPressed)
        return () => {
            window.removeEventListener('keydown', handleEscapeKeyPressed)
        }
    })
</script>

<!-- Main Section -->
<section class="pt-2 pb-32">
    <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Product Catalogue
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Browse through a complete overview of our products and
                solutions.
            </p>
        </div>

        <!-- SIDEBAR AND PRODUCT GRID -->
        <div class="flex flex-col lg:flex-row">
            <!-- Sidebar Section -->
            <div class="lg:w-1/5 bg-none mb-4 lg:mb-0">
                <ProductCatalogueSidebar />
            </div>
            <!-- Products Section -->
            <div class="lg:w-4/5 lg:ps-12">
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    <!-- No Results Message -->
                    {#if $filteredProducts.length === 0}
                        <div class="flex flex-col w-full ps-12 pt-6">
                            <h3
                                class="text-2xl font-bold tracking-tight text-red-600 pb-2"
                            >
                                No results !
                            </h3>
                            <p
                                class="flex items-center justify-start text-gray-900 font-medium"
                            >
                                Please try widening your search.
                            </p>
                        </div>
                    {/if}
                    <!-- Product Cards -->
                    {#each $filteredProducts.slice(0, $itemsToShow) as product}
                        <ProductCardCompact
                            name={product.name}
                            id={product.id}
                            categoryId={product.category_id}
                            category={product.category}
                            img={product.media.img_url || fallbackImg}
                        />
                    {/each}
                </div>
                <!-- Load More button -->
                {#if $filteredProducts.length > $itemsToShow}
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <div class="flex w-full justify-center pt-12">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <a
                            on:click|preventDefault={loadMore}
                            class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm cursor-pointer"
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
                                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                                />
                            </svg>
                            Load More
                        </a>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>
