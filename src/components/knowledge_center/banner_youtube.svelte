<script>
    import { link } from 'svelte-routing'
</script>

<div class="mx-auto group w-full">
    <a
        href="https://www.youtube.com/@aim-robotics"
        target="_blank"
        class="p-8 bg-local bg-gray-800 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-soft-light hover:bg-opacity-80 flex flex-col w-full h-full py-12 shadow-md"
        style="background-image: url(/img/youtube.webp)"
    >
        <!-- Replacement Parts Content -->
        <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
            Product Videos
        </h2>
        <p class="text-white mb-4">
            Visit us on YouTube to watch videos about our products and company.
        </p>
        <button
            type="button"
            class="flex w-32 px-2.5 py-1.5 items-center text-sm font-medium text-center text-white border-white border rounded-lg"
        >
            Watch Now
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
