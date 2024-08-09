<script>
    // Importing necessary module for routing
    import { link, navigate } from 'svelte-routing'
    import { formIndex } from '../../stores/contact'
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
                    href="/support"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Overview</div>
                    <span class="text-sm text-gray-500">
                        Technical support and assistance within reach
                    </span>
                </a>
            </li>
        </ul>

        <!-- Second column -->
        <ul>
            <li>
                <a
                    use:link
                    href="/support/regional"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Regional Support</div>
                    <span class="text-sm text-gray-500">
                        Find a regional support team near you
                    </span>
                </a>
            </li>
        </ul>

        <!-- Third column -->
        <ul>
            <li>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <a
                    on:click|preventDefault={() => {
                        formIndex.set(1)
                        navigate('/contact')
                    }}
                    class="block p-3 rounded-lg hover:bg-gray-50 cursor-pointer hover:text-primary-700"
                >
                    <div class="font-semibold">Create A Ticket</div>
                    <span class="text-sm text-gray-500">
                        Submit a ticket to our support team for assistance
                    </span>
                </a>
            </li>
        </ul>
    </div>
</div>
