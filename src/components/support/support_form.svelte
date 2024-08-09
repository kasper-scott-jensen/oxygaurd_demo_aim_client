<script>
    // Import necessary functions and stores
    import { navigate } from 'svelte-routing'
    import { sendSupportFormDataToApi } from '../../js/forms'
    import { formIndex } from '../../stores/contact'
</script>

<!-- Support Contact Section -->
<section class="flex w-full rounded-xl shadow-md p-8 bg-gray-900 h-80">
    <div class="py-8 px-4 mx-auto w-full justify-center flex flex-col">
        <!-- Section Heading -->
        <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
            Contact Our Support Team
        </h2>
        <!-- Section Description -->
        <p class="text-md font-normal text-white">
            We understand that excellent support should know no borders. We’re
            committed to ensuring that our customers receive top-notch
            assistance and guidance, regardless of where they are in the world.
        </p>
        <!-- Button to navigate to the contact page -->
        <button
            on:click|preventDefault={() => {
                formIndex.set(1)
                navigate('/contact')
            }}
            id="button-general"
            type="button"
            class="py-3 px-5 text-md font-medium bg-none rounded-lg hover:text-primary-700 hover:border-primary-700 shadow-md mt-6 border border-white text-white inline-flex items-center w-44 text-start"
        >
            Get Help Now
            <svg
                class="w-3.5 h-3.5 ms-3 rtl:rotate-180"
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
        </button>
    </div>
</section>
