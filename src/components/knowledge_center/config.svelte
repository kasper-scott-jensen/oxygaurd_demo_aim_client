<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import { activeConfigTab } from '../../stores/knowledge_center'
    import ConfigSd3055 from './config_sd3055.svelte'
    import { currentProducts } from '../../stores/rackbeat'
    import ConfigIntro from './config_intro.svelte'
    import ConfigFdhighv from './config_fdhighv.svelte'
    import ConfigFd310 from './config_fd310.svelte'
    import ConfigFd400 from './config_fd400.svelte'
    import ConfigAirbox from './config_airbox.svelte'
    import ConfigDisclaimer from './config_disclaimer.svelte'
    import ConfigHowto from './config_howto.svelte'
    import BannerNetwork from '../network/banner_network.svelte'
    import NotAvailableConfig from '../utility/not_available_config.svelte'

    let sd3055 = $currentProducts.find((product) => product.id === '9410')
    let fd310 = $currentProducts.find((product) => product.id === '9000')
    let fd400 = $currentProducts.find((product) => product.id === '9044')
    let fdhighv = $currentProducts.find((product) => product.id === '9027')
    let airbox = $currentProducts.find((product) => product.id === '9302')

    // Lifecycle hook to set breadcrumb
    onMount(() => {
        breadcrumb.set([
            { title: 'Knowledge Center', link: '/knowledge-center' },
            {
                title: 'Setup Configurator',
                link: '/knowledge-center/configurator',
            },
        ])
    })
</script>

