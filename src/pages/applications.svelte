<script>
    // Import necessary functions and components
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import Breadcrumb from '../components/header/header_breadcrumb.svelte'
    import { breadcrumb } from '../stores/navigation'
    import { onMount } from 'svelte'
    import { urlParams } from '../stores/params'
    import Applications from '../components/applications/applications.svelte'
    import CaseHouno from '../components/applications/case_houno.svelte'
    import CaseEmanor from '../components/applications/case_emanor.svelte'
    import Base from '../components/applications/base.svelte'

    // Export params prop to receive URL parameters
    export let params

    // Set default breadcrumb on mount if params are not provided
    onMount(() => {
        if (!params) {
            breadcrumb.set([{ title: 'Solutions', link: '/solutions' }])
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

<!-- Main Layout for Applications Page -->
<DefaultLayout>
    <TopSpacer />
    <Breadcrumb />
    {#if $urlParams === 'houno'}
        <CaseHouno />
    {:else if $urlParams === 'emanor'}
        <CaseEmanor />
    {:else if $urlParams === 'selecting-your-solution'}
        <Applications />
    {:else}
        <Base />
    {/if}
</DefaultLayout>
