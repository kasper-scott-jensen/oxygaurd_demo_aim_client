<script>
    // Import necessary functions and components
    import { onMount } from 'svelte'
    import {
        clearSearchText,
        setCobotsMenuToFalse,
        setIntegratorOptionToFalse,
    } from '../../js/network.js'
    import SidebarLeft from './sidebar_left.svelte'
    import { partners } from '../../stores/crm.js'
    import { derived, writable } from 'svelte/store'
    import {
        cobotsMenu,
        searchText,
        sortingIndex,
        integratorOption,
    } from '../../stores/network_catalogue.js'
    import SidebarRight from './sidebar_right.svelte'
    import BrandIconList from '../products/brand_icon_list.svelte'
    import BannerTop from './banner_top.svelte'

    // Function to handle Escape key press event
    function handleEscapeKeyPressed(event) {
        if (event.key === 'Escape') {
            setCobotsMenuToFalse()
            clearSearchText()
            setIntegratorOptionToFalse()
        }
    }

    // Derived store to filter and sort partners based on search text, selected cobots, and sorting index
    let filteredPartners = derived(
        [partners, searchText, sortingIndex, cobotsMenu, integratorOption],
        ([
            $partners,
            $searchText,
            $sortingIndex,
            $cobotsMenu,
            $integratorOption,
        ]) => {
            // Normalize search text to lowercase and remove spaces
            let lowerCaseSearchText = $searchText
                .trim()
                .toLowerCase()
                .replace(/\s+/g, '')

            // Get active cobots
            let activeCobots = $cobotsMenu
                .filter((cobot) => cobot.state)
                .map((cobot) => cobot.query)

            // Filter partners based on search text and active cobots and integrator option
            let items = $partners.filter((partner) => {
                let normalizedCompany = partner.company
                    .toLowerCase()
                    .replace(/\s+/g, '')
                let normalizedCountry = partner.country
                    .toLowerCase()
                    .replace(/\s+/g, '')
                let searchTextMatch =
                    normalizedCompany.includes(lowerCaseSearchText) ||
                    normalizedCountry.includes(lowerCaseSearchText)
                let categoryMatch =
                    activeCobots.length === 0 ||
                    activeCobots.some((query) => partner.hcl[query] === 1)
                return searchTextMatch && categoryMatch
            })

            // If integrator option is selected, filter partners based on integrator option
            if ($integratorOption === '0') {
                items = items.filter((partner) => partner.is_integrator === 0)
            } else if ($integratorOption === '1') {
                items = items.filter((partner) => partner.is_integrator === 1)
            }

            // Sort partners based on selected sorting index
            const sortProperties = ['company', 'country']
            const sortProperty =
                // @ts-ignore
                sortProperties[$sortingIndex % sortProperties.length]
            items.sort((a, b) => {
                if (a[sortProperty] < b[sortProperty]) {
                    return -1
                } else if (a[sortProperty] > b[sortProperty]) {
                    return 1
                }
                return 0
            })

            return items
        },
    )

    // Store to keep track of the number of partners to display
    let itemsToShow = writable(10)

    // Function to load more partners
    function loadMore() {
        itemsToShow.update((n) => n + 10)
    }

    // Add event listener for Escape key press when component mounts, and remove it when component unmounts
    onMount(() => {
        window.addEventListener('keydown', handleEscapeKeyPressed)
        return () => {
            window.removeEventListener('keydown', handleEscapeKeyPressed)
        }
    })
</script>

