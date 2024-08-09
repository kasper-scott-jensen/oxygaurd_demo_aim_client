<script>
    import { link } from 'svelte-routing'
    import { activeConfigTab } from '../../stores/knowledge_center'

    const imgSrc = '/logo/aimrobotics/logo_small_blue.webp'
</script>

<div
    class="flex w-full h-full items-center justify-center border-gray-300 border rounded-lg shadow-sm"
>
    <div class="bg-white flex flex-col w-full px-32 p-6">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="flex flex-col w-full text-center justify-center items-center"
        >
            <img
                src={imgSrc}
                alt="logo"
                class="max-h-24 mb-12 -mt-24 opacity-80"
            />
            <h3
                class="text-3xl mb-6 font-semibold leading-normal text-gray-900"
            >
                Introducing our Dispensing Setup Configurator
            </h3>
            <p
                class="text-lg font-light leading-relaxed mt-4 mb-8 text-gray-500"
            >
                Our new Dispensing Setup Configurator is designed to streamline
                your dispensing tasks with precision and ease. By inputting
                parameters such as tip length, diameter, and viscosity, our tool
                provides accurate measurements and calculations, tailored to
                your specific application. Stay tuned as we continue to enhance
                and perfect our dispensing configurator to meet all your precise
                needs.
            </p>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
                on:click|preventDefault={() => activeConfigTab.set(6)}
                class="inline-flex items-center text-lg font-medium text-[#00adee] hover:underline cursor-pointer"
            >
                Get Started
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
    </div>
</div>
