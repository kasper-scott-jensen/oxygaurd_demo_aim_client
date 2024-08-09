<script>
    // Importing necessary modules for routing and navigation
    import { link, navigate } from 'svelte-routing'
    import {
        categoryMenu,
        currentProduct,
    } from '../../stores/product_catalogue.js'
    import {
        navigateToCatalogueWithCategory,
        navigateToCatalogueWithoutCategory,
    } from '../../js/navigation.js'
</script>

<!-- Mega menu dropdown -->
<div
    id="mega-menu-full-dropdown"
    class="mt-1 bg-white border-gray-200 shadow-sm border-y"
>
    <div
        class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:grid-cols-3 md:px-6"
    >
        <!-- First column for product links -->
        <ul>
            <li>
                <a
                    use:link
                    href="/products/dispensers"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Dispensers</div>
                    <span class="text-sm text-gray-500">
                        Adaptable dispensers for a wide array of applications
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href={`/product-details/9302`}
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">AirBox</div>
                    <span class="text-sm text-gray-500">
                        Electric precision dispensing controllers
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href={`/product-details/9503`}
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">AimPath URCap</div>
                    <span class="text-sm text-gray-500">
                        Task path logging and translation into waypoints
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href={`/product-details/9226`}
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">TCP Calibration Tool</div>
                    <span class="text-sm text-gray-500">
                        Tip detection and center point calibration
                    </span>
                </a>
            </li>
        </ul>

        <!-- Second column for accessory and replacement parts links -->
        <ul>
            <li>
                <a
                    href="#!"
                    on:click|preventDefault={() =>
                        navigateToCatalogueWithCategory(3)}
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Accessories</div>
                    <span class="text-sm text-gray-500">
                        Various kits and stand-alone parts
                    </span>
                </a>
            </li>
            <li>
                <a
                    href="#!"
                    on:click|preventDefault={() =>
                        navigateToCatalogueWithCategory(4)}
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Replacement Parts</div>
                    <span class="text-sm text-gray-500">
                        Parts for fast and easy replacement
                    </span>
                </a>
            </li>
            <li>
                <a
                    href="#!"
                    on:click|preventDefault={() =>
                        navigateToCatalogueWithoutCategory()}
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">
                        Product Catalogue <span
                            class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-1 rounded ms-2"
                        >
                            New
                        </span>
                    </div>
                    <span class="text-sm text-gray-500">
                        Browse through all our products and parts
                    </span>
                </a>
            </li>
        </ul>

        <!-- Third column for the main product link with background image -->
        <a
            use:link
            href="/products"
            class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light group shadow-md"
            style="background-image: url(/img/made_by_aim.webp)"
        >
            <p
                class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white"
            >
                Explore our dispensing solutions
            </p>
            <p class="text-white mb-5">
                Precise automated fluid dispensing solutions for collaborative
                robots.
            </p>
            <button
                type="button"
                class="inline-flex items-center text-sm font-medium text-center text-white rounded-lg border border-white px-2.5 py-1.5"
            >
                Browse
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
