<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import BasicGallery from './basic_gallery.svelte'
    import { link } from 'svelte-routing'

    // Lifecycle hook to set breadcrumb
    onMount(() => {
        breadcrumb.set([
            { title: 'Knowledge Center', link: '/knowledge-center' },
            {
                title: 'Basic Considerations',
                link: '/knowledge-center/considerations',
            },
        ])
    })
</script>

<section class="pt-2 pb-32">
    <div class="mx-auto max-w-screen-2xl">
        <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Basic Considerations
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Dispensing solutions are not one-size-fits-all. Here are some
                basic considerations to keep in mind.
            </p>
        </div>
        <div class="pt-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-16">
                <div class="max-w-xl p-6 pt-0">
                    <h5
                        class="mb-4 text-2xl font-bold tracking-tight text-gray-900"
                    >
                        Small Changes With A Big Impact
                    </h5>
                    <p class="mb-4 text-gray-600">
                        Having decided which Aim Robotics solution that fits
                        your application best, you need to consider some
                        fundamentals when it comes to achieving the best
                        dispensing result.
                    </p>
                    <h3
                        class="text-xs uppercase font-bold text-gray-800 mb-2 mt-10"
                    >
                        Uniform And Reproducible Beads
                    </h3>
                    <p class="mb-4 text-gray-600">
                        To achieve a uniform and reproducible bead you need to
                        have material flow that matches the linear motion speed
                        of the cobot arm. In that case the width of the
                        resulting bead will be equivalent to the tip diameter.
                    </p>
                    <h3
                        class="text-xs uppercase font-bold text-gray-800 mb-2 mt-10"
                    >
                        Optimal Distance
                    </h3>
                    <p class="mb-4 text-gray-600">
                        Distance between object and dispenser tip should
                        typically be 1,5-2 times the tip diameter.
                    </p>
                    <h3
                        class="text-xs uppercase font-bold text-gray-800 mb-2 mt-10"
                    >
                        Managing Viscosity
                    </h3>
                    <p class="mb-4 text-gray-600">
                        Since all relevant materials used for dispensing exhibit
                        resistance to flow, known as viscosity, the dispensed
                        volume is proportional to the pressure applied to the
                        material and inversely proportional to the viscosity.
                        This creates boundary conditions that needs to be
                        considered in the choice of material, needle/tip
                        diameter and length.
                    </p>
                    <h3
                        class="text-xs uppercase font-bold text-gray-800 mb-2 mt-10"
                    >
                        Importance of Tip/Needle Diameter
                    </h3>
                    <p class="mb-4 text-gray-600">
                        The size (diameter) of the tip/needle has a huge impact
                        on the dispensing. Going from e.g. a 2mm to 1mm diameter
                        will result in 8 times lower dispensing volume or a need
                        for 8 times higher pressure applied to the material.
                    </p>
                    <h3
                        class="text-xs uppercase font-bold text-gray-800 mb-2 mt-10"
                    >
                        Optimal Results
                    </h3>
                    <p class="mb-4 text-gray-600">
                        Aim Robotics provides a configurator that can help you
                        optimizing your setup with a given material and bead
                        width requirement.
                    </p>
                    <a
                        use:link
                        href="/knowledge-center/configurator"
                        class="inline-flex items-center text-lg font-medium text-[#00adee] hover:underline pb-4"
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
                    <BasicGallery />
                </div>
            </div>
        </div>
    </div>
</section>
