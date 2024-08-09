<script>
    // Import necessary functions and components
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import Breadcrumb from '../components/header/header_breadcrumb.svelte'
    import { breadcrumb } from '../stores/navigation'
    import { onMount } from 'svelte'
    import ContactInformation from '../components/contact/contact_information.svelte'

    // Set breadcrumb on component mount
    onMount(() => {
        breadcrumb.set([{ title: 'Contact', link: '/contact' }])
    })
</script>

<!-- Contact Page Layout -->
<DefaultLayout>
    <!-- Top Spacer Component -->
    <TopSpacer />

    <!-- Breadcrumb Component -->
    <Breadcrumb />

    <!-- Contact Information Component -->
    <ContactInformation />
</DefaultLayout>
