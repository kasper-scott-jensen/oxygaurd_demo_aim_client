<script>
    // Import Navbar and Footer components
    import Navbar from '../components/header/navbar.svelte'
    import Footer from '../components/footer/footer_container.svelte'
</script>

<!-- Main Container -->
<div class="flex flex-col min-h-screen">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Background Container -->
    <div class="tw-background">
        <!-- Content Slot -->
        <div class="bg-white bg-opacity-80">
            <slot />
        </div>
    </div>

    <!-- Footer Component -->
    <Footer />
</div>

<!-- Styles for the Layout -->
<style>
    /* Background Container */
    .tw-background {
        position: relative;
        top: 0;
        width: 100%;
        overflow: hidden;
    }

    /* Background Image with Blur Effect */
    .tw-background::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url('/bg/abstract.webp');
        background-size: cover;
        background-position: top right;
        filter: blur(10px);
        z-index: -1;
    }

    /* Content Slot Styling */
    .tw-background .bg-white {
        position: relative;
        z-index: 0;
    }
</style>
