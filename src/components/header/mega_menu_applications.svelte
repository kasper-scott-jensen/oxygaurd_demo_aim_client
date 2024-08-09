<script>
    // Importing necessary modules
    import { link } from 'svelte-routing'
    import { navigateToArticleDetails } from '../../js/navigation'
</script>

<!-- Mega menu dropdown -->
<div
    id="mega-menu-full-dropdown"
    class="mt-1 bg-white border-gray-200 shadow-sm border-y"
>
    <div
        class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:grid-cols-3 md:px-6"
    >
        <!-- First column -->
        <ul>
            <li>
                <a
                    use:link
                    href="/solutions/selecting-your-solution"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">
                        Selecting Your Dispensing Solution
                    </div>
                    <span class="text-sm text-gray-500">
                        Find the perfect Aim Robotics unit for you
                    </span>
                </a>
            </li>
        </ul>

        <!-- Second column -->
        <ul>
            <li>
                <a
                    use:link
                    href="/solutions/houno"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Case Study - HOUNÖ</div>
                    <span class="text-sm text-gray-500">
                        A deep dive into our success with HOUNÖ
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href="/solutions/emanor"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Case Study - EMANOR</div>
                    <span class="text-sm text-gray-500">
                        Learn about our collaboration with EMANOR
                    </span>
                </a>
            </li>
        </ul>

        <!-- Image section -->
        <a
            use:link
            href="/solutions"
            class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light group shadow-md"
            style="background-image: url(/gallery/gallery_8.webp)"
        >
            <p
                class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white"
            >
                Solutions
            </p>
            <p class="text-white mb-5">
                Get the perfect dispensing solution for your business, either
                through our questionnarie or by browsing use cases.
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
