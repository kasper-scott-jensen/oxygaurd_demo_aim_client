<script>
    import { onMount } from 'svelte'
    import { link } from 'svelte-routing'
    import { cookieBanner } from '../../stores/alerts'

    // Function to handle closing the cookie banner
    function handleCloseCookieBanner() {
        const now = new Date()
        const oneWeekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
        document.cookie = `aimrobotics_acceptCookies=true; expires=${oneWeekFromNow.toUTCString()}; path=/`
        cookieBanner.set(false)
    }

    // Check for the cookie on mount
    onMount(() => {
        const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [name, value] = cookie.split('=')
            acc[name] = value
            return acc
        }, {})

        // @ts-ignore
        if (cookies.aimrobotics_acceptCookies === 'true') {
            cookieBanner.set(false)
        }
    })
</script>

<!-- Cookie Banner -->
{#if $cookieBanner}
    <div
        class="fixed bottom-0 start-0 z-50 flex flex-col justify-center w-full p-6 px-8 md:flex-row bg-white border-t border-gray-300 shadow-md"
    >
        <div
            class="max-w-screen-2xl flex w-full flex-col md:flex-row justify-between px-6"
        >
            <!-- Cookie Banner Text -->
            <div class="mb-4 md:mb-0 md:me-4">
                <h2 class="mb-1 text-base font-semibold text-gray-900">
                    We use cookies on our website to enhance your experience
                </h2>
                <p class="flex items-center text-sm font-normal text-gray-500">
                    By using our services, you consent to the use of cookies and
                    tracking technologies as described in our Cookie Policy.
                </p>
            </div>
            <!-- Cookie Banner Actions -->
            <div class="flex items-center flex-shrink-0">
                <a
                    use:link
                    href="/cookie-policy"
                    class="inline-flex items-center text-md font-medium text-[#00adee] hover:underline pt-2 me-12"
                >
                    Our Cookie Policy
                    <svg
                        class="w-3 h-3 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
                <!-- Accept Button -->
                <a
                    href="#!"
                    on:click|preventDefault={handleCloseCookieBanner}
                    class="inline-flex justify-center items-center py-2.5 px-4 text-md font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 shadow-md cursor-pointer"
                >
                    I Accept
                </a>
            </div>
        </div>
    </div>
{/if}
