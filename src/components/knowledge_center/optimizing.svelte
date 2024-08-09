<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import OptimizingFeatures from './optimizing_features.svelte'
    import { link } from 'svelte-routing'

    // Lifecycle hook to set breadcrumb
    onMount(() => {
        breadcrumb.set([
            { title: 'Knowledge Center', link: '/knowledge-center' },
            {
                title: 'Optimizing Your Dispensing',
                link: '/knowledge-center/optimizing',
            },
        ])
    })

    const imgSrc = '/img/selecting.webp'
</script>

<section class="pt-2 pb-32">
    <div class="mx-auto max-w-screen-2xl">
        <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Optimizing Your Dispensing
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Aim Robotics dispensers have build-in functionalities that will
                assist you in achieving optimal dispensing results.
            </p>
        </div>
        <div class="pt-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-16">
                <div class="p-6 pt-0">
                    <img
                        class="w-full rounded-lg shadow-md mb-10"
                        src={imgSrc}
                        alt="dashboard"
                    />
                    <h5
                        class="mb-4 text-2xl font-bold tracking-tight text-gray-900"
                    >
                        Smart Functions For Easy Dispensing
                    </h5>
                    <p class="mb-4 text-gray-600">
                        The Aim Robotics dispensers have build-in
                        functionalities that will assist you in achieving
                        optimal dispensing results, once you have the total
                        setup established.
                    </p>
                    <p class="mb-4 text-gray-600">
                        The Aim Robotics Configurator gives you a good starting
                        point for the settings based on your choice of material
                        and bead profile.
                    </p>
                    <a
                        use:link
                        href="/knowledge-center/configurator"
                        class="inline-flex items-center text-lg font-medium text-[#00adee] hover:underline"
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
                    </a>
                </div>
                <div>
                    <OptimizingFeatures />
                </div>
            </div>
        </div>
    </div>
</section>
