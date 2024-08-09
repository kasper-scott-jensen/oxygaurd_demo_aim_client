<script>
    // Import the necessary modules from Svelte
    import { link } from 'svelte-routing'
</script>

<!-- Container for the call-to-action banner -->
<div class="mx-auto group pb-8">
    <!-- Link to the contact page with a background image and other styles -->
    <a
        use:link
        href="/contact"
        class="p-8 bg-local bg-gray-900 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light flex flex-col w-full h-full py-10 shadow-md"
        style="background-image: url(/img/made_by_aim.webp)"
    >
        <!-- Heading of the banner -->
        <h2
            class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white"
        >
            Didn't Find What You Were Looking For?
        </h2>
        <!-- Description of the banner -->
        <p class=" text-white mb-4">
            Feel free to contact us. Our team is always ready to answer any and
            all questions about our products.
        </p>
        <!-- Button to get in touch -->
        <button
            type="button"
            class="flex w-32 px-2.5 py-1.5 items-center text-sm font-medium text-center text-white border-white border rounded-lg"
        >
            Get In Touch
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
