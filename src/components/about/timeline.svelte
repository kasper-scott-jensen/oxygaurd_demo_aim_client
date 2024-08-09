<script>
    import Gallery from './gallery.svelte'
</script>

<section class="px-4">
    <div
        class="gap-8 items-center px-4 mx-auto max-w-screen-2xl xl:gap-16 lg:grid grid-cols-1 lg:grid-cols-2 py-4 lg:px-6 lg:pb-24 w-full justify-center"
    >
        <div>
            <ol
                class="relative border-s border-gray-200 mb-24 lg:mb-0 max-w-lg"
            >
                <li class="mb-10 ms-6">
                    <span
                        class="absolute flex items-center justify-center w-8 h-8 bg-primary-700 rounded-full -start-4"
                    >
                        <svg
                            class="w-3 h-3 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                            />
                        </svg>
                    </span>
                    <h3
                        class="flex items-center mb-1 text-lg font-semibold text-gray-900"
                    >
                        Humble Beginnings
                    </h3>
                    <time
                        class="block mb-2 text-sm font-normal leading-none text-gray-400"
                    >
                        2019
                    </time>
                    <p class="mb-4 text-base font-normal text-gray-500">
                        Company founded and born with 50 global distributors.
                        Patent applications filed in Europe and the United
                        States.
                    </p>
                </li>
                <li class="mb-10 ms-6">
                    <span
                        class="absolute flex items-center justify-center w-8 h-8 bg-primary-700 rounded-full -start-4"
                    >
                        <svg
                            class="w-3 h-3 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                            />
                        </svg>
                    </span>
                    <h3
                        class="flex items-center mb-1 text-lg font-semibold text-gray-900"
                    >
                        Three New Products
                    </h3>
                    <time
                        class="block mb-2 text-sm font-normal leading-none text-gray-400"
                    >
                        2020
                    </time>
                    <p class="mb-4 text-base font-normal text-gray-500">
                        First Aim Robotics Dispensers launched; FD 400, FD HighV
                        and SD 30/55.
                    </p>
                </li>
                <li class="mb-10 ms-6">
                    <span
                        class="absolute flex items-center justify-center w-8 h-8 bg-primary-700 rounded-full -start-4"
                    >
                        <svg
                            class="w-3 h-3 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                            />
                        </svg>
                    </span>
                    <h3
                        class="flex items-center mb-1 text-lg font-semibold text-gray-900"
                    >
                        Moving Forward
                    </h3>
                    <time
                        class="block mb-2 text-sm font-normal leading-none text-gray-400"
                    >
                        2021
                    </time>
                    <p class="mb-4 text-base font-normal text-gray-500">
                        Moved to Alfa Laval Innovation House in Copenhagen,
                        Denmark. FD 310 and AimPath URCap launched.
                    </p>
                </li>
                <li class="mb-10 ms-6">
                    <span
                        class="absolute flex items-center justify-center w-8 h-8 bg-primary-700 rounded-full -start-4"
                    >
                        <svg
                            class="w-3 h-3 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                            />
                        </svg>
                    </span>
                    <h3
                        class="flex items-center mb-1 text-lg font-semibold text-gray-900"
                    >
                        Steady Growth
                    </h3>
                    <time
                        class="block mb-2 text-sm font-normal leading-none text-gray-400"
                    >
                        2022
                    </time>
                    <p class="mb-4 text-base font-normal text-gray-500">
                        Capital injection and new shareholders. AirBox and TCP
                        Calibration Tool launched.
                    </p>
                </li>
                <li class="mb-10 ms-6">
                    <span
                        class="absolute flex items-center justify-center w-8 h-8 bg-primary-700 rounded-full -start-4"
                    >
                        <svg
                            class="w-3 h-3 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                            />
                        </svg>
                    </span>
                    <h3
                        class="flex items-center mb-1 text-lg font-semibold text-gray-900"
                    >
                        Collaborative Expansion
                    </h3>
                    <time
                        class="block mb-2 text-sm font-normal leading-none text-gray-400"
                    >
                        2023
                    </time>
                    <p class="mb-4 text-base font-normal text-gray-500">
                        Customer Support Center established in the United
                        States.
                    </p>
                </li>
            </ol>
        </div>

        <Gallery />
    </div>
</section>
