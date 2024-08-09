<script>
    import { link } from 'svelte-routing'
</script>

<!-- Main container for the 'Need a Quote?' section -->
<!-- svelte-ignore a11y-missing-attribute -->
<div
    class="flex flex-col w-full justify-center text-center items-center px-4 mx-auto 2xl:px-0 pt-16"
>
    <!-- Header and description -->
    <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-6">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Not What You Were Looking For?
        </h2>
        <p class="font-light text-gray-500 md:text-lg">
            Take a look around our general support page for more information.
        </p>
    </div>

    <!-- Contact Us button with an icon -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <a
        use:link
        href="/support"
        class="hidden xl:inline-flex items-center text-lg font-medium text-[#00adee] hover:underline"
    >
        Go to Our Support Section
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
