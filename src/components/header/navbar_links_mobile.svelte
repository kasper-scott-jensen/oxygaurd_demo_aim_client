<script>
    // Importing necessary modules and stores
    import { link } from 'svelte-routing'
    import { megaMenuStates } from '../../stores/navigation'
    import MegaMenuSwitchMobile from './mega_menu_switch.svelte'

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
<div class="items-center justify-center w-full flex-col">
    <!-- Navigation list -->
    <ul
        class="flex flex-col font-medium border bg-white md:mt-0 md:border-0 md:bg-white"
    >
        <!-- Navigation item for Products -->
        <li class="w-full">
            <a
                use:link
                href="/products"
                class="block py-4 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
                Products
            </a>
        </li>
        <!-- Navigation item for Applications -->
        <li class="w-full">
            <a
                use:link
                href="/solutions"
                class="block py-4 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
                Solutions
            </a>
        </li>
        <!-- Navigation item for Knowledge Center -->
        <li class="w-full">
            <a
                use:link
                href="/knowledge-center"
                class="block py-4 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
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
        <li class="w-full">
            <a
                use:link
                href="/about"
                class="block py-4 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
                About
            </a>
        </li>
        <!-- Navigation item for Network -->
        <li class="w-full">
            <a
                use:link
                href="/network"
                class="block py-4 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
                Network
            </a>
        </li>
        <!-- Navigation item for Support -->
        <li class="w-full">
            <a
                use:link
                href="/support"
                class="block py-4 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
                Support
            </a>
        </li>
    </ul>
</div>
