<script>
    import { navigate } from 'svelte-routing'

    // You can define any Svelte-specific logic here if needed
</script>

<div class="flex w-full items-center justify-center relative">
    <div class="grid grid-cols-2 grid-rows-2 gap-2 h-full w-full">
        <figure
            class="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-300 rounded-lg shadow-md"
        >
            <figcaption class="flex items-center justify-center">
                <img
                    class="rounded-full h-40 w-auto"
                    src="/dispensers/sd_30_55.webp"
                    alt="SD 30/55"
                />
            </figcaption>
        </figure>
        <figure
            class="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-300 rounded-lg shadow-md"
        >
            <figcaption class="flex items-center justify-center">
                <img
                    class="rounded-full h-40 w-auto"
                    src="/dispensers/fd_highv.webp"
                    alt="FD HighV"
                />
            </figcaption>
        </figure>
        <figure
            class="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-300 rounded-lg shadow-md"
        >
            <figcaption class="flex items-center justify-center">
                <img
                    class="rounded-full h-40 w-auto"
                    src="/dispensers/fd_310.webp"
                    alt="FD 310"
                />
            </figcaption>
        </figure>
        <figure
            class="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-300 rounded-lg shadow-md"
        >
            <figcaption class="flex items-center justify-center">
                <img
                    class="rounded-full h-40 w-auto"
                    src="/dispensers/fd_400.webp"
                    alt="FD 400"
                />
            </figcaption>
        </figure>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        on:click|preventDefault={() => {
            navigate('/knowledge-center/comparison')
        }}
        class="comparison-circle cursor-pointer"
    >
        <span class="text-xl font-semibold text-white text-center">
            Dispenser Comparison
        </span>
    </div>
</div>

<style>
    .comparison-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        background-color: #00adee;
        border: 0px solid #cbd5e0;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }

    .comparison-circle:hover {
        background-color: #009dd9;
    }
</style>
