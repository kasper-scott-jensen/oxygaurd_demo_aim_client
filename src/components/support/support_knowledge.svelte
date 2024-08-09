<script>
    // Import the link function from svelte-routing for navigation
    import { link } from 'svelte-routing'
</script>

<!-- Knowledge Center Banner -->
<div class="banner-container h-80">
    <a
        use:link
        href="/knowledge-center"
        class="flex flex-col h-full justify-center p-10 bg-local bg-primary-800 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-soft-light hover:opacity-70 placeholder:group shadow-md stripes mb-8"
        style="background-image: url(/img/learning_lots.webp)"
    >
        <!-- Banner Heading -->
        <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
            Knowledge Center
        </h2>
        <!-- Banner Description -->
        <p class="text-white mb-5">
            Your go-to hub for insight, documentation and guides.
        </p>
        <!-- Get Started Button -->
        <button
            type="button"
            class="flex w-36 px-3 py-2.5 items-center text-md font-medium text-center text-white border-white border rounded-lg"
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

<!-- Styles for the Knowledge Center Banner -->
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
