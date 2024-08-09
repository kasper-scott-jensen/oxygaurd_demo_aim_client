<script>
    import { navigate } from 'svelte-routing'
    import { sendPartnerFormDataToApi } from '../../js/forms'
    import { formIndex } from '../../stores/contact'

    let logoSrc = '/logo/aimrobotics/logo_small_blue.webp'
</script>

<!-- Main container for the partner section -->
<section class="w-full rounded-xl shadow-md p-8 bg-gray-900 py-12 mt-4">
    <div class="mx-auto w-full">
        <!-- Content wrapper -->
        <div class="text-start flex flex-col w-full justify-start items-start">
            <!-- Heading for the partner section -->
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
                Become A Partner Now
            </h2>
            <!-- Description for the partner section -->
            <p class="text-md font-normal text-white">
                To learn more about partnership opportunities or to discuss how
                we can tailor a partnership to meet your specific goals, please
                don’t hesitate to contact us. We look forward to exploring the
                potential of working together.
            </p>
            <!-- Button to navigate to contact form with partner form selected -->
            <button
                on:click|preventDefault={() => {
                    formIndex.set(2)
                    navigate('/contact')
                }}
                id="button-general"
                type="button"
                class="py-3 px-5 text-md font-medium bg-none rounded-lg hover:text-primary-700 hover:border-primary-700 shadow-md mt-6 border border-white text-white inline-flex items-center w-44 text-start"
            >
                Contact Us
                <!-- SVG arrow icon -->
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
    </div>
</section>
