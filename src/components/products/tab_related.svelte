<script>
    // Import necessary functions
    import { onDestroy } from 'svelte'
    import { link, navigate } from 'svelte-routing'
    import { currentProducts } from '../../stores/rackbeat'
    import { currentProduct } from '../../stores/product_catalogue'

    export let product

    let relatedQuery = []
    let relatedProducts = []

    $: relatedQuery = $currentProducts
        .find((product) => product.id === $currentProduct.toString())
        .related_products.split(' ')

    $: {
        relatedProducts = []
        relatedQuery.forEach((id) => {
            relatedProducts.push(
                $currentProducts.find((product) => product.id === id),
            )
        })
    }
</script>

<!-- Related Table Container -->
<div
    class="relative overflow-x-auto sm:rounded-lg border-gray-300 border shadow-md"
>
    <table class="w-full text-left rtl:text-right text-gray-500">
        <caption
            class="p-5 font-semibold text-left rtl:text-right text-gray-900 bg-white"
        >
            <div class="flex flex-col xl:flex-row w-full justify-between">
                <div>
                    <p class="mt-1 text-sm font-normal text-gray-500">
                        This is a list of accessories, replacement parts and
                        other related products available for
                        <span class="font-bold text-primary-700">
                            {product.name}.
                        </span>
                    </p>
                </div>
            </div>
        </caption>
        <!-- Table Header -->
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">Image</th>
                <th scope="col" class="px-6 py-3">Order No.</th>
                <th scope="col" class="px-6 py-3">Name</th>
                <th scope="col" class="px-6 py-3">Description</th>
            </tr>
        </thead>
        <!-- Table Body -->
        <tbody>
            {#each relatedProducts as product, index}
                <tr
                    on:click|preventDefault={() =>
                        navigate(`/product-details/${product.id}`)}
                    class="bg-white border-b text-sm text-gray-900 group cursor-pointer"
                >
                    <td class="px-6 py-4 flex justify-start">
                        <!-- svelte-ignore a11y-img-redundant-alt -->
                        <img
                            src={product.media.img_url}
                            alt="image"
                            class="h-16 w-auto"
                        />
                    </td>
                    <td class="px-6 py-4">
                        {product.id}
                    </td>
                    <td
                        class="px-6 py-4 group-hover:underline group-hover:text-primary-700"
                    >
                        {product.name}
                    </td>
                    <td class="px-6 py-4">{product.description.desc_short}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
