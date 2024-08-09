<script>
    import { toast } from '@zerodevx/svelte-toast'

    // Import necessary functions
    import { onDestroy } from 'svelte'
    import { link } from 'svelte-routing'

    // Export the product prop to be received from the parent component
    export let product

    // SVG icons for compatibility statuses
    let signCross = `
        <svg
            class="flex-shrink-0 w-6 h-6 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            fill-rule="evenodd"
            d="M10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 8.586z"
            clip-rule="evenodd"
            ></path>
        </svg>
    `

    let signCheck = `
        <svg
            class="flex-shrink-0 w-6 h-6 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
            ></path>
        </svg>
    `

    let signProgress = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="flex-shrink-0 w-6 h-6 text-blue-500"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
        </svg>
    `

    // Array to store compatibility details
    let compat = []

    // Reactive statement to populate the compat array when the product is set
    $: if (product) {
        compat = [
            {
                name: 'Universal',
                protocol: product.docs.protocols.universal,
                compat_1: product.hcl.universal.charAt(0),
                compat_2: product.hcl.universal.charAt(1),
                compat_3: product.hcl.universal.charAt(2),
            },
            {
                name: 'Kassow',
                protocol: product.docs.protocols.kassow,
                compat_1: product.hcl.kassow.charAt(0),
                compat_2: product.hcl.kassow.charAt(1),
                compat_3: product.hcl.kassow.charAt(2),
            },
            {
                name: 'Techman Omron',
                protocol: product.docs.protocols.tm_omron,
                compat_1: product.hcl.tm_omron.charAt(0),
                compat_2: product.hcl.tm_omron.charAt(1),
                compat_3: product.hcl.tm_omron.charAt(2),
            },
            {
                name: 'KUKA',
                protocol: product.docs.protocols.kuka,
                compat_1: product.hcl.kuka.charAt(0),
                compat_2: product.hcl.kuka.charAt(1),
                compat_3: product.hcl.kuka.charAt(2),
            },
            {
                name: 'ABB',
                protocol: product.docs.protocols.abb,
                compat_1: product.hcl.abb.charAt(0),
                compat_2: product.hcl.abb.charAt(1),
                compat_3: product.hcl.abb.charAt(2),
            },
            {
                name: 'Fanuc',
                protocol: product.docs.protocols.fanuc,
                compat_1: product.hcl.fanuc.charAt(0),
                compat_2: product.hcl.fanuc.charAt(1),
                compat_3: product.hcl.fanuc.charAt(2),
            },
            {
                name: 'Doosan',
                protocol: product.docs.protocols.doosan,
                compat_1: product.hcl.doosan.charAt(0),
                compat_2: product.hcl.doosan.charAt(1),
                compat_3: product.hcl.doosan.charAt(2),
            },
        ]
    }

    function handleProtocolClick(event) {
        const href = event.currentTarget.getAttribute('data-href')
        if (href) {
            window.open(href, '_blank')
        } else {
            toast.push(
                'That protocol is not available yet. Please contact us for more information.',
                {
                    theme: {
                        '--toastBackground': '#F59E0B',
                    },
                },
            )
        }
    }
</script>

<!-- Compatibility Table Container -->
<div
    class="relative overflow-x-auto sm:rounded-lg border-gray-300 border shadow-md"
>
    <table class="w-full text-left rtl:text-right text-gray-500">
        <caption
            class="p-5 font-semibold text-left rtl:text-right text-gray-900 bg-white"
        >
            {#if product.id === '9226' || product.id === '9503'}
                <p class="mt-1 text-md font-normal text-gray-500">
                    Support for <span class="font-bold text-primary-700">
                        {product.name}
                    </span>
                    is limited to URe series cobots. Please contact us for more information.
                </p>
            {:else}
                <div class="flex flex-col xl:flex-row w-full justify-between">
                    <div>
                        <p class="mt-1 text-sm font-normal text-gray-500">
                            We are constantly working towards being compatible
                            with the leading manufacturers of collaborative
                            robots.
                            <br />
                            Please contact us for more information on
                            <span class="font-bold text-primary-700">
                                {product.name}
                            </span>
                            in any particular setup.
                        </p>
                    </div>
                    <div class="flex-row flex gap-2 pt-4 -ms-2 xl:pt-0 xl:ms-0">
                        <div class="flex items-center gap-4 scale-[.8]">
                            {@html signCheck}
                            <div class="font-medium text-sm">
                                <div>Supported</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 scale-[.8]">
                            {@html signCross}
                            <div class="font-medium text-sm">
                                <div>Not Supported</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 scale-[.8]">
                            {@html signProgress}
                            <div class="font-medium text-sm">
                                <div>Currently Being Developed</div>
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
        </caption>
        {#if product.id !== '9226' && product.id !== '9503'}
            <!-- Table Header -->
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">Manufacturer</th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">
                            Protocol
                            <span class="tooltip cursor-pointer ms-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                                    />
                                </svg>
                                <span class="tooltiptext normal-case text-md">
                                    Standard communication rules to interact
                                    with the robot and aim devices.
                                </span>
                            </span>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">
                            Basic Dispensing
                            <span class="tooltip cursor-pointer ms-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                                    />
                                </svg>
                                <span class="tooltiptext normal-case text-md">
                                    The hardware is supported with robot
                                    software and a user interface that includes
                                    basic dispensing functionality and other
                                    features.
                                </span>
                            </span>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">
                            Aim Shapes
                            <span class="tooltip cursor-pointer ms-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                                    />
                                </svg>
                                <span class="tooltiptext normal-case text-md">
                                    Custom application for performing dispensing
                                    in various shapes and patterns using the
                                    robot.
                                </span>
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>

            <!-- Table Body -->
            <tbody>
                {#each compat as compat, index}
                    <tr class="bg-white border-b group">
                        <td
                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                        >
                            {compat.name}
                        </td>
                        <td class="px-6 py-4">
                            {#if compat.compat_1 === '1'}
                                {@html signCheck}
                            {:else if compat.compat_1 === '0'}
                                {@html signCross}
                            {:else if compat.compat_1 === '2'}
                                {@html signProgress}
                            {/if}
                        </td>
                        <td class="px-6 py-4">
                            {#if compat.compat_2 === '1'}
                                {@html signCheck}
                            {:else if compat.compat_2 === '0'}
                                {@html signCross}
                            {:else if compat.compat_2 === '2'}
                                {@html signProgress}
                            {/if}
                        </td>
                        <td class="px-6 py-4">
                            {#if compat.compat_3 === '1'}
                                {@html signCheck}
                            {:else if compat.compat_3 === '0'}
                                {@html signCross}
                            {:else if compat.compat_3 === '2'}
                                {@html signProgress}
                            {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        {/if}
    </table>
</div>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 200px;
        background-color: #222c56;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 15px;
        position: absolute;
        z-index: 1;
        top: 125%; /* Adjust based on your needs */
        right: 50%;
        margin-right: -100px;
        opacity: 0;
        transition: opacity 0s;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
</style>
