<script>
    let image1 = '/clients/client_1.webp'
    let image2 = '/clients/client_2.webp'
    let image3 = '/clients/client_3.webp'
    let image4 = '/clients/client_4.webp'
    let image5 = '/clients/client_5.webp'
    let image6 = '/clients/client_6.webp'
</script>

<section class="pb-10 pt-12 hidden md:block">
    <div class="mx-auto max-w-screen-2xl px-4 pb-32">
        <h2
            class="mb-8 lg:mb-16 text-4xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl"
        >
            You’ll Be in Good Company
            <span
                class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
            >
                .
            </span>
        </h2>
        <div
            class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-20 md:grid-cols-3 lg:grid-cols-6 bg-white p-12 rounded-lg shadow-sm border border-gray-300"
        >
            <a
                href="https://www.joynext.com/en/"
                target="_blank"
                class="flex justify-center items-center logo-container"
            >
                <img class="bw-filter" src={image4} alt="logo" />
            </a>
            <a
                href="https://www.honeywell.com/us/en"
                target="_blank"
                class="flex justify-center items-center logo-container"
            >
                <img class="bw-filter" src={image2} alt="logo" />
            </a>
            <a
                href="https://flex.com/"
                target="_blank"
                class="flex justify-center items-center logo-container"
            >
                <img class="bw-filter" src={image1} alt="logo" />
            </a>
            <a
                href="https://www.scanfil.com/"
                target="_blank"
                class="flex justify-center items-center logo-container"
            >
                <img class="bw-filter" src={image3} alt="logo" />
            </a>
            <a
                href="https://www.lockheedmartin.com/"
                target="_blank"
                class="flex justify-center items-center logo-container"
            >
                <img class="bw-filter" src={image5} alt="logo" />
            </a>
            <a
                href="https://www.note-ems.com/en/"
                target="_blank"
                class="flex justify-center items-center logo-container"
            >
                <img class="bw-filter" src={image6} alt="logo" />
            </a>
        </div>
    </div>
</section>

<style>
    .bw-filter {
        filter: grayscale(100%);
        transition:
            filter 0s,
            transform 0s;
    }

    .logo-container {
        position: relative;
        overflow: hidden;
    }

    .logo-container::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #00adee;
        opacity: 0;
        transition: opacity 0s;
        mix-blend-mode: color;
    }

    .logo-container:hover .bw-filter {
        filter: grayscale(0%) brightness(1);
    }

    .logo-container:hover::after {
        opacity: 100%;
    }
</style>
