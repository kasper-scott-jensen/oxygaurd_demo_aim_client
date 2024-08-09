<script>
    // Import necessary functions, stores, and components
    import { onMount } from 'svelte'
    import { breadcrumb } from '../stores/navigation'
    import { urlParams } from '../stores/params'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import HeaderBreadcrumb from '../components/header/header_breadcrumb.svelte'
    import NetworkCatalogue from '../components/network/network_catalogue.svelte'
    import BecomeAPartner from '../components/network/become_a_partner.svelte'
    import WorldMap from '../components/network/world_map.svelte'

    // Export params prop to receive URL parameters
    export let params

    // Set default breadcrumb on mount if params are not provided
    onMount(() => {
        if (!params) {
            breadcrumb.set([{ title: 'Network', link: '/network' }])
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

<!-- Network Page Layout -->
<DefaultLayout>
    <TopSpacer />
    <HeaderBreadcrumb />

    <!-- Component Switch View Based on URL Parameters -->
    {#if $urlParams === 'become-a-partner'}
        <BecomeAPartner />
    {:else if $urlParams === 'worldmap'}
        <WorldMap />
    {:else}
        <NetworkCatalogue />
    {/if}
</DefaultLayout>
