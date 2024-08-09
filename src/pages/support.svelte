<script>
    // Import necessary functions, stores, and components
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import Breadcrumb from '../components/header/header_breadcrumb.svelte'
    import { breadcrumb } from '../stores/navigation'
    import { onMount } from 'svelte'
    import SupportInformation from '../components/support/support_information.svelte'
    import RegionalSupportOverview from '../components/support/regional_support_overview.svelte'
    import { urlParams } from '../stores/params.js'

    // Export params prop to receive URL parameters
    export let params

    // Set default breadcrumb on mount if params are not provided
    onMount(() => {
        if (!params) {
            breadcrumb.set([{ title: 'Support', link: '/Support' }])
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

<!-- Support Page Layout -->
<DefaultLayout>
    <TopSpacer />
    <Breadcrumb />
    {#if $urlParams === 'regional'}
        <RegionalSupportOverview />
    {:else}
        <SupportInformation />
    {/if}
</DefaultLayout>
