<script>
    import { link } from 'svelte-routing'
    import BannerConfig from './banner_config.svelte'
    import BannerViscosities from './banner_viscosities.svelte'
    import BannerConsiderations from './banner_considerations.svelte'
    import BannerOptimizing from './banner_optimizing.svelte'
    import BannerCompare from './banner_compare.svelte'
    import BannerHow from './banner_how.svelte'
    import BannerYoutube from './banner_youtube.svelte'
    import BannerDropbox from './banner_dropbox.svelte'

    let imgSrc = '/img/learning_lots.webp'
</script>

<section class="dark:bg-gray-900 pb-32">
    <div class="mx-auto max-w-screen-2xl">
        <div
            class="gap-8 items-center px-4 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 py-4 lg:px-6 pb-6"
        >
            <img
                class="w-full rounded-lg shadow-md"
                src={imgSrc}
                alt="stockphoto"
            />
            <div class="mt-4 md:mt-0">
                <h2
                    class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 pt-4"
                >
                    Knowledge Center
                    <span
                        class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                    >
                        .
                    </span>
                </h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg">
                    Your go-to hub for product insight, documentation and
                    guides.
                </p>
            </div>
        </div>
        <!-- Grid -->
        <div class="px-4 lg:px-6">
            <BannerConfig />
            <div class="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-6">
                <BannerHow />
                <BannerOptimizing />
            </div>
            <div class="grid gap-6 grid-cols-1 lg:grid-cols-3 mt-6">
                <BannerViscosities />
                <BannerConsiderations />
                <BannerCompare />
            </div>
            <div class="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-6">
                <BannerYoutube />
                <BannerDropbox />
            </div>
        </div>
    </div>
</section>
