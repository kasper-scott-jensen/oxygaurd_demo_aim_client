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
            use:link
            href="/solutions/houno"
            class="p-8 bg-local bg-gray-500/70 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light flex flex-col w-full h-full py-12 shadow-md"
            style="background-image: url(/img/houno_static.webp)"
        >
            <!-- Accessories Content -->
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
                Case Study - HOUNÖ
            </h2>
            <p class="text-white mb-4">
                A deep dive into our success with HOUNÖ
            </p>
            <button
                type="button"
                class="flex w-28 px-2.5 py-1.5 items-center text-sm font-medium text-center text-white border-white border rounded-lg"
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
        </a>
    </div>
    <!-- Replacement Parts Section -->
    <div class="mx-auto group w-full">
        <a
            use:link
            href="/solutions/emanor"
            class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light flex flex-col w-full h-full py-12 shadow-md"
            style="background-image: url(/img/emanor_static.webp)"
        >
            <!-- Replacement Parts Content -->
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
                Case Study - EMANOR
            </h2>
            <p class="text-white mb-4">
                Learn about our collaboration with EMANOR
            </p>
            <button
                type="button"
                class="flex w-28 px-2.5 py-1.5 items-center text-sm font-medium text-center text-white border-white border rounded-lg"
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
        </a>
    </div>
</div>
