<script>
    // @ts-nocheck
    // @ts-ignore

    import { fade } from 'svelte/transition'
    import { activeSDConfigImage } from '../../stores/knowledge_center'
    import { currentProducts } from '../../stores/rackbeat'
    import Config from './config.svelte'
    import { onMount } from 'svelte'
    import { navigate } from 'svelte-routing'

    let product = $currentProducts.find((product) => product.id === '9410')

    let firstCalculation = true

    const syringeSizesArray = [30, 55]
    const tipsArray = ['NE', 'TT']
    const safetyMargin = 150

    let tipK = 0
    let dispSpeed = 0
    let dispVolume = 0
    let dispTime = 0
    let beadLength = 0

    let selectedSyringeType = syringeSizesArray[0]
    let selectedTipType = tipsArray[0]

    function handleSubmit(event) {
        let formDataEntries = new FormData(event.target).entries()
        let data = Object.fromEntries(formDataEntries)
        calcTipK(data)
        calcDispSpeed(data)
        calcDispVolume(data)
        calcDispTime(data)
        calcBeadLength()
        firstCalculation = false
    }

    function handleRevert() {
        tipK = 0
        dispSpeed = 0
        dispVolume = 0
        dispTime = 0
        beadLength = 0
    }

    function calcTipK(data) {
        tipK =
            (128 *
                data.tipLength *
                (Math.pow(data.tipDiameter, 2) +
                    data.tipDiameter * 3 +
                    Math.pow(3, 2))) /
            (3 * Math.PI * Math.pow(data.tipDiameter, 3) * Math.pow(3, 3))
    }

    function calcDispSpeed(data) {
        if (data.tipType === 'NE') {
            dispSpeed =
                (safetyMargin * 1000000) /
                    (Math.PI * 8 * data.tipLength * data.viscosity) >
                250
                    ? 250
                    : (safetyMargin * 1000000) /
                      (Math.PI * 8 * data.tipLength * data.viscosity)
        } else if (data.tipType === 'TT') {
            dispSpeed =
                (safetyMargin * 1000000) / (tipK * data.viscosity) > 250
                    ? 250
                    : (safetyMargin * 1000000) / (tipK * data.viscosity)
        } else {
            dispSpeed = 0
        }
    }

    function calcDispVolume(data) {
        dispVolume = Math.PI * Math.pow(data.tipDiameter / 2, 2) * dispSpeed
    }

    function calcDispTime(data) {
        dispTime = (data.syringeType * 1000) / dispVolume / 60
    }

    function calcBeadLength() {
        beadLength = (dispSpeed * dispTime * 60) / 1000
    }

    let hoverTipType = false
    let hoverViscosity = false
    let hoverTipDiameter = false
    let hoverTipLength = false

    $: {
        if (hoverViscosity) {
            fadeInOutConfigImage('/config/sd/viscosity.webp')
        } else if (hoverTipDiameter) {
            if (selectedTipType === 'NE') {
                fadeInOutConfigImage('/config/sd/ne_diameter.webp')
            } else if (selectedTipType === 'TT') {
                fadeInOutConfigImage('/config/sd/tt_diameter.webp')
            }
        } else if (hoverTipLength) {
            if (selectedTipType === 'NE') {
                fadeInOutConfigImage('/config/sd/ne_length.webp')
            } else if (selectedTipType === 'TT') {
                fadeInOutConfigImage('/config/sd/tt_length.webp')
            }
        } else {
            if (selectedSyringeType === 30 && selectedTipType === 'NE') {
                fadeInOutConfigImage('/config/sd/30_ne_glowNone.webp')
            } else if (selectedSyringeType === 30 && selectedTipType === 'TT') {
                fadeInOutConfigImage('/config/sd/30_tt_glowNone.webp')
            } else if (selectedSyringeType === 55 && selectedTipType === 'NE') {
                fadeInOutConfigImage('/config/sd/55_ne_glowNone.webp')
            } else if (selectedSyringeType === 55 && selectedTipType === 'TT') {
                fadeInOutConfigImage('/config/sd/55_tt_glowNone.webp')
            }
        }
    }

    function fadeInOutConfigImage(src) {
        let configImage = document.getElementById('configImage')
        if (configImage) {
            configImage.style.opacity = 0
            setTimeout(() => {
                activeSDConfigImage.set(src)
                configImage.style.opacity = 1
            }, 200)
        } else {
            activeSDConfigImage.set(src)
        }
    }

    function resetConfigurator() {
        handleRevert()
        document.getElementById('calc-form').reset()
        firstCalculation = true
    }

    onMount(() => {
        window.addEventListener('keydown', handleEscapeKeyPressed)
        return () => {
            window.removeEventListener('keydown', handleEscapeKeyPressed)
        }
    })

    function handleEscapeKeyPressed(event) {
        if (event.key === 'Escape') {
            resetConfigurator()
        }
    }
