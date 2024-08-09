<script>
    // Import necessary modules and functions
    import { categoryMenu } from '../../stores/product_catalogue'
    import { navigate } from 'svelte-routing'

    // Export props to be received from parent component
    export let img
    export let id
    export let categoryId
    export let category
    export let name
    export let imgClass = ''

    // Fallback image in case the main image is unavailable
    let fallbackImg = '/img/fallback.webp'
</script>

<!-- Main clickable container for the product card -->
<a
    href="#!"
    on:click|preventDefault={() => navigate(`/product-details/${id}`)}
    class="block group"
>
    <!-- Article representing the product card -->
    <article
        class="rounded-md p-6 bg-white hover:cursor-pointer h-full flex flex-col border border-gray-300 shadow-sm"
    >
        <!-- Image container with fallback logic -->
        <div
            class="relative flex items-center justify-center overflow-hidden bg-white h-64"
        >
            <img
                src={img || fallbackImg}
                alt="article"
                class={`max-h-full w-full object-contain ${imgClass}`}
            />
            <!-- ID tag overlay on the image -->
            <div
                class="absolute bottom-0 left-0 bg-gray-900 text-white text-sm font-semibold px-2 py-1 rounded"
            >
                Order No. {id}
            </div>
        </div>

        <!-- Product details section -->
        <div class="mt-4 flex-grow">
            <h2 class="text-primary-700 font-bold text-lg">{name}</h2>
            <p class="text-gray-500 mt-1 text-sm capitalize">
                <span
                    class={`${$categoryMenu[categoryId].color} inline-block w-2.5 h-2.5 mr-1 rounded-full`}
                ></span>
                {category}
            </p>
        </div>

        <!-- Read more button with hover effect -->
        <div
            class="mt-4 flex items-center group-hover:underline group-hover:text-primary-700"
        >
            <button
                type="button"
                class="text-gray-700 text-sm font-medium group-hover:text-primary-700"
            >
                Read More
                <svg
                    class="w-4 h-4 ml-1 rtl:rotate-180 inline group-hover:text-primary-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </button>
        </div>
    </article>
</a>