<section class="pb-24">
    <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
        <!-- Title and description -->
        <div class="mx-auto max-w-screen-sm text-center mb-6">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Our Partners
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Regardless of your location, our partners stand at the ready to
                get you started with our products, and will also serve as your
                direct contact for support.
            </p>
        </div>
        <!-- Banner component -->
        <BannerTop />
        <!-- Main content area with sidebars and partner list -->
        <div class="flex flex-col xl:flex-row w-full justify-center">
            <!-- Left sidebar -->
            <div
                class="flex flex-col xl:w-1/5 bg-none mb-4 lg:mb-0 items-end pt-2"
            >
                <SidebarLeft />
            </div>
            <!-- Partner list -->
            <div class="xl:w-3/5 xl:px-10 xl:pt-10">
                {#if $filteredPartners.length === 0}
                    <div class="flex flex-col w-full ps-12">
                        <h3
                            class="text-2xl font-bold tracking-tight text-red-600 pb-2"
                        >
                            No results !
                        </h3>
                        <p
                            class="flex items-center justify-start text-gray-900 font-medium"
                        >
                            Please try widening your search.
                        </p>
                    </div>
                {/if}
                {#each $filteredPartners.slice(0, $itemsToShow) as partner, index}
                    <div class="pb-4">
                        <div
                            class="items-center rounded-lg shadow-sm sm:flex bg-white border-gray-300 border p-4"
                        >
                            <div class="grid grid-cols-5 w-full">
                                <!-- Partner logo -->
                                <div
                                    class="flex p-8 col-span-5 sm:col-span-2 w-full justify-center items-center"
                                >
                                    <img
                                        class="rounded-lg sm:rounded-none sm:rounded-l-lg max-h-32 max-w-48 w-auto h-auto"
                                        src={partner.img_url}
                                        alt="logo"
                                    />
                                </div>
                                <!-- Partner details -->
                                <div
                                    class="p-6 col-span-5 sm:col-span-3 flex flex-col h-full justify-center py-10"
                                >
                                    <h3
                                        class="text-2xl font-bold tracking-tight text-primary-700 pb-4"
                                    >
                                        {partner.company}
                                    </h3>
                                    <p
                                        class="py-2 flex items-center justify-start text-gray-900 mt-2"
                                    >
                                        <span
                                            class="me-3 [&>svg]:h-5 [&>svg]:w-5"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                                                />
                                                <path
                                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                                                />
                                            </svg>
                                        </span>
                                        {partner.address}, {partner.city}, {partner.country}
                                    </p>
                                    <p
                                        class="py-2 flex items-center justify-start text-gray-700"
                                    >
                                        <span
                                            class="me-3 [&>svg]:h-5 [&>svg]:w-5"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                                                />
                                                <path
                                                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                                                />
                                            </svg>
                                        </span>
                                        {partner.email}
                                    </p>
                                    <p
                                        class="py-2 flex items-center justify-start text-gray-700"
                                    >
                                        <span
                                            class="me-3 [&>svg]:h-5 [&>svg]:w-5"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        {`${partner.country_code} ${partner.phone}`}
                                    </p>
                                    <!-- Brand icons -->
                                    <div
                                        class="flex flex-row w-full items-center justify-start pt-6"
                                    >
                                        <BrandIconList
                                            displayIcons={[
                                                partner.hcl.universal,
                                                partner.hcl.kassow,
                                                partner.hcl.tm_omron,
                                                partner.hcl.fanuc,
                                                partner.hcl.kuka,
                                                partner.hcl.abb,
                                                partner.hcl.doosan,
                                                partner.hcl.aim_robotics,
                                            ]}
                                        />
                                    </div>
                                    <!-- Read more link -->
                                    <a
                                        href={partner.website}
                                        target="_blank"
                                        class="inline-flex items-center text-md font-medium text-[#00adee] hover:underline pt-6"
                                    >
                                        Go To Website
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
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
                <!-- Load More button -->
                <!-- svelte-ignore a11y-missing-attribute -->
                {#if $filteredPartners.length > $itemsToShow}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="flex w-full justify-center pt-12">
                        <a
                            on:click|preventDefault={loadMore}
                            class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm cursor-pointer"
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
                                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                                />
                            </svg>

                            Load More
                        </a>
                    </div>
                {/if}
            </div>
            <!-- Right sidebar -->
            <div
                class="flex flex-col xl:w-1/5 bg-none mb-4 lg:mb-0 items-end pt-4"
            >
                <SidebarRight />
            </div>
        </div>
    </div>
</section>
