<script>
    // Import necessary functions and components
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import Map from './network_map.svelte'
    import BannerNetwork from './banner_network.svelte'
    import BannerBecomeAPartner from './banner_become_a_partner.svelte'

    // Set breadcrumb navigation on component mount
    onMount(() => {
        breadcrumb.set([
            { title: 'Network', link: '/network' },
            { title: 'World Map', link: '/network/worldmap' },
        ])
    })
</script>

<!-- Main Section -->
<section class="pt-2 pb-0 md:pb-72 lg:pb-96">
    <div class="pb-24">
        <div
            class="px-4 mx-auto max-w-screen-2xl lg:px-6 md:pb-24 md:h-[500px] lg:h-[600px] xl:h-[650px] 2xl:h-[800px]"
        >
            <!-- Title and Description -->
            <div class="mx-auto max-w-screen-sm text-center mb-6">
                <h2
                    class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
                >
                    World Map
                    <span
                        class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                    >
                        .
                    </span>
                </h2>
                <p class="font-light text-gray-500 md:text-lg">
                    Browse through a complete overview of our network and
                    partners.
                </p>
            </div>
            <!-- Banners -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div class="flex w-full">
                    <BannerNetwork />
                </div>
                <div class="flex w-full">
                    <BannerBecomeAPartner />
                </div>
            </div>
            <!-- Map Component -->
            <Map />
        </div>
    </div>
</section>
