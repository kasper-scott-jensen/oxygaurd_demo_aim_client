<script>
    // Import necessary banner components
    import BannerCatalogue from './banner_upper.svelte'
    import BannerCategories from './banner_mid_bottom.svelte'
    import BannerOther from './banner_lower.svelte'
    import BannerDispensers from './banner_mid_top.svelte'
    import BannerInfo from '../alerts/product_compatibility.svelte'
</script>

<!-- Main section for banners -->
<section class="pt-4 pb-32">
    <div class="px-4 mx-auto max-w-screen-2xl">
        <!-- Product compatibility information banner -->
        <BannerInfo />
        <!-- Catalogue banner -->
        <BannerCatalogue />
        <!-- Dispensers banner -->
        <BannerDispensers />
        <!-- Categories banner -->
        <BannerCategories />
        <!-- Other information banner -->
        <BannerOther />
    </div>
</section>
