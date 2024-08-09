<script>
    // @ts-nocheck

    // Import necessary functions, stores, and components
    import { link, navigate } from 'svelte-routing'
    import { urlParams } from '../../stores/params.js'
    import { allProducts, currentProducts } from '../../stores/rackbeat.js'
    import { afterUpdate, onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation.js'
    import {
        activeTab,
        airboxConfig,
        categoryMenu,
        currentProduct,
    } from '../../stores/product_catalogue.js'
    import ProductDetailsDocs from './product_details_docs.svelte'
    import ProductDetailsTabs from './product_details_tabs.svelte'
    import TabCompat from './tab_compat.svelte'
    import TabFaq from './tab_faq.svelte'
    import TabFeatures from './tab_features.svelte'
    import BannerUpper from './banner_upper.svelte'
    import BannerLower from './banner_lower.svelte'
    import ProductDetailsDesc from './product_details_desc.svelte'
    import ProductDetailsInterface from './product_details_interface.svelte'
    import AirBoxConfigs from './product_details_airbox_configs.svelte'
    import BannerLowest from './banner_lowest.svelte'
    import ProductDetailsQuote from './product_details_quote.svelte'
    import TabSetup from './tab_setup.svelte'
    import TabRelated from './tab_related.svelte'
    import ProductDetailsTabsCompact from './product_details_tabs_compact.svelte'
    import ChatbotButton from '../utility/chatbot_button.svelte'

    // Define variables
    let product
    let fallbackImg = '/img/fallback.webp'

    // Function to find a product from its ID
    function findProductFromId(id, config) {
        product = $currentProducts.find((items) => items.id === id)
        if (product.id === '9302') {
            if (config === 1) {
                product = $allProducts.find((items) => items.id === '9311')
            } else if (config === 2) {
                product = $allProducts.find((items) => items.id === '9308')
            } else if (config === 3) {
                product = $allProducts.find((items) => items.id === '9309')
            } else if (config === 4) {
                product = $allProducts.find((items) => items.id === '9310')
            }
        }
    }

    // Find product whenever currentProduct changes
    $: findProductFromId($currentProduct, $airboxConfig)
</script>

{#if product}
    <!-- Product Details Section -->
    <section class="py-8 pb-24 antialiased md:pt-4 mt-16">
        <div class="max-w-screen-2xl px-4 mx-auto 2xl:px-0">
            <!-- Product Image and Description -->
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                <div
                    class="shrink-0 items-center justify-center flex flex-col border-gray-300 rounded-lg"
                >
                    <img
                        class="w-auto max-h-96"
                        src={product.media.img_url || fallbackImg}
                        alt="product"
                    />
                </div>
                <div class="mt-6 sm:mt-4 lg:mt-0 pb-6">
                    <ProductDetailsDesc {product} />
                    {#if product.category !== 'accessories' && product.category !== 'replacement parts'}
                        <ProductDetailsDocs {product} />
                    {/if}
                </div>
            </div>
            <!-- Additional Product Details -->
            {#if product.category !== 'accessories' && product.category !== 'replacement parts'}
                <div
                    class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 mt-4 md:mt-0"
                >
                    <div
                        class="shrink-0 items-center justify-center flex flex-col md:mt-3"
                    >
                        {#if product.id === '9302' || product.id === '9308' || product.id === '9309' || product.id === '9310' || product.id === '9311'}
                            <AirBoxConfigs />
                        {/if}
                    </div>
                    <div class=" pt-8 lg:pt-0">
                        {#if product.id !== '9226' && product.id !== '9503'}
                            <!-- Product Interface -->
                            <ProductDetailsInterface {product} />
                        {/if}
                    </div>
                </div>
                <div class="hidden lg:block">
                    <!-- Product Details Tabs -->
                    <ProductDetailsTabs />
                    {#if $activeTab === 0}
                        <TabCompat {product} />
                    {:else if $activeTab === 1}
                        <TabFeatures {product} />
                    {:else if $activeTab === 2}
                        <TabFaq {product} />
                    {:else if $activeTab === 3}
                        <TabSetup {product} />
                    {:else if $activeTab === 4}
                        <TabRelated {product} />
                    {/if}
                </div>
            {:else}
                <div class="hidden lg:block">
                    <ProductDetailsTabsCompact />
                    <TabRelated {product} />
                </div>
            {/if}
        </div>
        <!-- Quote Section -->
        <div
            class="max-w-screen-2xl mx-4 2xl:mx-auto border-gray-300 rounded-lg py-12 mt-8 lg:mt-24"
        >
            <ProductDetailsQuote />
        </div>
    </section>
{/if}
