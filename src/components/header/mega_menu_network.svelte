<script>
    // Importing necessary module for routing
    import { link, navigate } from 'svelte-routing'
    import { integratorOption } from '../../stores/network_catalogue'
    import { closeAllMegaMenus } from '../../js/navigation'
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
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <a
                    on:click|preventDefault={() => {
                        integratorOption.set('0')
                        closeAllMegaMenus()
                        navigate('/network')
                    }}
                    class="block p-3 rounded-lg hover:bg-gray-50 cursor-pointer hover:text-primary-700"
                >
                    <div class="font-semibold">Partners / Distributors</div>
                    <span class="text-sm text-gray-500">
                        Explore a network in growth
                    </span>
                </a>
            </li>
            <li>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <a
                    on:click|preventDefault={() => {
                        integratorOption.set('1')
                        closeAllMegaMenus()
                        navigate('/network')
                    }}
                    class="block p-3 rounded-lg hover:bg-gray-50 cursor-pointer hover:text-primary-700"
                >
                    <div class="font-semibold">Integrators</div>
                    <span class="text-sm text-gray-500">
                        Find a system integrator near you
                    </span>
                </a>
            </li>
        </ul>

        <!-- Second column -->
        <ul>
            <li>
                <a
                    use:link
                    href="/network/worldmap"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">World Map</div>
                    <span class="text-sm text-gray-500">
                        Find a partner via our interactive world map
                    </span>
                </a>
            </li>
        </ul>

        <!-- Third column -->
        <ul>
            <li>
                <a
                    use:link
                    href="/network/become-a-partner"
                    class="block p-3 rounded-lg hover:bg-gray-50 hover:text-primary-700"
                >
                    <div class="font-semibold">Become A Partner</div>
                    <span class="text-sm text-gray-500">
                        Why you should partner with Aim Robotics
                    </span>
                </a>
            </li>
        </ul>
    </div>
</div>
