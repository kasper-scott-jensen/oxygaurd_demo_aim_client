<script>
    // Import necessary modules and functions
    import { link, navigate } from 'svelte-routing'
    import { currentProduct } from '../../stores/product_catalogue'

    import BrandList from './brand_icon_list.svelte'

    // Export props to be received from parent component
    export let img
    export let id
    export let badges
    export let nameSub
    export let name
    export let imgClass = ''
    export let hcl

    // Create an array of compatibility flags from hcl object
    let compatArray = [
        hcl.universal,
        hcl.kassow,
        hcl.tm_omron,
        hcl.fanuc,
        hcl.kuka,
        hcl.abb,
        hcl.doosan,
    ]

    // Map compatibility flags to a displayIcons array for BrandList
    let displayIcons = compatArray.map((item) => item.includes('1'))
</script>

<!-- Main article representing the product card -->
<article class="rounded-md p-6 bg-white group border border-gray-300 shadow-sm">
    <!-- Clickable area for navigation -->
    <a
        href="#!"
        on:click|preventDefault={() => navigate(`/product-details/${id}`)}
    >
        <!-- Image section with a unique ID badge -->
        <div
            class="relative flex items-end justify-center overflow-hidden rounded-md"
        >
            <img src={img} alt="article" class="{imgClass} h-96 w-auto" />
            <div class="absolute bottom-0 left-0 inline-flex items-center">
                <div class="flex items-center">
                    <p
                        class="bg-gray-900 text-white text-sm font-semibold inline-flex items-center p-1.5 px-2.5 rounded"
                    >
                        Order No. {id}
                    </p>
                </div>
            </div>
        </div>

        <!-- Product details section -->
        <div class="mt-1 pt-6">
            <!-- Display badges if any -->
            <div class="flex items-center pb-6">
                {#each badges.filter((badge) => badge !== null && badge !== undefined && badge !== '') as badge}
                    <span
                        class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                    >
                        {badge}
                    </span>
                {/each}
            </div>
            <!-- Product name and subtitle -->
            <h2 class="text-primary-700 font-bold text-xl">{name}</h2>
            <p class="text-gray-500 mt-1 text-md pb-2">{nameSub}</p>

            <!-- Read more button and brand icons list -->
            <div class="mt-3 flex flex-col items-start pb-2">
                <div class="pb-6">
                    <button
                        type="button"
                        class="flex items-center text-sm font-medium text-center text-primary-700 border-white rounded-lg group-hover:underline"
                    >
                        Read More
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
                <!-- BrandList component with displayIcons prop -->
                <BrandList {displayIcons} />
            </div>
        </div>
    </a>
</article>
