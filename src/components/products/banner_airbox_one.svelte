<script>
    import { link, navigate } from 'svelte-routing'
    import { allProducts } from '../../stores/rackbeat'
    import BrandIconList from './brand_icon_list.svelte'
    import { airboxConfig } from '../../stores/product_catalogue'

    let airbox
    let airbox3055
    let airbox310
    let airbox2k11
    let airbox2k12

    let configArray = []

    // Reactive statement to update configArray when allProducts store updates
    $: {
        airbox = $allProducts.find((p) => p.id === '9302')
        airbox3055 = $allProducts.find((p) => p.id === '9311')
        airbox310 = $allProducts.find((p) => p.id === '9308')
        airbox2k11 = $allProducts.find((p) => p.id === '9309')
        airbox2k12 = $allProducts.find((p) => p.id === '9310')
        configArray = [airbox3055, airbox310, airbox2k11, airbox2k12]
    }
</script>

{#each configArray as item, index}
    <div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
            on:click|preventDefault={() => {
                airboxConfig.set(index + 1)
                navigate(`/product-details/${airbox.id}`)
            }}
            class="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-md md:flex-row h-full group cursor-pointer"
        >
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <img
                    class="object-contain w-full rounded-t-lg max-h-60 md:h-full md:rounded-none md:rounded-s-lg p-8"
                    src={item.media.img_url}
                    alt="logo"
                />
                <div class="flex flex-col justify-between p-8 leading-normal">
                    <div class="flex items-center">
                        <p
                            class="bg-gray-900 text-white text-sm font-semibold inline-flex items-center p-1.5 px-2.5 rounded mb-4"
                        >
                            Order No. {item.id}
                        </p>
                    </div>

                    <h2 class="text-primary-700 font-bold text-xl mb-1">
                        {item.name}
                    </h2>
                    <p class="text-gray-500 mt-1 text-md pb-6">
                        {item.description.desc_short}
                    </p>
                    <button
                        type="button"
                        class="flex items-center text-sm font-medium text-center text-primary-700 border-white rounded-lg group-hover:underline mb-6"
                    >
                        Read More
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
                    </button>
                    <BrandIconList
                        displayIcons={[
                            airbox.hcl.universal.charAt(0).includes('1'),
                            airbox.hcl.kassow.charAt(0).includes('1'),
                            airbox.hcl.tm_omron.charAt(0).includes('1'),
                            airbox.hcl.fanuc.charAt(0).includes('1'),
                            airbox.hcl.kuka.charAt(0).includes('1'),
                            airbox.hcl.abb.charAt(0).includes('1'),
                            airbox.hcl.doosan.charAt(0).includes('1'),
                        ]}
                    />
                </div>
            </div>
        </a>
    </div>
{/each}
