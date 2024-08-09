<script>
    // Import necessary functions and stores
    import { link, navigate } from 'svelte-routing'
    import { formIndex } from '../../stores/contact'
</script>

<!-- Partner Banner Section -->
<div class="hidden lg:flex w-full mt-6">
    <div class="banner-container">
        <a
            use:link
            href="/network/become-a-partner"
            class="flex flex-col p-8 bg-local bg-primary-700/80 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-soft-light hover:opacity-70 placeholder:group shadow-md stripes mb-4"
            style="background-image: url(/img/partner.webp)"
        >
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
                Become a Partner
            </h2>
            <p class=" text-white mb-5 font-medium">
                To learn more about partnership opportunities or to discuss how
                we can tailor a partnership to meet your specific goals, please
                do not hesitate to contact us. We look forward to exploring the
                potential of working together.
            </p>
            <button
                type="button"
                class="flex w-32 px-2.5 py-1.5 items-center text-sm font-medium text-center text-white border-white border rounded-lg"
            >
                Get Started
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

<!-- Network Growth Section -->
<div class="hidden lg:flex w-full mt-0">
    <nav class="p-8 bg-gray-900 border-gray-300 rounded-lg shadow-md w-full">
        <h2 class="mb-8 text-3xl tracking-tight font-extrabold text-white">
            A Network in Growth
        </h2>
        <p class="mb-2 text-primary-700 text-5xl font-bold">50+</p>
        <h2 class="text-xl font-semibold mb-8 text-white rounded-lg w-full">
            Partners
        </h2>
        <p class="mb-2 text-primary-700 text-5xl font-bold">30+</p>
        <h2 class="text-xl font-semibold mb-4 text-white rounded-lg w-full">
            Countries
        </h2>
        <p class="mb-2 text-primary-700 text-5xl font-bold">1</p>
        <h2 class="text-xl font-semibold mb-4 text-white rounded-lg w-full">
            Common Goal
        </h2>
    </nav>
</div>

<!-- Styles for Banners and Stripes -->
<style>
    .banner-container {
        position: relative;
    }

    .stripes::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 30%;
        background: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.4) 10px,
            rgba(0, 0, 0, 0) 60px,
            rgba(0, 0, 0, 0) 60px
        );
        mask-image: linear-gradient(to right, transparent, black);
        pointer-events: none;
        z-index: 1;
    }

    a.stripes {
        position: relative;
        overflow: hidden;
    }

    a.stripes > * {
        position: relative;
        z-index: 2;
    }
</style>
