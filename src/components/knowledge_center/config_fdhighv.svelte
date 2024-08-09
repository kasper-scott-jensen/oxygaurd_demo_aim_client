<script>
    import { currentProducts } from '../../stores/rackbeat'

    let product = $currentProducts.find((product) => product.id === '9027')
</script>

<div
    class="flex w-full h-full items-center justify-center border-gray-300 border rounded-lg shadow-sm"
>
    <div class="bg-white flex flex-col w-full px-32 p-8 mb-12">
        <div
            class="flex flex-col w-full text-center justify-center items-center"
        >
            <img src={product.media.img_url} alt="logo" class="max-h-52" />
            <h3
                class="text-3xl mb-6 font-semibold leading-normal text-gray-900"
            >
                Under Construction
            </h3>
            <p class="text-lg font-light leading-relaxed mb-10 text-gray-500">
                The {product.name} configurator is not yet available. Please check
                back at a later time.
            </p>
        </div>
    </div>
</div>
