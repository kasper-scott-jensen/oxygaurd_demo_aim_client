<script>
    // Import necessary module from Svelte
    import { link } from 'svelte-routing'
</script>

<!-- Banner container -->
<div class="mx-auto group banner-container">
    <!-- Link to dispensers page with background image and overlay effect -->
    <a
        use:link
        href="/knowledge-center/configurator"
        class="p-8 bg-local bg-primary-800 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-soft-light hover:bg-blend-screen flex flex-col w-full h-full py-12 shadow-md stripes"
        style="background-image: url(/bg/dispenser_sd.webp)"
    >
        <!-- Banner heading -->
        <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
            Setup Configurator
        </h2>
        <!-- Banner subheading -->
        <p class="text-white mb-4">
            Test and fine-tune your dispensing setup with our configurator tool.
        </p>
        <!-- Button to navigate to the dispensers page -->
        <button
            type="button"
            class="flex w-32 border px-2.5 py-1.5 items-center text-sm font-medium text-center text-white border-white rounded-lg"
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

<style>
    /* Container for the banner */
    .banner-container {
        position: relative;
    }

    /* Adding stripes overlay effect to the banner */
    .stripes::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 30%;
        background: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3) 10px,
            rgba(0, 0, 0, 0) 60px,
            rgba(0, 0, 0, 0) 60px
        );
        mask-image: linear-gradient(to right, transparent, black);
        pointer-events: none;
        z-index: 1;
    }

    /* Style adjustments for the link */
    a.stripes {
        position: relative;
        overflow: hidden;
    }

    /* Ensuring that the content of the link is on top of the stripes */
    a.stripes > * {
        position: relative;
        z-index: 2;
    }
</style>
