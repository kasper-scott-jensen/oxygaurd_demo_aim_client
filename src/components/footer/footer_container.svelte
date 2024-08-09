<script>
    // Importing necessary modules and components
    import { link } from 'svelte-routing'

    import LinkList from './footer_links.svelte'
    import Contact from './footer_contact.svelte'
    import Socials from './footer_socials.svelte'

    // Image source for the logo
    let logoSrc = '/logo/aimrobotics/logo_full_white.webp'
</script>

<!-- Footer section -->
<footer class="bg-[#222c56]">
    <div class="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <!-- Top part of the footer with logo and links -->
        <div class="md:flex md:justify-between pt-12">
            <!-- Logo and description -->
            <div class="mb-6 md:mb-0">
                <a use:link href="/" class="flex flex-col items-start">
                    <img src={logoSrc} class="h-12 me-3" alt="FlowBite Logo" />
                    <p class="text-white pt-5">
                        Automation Solutions for <br />
                        Collaborative Robot Applications
                    </p>
                </a>
            </div>
            <div class="hidden md:flex">
                <!-- Footer links -->
                <LinkList />
                <!-- Contact information -->
                <Contact />
            </div>
        </div>
        <!-- Horizontal line separator -->
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <!-- Social media links -->
        <Socials />
    </div>
</footer>
