<script>
    // Import necessary modules from Svelte and the store
    import { currentProducts } from '../../stores/rackbeat.js'

    // Import the ProductCard component
    import ProductCard from './product_card.svelte'

    // Declare variables to store product details
    let airbox
    let aimpath
    let tcp

    // Subscribe to currentProducts store and set product details
    $: {
        currentProducts.subscribe(($products) => {
            airbox = $products.find((p) => p.id === '9302')
            aimpath = $products.find((p) => p.id === '9503')
            tcp = $products.find((p) => p.id === '9226')
        })
    }
</script>

<!-- Container for the product cards -->
<div class="mt-6">
    <!-- Grid layout for product cards -->
    <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-6"
    >
        <!-- Render ProductCard component for airbox if it exists -->
        {#if airbox}
            <ProductCard
                img={airbox.media.img_url}
                id={airbox.id}
                badges={airbox.badges}
                nameSub={airbox.description.name_sub}
                name={airbox.name}
                hcl={airbox.hcl}
            />
        {/if}
        <!-- Render ProductCard component for aimpath if it exists -->
        {#if aimpath}
            <ProductCard
                img={aimpath.media.img_url}
                id={aimpath.id}
                badges={aimpath.badges}
                nameSub={aimpath.description.name_sub}
                name={aimpath.name}
                hcl={aimpath.hcl}
                imgClass={'p-14'}
            />
        {/if}
        <!-- Render ProductCard component for tcp if it exists -->
        {#if tcp}
            <ProductCard
                img={tcp.media.img_url}
                id={tcp.id}
                badges={tcp.badges}
                nameSub={tcp.description.name_sub}
                name={tcp.name}
                hcl={tcp.hcl}
            />
        {/if}
    </div>
</div>
