<script>
    // Import necessary modules and components
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import { currentProducts } from '../../stores/rackbeat.js'
    import { link } from 'svelte-routing'

    import BannerCatalogue from './banner_upper.svelte'
    import ProductCard from './product_card.svelte'
    import BannerSelect from './banner_select.svelte'
    import BannerComparison from './banner_comparison.svelte'
    import BannerAirBoxOne from './banner_airbox_one.svelte'

    // Declare variables for product details
    let sd3055
    let fdhighv
    let fd310
    let fd400

    // Subscribe to currentProducts store and assign values to variables based on product ID
    $: {
        currentProducts.subscribe(($products) => {
            sd3055 = $products.find((p) => p.id === '9410')
            fdhighv = $products.find((p) => p.id === '9027')
            fd310 = $products.find((p) => p.id === '9000')
            fd400 = $products.find((p) => p.id === '9044')
        })
    }

    // Set breadcrumb navigation on component mount
    onMount(() => {
        breadcrumb.set([
            { title: 'Products', link: '/products' },
            { title: 'Dispensers', link: '/products/dispensers' },
        ])
    })
</script>

<section class="pt-2 pb-32">
    <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
        <!-- Section header -->
        <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Meet Our Line-Up
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Adaptable dispensers for a wide array of applications
            </p>
        </div>
        <!-- Product cards grid -->
        <div class="my-6">
            <div
                class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-6"
            >
                <!-- ProductCard components for each product -->
                <ProductCard
                    img={sd3055.media.img_url}
                    id={sd3055.id}
                    badges={sd3055.badges}
                    nameSub={sd3055.description.name_sub}
                    name={sd3055.name}
                    hcl={sd3055.hcl}
                />
                <ProductCard
                    img={fdhighv.media.img_url}
                    id={fdhighv.id}
                    badges={fdhighv.badges}
                    nameSub={fdhighv.description.name_sub}
                    name={fdhighv.name}
                    hcl={fdhighv.hcl}
                />
                <ProductCard
                    img={fd310.media.img_url}
                    id={fd310.id}
                    badges={fd310.badges}
                    nameSub={fd310.description.name_sub}
                    name={fd310.name}
                    hcl={fd310.hcl}
                />
                <ProductCard
                    img={fd400.media.img_url}
                    id={fd400.id}
                    badges={fd400.badges}
                    nameSub={fd400.description.name_sub}
                    name={fd400.name}
                    hcl={fd400.hcl}
                />
            </div>
        </div>
        <div class="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-6 mb-6">
            <BannerAirBoxOne />
            <BannerSelect />
            <BannerComparison />
        </div>
        <!-- BannerCatalogue component -->
        <BannerCatalogue />
    </div>
</section>
