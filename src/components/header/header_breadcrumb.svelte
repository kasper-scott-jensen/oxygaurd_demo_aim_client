<script>
    // Importing necessary modules and stores
    import { breadcrumb } from '../../stores/navigation'
    import { link } from 'svelte-routing'
</script>

<!-- Breadcrumb navigation section -->
<section class="flex w-full pt-8 pb-4">
    <div
        class="flex w-full mx-auto max-w-screen-2xl py-4 px-6"
        aria-label="Breadcrumb"
    >
        <!-- Breadcrumb list -->
        <ol class="inline-flex space-x-1 md:space-x-2 rtl:space-x-reverse">
            <!-- Home link -->
            <li class="inline-flex">
                <a
                    use:link
                    href="/"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 hover:underline"
                >
                    <svg
                        class="w-3 h-3 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                        />
                    </svg>
                    Home
                </a>
            </li>

            <!-- Dynamically generated breadcrumb items -->
            {#each $breadcrumb as crumb}
                <li>
                    <div class="flex items-center">
                        <svg
                            class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <a
                            use:link
                            href={crumb.link}
                            class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 hover:underline"
                        >
                            {crumb.title}
                        </a>
                    </div>
                </li>
            {/each}
        </ol>
    </div>
</section>
