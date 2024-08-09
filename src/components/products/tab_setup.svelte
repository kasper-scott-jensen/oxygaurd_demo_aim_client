<script>
    // Export the product prop to be received from the parent component
    export let product
</script>

<!-- Container for the video section -->
<div
    class="relative overflow-x-auto sm:rounded-lg border-gray-300 border shadow-md p-4 md:py-16 bg-white"
>
    <!-- Flex container to center the video -->
    <div class="flex w-full justify-center">
        <!-- Aspect ratio container for the video -->
        <div class="w-full max-w-screen-lg aspect-w-16 aspect-h-9">
            <!-- Video element with controls -->
            <!-- svelte-ignore a11y-media-has-caption -->
            <video
                src={product.media.setup_vid_url}
                class="w-full h-full object-cover rounded-lg shadow-sm"
                controls
            ></video>
        </div>
    </div>
</div>
