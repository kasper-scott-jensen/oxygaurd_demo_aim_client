<script>
    // @ts-nocheck

    // Importing necessary Svelte components and modules
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import { partners } from '../../stores/crm.js'
    import BrandIconList from '../products/brand_icon_list.svelte'
    import { link } from 'svelte-routing'
    import RegionalSupportOther from './regional_support_other.svelte.svelte'

    // Variables to hold partner information
    let kosters
    let bluebay
    let teamArray

    // Setting up the breadcrumb navigation on component mount
    onMount(() => {
        breadcrumb.set([
            { title: 'Support', link: '/support' },
            { title: 'Regional Support', link: '/support/regional' },
        ])
    })

    // Function to define the support teams based on partners data
    function defineTeams() {
        kosters = $partners.find((partner) => partner.id === 19)
        bluebay = $partners.find((partner) => partner.id === 5)
        teamArray = [bluebay, kosters]
    }

    // Reactive statement to update teamArray whenever defineTeams is called
    $: defineTeams()
</script>

<section class="pb-32">
    <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
        <!-- Title and description section -->
        <div class="mx-auto max-w-screen-sm text-center mb-6">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Regional Support Teams
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Reach out directly to our regional support teams for assistance
                near you.
            </p>
        </div>
        <!-- Grid for support team cards -->
        <div
            class="grid grid-cols-1 md:grid-cols-2 w-full gap-8 lg:gap-16 pb-24"
        >
            {#each teamArray as team, index}
                <div
                    class="flex flex-col w-full items-center justify-center pt-12"
                >
                    <div
                        class="bg-white border border-gray-300 rounded-lg shadow"
                    >
                        <!-- Link to team website with image -->
                        <a
                            target="_blank"
                            href={team.website}
                            class="flex w-full items-center justify-center"
                        >
                            <img
                                class="rounded-t-lg hover:opacity-80"
                                src={index === 0
                                    ? '/img/support_us.webp'
                                    : '/img/support_benelux.webp'}
                                alt="logo"
                            />
                        </a>
                        <!-- Team details section -->
                        <div class="p-5 bg-white rounded-b-lg shadow-md">
                            <div
                                class="p-6 col-span-3 flex flex-col h-full justify-center"
                            >
                                <!-- Team name based on index -->
                                <h3
                                    class="text-4xl font-bold tracking-tight text-gray-900 pb-6"
                                >
                                    {#if index === 0}
                                        US Support Team
                                    {:else if index === 1}
                                        Central Europe Support Team
                                    {/if}
                                </h3>
                                <!-- Partner company name -->
                                <h3
                                    class="text-2xl font-bold tracking-tight text-primary-700 pb-4"
                                >
                                    {team.company}
                                </h3>
                                <!-- Partner address -->
                                <p
                                    class="py-2 flex items-center justify-start text-gray-900 mt-2"
                                >
                                    <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                                            />
                                            <path
                                                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                                            />
                                        </svg>
                                    </span>
                                    {team.address}, {team.city}, {team.country}
                                </p>
                                <!-- Partner email -->
                                <p
                                    class="py-2 flex items-center justify-start text-gray-700"
                                >
                                    <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                                            />
                                            <path
                                                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                                            />
                                        </svg>
                                    </span>
                                    {team.email}
                                </p>
                                <!-- Partner phone number -->
                                <p
                                    class="py-2 flex items-center justify-start text-gray-700"
                                >
                                    <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    {`${team.country_code} ${team.phone}`}
                                </p>
                                <!-- Get Started button linking to partner website -->
                                <a
                                    target="_blank"
                                    href={team.website}
                                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 shadow-md mt-8"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <!-- Section for other regional support -->
        <RegionalSupportOther />
    </div>
</section>
