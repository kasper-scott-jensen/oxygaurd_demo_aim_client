<script>
    // @ts-nocheck
    // @ts-ignore

    // Import necessary functions, stores, and components
    import { onMount } from 'svelte'
    import { breadcrumb } from '../stores/navigation'
    import { urlParams } from '../stores/params'

    import Breadcrumb from '../components/header/header_breadcrumb.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import GalleryFull from '../components/products/gallery_full.svelte'
    import GalleryDispensers from '../components/products/gallery_dispensers.svelte'
    import ProductDetails from '../components/products/product_details.svelte'
    import ProductCatalogue from '../components/products/catalogue.svelte'

    // Export params prop to receive URL parameters
    export let params

    // Set breadcrumbs and update URL parameter store on mount
    onMount(() => {
        if (!params) {
            breadcrumb.set([{ title: 'Products', link: '/products' }])
        }
    })

    // Function to update URL parameters in the store
    function updateParams(params) {
        if (params) {
            urlParams.set(params)
        } else {
            urlParams.set([])
        }
    }

    // Reactive statement to update parameters when they change
    $: updateParams(params)
</script>

<!-- Products Page Layout -->
<DefaultLayout>
    <TopSpacer />
    <Breadcrumb />

    <!-- Component Switch View Based on URL Parameters -->
    {#if $urlParams === 'dispensers'}
        <GalleryDispensers />
    {:else if $urlParams === 'catalogue'}
        <ProductCatalogue />
    {:else}
        <GalleryFull />
    {/if}
</DefaultLayout>
