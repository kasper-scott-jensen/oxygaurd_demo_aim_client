<script>
    import { navigate } from 'svelte-routing'
    import { formIndex } from '../../stores/contact'
    import ProductDetailsDesc from '../products/product_details_desc.svelte'
    import BrandList from '../products/brand_icon_list.svelte'

    // Fallback image for the product
    let fallbackImg = '/img/fallback.webp'

    // Receive the product as a prop
    export let product

    let compatArray
    let displayIcons

    // Create an array of compatibility flags from hcl object
    $: compatArray = [
        product.hcl.universal,
        product.hcl.kassow,
        product.hcl.tm_omron,
        product.hcl.fanuc,
        product.hcl.kuka,
        product.hcl.abb,
        product.hcl.doosan,
    ]

    // Map compatibility flags to a displayIcons array for BrandList
    $: displayIcons = compatArray.map((item) => item.includes('1'))
</script>

<!-- Main container -->
<div class="flex flex-col w-full pb-12">
    <!-- Grid container for image and product details -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Image section -->
        <div class="flex shrink-0 items-center justify-center flex-col">
            <img
                class="w-auto max-h-96"
                src={product.media.img_url || fallbackImg}
                alt="product"
            />
        </div>
        <!-- Product details section -->
        <div>
            <!-- Include product details description component -->
            <ProductDetailsDesc {product} />
            <!-- Documentation Section -->
            <p class="text-xs font-bold text-gray-900 mb-4 uppercase">
                Typical Applications
            </p>
            <!-- Applications description based on product ID -->
            <div
                class="mt-3 gap-3 sm:items-center flex flex-col sm:flex-row pb-3"
            >
                <div class="mb-3">
                    {#if product.id === '9410'}
                        <h3 class="mb-3 text-gray-500">
                            Electronics and Mechanics Manufacturing
                        </h3>
                    {:else if product.id === '9302'}
                        <h3 class="mb-3 text-gray-500">
                            Electronics and Mechanics Manufacturing, Industrial
                            Parts Assembly
                        </h3>
                    {:else}
                        <h3 class="mb-3 text-gray-500">
                            Industrial Parts Assembly, Building Materials,
                            Furniture Manufacturing
                        </h3>
                    {/if}
                </div>
            </div>
            <p class="text-xs font-bold text-gray-900 mb-6 uppercase">
                Compatibility
            </p>
            <BrandList {displayIcons} />
        </div>
    </div>
</div>
