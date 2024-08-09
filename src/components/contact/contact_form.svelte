<script>
    // Importing Svelte components and necessary modules
    import ContactFormContact from './contact_form_contact.svelte'
    import ContactFormSupport from './contact_form_support.svelte'
    import ContactFormPartner from './contact_form_partner.svelte'
    import ContactSocials from './contact_socials.svelte'
    import { onMount } from 'svelte'
    import { formIndex } from '../../stores/contact'

    // Defining constants for logo source and button IDs
    const logoSrc = '/logo/aimrobotics/logo_small_blue.webp'

    // Button IDs
    const buttonGeneral = 'button-general'
    const buttonSupport = 'button-support'
    const buttonPartner = 'button-partner'
    // Array of button IDs for easy access
    const buttonArray = [buttonGeneral, buttonSupport, buttonPartner]
    // Class list for active button styling
    const activeClassList = ['border-primary-700', 'text-primary-700']

    // Function to toggle active class on buttons
    function handleClassToggle(index) {
        buttonArray.forEach((item) => {
            const button = document.getElementById(item)
            if (button) {
                button.classList.remove(...activeClassList)
            }
        })
        const activeButton = document.getElementById(buttonArray[index])
        if (activeButton) {
            activeButton.classList.add(...activeClassList)
        }
    }

    // Reactive statement to handle class toggle when formIndex changes
    $: handleClassToggle($formIndex)

    // Svelte lifecycle function to run code after the component is mounted
    onMount(() => {
        handleClassToggle($formIndex)
    })
</script>

<!-- Section for the contact form -->
<section class="w-full rounded-xl shadow-md p-8 bg-gray-900 h-full">
    <div class="pt-8 px-4 mx-auto w-full">
        <!-- Header section with social links and title -->
        <div
            class="text-start flex flex-col w-full justify-start items-start pb-12"
        >
            <div class="mb-8">
                <ContactSocials />
            </div>
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
                Contact Us Now <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>
            <p class="text-md font-normal text-white">
                Please fill out the form as accurately as possible.
            </p>
            <!-- Buttons to select different forms -->
            <div class="flex flex-col sm:flex-row w-full -mx-2 pt-4 text-white">
                <button
                    id="button-general"
                    on:click|preventDefault={() => {
                        formIndex.set(0)
                        handleClassToggle(0)
                    }}
                    type="button"
                    class="w-full max-w-96 py-3 px-5 text-md font-medium bg-gray-900 rounded-lg hover:opacity-80 shadow-md mt-4 mx-2 border-[2.5px]"
                >
                    General Inquiries
                </button>
                <button
                    id="button-support"
                    on:click|preventDefault={() => {
                        formIndex.set(1)
                        handleClassToggle(1)
                    }}
                    type="button"
                    class="w-full max-w-96 py-3 px-5 text-md font-medium bg-gray-900 rounded-lg hover:opacity-80 shadow-md mt-4 mx-2 border-[2.5px]"
                >
                    Support
                </button>
                <button
                    id="button-partner"
                    on:click|preventDefault={() => {
                        formIndex.set(2)
                        handleClassToggle(2)
                    }}
                    type="button"
                    class="w-full max-w-96 py-3 px-5 text-md font-medium bg-gray-900 rounded-lg hover:opacity-80 shadow-md mt-4 mx-2 border-[2.5px]"
                >
                    Partnership
                </button>
            </div>
        </div>

        <!-- Conditional rendering of the form based on the selected index -->
        {#if $formIndex === 0}
            <ContactFormContact />
        {:else if $formIndex === 1}
            <ContactFormSupport />
        {:else if $formIndex === 2}
            <ContactFormPartner />
        {/if}
    </div>
</section>
