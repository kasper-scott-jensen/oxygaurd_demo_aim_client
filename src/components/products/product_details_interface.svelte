<script>
    // Import the ProductInterfaceAlert component
    import ProductInterfaceAlert from '../alerts/product_interface.svelte'

    // Export the product prop to be received from the parent component
    export let product

    // Initialize textArray to store lines of the product interface
    let textArray = []

    // Reactive statement to populate textArray when product is set
    $: if (product) {
        textArray = product.interface.split('\n').map((line) => line.trim())
    }
</script>

<!-- Interface Section Header -->
<p class="text-xs font-bold text-gray-900 mb-4 uppercase">Interface</p>

<!-- Interface Details -->
<div class="mt-3 gap-3 flex flex-col justify-start">
    <p class="mb-6 text-gray-500">
        {textArray[0] || product.interface}
        <br />
        {textArray[1] || ''}
    </p>
</div>
