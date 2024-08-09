<script>
    // Import necessary functions, stores, and components
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import Breadcrumb from '../components/header/header_breadcrumb.svelte'
    import { breadcrumb } from '../stores/navigation'
    import { onMount } from 'svelte'
    import { urlParams } from '../stores/params.js'
    import Base from '../components/knowledge_center/base.svelte'
    import Comparison from '../components/knowledge_center/comparison.svelte'
    import BasicConsiderations from '../components/knowledge_center/basic_considerations.svelte'
    import Viscosities from '../components/knowledge_center/viscosities.svelte'
    import Optimizing from '../components/knowledge_center/optimizing.svelte'
    import How from '../components/knowledge_center/how.svelte'
    import Config from '../components/knowledge_center/config.svelte'

    export let params

    onMount(() => {
        if (!params) {
            breadcrumb.set([
                { title: 'Knowledge Center', link: '/knowledge-center' },
            ])
        }
    })

    function updateParams(params) {
        if (params) {
            urlParams.set(params)
        } else {
            urlParams.set([])
        }
    }

    $: updateParams(params)
</script>

<DefaultLayout>
    <TopSpacer />
    <Breadcrumb />

    {#if $urlParams === 'configurator'}
        <Config />
    {:else if $urlParams === 'how-they-work'}
        <How />
    {:else if $urlParams === 'considerations'}
        <BasicConsiderations />
    {:else if $urlParams === 'optimizing'}
        <Optimizing />
    {:else if $urlParams === 'viscosities'}
        <Viscosities />
    {:else if $urlParams === 'comparison'}
        <Comparison />
    {:else}
        <Base />
    {/if}
</DefaultLayout>