</script>

<div class="grid grid-cols-2 w-full h-full">
    <div
        class="bg-white flex flex-col w-full rounded-s-lg border border-e-0 border-gray-300 shadow-sm"
    >
        <div
            class="flex flex-col w-full h-full items-center justify-center p-10"
        >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                on:click={() => {
                    navigate(`product-details/${product.id}`)
                }}
                class="flex flex-row cursor-pointer group px-4"
            >
                <h5
                    class="mb-2 text-3xl font-bold tracking-tight text-primary-700 group-hover:underline cursor-pointer"
                >
                    {product.name}
                </h5>
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00ADEE"
                    class="cursor-pointer size-5 ms-4 mt-2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                </svg>
            </div>
            <p class="mb-12 text-gray-600 text-md">
                {product.description.name_sub}
            </p>
            <form
                on:submit|preventDefault={handleSubmit}
                class="w-full max-w-full"
                id="calc-form"
            >
                <div class="flex flex-wrap -mx-3 mb-6">
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            class="block tracking-wide text-gray-700 text-xs capitalize font-bold mb-2"
                            for="syringeType"
                        >
                            SYRINGE TYPE
                        </label>
                        <div class="relative">
                            <select
                                class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight"
                                id="syringeType"
                                name="syringeType"
                                bind:value={selectedSyringeType}
                                required
                            >
                                <option value={syringeSizesArray[0]}>
                                    30 CC
                                </option>
                                <option value={syringeSizesArray[1]}>
                                    55 CC
                                </option>
                            </select>
                        </div>
                    </div>
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    <div class="w-full md:w-1/2 px-3">
                        <label
                            class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="tipType"
                        >
                            TIP TYPE
                        </label>
                        <div class="relative">
                            <select
                                class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight"
                                id="tipType"
                                name="tipType"
                                bind:value={selectedTipType}
                                required
                            >
                                <option value={tipsArray[0]}>Needle</option>
                                <option value={tipsArray[1]}>
                                    Tapered Tip
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <div class="flex flex-wrap -mx-3 mb-4">
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="w-full px-3">
                        <label
                            class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="tipDiameter"
                        >
                            TIP DIAMETER (mm)
                        </label>
                        <input
                            on:focusin={() => (hoverTipDiameter = true)}
                            on:focusout={() => (hoverTipDiameter = false)}
                            class="appearance-none caret block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-1 leading-tight"
                            id="tipDiameter"
                            name="tipDiameter"
                            type="number"
                            placeholder="value"
                            step=".01"
                            required
                        />
                        <small class="text-gray-500 mb-3 font-thin">
                            For medium to high viscosity materials equivalent of
                            the width of the dispensed bead
                        </small>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    <div class="w-full px-3">
                        <label
                            class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="tipLength"
                        >
                            TIP LENGTH (mm)
                        </label>
                        <input
                            on:focusin={() => (hoverTipLength = true)}
                            on:focusout={() => (hoverTipLength = false)}
                            class="appearance-none caret block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-1 leading-tight"
                            id="tipLength"
                            name="tipLength"
                            type="number"
                            placeholder="value"
                            required
                        />
                        <small class="text-gray-500 mb-3 font-thin">
                            Tapered tip inlet diameter = 3.00mm
                        </small>
                    </div>
                </div>
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <div class="flex flex-wrap -mx-3 mb-4">
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        on:focusin={() => (hoverViscosity = true)}
                        on:focusout={() => (hoverViscosity = false)}
                        class="w-full px-3"
                    >
                        <label
                            class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="viscosity"
                        >
                            VISCOSITY (cPoise = mPa)
                        </label>
                        <input
                            class="appearance-none caret block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight"
                            id="viscosity"
                            name="viscosity"
                            type="number"
                            placeholder="value"
                            required
                        />
                    </div>
                </div>
                <div class="flex justify-center mb-12 md:mb-0">
                    <button
                        type="submit"
                        class="text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-md px-5 py-2.5 inline-flex justify-center w-full text-center"
                    >
                        Calculate
                    </button>
                </div>
                {#if !firstCalculation}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        class="flex flex-row cursor-pointer pt-6 items-center justify-end"
                        on:click={() => {
                            resetConfigurator()
                        }}
                    >
                        <p class="me-3 text-sm mt-0.5">Clear</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#222C56"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </div>
                {/if}
            </form>
        </div>
    </div>
    <div
        class="bg-gray-900 flex w-full rounded-e-lg border border-s-0 border-gray-300 shadow-sm"
    >
        <div class="flex w-full flex-col">
            {#if firstCalculation}
                <div class="flex h-full w-full items-center">
                    <img
                        id="configImage"
                        src={$activeSDConfigImage}
                        alt="config"
                        class="p-8 transition-all ease-in-out"
                    />
                </div>
            {:else if !firstCalculation}
                <div class="flex flex-col w-full h-full justify-center p-28">
                    <div class="mb-16 flex">
                        <div class="shrink-0">
                            <div
                                class="bg-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-6 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2.5"
                                    stroke="#00ADEE"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4 grow">
                            <p class="mb-2 font-bold text-3xl text-primary-700">
                                {dispSpeed.toFixed(1)}
                            </p>
                            <p
                                class="text-white dark:text-neutral-300 text-md font-bold"
                            >
                                Dispensing Speed (mm/s)
                            </p>
                            <small class="text-gray-50 dark:text-neutral-300">
                                Limited to 250 mm/s for safety reasons
                            </small>
                        </div>
                    </div>

                    <div class="mb-16 flex">
                        <div class="shrink-0">
                            <div
                                class="bg-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-6 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2.5"
                                    stroke="#00ADEE"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4 grow">
                            <p class="mb-2 font-bold text-3xl text-primary-700">
                                {dispVolume.toFixed(1)}
                            </p>
                            <p
                                class="text-white dark:text-neutral-300 text-md font-bold"
                            >
                                Dispensing Volume (μl/s)
                            </p>
                        </div>
                    </div>

                    <div class="mb-16 flex">
                        <div class="shrink-0">
                            <div
                                class="bg-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-6 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2.5"
                                    stroke="#00ADEE"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4 grow">
                            <p class="mb-2 font-bold text-3xl text-primary-700">
                                {dispTime.toFixed(0)}
                            </p>
                            <p
                                class="text-white dark:text-neutral-300 text-md font-bold"
                            >
                                Estimated Elapsed Dispensing Time (minutes)
                            </p>
                        </div>
                    </div>

                    <div class="mb-8 flex">
                        <div class="shrink-0">
                            <div
                                class="bg-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-6 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="4"
                                    stroke="#00ADEE"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4 grow">
                            <p class="mb-2 font-bold text-3xl text-primary-700">
                                {beadLength.toFixed(0)}
                            </p>
                            <p
                                class="text-white dark:text-neutral-300 text-md font-bold"
                            >
                                Estimated Elapsed Bead Length (m)
                            </p>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>
