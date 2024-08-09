<script>
    // Import necessary functions and components
    import { onMount } from 'svelte'
    import SupportForm from './support_form.svelte'
    import SupportRegional from './support_regional.svelte'
    import SupportWorldmap from './support_worldmap.svelte'
    import SupportKnowledge from './support_knowledge.svelte'
    import { link } from 'svelte-routing'
</script>

<!-- Main Support Section -->
<section class="pb-24">
    <div
        class="gap-8 items-start py-8 px-4 mx-auto max-w-screen-2xl md:grid xl:grid-cols-2 p-6"
    >
        <!-- Left Column -->
        <div class="grid grid-cols-1 gap-8 xl:grid-cols-1 flex-col lg:py-0">
            <!-- Knowledge Section -->
            <SupportKnowledge />
            <!-- Regional Support Section -->
            <SupportRegional />
        </div>

        <!-- Right Column -->
        <div class="grid grid-cols-1 gap-8 xl:grid-cols-1 flex-col lg:py-0">
            <!-- Support Form Section -->
            <SupportForm />
            <!-- World Map Section -->
            <SupportWorldmap />
        </div>
    </div>
</section>
