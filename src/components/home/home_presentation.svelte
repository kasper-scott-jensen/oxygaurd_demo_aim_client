<script>
    // @ts-nocheck

    import { onMount } from 'svelte'
    import { link } from 'svelte-routing'

    let imgSrc1 = '/dispensers/sd_30_55.webp'
    let imgSrc2 = '/dispensers/fd_highv.webp'
    let imgSrc3 = '/dispensers/fd_310.webp'
    let imgSrc4 = '/dispensers/fd_400.webp'

    let imgSwitcher1 = [imgSrc2, imgSrc3]
    let imgSwitcher2 = [imgSrc1, imgSrc4]

    let currentImgIndex1 = 0
    let currentImgIndex2 = 0
    let fade1 = false
    let fade2 = false

    onMount(() => {
        startImageSwitcher()
    })

    function startImageSwitcher() {
        setInterval(() => {
            fade1 = true
            setTimeout(() => {
                currentImgIndex1 = (currentImgIndex1 + 1) % imgSwitcher1.length
                fade1 = false
            }, 1000) // Duration of the fade-out effect
        }, 5000)

        setTimeout(() => {
            setInterval(() => {
                fade2 = true
                setTimeout(() => {
                    currentImgIndex2 =
                        (currentImgIndex2 + 1) % imgSwitcher2.length
                    fade2 = false
                }, 1000) // Duration of the fade-out effect
            }, 5000)
        }, 2500)
    }
</script>

<!-- Main section container -->
<section class="pt-12" id="presentation">
    <!-- Container for the content with gap, padding, and maximum width settings -->
    <div
        class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
    >
        <!-- Text content container -->
        <div class="font-light text-gray-500 sm:text-lg">
            <!-- Main heading -->
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Enhancing Confidence in Automated Dispensing Systems
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <!-- Descriptive paragraph -->
            <p class="mb-4">
                We are committed to simplifying the dispensing process and
                boosting confidence in automated systems. Our goal is to provide
                the most precise automated fluid dispensing solutions and
                software tools designed specifically for collaborative robots
                (cobots). Our offerings ensure high repeatability and enhanced
                quality control in production through advanced electronic
                control systems.
            </p>
            <!-- Call-to-action link -->
            <a
                use:link
                href="/products/dispensers"
                class="hidden xl:inline-flex items-center text-lg font-medium text-[#00adee] hover:underline pt-2"
            >
                Our Cutting-Edge Dispensers
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
        <!-- Images container -->
        <div class="grid grid-cols-2 gap-4 mt-12">
            <!-- Second image -->
            <div
                class="bg-gray-900 lg:mb-24 xl:mb-24 rounded-lg py-4 shadow-md"
            >
                <img
                    class="w-full transition-opacity ease-in-out duration-1000 {fade1
                        ? 'fade'
                        : 'visible'}"
                    src={imgSwitcher1[currentImgIndex1]}
                    alt="FD310"
                />
            </div>

            <!-- First image -->
            <div
                class="border bg-white border-gray-300 rounded-md shadow-md py-4 lg:mt-24 xl:mt-24"
            >
                <img
                    class="w-full bg-none transition-opacity ease-in-out duration-1000 {fade2
                        ? 'fade'
                        : 'visible'}"
                    src={imgSwitcher2[currentImgIndex2]}
                    alt="SD3055"
                />
            </div>
        </div>
    </div>
</section>

<style>
    .fade {
        transition: opacity 1s ease-in-out;
        opacity: 0;
    }

    .visible {
        opacity: 1;
    }
</style>
