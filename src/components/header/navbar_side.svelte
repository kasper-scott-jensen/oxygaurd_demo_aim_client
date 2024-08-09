<script>
    // Importing the smooth scroll function for navigation
    import { smoothScrollToAnchor } from '../../js/navigation'

    // Receiving the links array as a prop
    export let links
</script>

<!-- Container for the navigation menu -->
<div class="hidden lg:flex w-full">
    <!-- Navigation section with styling for the scrollspy -->
    <nav
        class="scrollspy p-6 bg-white border border-gray-300 rounded-lg shadow-md w-full"
    >
        <!-- Title for the navigation section -->
        <h2 class="text-xl font-semibold mb-4">On This Page</h2>
        <!-- Unordered list for navigation links -->
        <ul class="space-y-2">
            <!-- Looping through each link to create list items -->
            {#each links as link}
                <li>
                    <!-- Anchor tag for each link with click event to trigger smooth scroll -->
                    <a
                        href="#!"
                        on:click={(event) =>
                            smoothScrollToAnchor(event, link.anchor)}
                        class="text-blue-500 hover:underline"
                    >
                        {link.title}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</div>
