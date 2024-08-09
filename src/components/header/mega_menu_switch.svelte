<script>
    // Importing necessary stores and components
    import { megaMenuStates } from '../../stores/navigation'
    import MegaMenuProducts from './mega_menu_products.svelte'
    import MegaMenuApplications from './mega_menu_applications.svelte'
    import MegaMenuKnowledgeCenter from './mega_menu_knowledge_center.svelte'
    import MegaMenuNetwork from './mega_menu_network.svelte'
    import MegaMenuSupport from './mega_menu_support.svelte'
</script>

<!-- Conditionally rendering the mega menu components based on the state -->
{#if $megaMenuStates[0]}
    <MegaMenuProducts />
{:else if $megaMenuStates[1]}
    <MegaMenuApplications />
{:else if $megaMenuStates[2]}
    <MegaMenuKnowledgeCenter />
{:else if $megaMenuStates[3]}
    <MegaMenuNetwork />
{:else if $megaMenuStates[4]}
    <MegaMenuSupport />
{/if}
