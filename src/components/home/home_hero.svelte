<script>
    import { link } from 'svelte-routing'
    import { smoothScrollToAnchor } from '../../js/navigation'
</script>

<!-- Main section container -->
<section class="">
    <!-- Background image container -->
    <div
        class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[calc(100vh-50px)]"
        style="background-image: url('img/made_by_aim.webp')"
    >
        <!-- Overlay with semi-transparent background -->
        <div
            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.6)] bg-fixed"
        >
            <!-- Centered content container -->
            <div
                class="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12 flex flex-col h-full items-center justify-center -mt-12"
            >
                <!-- Announcement link -->
                <a
                    use:link
                    href="/knowledge-center/configurator"
                    class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 shadow-md"
                >
                    <span
                        class="text-xs bg-primary-700 rounded-full text-white px-4 py-1.5 mr-3"
                    >
                        New
                    </span>
                    <span class="text-sm font-medium">
                        Our Setup Configurator is Here. Try it now!
                    </span>
                    <svg
                        class="ml-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </a>
                <!-- Main heading -->
                <h1
                    class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary-700 md:text-5xl lg:text-6xl drop-shadow-xl"
                >
                    Dispensing Made Simple
                    <span
                        class="text-white font-bold text-7xl hidden lg:inline drop-shadow-xl"
                    >
                        .
                    </span>
                </h1>
                <!-- Description paragraph -->
                <p
                    class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 drop-shadow-xl"
                >
                    Automation Solutions for Collaborative Robot Applications
                </p>
                <!-- Call-to-action buttons -->
                <div
                    class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
                >
                    <!-- Explore Solutions button -->
                    <a
                        use:link
                        href="/products"
                        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 shadow-md"
                    >
                        Explore Our Products
                        <svg
                            class="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </a>
                    <!-- Learn More button -->
                    <a
                        use:link
                        href="/knowledge-center"
                        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white hover:text-gray-900 rounded-lg border-2 border-gray-300 hover:bg-gray-100 shadow-md"
                    >
                        <svg
                            class="mr-2 -ml-1 w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                            ></path>
                        </svg>
                        Learn More
                    </a>
                </div>
            </div>
            <!-- Down arrow icon at the bottom -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                on:click|preventDefault={(event) => {
                    smoothScrollToAnchor(event, '#presentation')
                }}
                class="absolute bottom-14 flex w-full justify-center py-12 cursor-pointer group items-center"
            >
                <svg
                    class="w-20 h-20 text-white group-hover:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
        </div>
    </div>
</section>
