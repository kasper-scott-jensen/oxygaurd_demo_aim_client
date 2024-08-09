<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import { navigate } from 'svelte-routing'

    // Lifecycle hook to set breadcrumb
    onMount(() => {
        breadcrumb.set([
            { title: 'Knowledge Center', link: '/knowledge-center' },
            {
                title: 'Material Viscosities',
                link: '/knowledge-center/viscosities',
            },
        ])
    })

    const materials = [
        {
            name: 'Super Glue (Cyanoacrylate)',
            visc: '100',
            appl: 'Quick fixes, small parts, plastic, metal',
        },
        {
            name: 'Rubber Cement',
            visc: '2,000',
            appl: 'Temporary bonding, photo mounting',
        },
        { name: 'Wood Glue', visc: '3000', appl: 'Woodworking, carpentry' },
        {
            name: 'Contact Cement',
            visc: '4,000',
            appl: 'Laminates, rubber, leather, glass',
        },
        { name: 'PVA Glue', visc: '5000', appl: 'Paper, crafts, woodworking' },
        {
            name: 'Polyurethane Glue',
            visc: '6,000',
            appl: 'Strong bonding, wood, metal, plastic',
        },
        {
            name: 'Acrylic Adhesive',
            visc: '8,000',
            appl: 'Glass, metal, plastic bonding',
        },
        {
            name: 'Epoxy Resin',
            visc: '10,000',
            appl: 'Strong bonding, repairs, construction',
        },
        { name: 'Hot Glue', visc: '10,000', appl: 'Crafts, quick bonding' },
        {
            name: 'RTVs (Room Temperature Vulcanizing Silicone)',
            visc: '25,000',
            appl: 'Gaskets, sealing, electronics, automotive',
        },
        {
            name: 'Silicone Adhesive',
            visc: '30,000',
            appl: 'Sealing, waterproofing, electronics',
        },
        {
            name: 'Silicone Sealant',
            visc: '35,000',
            appl: 'Sealing, glazing, weatherproofing',
        },
        {
            name: 'Thermal Heat Sink Compound',
            visc: '300,000-600,000',
            appl: 'Heat transfer in Electronics',
        },
        {
            name: 'Very high-viscosity industrial fluids',
            visc: '100,000-1,000,000',
            appl: 'Anti-foam agent in non-aqueous processes',
        },
    ]
</script>

<section class="pt-2 pb-32">
    <div class="mx-auto max-w-screen-2xl">
        <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Material Viscosities
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Learn more about the viscosities of different materials. This
                information can help you choose the right solution for your
                application.
            </p>
        </div>
        <div class="grid gap-8 xl:gap-16 md:grid xl:grid-cols-2 p-6">
            <div class="flex w-full flex-col justify-center">
                <h5
                    class="mb-4 text-2xl font-bold tracking-tight text-gray-900"
                >
                    A Quick Lesson
                </h5>
                <p class="mb-4 text-gray-500 text-md">
                    Materials used for dispensing exhibit resistance to flow,
                    known as viscosity.
                </p>
                <!-- Descriptive paragraph -->
                <p class="mb-4 text-gray-500 text-md">
                    The SI unit of dynamic viscosity is Pascal-second (Pa·s),
                    but for dispensing materials, the commonly used unit is
                    centiPoise (cP), equivalent to 1 mPa·s (one
                    millipascal-second). Higher viscosity values indicate
                    "thicker" materials.
                </p>
                <!-- Descriptive paragraph -->
                <p class="mb-4 text-gray-500 text-md">
                    Not all manufacturers provide viscosity data for their
                    materials. In general, viscosity values can vary
                    significantly depending on environmental conditions such as
                    temperature, shelf life, and pot time. If viscosity
                    information is unavailable, general assumptions must be made
                    to choose the best-fitting Aim Robotics solution.
                </p>
                <!-- Descriptive paragraph -->
                <p class="mb-4 text-gray-500 text-md">
                    Aim Robotics provides a setup configurator to help optimize
                    your setup based on the given material and bead width
                    requirements.
                </p>
                <button
                    on:click|preventDefault={() => {
                        navigate('/knowledge-center/configurator')
                    }}
                    type="button"
                    class="flex items-center text-md font-medium text-center text-primary-700 border-white rounded-lg hover:underline pt-4 pb-8"
                >
                    Try It Now
                    <svg
                        class="w-3 h-3 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
            </div>
            <div class="w-full">
                <!-- Compatibility Table Container -->
                <div
                    class="relative overflow-x-auto sm:rounded-lg border-gray-300 border shadow-md"
                >
                    <table
                        class="w-full text-left rtl:text-right text-gray-500"
                    >
                        <!-- Table Header -->
                        <thead
                            class="text-xs text-gray-700 uppercase bg-gray-50"
                        >
                            <tr>
                                <th scope="col" class="px-6 py-3">Material</th>
                                <th scope="col" class="px-6 py-3">Viscosity</th>
                                <th scope="col" class="px-6 py-3">
                                    Application
                                </th>
                            </tr>
                        </thead>
                        <!-- Table Body -->
                        <tbody>
                            {#each materials as mat, index}
                                <tr class="bg-white border-b">
                                    <td class="px-6 py-2 text-xs">
                                        {mat.name}
                                    </td>
                                    <td class="px-6 py-2 text-xs">
                                        {mat.visc}
                                    </td>
                                    <td class="px-6 py-2 text-xs">
                                        {mat.appl}
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
