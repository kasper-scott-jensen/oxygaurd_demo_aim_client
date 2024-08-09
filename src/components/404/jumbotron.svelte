<script>
    import { link } from 'svelte-routing'
</script>

<section class="flex flex-col min-h-screen justify-center -mt-48">
    <!-- Container for the content -->
    <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
        <!-- Centered content -->
        <div class="mx-auto text-center">
            <!-- Main 404 heading -->
            <h1
                class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-700"
            >
                404
            </h1>
            <!-- Subheading indicating something is missing -->
            <p
                class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl"
            >
                Something's missing.
            </p>
            <!-- Message to the user -->
            <p class="mb-4 text-lg font-light text-gray-500">
                Sorry, we can't find that page.
            </p>
            <!-- Link back to the homepage -->
            <a
                use:link
                href="/"
                class="inline-flex text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
                Back to Homepage
            </a>
        </div>
    </div>
</section>
