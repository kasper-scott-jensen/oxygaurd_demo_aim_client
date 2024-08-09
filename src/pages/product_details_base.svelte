<script>
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import Breadcrumb from '../components/header/header_breadcrumb.svelte'
    import ProductDetails from '../components/products/product_details.svelte'
    import { onMount } from 'svelte'
    import { breadcrumb } from '../stores/navigation'
    import { urlParams } from '../stores/params'
    import { currentProduct } from '../stores/product_catalogue'

    export let params

    // Set breadcrumb on component mount
    onMount(() => {
        breadcrumb.set([
            { title: 'Products', link: '/products' },
            { title: 'Product Details', link: '/products/' },
        ])
    })

    // Function to update URL parameters in the store
    function updateParams(params) {
        if (params) {
            urlParams.set(params)
            currentProduct.set(params)
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
    <ProductDetails />
</DefaultLayout>
