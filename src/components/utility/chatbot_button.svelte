<script>
    import { link, navigate } from 'svelte-routing'

    function handleToggleButton() {
        //
    }
</script>

<div data-dial-init class="hidden lg:block fixed end-6 bottom-6 group z-50">
    <div class="py-24">
        <div class="relative h-62 w-80 rounded-lg bg-gray-900 shadow-md">
            <div
                class="absolute right-3 bottom-0 h-5 w-5 -translate-x-1/2 translate-y-1/2 rotate-45 transform bg-gray-900"
            ></div>
            <div class="px-8">
                <h1 class="text-xl font-bold text-primary-700 pt-12">
                    Dont Know Where to Start?
                </h1>
                <p class="text-white mt-3">
                    Click here if you need help choosing your dispensing
                    solution.
                </p>
                <!-- Accept Button -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <a
                    href="#!"
                    on:click|preventDefault={() => {
                        handleToggleButton()
                        navigate('/applications')
                    }}
                    class="inline-flex justify-center items-center mb-12 mt-6 py-2.5 px-4 text-md font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 shadow-md cursor-pointer"
                >
                    Find the Best Fit
                </a>
            </div>
        </div>
    </div>
    <!-- Floating Action Button -->
    <button
        on:click|preventDefault={() => {
            handleToggleButton()
        }}
        class="fixed bottom-6 right-6 bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-gray-900/90"
        aria-label="Floating Action Button"
    >
        <img
            src="/logo/aimrobotics/logo_small_blue.webp"
            alt="logo"
            class={`object-contain ps-4 p-3 ${true ? 'animate-pulse' : ''}`}
        />
    </button>
</div>
