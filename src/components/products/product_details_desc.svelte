<script>
    import { link } from 'svelte-routing'
    import { navigateToCatalogueWithCategory } from '../../js/navigation'

    // Import categoryMenu from the product catalogue store
    import { categoryMenu } from '../../stores/product_catalogue'

    // Export the product prop to be received from the parent component
    export let product
</script>

<!-- Product Name -->
<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-primary-700">
    {product.name}
</h2>

<!-- Short Description -->
<p class="font-semibold text-md pb-4">
    {product.description.desc_short}
</p>

<!-- Badges Section -->
{#if product.badges.filter((badge) => badge !== null && badge !== undefined && badge !== '').length !== 0}
    <div class="flex items-center pb-4">
        {#each product.badges.filter((badge) => badge !== null && badge !== undefined && badge !== '') as badge}
            <span
                class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded"
            >
                {badge}
            </span>
        {/each}
    </div>
{/if}

<!-- Order Number and Category -->
<div class="flex items-center">
    <p
        class="text-white text-sm font-semibold inline-flex items-center px-2.5 p-1.5 bg-gray-900 rounded me-4"
    >
        Order No. {product.id}
    </p>
    <a
        href="#!"
        on:click|preventDefault={() =>
            navigateToCatalogueWithCategory(product.category_id)}
        class="hover:underline"
    >
        <p class="text-gray-500 text-sm capitalize px-4">
            <span
                class={`${$categoryMenu[product.category_id].color} inline-block w-2.5 h-2.5 mr-1 rounded-full`}
            ></span>
            {product.category}
        </p>
    </a>
</div>

<!-- Separator -->
<hr class="my-6 md:my-8 border-gray-300" />

<!-- Description Title -->
<p class="mb-3 text-xs font-bold text-gray-900 uppercase">Description</p>

<!-- Long Description -->
<p class="mb-8 text-gray-500">
    {product.description.desc_long || 'No description available.'}
</p>
