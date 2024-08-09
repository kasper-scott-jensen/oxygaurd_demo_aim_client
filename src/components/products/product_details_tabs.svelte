<script>
    // Import necessary functions
    import { onMount } from 'svelte'
    import { link } from 'svelte-routing'
    import { activeTab, currentProduct } from '../../stores/product_catalogue'

    // Define tab identifiers
    const tab1 = 'tab-compat'
    const tab2 = 'tab-features'
    const tab3 = 'tab-faq'
    const tab4 = 'tab-setup'
    const tab5 = 'tab-related'
    const tabIds = [tab1, tab2, tab3, tab4, tab5]

    // Set the initial active tab on component mount
    onMount(() => {
        activeTab.set(0)
        const initialTab = document.getElementById(tab1)
        initialTab.classList.add('text-primary-700', 'border-primary-700')
    })

    // Function to handle tab click events
    function switchColorsWhenTabIsClicked(index) {
        if ($activeTab === index) {
            return
        }
        activeTab.set(index)
        const activeClassList = ['text-primary-700', 'border-primary-700']
        tabIds.forEach((id) => {
            const tabElement = document.getElementById(id)
            tabElement.classList.remove(...activeClassList)
        })
        const tabElement = document.getElementById(tabIds[index])
        tabElement.classList.add(...activeClassList)
    }
</script>

<!-- Tab navigation container -->
<div class="border-b border-gray-300 flex justify-start mb-8 pt-8">
    <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-start text-gray-900"
    >
        <!-- Compatibility Tab -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:click|preventDefault={() => switchColorsWhenTabIsClicked(0)}>
            <a
                id="tab-compat"
                href="#!"
                class="inline-flex items-center justify-center p-4 px-6 border-b-2 rounded-t-lg hover:text-primary-700 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="size-5 me-2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                </svg>
                Compatibility
            </a>
        </li>

        <!-- Features Tab -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:click|preventDefault={() => switchColorsWhenTabIsClicked(1)}>
            <a
                id="tab-features"
                href="#!"
                class="inline-flex items-center justify-center p-4 px-6 border-b-2 rounded-t-lg hover:text-primary-700 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="size-5 me-2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                </svg>
                Features
            </a>
        </li>

        <!-- FAQ Tab -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:click|preventDefault={() => switchColorsWhenTabIsClicked(2)}>
            <a
                id="tab-faq"
                href="#!"
                class="inline-flex items-center justify-center p-4 px-6 border-b-2 rounded-t-lg hover:text-primary-700 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="size-5 me-2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                </svg>
                FAQ
            </a>
        </li>

        <!-- Setup Video Tab -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:click|preventDefault={() => switchColorsWhenTabIsClicked(3)}>
            <a
                id="tab-setup"
                href="#!"
                class="inline-flex items-center justify-center p-4 px-6 border-b-2 rounded-t-lg hover:text-primary-700 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 me-2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                </svg>
                Setup Video
            </a>
        </li>
        <!-- Related Products -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:click|preventDefault={() => switchColorsWhenTabIsClicked(4)}>
            <a
                id="tab-related"
                href="#!"
                class="inline-flex items-center justify-center p-4 px-6 border-b-2 rounded-t-lg hover:text-primary-700 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 me-2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                    />
                </svg>

                Related Products
            </a>
        </li>
    </ul>
</div>
