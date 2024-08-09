<script>
    import { link, navigate } from 'svelte-routing'
    import { formIndex } from '../../stores/contact'
</script>

<!-- Container for the partner section -->
<div class="mx-auto group py-4 w-full -mt-4 md:mt-4">
    <!-- Link styled as a button with background image and overlay -->
    <a
        use:link
        href="/network/become-a-partner"
        class="p-8 bg-local bg-primary-700/80 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-soft-light hover:opacity-80 flex flex-col w-full h-full shadow-md stripes"
        style="background-image: url(/img/partner.webp)"
    >
        <!-- Heading for the partner section -->
        <h2
            class="mb-4 text-3xl lg:text-3xl tracking-tight font-extrabold text-white"
        >
            Become A Partner
        </h2>
        <!-- Description for the partner section -->
        <p class="text-white mb-4">
            We look forward to exploring the potential of working together.
        </p>
        <!-- Button for more information -->
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

<!-- Custom styles for the partner section -->
<style>
    .stripes::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 30%;
        background: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5) 10px,
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
