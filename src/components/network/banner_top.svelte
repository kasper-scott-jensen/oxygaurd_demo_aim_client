<script>
    import { link } from 'svelte-routing'
</script>

<!-- Main container for the section -->
<div class="mx-auto group py-4">
    <!-- Link styled as a button with background image and overlay -->
    <a
        use:link
        href="/network/worldmap"
        class="p-8 bg-local bg-gray-100 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:opacity-80 flex flex-col w-full h-full py-10 shadow-md"
        style="background-image: url(/img/worldmap.webp)"
    >
        <!-- Heading for the world map section -->
        <h2
            class="mb-4 text-3xl lg:text-3xl tracking-tight font-extrabold text-white"
        >
            World Map
        </h2>
        <!-- Description for the world map section -->
        <p class="text-white mb-4">
            Browse through a complete overview of our network and partners.
        </p>
        <!-- Button for more information -->
        <button
            type="button"
            class="flex w-24 px-2.5 py-1.5 items-center text-sm font-medium text-center text-white border-white border rounded-lg"
        >
            Explore
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
