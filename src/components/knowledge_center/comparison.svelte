<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import { link } from 'svelte-routing'
    import { currentProducts } from '../../stores/rackbeat'
    import { navigateToCatalogueWithCategory } from '../../js/navigation'
    import { categoryMenu } from '../../stores/product_catalogue'

    // Define the desired order of IDs
    const desiredOrder = ['9410', '9000', '9302', '9044', '9027']

    // Filter products by category
    let dispensers = $currentProducts.filter((product) =>
        product.category.includes('dispensers'),
    )

    let controllers = $currentProducts.filter((product) =>
        product.category.includes('controllers'),
    )

    // Combine and order itemsToShow
    let itemsToShow = [...dispensers, ...controllers]

    // Function to order array by desired order of IDs
    function orderArrayByIds(array, order) {
        return array.sort(
            (a, b) =>
                order.indexOf(a.id.toString()) - order.indexOf(b.id.toString()),
        )
    }

    $: itemsToShow = orderArrayByIds(itemsToShow, desiredOrder)

    // Function to shuffle an array using Fisher-Yates algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    // Lifecycle hook to set breadcrumb
    onMount(() => {
        breadcrumb.set([
            { title: 'Knowledge Center', link: '/knowledge-center' },
            {
                title: 'Dispenser Comparison',
                link: '/knowledge-center/comparison',
            },
        ])
    })

    const sd3055 = {
        whenToUse: [
            'You need very high dispensing precision and/or very small doses (μl range)/beads (<2mm)',
            'You need dispensing in confined spaces and cavities',
            'You do not have compressed air available',
            'You are working with low or medium viscosity materials (< typically lower than 20.000cP)',
            'You use preloaded standard 30/55cc syringes',
        ],
        applications: [
            'Electronics/mechanics manufacturing:  component fixation, sealing, heat sink compounds distribution',
        ],
    }

    const airbox = {
        whenToUse: [
            'You want a versatile solution allowing you to adapt different types of cartridges, syringes, materials and viscosities',
            'Your want to dispense 2-component epoxy adhesives',
            'You have compressed air supply available capable of delivering up to 7 bars of pressure',
        ],
        applications: [
            'Electronics/mechanics manufacturing:  Sealing, heat sink compounds distribution, component potting, vibration damping',
            'Industrial parts assembly: Sealing, glueing, potting',
        ],
    }

    const fd310 = {
        whenToUse: [
            'You need high dispensing precision and good control over start and end-point bead profiles',
            'You are working with medium viscosity materials (typically 50.000-500.000cP)',
            'You use standard 290/300/310ml cartridges',
            'You have compressed air supply available capable of delivering up to 3 bars of pressure',
        ],
        applications: [
            'Industrial parts assembly: Sealing, glueing, potting',
            'Building materials: Sealing, glueing',
            'Furniture manufacturing: Sealing, glueing',
        ],
    }

    const fd400 = {
        whenToUse: [
            'You need high dispensing precision and good control over start and end-point bead profiles',
            'You are working with medium viscosity materials (typically 50.000-500.000cP)',
            'You use standard 400ml DIN1284 cartridges',
            'You do not have compressed air available',
        ],
        applications: [
            'Industrial parts assembly: Sealing, glueing, potting',
            'Building materials: Sealing, glueing',
            'Furniture manufacturing: Sealing, glueing',
        ],
    }

    const fdhighv = {
        whenToUse: [
            'You require larger dispensing volumes and/or long unattended dispensing intervals ',
            'You need high dispensing precision and good control over start and end-point bead profiles',
            'You are working with medium viscosity materials (typically 50.000-500.000cP)',
            'You do not have compressed air available',
        ],
        applications: [
            'Industrial parts assembly: Sealing, glueing, potting',
            'Building materials: Sealing, glueing',
            'Furniture manufacturing: Sealing, glueing',
        ],
    }
</script>

