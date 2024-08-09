<script>
    import { link } from 'svelte-routing'
</script>

<div>
    <a
        use:link
        href="/knowledge-center/optimizing"
        class="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-md md:flex-row hover:bg-gray-50 group"
    >
        <img
            class="object-cover w-full rounded-t-lg max-h-60 md:rounded-none md:rounded-s-lg"
            src="/img/optimizing.webp"
            alt="logo"
        />
        <div class="flex flex-col justify-between p-8 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Optimizing Your Dispensing
            </h5>
            <p class="mb-3 font-normal text-gray-500">
                Aim Robotics dispensers have build-in functionalities that will
                assist you in achieving optimal dispensing results.
            </p>
            <button
                type="button"
                class="flex items-center text-sm font-medium text-center text-primary-700 border-white rounded-lg group-hover:underline"
            >
                Read More
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
            </button>
        </div>
    </a>
</div>
