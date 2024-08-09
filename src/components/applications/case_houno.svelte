<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import ApplicationsBannerEmanor from './applications_banner_emanor.svelte'

    onMount(() => {
        breadcrumb.set([
            { title: 'Solutions', link: '/solutions' },
            { title: 'HOUNÖ', link: '/solutions/houno' },
        ])
    })

    const env = import.meta.env
</script>

<section class="dark:bg-gray-900 pb-24">
    <!-- Main section with dark background and padding at the bottom -->
    <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
        <!-- Container with horizontal padding, centered content, and max width for large screens -->
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <!-- Centered text container with margin at the bottom -->
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                <!-- Heading with specific styling for margin, font size, tracking, weight, and color -->
                Case Study - HOUNÖ
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl">
                <!-- Paragraph with light font weight, gray color, margin for large screens, and responsive font size -->
                Please enjoy this video showcasing the efficiency, precision and
                reliability of our dispensing solution at HOUNÖ.
            </p>
        </div>
        <div
            class="w-full aspect-w-16 aspect-h-9 justify-center items-center mx-auto mb-6"
        >
            <!-- Video element with controls -->
            <!-- svelte-ignore a11y-media-has-caption -->
            <video
                src={`${env.VITE_SERVER}/videos/use_case/houno.mp4`}
                class="w-full h-full object-cover rounded-lg shadow-md"
                controls
            ></video>
        </div>
        <ApplicationsBannerEmanor />
    </div>
</section>
