<script>
    // Import necessary components and stores
    import DefaultLayout from '../layouts/default_layout.svelte'
    import Hero from '../components/home/home_hero.svelte'
    import Presentation from '../components/home/home_presentation.svelte'
    import Features from '../components/home/home_features.svelte'
    import CTA from '../components/home/home_cta.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import { urlParams } from '../stores/params'
    import Clients from '../components/about/clients.svelte'
</script>

<!-- Home Page Layout -->
<DefaultLayout>
    <!-- Top Spacer Component -->
    <TopSpacer />

    <!-- Hero Section Component -->
    <Hero />

    <!-- Presentation Section Component -->
    <Presentation />

    <!-- Features Section Component -->
    <Features />

    <!-- Client Component-->
    <Clients />

    <!-- Call to Action Section Component -->
    <CTA />
</DefaultLayout>
