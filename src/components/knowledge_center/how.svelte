<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import { currentProducts } from '../../stores/rackbeat'
    import { howActiveTab } from '../../stores/knowledge_center'

    // Lifecycle hook to set breadcrumb
    onMount(() => {
        breadcrumb.set([
            { title: 'Knowledge Center', link: '/knowledge-center' },
            {
                title: 'How Our Dispensers Work',
                link: '/knowledge-center/how-they-work',
            },
        ])
    })

    let infographics = [
        '/infographic/how/sd.webp',
        '/infographic/how/highv.webp',
        '/infographic/how/fd310.webp',
        '/infographic/how/fd400.webp',
        '/infographic/how/airbox.webp',
    ]

    let sd3055 = $currentProducts.find((product) => product.id === '9410')
    let fd310 = $currentProducts.find((product) => product.id === '9000')
    let fd400 = $currentProducts.find((product) => product.id === '9044')
    let fdhighv = $currentProducts.find((product) => product.id === '9027')
    let airbox = $currentProducts.find((product) => product.id === '9302')

    let productArray = []

    $: productArray = [sd3055, fdhighv, fd310, fd400, airbox]

    // Choose the configuration to display
    function handleConfigClicked(index) {
        howActiveTab.set(index)
    }
</script>

<section class="pt-2 pb-32">
    <div class="mx-auto max-w-screen-2xl px-4">
        <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                How Our Dispensers Work
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Aim Robotics has different solutions optimized for different use
                cases.
            </p>
        </div>
        <div class="pt-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-16">
                <div>
                    <ul
                        class="flex flex-col sm:flex-row gap-2 mb-4 text-sm font-medium text-gray-500"
                    >
                        {#each productArray as item, index}
                            <li class="flex-1">
                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                <!-- svelte-ignore a11y-no-static-element-interactions -->
                                <div
                                    on:click|preventDefault={() =>
                                        handleConfigClicked(index)}
                                    class="group justify-center cursor-pointer p-1 text-center items-center bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 shadow-sm flex flex-col h-full {index ===
                                    $howActiveTab
                                        ? 'border-primary-700'
                                        : ''}"
                                >
                                    <p
                                        class="font-bold text-primary-700 text-lg"
                                    >
                                        {item.name}
                                    </p>
                                    <p class="mb-4 text-gray-600">
                                        {item.description.name_sub}
                                    </p>
                                </div>
                            </li>
                        {/each}
                    </ul>
                    <div
                        class="flex justify-center items-center bg-white text-medium text-gray-500 rounded-lg w-full shadow-md border border-gray-300"
                    >
                        <img
                            src={infographics[$howActiveTab]}
                            alt="info"
                            class="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
                <div class="max-w-xl p-6 pt-0 px-0 lg:p-6">
                    <h5
                        class="mb-4 text-2xl font-bold tracking-tight text-gray-900 pt-8"
                    >
                        Precision and Repeatability - Easy to Use
                    </h5>
                    <h3
                        class="text-xs uppercase font-bold text-gray-800 mb-2 mt-10"
                    >
                        SD Series
                    </h3>
                    <p class="mb-4 text-gray-600">
                        The SD series use a patented precision linear actuator
                        to control the piston movement achieving
                        state-of-the-art repeatability and precision.
                    </p>
                    <h3
                        class="text-xs uppercase font-bold text-gray-800 mb-2 mt-10"
                    >
                        FD Series
                    </h3>
                    <p class="mb-4 text-gray-600">
                        The FD series use a stepper motor controlled auger to
                        feed the material to the output nozzle facilitating
                        precise control of pre-feed and suck-back settings.
                        Adequate material supply is secured by the applied
                        compressed air (FD310 & FDHighV) or spring load (FD400).
                    </p>
                    <h3
                        class="text-xs uppercase font-bold text-gray-800 mb-2 mt-10"
                    >
                        AirBox
                    </h3>
                    <p class="mb-4 text-gray-600">
                        The AirBox deploys a precision pressure regulator fully
                        controlled from the user interface to achieve highly
                        controlled air output to the cobot-mounted dispensers.
                    </p>
                    <h3
                        class="text-xs uppercase font-bold text-gray-800 mb-2 mt-10"
                    >
                        Connection
                    </h3>
                    <p class="mb-4 text-gray-600">
                        Communication with the cobot goes either through the
                        RS485 serial communication line in the control cable or
                        to the cobots control box analog/digital IO interface.
                    </p>
                    <h3
                        class="text-xs uppercase font-bold text-gray-800 mb-2 mt-10"
                    >
                        Automation
                    </h3>
                    <p class="mb-4 text-gray-600">
                        The FD and SD series automatically adjust the dispensing
                        speed to the actual cobot TCP speed resulting in
                        excellent uniformity of the delivered material bead,
                        which is especially important when dispensing on to
                        complex 3D structures.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
