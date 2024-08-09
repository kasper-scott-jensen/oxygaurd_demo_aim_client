<script>
    // Importing necessary module for routing
    import { link } from 'svelte-routing'
</script>

<!-- Mega menu dropdown -->
<div
    id="mega-menu-full-dropdown"
    class="mt-1 bg-white border-gray-200 shadow-sm border-y"
>
    <div
        class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:grid-cols-4 md:px-6"
    >
        <!-- First column -->
        <ul>
            <li>
                <a
                    use:link
                    href="/knowledge-center/how-they-work"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">How Our Dispensers Work</div>
                    <span class="text-sm text-gray-500">
                        The technology behind our dispensers
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href="/knowledge-center/comparison"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Dispenser Comparison</div>
                    <span class="text-sm text-gray-500">
                        The differences between our solutions
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href="/knowledge-center/configurator"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Setup Configurator</div>
                    <span class="text-sm text-gray-500">
                        Our tool for setup testing and fine-tuning
                    </span>
                </a>
            </li>
        </ul>

        <!-- Second column -->
        <ul>
            <li>
                <a
                    use:link
                    href="/knowledge-center/considerations"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Basic Considerations</div>
                    <span class="text-sm text-gray-500">
                        What to do and what to avoid
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href="/knowledge-center/viscosities"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Material Viscosities</div>
                    <span class="text-sm text-gray-500">
                        An overview of materials for dispensing
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href="/knowledge-center/optimizing"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Optimizing Your Dispensing</div>
                    <span class="text-sm text-gray-500">
                        Achieving optimal dispensing results
                    </span>
                </a>
            </li>
        </ul>

        <!-- Third column -->
        <ul>
            <li>
                <a
                    href="https://www.youtube.com/@aim-robotics"
                    target="_blank"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Product Videos</div>
                    <span class="text-sm text-gray-500">
                        Visit us on YouTube to learn more
                    </span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.dropbox.com/scl/fo/6ungwdybmqgscbdvj4x4l/ALXnOKIv4hBtanJa4s0S1oQ/Products?rlkey=q0brsb7nbplrdr05lrili5q5w&subfolder_nav_tracking=1&st=xnvmeq4d&dl=0"
                    target="_blank"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Resource Hub</div>
                    <span class="text-sm text-gray-500">
                        Documentation, 3D files and more
                    </span>
                </a>
            </li>
        </ul>

        <!-- Knowledge Center section -->
        <a
            use:link
            href="/knowledge-center"
            class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light group shadow-md"
            style="background-image: url(/img/learning_lots.webp)"
        >
            <p
                class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white"
            >
                Aim Robotics Knowledge Center
            </p>
            <p class="text-white mb-5">
                Your go-to hub for insight, documentation and guides.
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
