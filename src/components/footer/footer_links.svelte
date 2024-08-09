<script>
    // Importing necessary module for routing
    import { link } from 'svelte-routing'
</script>

<!-- Grid container for footer links -->
<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    <!-- Navigation links section -->
    <div class="px-8">
        <h2 class="mb-6 text-sm font-semibold text-white uppercase">
            Navigation
        </h2>
        <ul class="text-white font-medium">
            <!-- List of navigation links -->
            <li class="mb-4">
                <a use:link href="/products" class="hover:text-primary-700">
                    Products
                </a>
            </li>
            <li class="mb-4">
                <a use:link href="/solutions" class="hover:text-primary-700">
                    Solutions
                </a>
            </li>
            <li class="mb-4">
                <a
                    use:link
                    href="/knowledge-center"
                    class="hover:text-primary-700"
                >
                    Knowledge Center
                </a>
            </li>
            <li class="mb-4">
                <a use:link href="/about" class="hover:text-primary-700">
                    About
                </a>
            </li>
            <li class="mb-4">
                <a use:link href="/network" class="hover:text-primary-700">
                    Network
                </a>
            </li>
        </ul>
    </div>

    <!-- Help and Inquiries section -->
    <div class="px-8">
        <h2 class="mb-6 text-sm font-semibold text-white uppercase">
            Help and Inquiries
        </h2>
        <ul class="text-white font-medium">
            <!-- List of help and inquiry links -->
            <li class="mb-4">
                <a use:link href="/contact" class="hover:text-primary-700">
                    Contact
                </a>
            </li>
            <li class="mb-4">
                <a use:link href="/support" class="hover:text-primary-700">
                    Support
                </a>
            </li>
            <li class="mb-4">
                <a
                    use:link
                    href="/network/become-a-partner"
                    class="hover:text-primary-700"
                >
                    Become A Partner
                </a>
            </li>
        </ul>
    </div>

    <!-- Your Rights section -->
    <div class="px-8">
        <h2 class="mb-6 text-sm font-semibold text-white uppercase">
            Your Rights
        </h2>
        <ul class="text-white font-medium">
            <!-- List of rights-related links -->
            <li class="mb-4">
                <a
                    use:link
                    href="/cookie-policy"
                    class="hover:text-primary-700"
                >
                    Cookie Policy
                </a>
            </li>
            <li class="mb-4">
                <a
                    use:link
                    href="/privacy-policy"
                    class="hover:text-primary-700"
                >
                    Privacy Policy
                </a>
            </li>
            <li class="mb-4">
                <a
                    use:link
                    href="/terms-and-conditions"
                    class="hover:text-primary-700"
                >
                    Terms And Conditions
                </a>
            </li>
        </ul>
    </div>
</div>