<section class="pt-2 pb-32">
    <div class="mx-auto max-w-screen-2xl">
        <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Dispenser Comparison
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Explore the strengths and differences of our dispensing
                solutions.
            </p>
        </div>
        {#each itemsToShow as item, index}
            <div
                class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
            >
                <!-- Text content container -->
                <div
                    class={`font-light text-gray-500 sm:text-lg ${index % 2 === 0 ? 'order-1' : 'order-2'}`}
                >
                    <h2
                        class="mb-4 text-3xl tracking-tight font-extrabold text-primary-700"
                    >
                        {item.name}
                    </h2>

                    <!-- Badges Section -->
                    {#if item.badges.filter((badge) => badge !== null && badge !== undefined && badge !== '').length !== 0}
                        <div class="flex items-center pb-4">
                            {#each item.badges.filter((badge) => badge !== null && badge !== undefined && badge !== '') as badge}
                                <span
                                    class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                                >
                                    {badge}
                                </span>
                            {/each}
                        </div>
                    {/if}

                    <!-- Order Number and Category -->
                    <div class="flex items-center mb-4">
                        <p
                            class="text-white text-sm font-semibold inline-flex items-center px-2.5 p-1.5 bg-gray-900 rounded me-4"
                        >
                            Order No. {item.id}
                        </p>
                        <a
                            href="#!"
                            on:click|preventDefault={() =>
                                navigateToCatalogueWithCategory(
                                    item.category_id,
                                )}
                            class="hover:underline"
                        >
                            <p class="text-gray-500 text-sm capitalize px-4">
                                <span
                                    class={`${$categoryMenu[item.category_id].color} inline-block w-2.5 h-2.5 mr-1 rounded-full`}
                                ></span>
                                {item.category}
                            </p>
                        </a>
                    </div>

                    <p class="mb-4">
                        {item.description.desc_long}
                    </p>

                    <div class="mt-6">
                        <h3
                            class="text-xs uppercase font-bold text-gray-800 mb-2"
                        >
                            When To Use
                        </h3>
                        <ul class="list-disc list-inside text-gray-600">
                            {#if item.id === '9410'}
                                {#each sd3055.whenToUse as when}
                                    <li class="pb-4 text-sm">{when}</li>
                                {/each}
                            {:else if item.id === '9302'}
                                {#each airbox.whenToUse as when}
                                    <li class="pb-4 text-sm">{when}</li>
                                {/each}
                            {:else if item.id === '9000'}
                                {#each fd310.whenToUse as when}
                                    <li class="pb-4 text-sm">{when}</li>
                                {/each}
                            {:else if item.id === '9044'}
                                {#each fd400.whenToUse as when}
                                    <li class="pb-4 text-sm">{when}</li>
                                {/each}
                            {:else if item.id === '9027'}
                                {#each fdhighv.whenToUse as when}
                                    <li class="pb-4 text-sm">{when}</li>
                                {/each}
                            {/if}
                        </ul>
                        <h3
                            class="text-xs uppercase font-bold text-gray-800 mb-2 mt-4"
                        >
                            Typical Applications
                        </h3>
                        <ul class="list-disc list-inside text-gray-600">
                            {#if item.id === '9410'}
                                {#each sd3055.applications as appl}
                                    <li class="pb-4 text-sm">{appl}</li>
                                {/each}
                            {:else if item.id === '9302'}
                                {#each airbox.applications as appl}
                                    <li class="pb-4 text-sm">{appl}</li>
                                {/each}
                            {:else if item.id === '9000'}
                                {#each fd310.applications as appl}
                                    <li class="pb-4 text-sm">{appl}</li>
                                {/each}
                            {:else if item.id === '9044'}
                                {#each fd400.applications as appl}
                                    <li class="pb-4 text-sm">{appl}</li>
                                {/each}
                            {:else if item.id === '9027'}
                                {#each fdhighv.applications as appl}
                                    <li class="pb-4 text-sm">{appl}</li>
                                {/each}
                            {/if}
                        </ul>
                    </div>
                </div>
                <!-- Images container -->
                <div
                    class={` hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pb-12 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                >
                    <div
                        class={`my-auto flex flex-col bg-none py-4 border bg-white border-gray-300 rounded-md shadow-md ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                    >
                        <a
                            use:link
                            href={`/product-details/${item.id}`}
                            class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm mx-4 mt-8 hover:text-primary-700"
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
                                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                            </svg>
                            Product Details
                        </a>
                        <a
                            use:link
                            href={item.docs.datasheet}
                            target="_blank"
                            class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm mx-4 mt-4 hover:text-primary-700"
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
                        <a
                            use:link
                            href={item.docs.manual}
                            target="_blank"
                            class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm mx-4 mt-4 hover:text-primary-700"
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
                        <a
                            use:link
                            href={item.docs.files}
                            target="_blank"
                            class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm mx-4 mt-4 mb-8 hover:text-primary-700"
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
                    </div>
                    <img
                        class={`w-full rounded-lg bg-gray-900 py-4 pt-0  shadow-md ${index % 2 === 0 ? 'order-1' : 'order-2'}`}
                        src={item.media.img_url}
                        alt="logo"
                    />
                </div>
            </div>
        {/each}
    </div>
</section>
