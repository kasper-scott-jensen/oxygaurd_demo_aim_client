<script>
    // Importing necessary modules for routing and state management
    import { link } from 'svelte-routing'
    import { megaMenuStates } from '../../stores/navigation'

    // Function to toggle the mega menu state
    function toggleMegaMenu(index) {
        megaMenuStates.update((states) => {
            // Toggle the state of the selected menu
            states[index] = !states[index]
            // Close all other menus if one is opened
            if (states[index]) {
                states = states.map((_, i) => i === index)
            }
            return states
        })
    }
</script>

<!-- Container for the navigation menu -->
<div
    class="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
>
    <!-- Navigation list -->
    <ul
        class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-50 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
    >
        <!-- Navigation item for Products -->
        <li>
            <a
                on:click|preventDefault={() => toggleMegaMenu(0)}
                href="#!"
                class="block py-4 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:px-0"
            >
                Products
            </a>
        </li>
        <!-- Navigation item for Applications -->
        <li>
            <a
                on:click|preventDefault={() => toggleMegaMenu(1)}
                href="#!"
                class="block py-4 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:px-0"
            >
                Solutions
            </a>
        </li>
        <!-- Navigation item for Knowledge Center -->
        <li>
            <a
                on:click|preventDefault={() => toggleMegaMenu(2)}
                href="#!"
                class="block py-4 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:px-0"
            >
                Knowledge Center
                <span
                    class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-1 rounded ms-2"
                >
                    New
                </span>
            </a>
        </li>
        <!-- Navigation item for About -->
        <li>
            <a
                use:link
                href="/about"
                class="block py-4 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:px-0"
            >
                About
            </a>
        </li>
        <!-- Navigation item for Network -->
        <li>
            <a
                on:click|preventDefault={() => toggleMegaMenu(3)}
                href="#!"
                class="block py-4 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:px-0"
            >
                Network
            </a>
        </li>
        <!-- Navigation item for Support -->
        <li>
            <a
                on:click|preventDefault={() => toggleMegaMenu(4)}
                href="#!"
                class="block py-4 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:px-0"
            >
                Support
            </a>
        </li>
    </ul>
</div>
