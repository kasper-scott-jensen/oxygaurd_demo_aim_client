<script>
    // Array of icon paths for different cobot brands
    let icons = [
        '/logo/cobots/logo_universal.webp',
        '/logo/cobots/logo_kassow.webp',
        '/logo/cobots/logo_omron.webp',
        '/logo/cobots/logo_fanuc.webp',
        '/logo/cobots/logo_kuka.webp',
        '/logo/cobots/logo_abb.webp',
        '/logo/cobots/logo_doosan.webp',
        '/logo/aimrobotics/logo_small_blue.webp',
    ]

    // Array to store which icons should be displayed
    export let displayIcons = []
</script>

<!-- Container for displaying cobot icons -->
<div class="flex gap-x-3 items-center justify-start flex-wrap gap-y-4">
    <!-- Check if the first icon should be displayed -->
    {#if displayIcons[0]}
        <img src={icons[0]} alt="icon" class="w-4 h-4" />
    {/if}

    <!-- Check if the second icon should be displayed -->
    {#if displayIcons[1]}
        <img src={icons[1]} alt="icon" class="w-12 h-auto" />
    {/if}

    <!-- Check if the third icon should be displayed -->
    {#if displayIcons[2]}
        <img src={icons[2]} alt="icon" class="w-12 h-auto" />
    {/if}

    <!-- Check if the fourth icon should be displayed -->
    {#if displayIcons[3]}
        <img src={icons[3]} alt="icon" class="w-12 h-auto" />
    {/if}

    <!-- Check if the fifth icon should be displayed -->
    {#if displayIcons[4]}
        <img src={icons[4]} alt="icon" class="w-12 h-auto" />
    {/if}

    <!-- Check if the sixth icon should be displayed -->
    {#if displayIcons[5]}
        <img src={icons[5]} alt="icon" class="w-7 h-2.5" />
    {/if}

    <!-- Check if the seventh icon should be displayed -->
    {#if displayIcons[6]}
        <img src={icons[6]} alt="icon" class="w-12 h-auto" />
    {/if}

    <!-- Check if the eigth icon should be displayed -->
    {#if displayIcons[7]}
        <img src={icons[7]} alt="icon" class="w-5 h-auto" />
    {/if}
</div>
