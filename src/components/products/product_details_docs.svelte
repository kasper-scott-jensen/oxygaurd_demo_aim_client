<script>
    import { onMount } from 'svelte'
    import { link } from 'svelte-routing'

    export let product

    let isProtocolDropdownVisible = false
    let protocolDropdownContainer

    let isSoftwareDropdownVisible = false
    let softwareDropdownContainer

    function toggleProtocolDropdownVisibility(event) {
        isProtocolDropdownVisible = !isProtocolDropdownVisible
        if (isSoftwareDropdownVisible) {
            isSoftwareDropdownVisible = false
        }
        event.stopPropagation()
    }

    function toggleSoftwareDropdownVisibility(event) {
        isSoftwareDropdownVisible = !isSoftwareDropdownVisible
        if (isProtocolDropdownVisible) {
            isProtocolDropdownVisible = false
        }
        event.stopPropagation()
    }

    function handleClickOutsideDropdowns(event) {
        if (
            (protocolDropdownContainer &&
                !protocolDropdownContainer.contains(event.target)) ||
            (softwareDropdownContainer &&
                !softwareDropdownContainer.contains(event.target))
        ) {
            isProtocolDropdownVisible = false
            isSoftwareDropdownVisible = false
        }
    }

    function handleEscapeKeyPressed(event) {
        if (event.key === 'Escape') {
            isProtocolDropdownVisible = false
            isSoftwareDropdownVisible = false
        }
    }

    onMount(() => {
        window.addEventListener('click', handleClickOutsideDropdowns)
        window.addEventListener('keydown', handleEscapeKeyPressed)
        return () => {
            window.removeEventListener('click', handleClickOutsideDropdowns)
            window.removeEventListener('keydown', handleEscapeKeyPressed)
        }
    })
</script>

<!-- Documentation Section -->
<p class="text-xs font-bold text-gray-900 mb-4 uppercase">Documentation</p>
<div class="mt-3 gap-3 sm:items-center flex flex-col sm:flex-row pb-3">
    <!-- Datasheet Link -->
    {#if product.docs.datasheet && product.docs.datasheet !== ''}
        <a
            use:link
            href={product.docs.datasheet}
            target="_blank"
            class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm hover:text-primary-700"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 me-2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                />
            </svg>

            Datasheet
        </a>
    {/if}

    <!-- Manual Link -->
    {#if product.docs.manual && product.docs.manual !== ''}
        <a
            use:link
            href={product.docs.manual}
            target="_blank"
            class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm hover:text-primary-700"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 me-2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
            </svg>

            Manual
        </a>
    {/if}

    <!-- 3D Files Link -->
    {#if product.docs.files && product.docs.files !== ''}
        <a
            use:link
            href={product.docs.files}
            target="_blank"
            class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm hover:text-primary-700"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 me-2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
            </svg>

            3D Files
        </a>
    {/if}

    <!-- Protocols Dropdown -->
    {#if product.id != 9503}
        <div class="relative">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
                on:click={() => toggleProtocolDropdownVisibility(event)}
                class=" cursor-pointer inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border bg-white border-gray-300 w-full hover:bg-gray-50 shadow-sm hover:text-primary-700"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 me-2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                </svg>

                Protocols
            </a>
            <!-- Dropdown Menu -->
            {#if isProtocolDropdownVisible}
                <div
                    bind:this={protocolDropdownContainer}
                    id="dropdown-container"
                    class="z-10 bg-white divide-gray-100 rounded-lg w-44 absolute mt-1 border border-gray-300"
                >
                    <ul
                        class="py-2 text-sm text-gray-700"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        {#if product.docs.protocols.universal && product.docs.protocols.universal !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.protocols.universal}
                                    target="_blank"
                                    class="flex px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Universal
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.protocols.kassow && product.docs.protocols.kassow !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.protocols.kassow}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Kassow
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.protocols.tm_omron && product.docs.protocols.tm_omron !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.protocols.tm_omron}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    TM Omron
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.protocols.fanuc && product.docs.protocols.fanuc !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.protocols.fanuc}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Fanuc
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.protocols.kuka && product.docs.protocols.kuka !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.protocols.kuka}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    KUKA
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.protocols.abb && product.docs.protocols.abb !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.protocols.abb}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    ABB
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.protocols.doosan && product.docs.protocols.doosan !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.protocols.doosan}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Doosan
                                </a>
                            </li>
                        {/if}
                    </ul>
                </div>
            {/if}
        </div>
    {/if}

    <!-- Software Dropdown -->
    {#if product.id != 9503 && product.id != 9226}
        <div class="relative">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
                on:click={() => toggleSoftwareDropdownVisibility(event)}
                class=" cursor-pointer inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border bg-white border-gray-300 w-full hover:bg-gray-50 shadow-sm hover:text-primary-700"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 me-2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                </svg>

                Software
            </a>
            <!-- Dropdown Menu -->
            {#if isSoftwareDropdownVisible}
                <div
                    bind:this={softwareDropdownContainer}
                    id="dropdown-container-2"
                    class="z-10 bg-white divide-gray-100 rounded-lg w-44 absolute mt-1 border border-gray-300"
                >
                    <ul
                        class="py-2 text-sm text-gray-700"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        {#if product.docs.software.universal && product.docs.software.universal !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.software.universal}
                                    target="_blank"
                                    class="flex px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Universal
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.software.kassow && product.docs.software.kassow !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.software.kassow}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Kassow
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.software.tm_omron && product.docs.software.tm_omron !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.software.tm_omron}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    TM Omron
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.software.fanuc && product.docs.software.fanuc !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.software.fanuc}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Fanuc
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.software.kuka && product.docs.software.kuka !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.software.kuka}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    KUKA
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.software.abb && product.docs.software.abb !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.software.abb}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    ABB
                                </a>
                            </li>
                        {/if}
                        {#if product.docs.software.doosan && product.docs.software.doosan !== ''}
                            <li>
                                <a
                                    use:link
                                    href={product.docs.software.doosan}
                                    target="_blank"
                                    class="block px-4 py-2 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Doosan
                                </a>
                            </li>
                        {/if}
                    </ul>
                </div>
            {/if}
        </div>
    {/if}
</div>
