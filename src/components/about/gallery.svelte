<script>
    let images = [
        '/gallery/gallery_1.webp',
        '/gallery/gallery_2.webp',
        '/gallery/gallery_3.webp',
        '/gallery/gallery_4.webp',
        '/gallery/gallery_5.webp',
        '/gallery/gallery_6.webp',
        '/gallery/gallery_7.webp',
        '/gallery/gallery_8.webp',
        '/gallery/gallery_9.webp',
        '/gallery/gallery_10.webp',
        '/gallery/gallery_11.webp',
        '/gallery/gallery_12.webp',
    ]
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 pb-32 md:pb-12">
    {#each images as image}
        <div
            class="relative w-full pb-[100%] overflow-hidden rounded-lg shadow-md"
        >
            <img
                class="absolute inset-0 w-full h-full object-cover"
                src={image}
                alt=""
            />
        </div>
    {/each}
</div>
