<script>
    import { onMount } from 'svelte'

    // @ts-nocheck
    import { activeConsImage } from '../../stores/knowledge_center.js'

    const imgHighSpeed = '/infographic/basic/high_speed.webp'
    const imgHighVisc = '/infographic/basic/high_viscosity.webp'
    const imgTinyBeads = '/infographic/basic/tiny_beads.webp'
    const imgNeedle = '/infographic/basic/needle.webp'
    const imgTaper = '/infographic/basic/taper.webp'

    const imageArray = [
        imgHighSpeed,
        imgHighVisc,
        imgTinyBeads,
        imgNeedle,
        imgTaper,
    ]
</script>

<div class="grid gap-4 px-4">
    <div class="grid grid-cols-5 gap-4">
        {#each imageArray as image, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="cursor-pointer"
                on:click={() => {
                    activeConsImage.set(index)
                }}
            >
                <img
                    class="h-auto max-w-full rounded-lg border-2 shadow-md {index ===
                    $activeConsImage
                        ? 'border-primary-700'
                        : 'border-gray-300'}"
                    src={image}
                    alt="logo"
                />
            </div>
        {/each}
    </div>
    <div>
        <img
            class="h-auto max-w-full rounded-lg border border-gray-300 shadow-md"
            src={imageArray[$activeConsImage]}
            alt=""
        />
        <p class="text-md text-gray-500 pt-4">
            *Applies to all FD and SD series products.
        </p>
    </div>
</div>
