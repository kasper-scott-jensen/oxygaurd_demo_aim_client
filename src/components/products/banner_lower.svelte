<script>
    // Import necessary functions and components
    import { link } from 'svelte-routing'
    import { navigateToCatalogueWithCategory } from '../../js/navigation'
</script>

<!-- Main Container -->
<div class="md:flex mt-6 w-full gap-6">
    <!-- Accessories Section -->
    <div class="mx-auto group w-full pb-6 md:pb-0">
        <a
            on:click|preventDefault={() => navigateToCatalogueWithCategory(3)}
            href="#!"
            class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light flex flex-col w-full h-full py-12 shadow-md"
            style="background-image: url(/img/accessories.webp)"
        >
            <!-- Accessories Content -->
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
                Accessories
            </h2>
            <p class="text-white mb-4">
                All our various kits and stand-alone parts
            </p>
            <button
                type="button"
                class="flex w-24 px-2.5 py-1.5 items-center text-sm font-medium text-center text-white border-white border rounded-lg"
            >
                Browse
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
        </a>
    </div>
    <!-- Replacement Parts Section -->
    <div class="mx-auto group w-full">
        <a
            on:click|preventDefault={() => navigateToCatalogueWithCategory(4)}
            href="#!"
            class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light flex flex-col w-full h-full py-12 shadow-md"
            style="background-image: url(/img/parts.webp)"
        >
            <!-- Replacement Parts Content -->
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
                Replacement Parts
            </h2>
            <p class="text-white mb-4">Parts for fast and easy replacement</p>
            <button
                type="button"
                class="flex w-24 px-2.5 py-1.5 items-center text-sm font-medium text-center text-white border-white border rounded-lg"
            >
                Browse
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
        </a>
    </div>
</div>
