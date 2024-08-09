<script>
    // Import the link function from svelte-routing for navigation
    import { link, navigate } from 'svelte-routing'
    import { formIndex } from '../../stores/contact'
</script>

<!-- Main container for the 'Need a Quote?' section -->
<!-- svelte-ignore a11y-missing-attribute -->
<div
    class="flex flex-col w-full justify-center text-center items-center px-4 mx-auto 2xl:px-0"
>
    <!-- Header and description -->
    <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-6">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Need a Quote?
        </h2>
        <p class="font-light text-gray-500 md:text-lg">
            Please do not hesitate to contact us for more information on prices.
        </p>
    </div>

    <!-- Contact Us button with an icon -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <a
        on:click|preventDefault={() => {
            formIndex.set(0)
            navigate('/contact')
        }}
        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 shadow-md cursor-pointer"
    >
        <svg
            class="mr-2 -ml-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                clip-rule="evenodd"
            ></path>
        </svg>
        Contact Us
    </a>
</div>
