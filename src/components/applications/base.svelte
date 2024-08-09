<script>
    import HomePresentation from '../home/home_presentation.svelte'
    import BannerSelect from '../products/banner_select.svelte'
    import BannerUpper from '../products/banner_upper.svelte'
    import UseCaseBanner from './use_case_banner.svelte'

    let imgSrc = '/gallery/gallery_4.webp'
</script>

<section class="dark:bg-gray-900 pb-32">
    <div class="mx-auto max-w-screen-2xl">
        <div
            class="gap-8 items-center px-4 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 py-4 lg:px-6 pb-6"
        >
            <div class="mt-4 md:mt-0">
                <h2
                    class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 pt-4"
                >
                    Solutions
                    <span
                        class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                    >
                        .
                    </span>
                </h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg">
                    Get the perfect Aim Robotics solution for your application.
                </p>
            </div>
            <img
                class="w-full rounded-lg shadow-md"
                src={imgSrc}
                alt="stockphoto"
            />
        </div>
        <!-- Grid -->
        <div class="px-4 lg:px-6">
            <BannerSelect />
            <UseCaseBanner />
        </div>
    </div>
</section>
