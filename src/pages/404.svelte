<script>
    // Import necessary functions and stores
    import { onMount } from 'svelte'
    import { breadcrumb } from '../stores/navigation'

    // Import components
    import DefaultLayout from '../layouts/default_layout.svelte'
    import Breadcrumb from '../components/header/header_breadcrumb.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import Jumbotron from '../components/404/jumbotron.svelte'

    // Set breadcrumb on component mount
    onMount(() => {
        breadcrumb.set([{ title: '404', link: '/' }])
    })
</script>

<!-- 404 Page Layout -->
<DefaultLayout>
    <!-- Top Spacer Component -->
    <TopSpacer />

    <!-- Breadcrumb Component -->
    <Breadcrumb />

    <!-- Jumbotron Component -->
    <Jumbotron />
</DefaultLayout>
