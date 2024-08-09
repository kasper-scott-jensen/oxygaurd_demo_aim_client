<script>
    // Import the link function from svelte-routing for navigation
    import { link } from 'svelte-routing'

    // Export the product prop to be received from the parent component
    export let product

    // Initialize variables for the image source and feature array
    let imgSrc
    let featureArray = []

    // Reactive statement to set imgSrc and featureArray when product is set
    $: if (product) {
        imgSrc = product.media.blueprint
        featureArray = product.features.filter(
            (item) => item !== null && item.trim() !== '',
        )
    }

    // Function to parse the features into a structured format
    function parseFeatures(features) {
        return features.map((feature) => {
            const [heading, ...points] = feature.split('\n')
            return {
                heading: heading.replace(/\*/g, '').trim(),
                points: points
                    .map((point) => point.trim())
                    .filter((point) => point !== ''),
            }
        })
    }

    // Initialize the parsed features array
    let parsedFeatures = []

    // Reactive statement to parse features when featureArray is set
    $: if (featureArray.length) {
        parsedFeatures = parseFeatures(featureArray)
    }
</script>

<!-- Container for product details and features -->
<div
    class="relative overflow-x-auto sm:rounded-lg border-gray-300 border bg-white shadow-md"
>
    <div
        class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 overflow-hidden"
    >
        <!-- Image Section -->
        <div class="flex w-full h-full justify-center items-center bg-none">
            <img
                class:-mb-32={product.id === '9226'}
                class:opacity-75={product.id === '9503'}
                class="invert h-auto max-w-96 border-gray-200/20 border rounded-lg mt-12 mb-12"
                src={imgSrc}
                alt="dashboard"
            />
        </div>
        <!-- Features Section -->
        <div class="mt-4 md:mt-0 p-8">
            <div class="pt-12">
                {#each parsedFeatures as { heading, points }}
                    <div class="mb-14">
                        <h3
                            class="text-sm uppercase font-bold text-gray-800 mb-4"
                        >
                            {heading}
                        </h3>
                        <ul class="list-disc list-inside text-gray-600">
                            {#each points as point}
                                <li class="pb-4 text-sm">{point}</li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
