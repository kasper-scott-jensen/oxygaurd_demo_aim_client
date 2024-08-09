<script>
    // Importing necessary modules and components
    import { onMount } from 'svelte'
    import ContactForm from './contact_form.svelte'
    import ContactSocials from './contact_socials.svelte'
    import { link } from 'svelte-routing'

    // Image source for the contact section
    let imgSrc = '/img/contact_support.webp'
</script>

<!-- Main section for the contact page -->
<section class="pb-24">
    <div
        class="gap-8 items-start py-8 px-4 mx-auto max-w-screen-2xl xl:gap-16 md:grid xl:grid-cols-2 p-6"
    >
        <div class="mt-4 md:mt-0">
            <!-- Contact image -->
            <img
                class="w-full rounded-lg shadow-md mb-10"
                src={imgSrc}
                alt="dashboard"
            />
            <!-- Contact header -->
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Get In Touch
                <span
                    class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                >
                    .
                </span>
            </h2>

            <!-- Contact description -->
            <p class="mb-6 font-light text-gray-500 md:text-lg">
                If you have any questions or need further information, don't
                hesitate to reach out. You can get in touch with us using the
                contact information provided, or by filling out our online
                contact form. Our team is dedicated to responding promptly to
                assist you with your specific needs and requirements. Whether
                you have inquiries, need assistance, or want detailed
                information about our services, we are here to help and ensure
                you get the support you need.
            </p>
            <!-- Contact options (map, email, phone) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
                <!-- Location link -->
                <a
                    target="_blank"
                    href="https://maps.app.goo.gl/bRGeU828bZbVNXHP6"
                    class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm hover:text-primary-700"
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
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    See Location On Map
                </a>
                <!-- Email link -->
                <a
                    href="mailto:sales@aim-robotics.com"
                    class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm hover:text-primary-700"
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
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                    </svg>
                    Contact Us Via Mail
                </a>
                <!-- Phone link -->
                <a
                    href="tel:+4531515511"
                    target="_blank"
                    class="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm hover:text-primary-700"
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
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                    </svg>
                    Give Us A Call
                </a>
            </div>
            <!-- Link to the support section -->
            <a
                use:link
                href="/support"
                class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light group shadow-md w-full h-full flex flex-col mb-8 lg:mb-0"
                style="background-image: url(/img/support.webp)"
            >
                <h2
                    class="mb-4 text-3xl tracking-tight font-extrabold text-white"
                >
                    Check Out Our Support Section
                </h2>
                <p class="text-white mb-5">
                    Whether you’re a global customer, a partner, or someone with
                    inquiries, we’re here to assist you. Reach out to us, and
                    we’ll connect you with the right resources, no matter where
                    you are.
                </p>
                <button
                    type="button"
                    class="flex w-32 px-2.5 py-1.5 items-center text-sm font-medium text-center text-white border-white border rounded-lg"
                >
                    Get Started
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
                </button>
            </a>
        </div>
        <!-- Ignoring accessibility warning for missing attribute -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <ContactForm />
    </div>
</section>
