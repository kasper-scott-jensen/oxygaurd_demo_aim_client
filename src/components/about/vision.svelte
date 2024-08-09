<script>
    import Socials from './socials.svelte'

    let imgSrc = '/img/stock_matus.webp'
</script>

<section class="pb-24 lg:pb-0">
    <div
        class="gap-8 items-center px-4 mx-auto max-w-screen-2xl xl:gap-16 md:grid lg:grid-cols-2 py-4 lg:px-6 lg:pb-24"
    >
        <img
            class="w-full rounded-lg shadow-md"
            src={imgSrc}
            alt="stockphoto"
        />
        <div class="mt-4 md:mt-0">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Let's Create More Tools and Ideas that Bring Us Together
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg">
                We are on a mission to make dispensing simple and enable our
                end-users to get confident with automated dispensing processes.
                Aiming to deliver the most precise automated fluid dispensing
                solutions and software tools for collaborative robots.
            </p>
            <Socials />
        </div>
    </div>
</section>
