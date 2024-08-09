<script>
    // Import the link function from svelte-routing for navigation
    import { link } from 'svelte-routing'

    // Initialize the image source
    let imgSrc = '/img/worldmap_blue.webp'
</script>

<!-- Global Support Section -->
<section class="">
    <div class="gap-8 items-center mx-auto max-w-screen-2xl pb-12 lg:px-0">
        <!-- World Map Image Link -->
        <a use:link href="/network/partners">
            <img
                class="w-full rounded-lg mb-8 border border-gray-300 p-4 shadow-md max-h-80 xl:h-auto bg-white hover:opacity-80"
                src={imgSrc}
                alt="worldmap"
            />
        </a>
        <!-- Support Information -->
        <div class="mt-4 md:mt-0">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Get Help Wherever You Are
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg">
                We are committed to ensuring that our customers receive
                top-notch assistance and guidance, regardless of where they are
                in the world. With over 50+ trusted partners spanning across 30+
                countries, we are always within reach.
            </p>
            <!-- Read More Link -->
            <a
                use:link
                href="/network/partners"
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
