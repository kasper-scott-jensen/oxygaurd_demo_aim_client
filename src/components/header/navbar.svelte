<script>
    import { onMount } from 'svelte'
    import { megaMenuStates } from '../../stores/navigation'
    import { link, navigate } from 'svelte-routing'
    import LinkList from './navbar_links.svelte'
    import LinkListMobile from './navbar_links_mobile.svelte'
    import MegaMenus from './mega_menu_switch.svelte'
    import { urlParams } from '../../stores/params'
    import { closeAllMegaMenus } from '../../js/navigation.js'
    import { formIndex } from '../../stores/contact'

    // Path to the logo image
    let logoSrc = '/logo/aimrobotics/logo_full_black.webp'
    // Boolean to track the visibility of the mobile menu
    let isMenuVisible = false

    // Lifecycle method to add event listeners on mount and remove them on unmount
    onMount(() => {
        window.addEventListener('click', handleClickOutsideNavbar)
        window.addEventListener('keydown', handleEscapeKeyPressed)
        return () => {
            window.removeEventListener('click', handleClickOutsideNavbar)
            window.removeEventListener('keydown', handleEscapeKeyPressed)
        }
    })

    // Function to toggle the visibility of the mobile menu
    function toggleMenuVisibility() {
        isMenuVisible = !isMenuVisible
    }

    // Function to close all mega menus when the Escape key is pressed
    function handleEscapeKeyPressed(event) {
        if (event.key === 'Escape') {
            closeAllMegaMenus()
        }
    }

    // Function to close all mega menus if a click is detected outside the navbar
    function handleClickOutsideNavbar(event) {
        const menuContainer = document.querySelector('#menu-container')
        if (menuContainer && !menuContainer.contains(event.target)) {
            closeAllMegaMenus()
        }
    }

    // Reactive statement to close all mega menus whenever URL parameters change
    $: urlParams.subscribe(() => {
        closeAllMegaMenus()
    })
</script>

<nav
    class="bg-white fixed w-full z-30 top-0 start-0 border-b border-gray-200 shadow-md"
    id="menu-container"
>
    <div
        class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 relative"
    >
        <!-- Logo link -->
        <a
            use:link
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
        >
            <img src={logoSrc} class="h-10" alt="Flowbite Logo" />
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <!-- Contact Us button -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
                on:click|preventDefault={() => {
                    formIndex.set(0)
                    navigate('/contact')
                }}
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 shadow-md cursor-pointer"
            >
                <svg
                    class="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                Contact Us
            </a>
            <!-- Mobile menu toggle button -->
            <button
                on:click|preventDefault={() => toggleMenuVisibility()}
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 mt-1"
                aria-controls="navbar-sticky"
                aria-expanded="false"
            >
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
        </div>
        <!-- Navigation links for larger screens -->
        <LinkList />
    </div>
    <!-- Mobile menu -->
    {#if isMenuVisible}
        <div class="absolute top-20 bg-white shadow-md w-full">
            <LinkListMobile />
        </div>
    {/if}
    <!-- Mega menus for larger screens -->
    <MegaMenus />
</nav>
