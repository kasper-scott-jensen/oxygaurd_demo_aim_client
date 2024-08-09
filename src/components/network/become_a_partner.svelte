<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import { link } from 'svelte-routing'
    import BecomeAPartnerForm from './become_a_partner_form.svelte'
    import BannerNetwork from './banner_network.svelte'

    onMount(() => {
        breadcrumb.set([
            { title: 'Network', link: '/network' },
            { title: 'Become A Partner', link: '/products/become-a-partner' },
        ])
    })

    let imgSrc = '/img/partner.webp'
</script>

<!-- Main Section -->
<section class="pb-32">
    <div
        class="gap-8 py-8 px-4 mx-auto max-w-screen-2xl lg:gap-16 md:grid lg:grid-cols-2 p-6"
    >
        <!-- Left Column -->
        <div class="mt-4 md:mt-0">
            <!-- Image -->
            <img
                class="w-full rounded-lg shadow-md"
                src={imgSrc}
                alt="dashboard"
            />
            <!-- Banner Network Component -->
            <BannerNetwork />
        </div>
        <!-- Right Column -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="-mt-4">
            <!-- Become A Partner Form Component -->
            <BecomeAPartnerForm />

            <!-- Heading -->
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 pt-12"
            >
                Why Partner With Us <span
                    class="text-primary-700 font-extrabold text-4xl hidden lg:inline"
                >
                    ?
                </span>
            </h2>
            <!-- Description -->
            <p class="mb-6 font-light text-gray-500 md:text-lg">
                We believe in a collaborative effort, and growing as a
                community. Alliances form the ground upon which innovation and
                robotics can prosper. By partnering with us, you are
                contributing to making the end-product more accessible to the
                users, and serving as a support node in our growing network.
            </p>
        </div>
    </div>
</section>
