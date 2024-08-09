<script>
    // Import necessary components and stores
    import DefaultLayout from '../layouts/default_layout.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import { onMount } from 'svelte'
    import HeaderBreadcrumb from '../components/header/header_breadcrumb.svelte'
    import { breadcrumb } from '../stores/navigation'
    import Vision from '../components/about/vision.svelte'
    import Timeline from '../components/about/timeline.svelte'
    import Clients from '../components/about/clients.svelte'

    // Set breadcrumb on component mount
    onMount(() => {
        breadcrumb.set([{ title: 'About', link: '/about' }])
    })
</script>

<!-- Home Page Layout -->
<DefaultLayout>
    <!-- Top Spacer Component -->
    <TopSpacer />
    <HeaderBreadcrumb />
    <Vision />
    <Timeline />
    <Clients />
</DefaultLayout>