<section class="pt-2 pb-32">
    <div class="mx-auto max-w-screen-2xl px-4">
        <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Setup Configurator
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Test and fine-tune your dispensing solution with our setup
                configurator.
            </p>
        </div>
        <NotAvailableConfig />
        <div
            class="mt-12 w-full border border-gray-300 bg-white min-h-48 rounded-lg shadow-md hidden xl:flex"
        >
            <div class="grid grid-cols-4 p-8 w-full gap-8">
                <div class="col-span-1">
                    <ul
                        class="flex flex-col gap-4 mb-4 text-sm font-medium text-gray-500"
                    >
                        <h3
                            class="text-xs uppercase font-bold text-gray-800 mb-2"
                        >
                            Information
                        </h3>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <li
                            on:click|preventDefault={() =>
                                activeConfigTab.set(0)}
                            class="flex-1 text-start justify-start"
                        >
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div
                                class="py-3 group cursor-pointer px-6 bg-white border-2 rounded-lg hover:bg-gray-50 shadow-sm flex flex-col h-full {$activeConfigTab ===
                                0
                                    ? 'border-primary-700'
                                    : 'border-gray-300'}"
                            >
                                <p class="font-bold text-primary-700 text-lg">
                                    Introduction
                                </p>
                                <p class="text-gray-600">
                                    Dispensing Setup Configurator
                                </p>
                            </div>
                        </li>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <li
                            on:click|preventDefault={() =>
                                activeConfigTab.set(6)}
                            class="flex-1 text-start justify-start"
                        >
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div
                                class="py-3 group cursor-pointer px-6 bg-white border-2 rounded-lg hover:bg-gray-50 shadow-sm flex flex-col h-full {$activeConfigTab ===
                                6
                                    ? 'border-primary-700'
                                    : 'border-gray-300'}"
                            >
                                <p class="font-bold text-primary-700 text-lg">
                                    How To
                                </p>
                                <p class="text-gray-600">
                                    A quick guide and information
                                </p>
                            </div>
                        </li>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <li
                            on:click|preventDefault={() =>
                                activeConfigTab.set(7)}
                            class="flex-1 text-start justify-start"
                        >
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div
                                class="py-3 group cursor-pointer px-6 bg-white border-2 rounded-lg hover:bg-gray-50 shadow-sm flex flex-col h-full {$activeConfigTab ===
                                7
                                    ? 'border-primary-700'
                                    : 'border-gray-300'}"
                            >
                                <p class="font-bold text-primary-700 text-lg">
                                    Disclaimer
                                </p>
                                <p class="text-gray-600">
                                    Things to consider and when to use
                                </p>
                            </div>
                        </li>
                        <hr class="border-gray-300 my-2" />
                        <h3
                            class="text-xs uppercase font-bold text-gray-800 mb-2"
                        >
                            Dispensers
                        </h3>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <li
                            on:click|preventDefault={() =>
                                activeConfigTab.set(1)}
                            class="flex-1 text-start justify-start"
                        >
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->

                            <div
                                class="py-3 group cursor-pointer px-6 bg-white border-2 rounded-lg hover:bg-gray-50 shadow-sm flex flex-col h-full {$activeConfigTab ===
                                1
                                    ? 'border-primary-700'
                                    : 'border-gray-300'}"
                            >
                                <p class="font-bold text-primary-700 text-lg">
                                    {sd3055.name}
                                </p>
                                <p class="text-gray-600">
                                    {sd3055.description.name_sub}
                                </p>
                            </div>
                        </li>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <li
                            on:click|preventDefault={() =>
                                activeConfigTab.set(2)}
                            class="flex-1 text-start justify-start"
                        >
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div
                                class="py-3 group cursor-pointer px-6 bg-white border-2 rounded-lg hover:bg-gray-50 shadow-sm flex flex-col h-full {$activeConfigTab ===
                                2
                                    ? 'border-primary-700'
                                    : 'border-gray-300'}"
                            >
                                <p class="font-bold text-primary-700 text-lg">
                                    {fdhighv.name}
                                </p>
                                <p class="text-gray-600">
                                    {fdhighv.description.name_sub}
                                </p>
                            </div>
                        </li>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <li
                            on:click|preventDefault={() =>
                                activeConfigTab.set(3)}
                            class="flex-1 text-start justify-start"
                        >
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div
                                class="py-3 group cursor-pointer px-6 bg-white border-2 rounded-lg hover:bg-gray-50 shadow-sm flex flex-col h-full {$activeConfigTab ===
                                3
                                    ? 'border-primary-700'
                                    : 'border-gray-300'}"
                            >
                                <p class="font-bold text-primary-700 text-lg">
                                    {fd310.name}
                                </p>
                                <p class="text-gray-600">
                                    {fd310.description.name_sub}
                                </p>
                            </div>
                        </li>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <li
                            on:click|preventDefault={() =>
                                activeConfigTab.set(4)}
                            class="flex-1 text-start justify-start"
                        >
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div
                                class="py-3 group cursor-pointer px-6 bg-white border-2 rounded-lg hover:bg-gray-50 shadow-sm flex flex-col h-full {$activeConfigTab ===
                                4
                                    ? 'border-primary-700'
                                    : 'border-gray-300'}"
                            >
                                <p class="font-bold text-primary-700 text-lg">
                                    {fd400.name}
                                </p>
                                <p class="text-gray-600">
                                    {fd400.description.name_sub}
                                </p>
                            </div>
                        </li>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <li
                            on:click|preventDefault={() =>
                                activeConfigTab.set(5)}
                            class="flex-1 text-start justify-start"
                        >
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div
                                class="py-3 group cursor-pointer px-6 bg-white border-2 rounded-lg hover:bg-gray-50 shadow-sm flex flex-col h-full {$activeConfigTab ===
                                5
                                    ? 'border-primary-700'
                                    : 'border-gray-300'}"
                            >
                                <p class="font-bold text-primary-700 text-lg">
                                    {airbox.name}
                                </p>
                                <p class="text-gray-600">
                                    {airbox.description.name_sub}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-span-3">
                    {#if $activeConfigTab === 0}
                        <ConfigIntro />
                    {:else if $activeConfigTab === 1}
                        <ConfigSd3055 />
                    {:else if $activeConfigTab === 2}
                        <ConfigFdhighv />
                    {:else if $activeConfigTab === 3}
                        <ConfigFd310 />
                    {:else if $activeConfigTab === 4}
                        <ConfigFd400 />
                    {:else if $activeConfigTab === 5}
                        <ConfigAirbox />
                    {:else if $activeConfigTab === 6}
                        <ConfigHowto />
                    {:else if $activeConfigTab === 7}
                        <ConfigDisclaimer />
                    {/if}
                </div>
            </div>
        </div>
        <BannerNetwork />
    </div>
</section>
