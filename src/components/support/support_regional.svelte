<script>
    // Import the link function from svelte-routing for navigation
    import { link } from 'svelte-routing'

    // Initialize the image source
    let imgSrc = '/img/support.webp'
</script>

<!-- Support Section -->
<section class="">
    <div class="gap-8 items-center lg:px-0 mx-auto max-w-screen-2xl pb-12">
        <!-- BlueBay Automation Image Link -->
        <a use:link href="/support/regional">
            <img
                class="w-full rounded-lg shadow-md mb-8 max-h-80 xl:h-auto hover:opacity-80"
                src={imgSrc}
                alt="bluebay"
            />
        </a>

        <!-- Support Information -->
        <div class="mt-4 md:mt-0">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Regional Support
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg">
                Looking for assistance with our products or services? Our
                dedicated regional support teams are here to help you. Whether
                you have questions, need technical support, or want to explore
                our latest offerings, you will find it here.
            </p>

            <!-- Read More Link -->
            <a
                use:link
                href="/support/regional"
                class="inline-flex items-center text-lg font-medium text-[#00adee] hover:underline"
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
            </a>
        </div>
    </div>
</section>
