<script>
    // Import necessary functions, stores, and components
    import { onMount } from 'svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import HeaderBreadcrumb from '../components/header/header_breadcrumb.svelte'
    import { breadcrumb } from '../stores/navigation'
    import NavbarSide from '../components/header/navbar_side.svelte'

    // Set breadcrumb on component mount
    onMount(() => {
        breadcrumb.set([{ title: 'Privacy Policy', link: '/' }])
    })

    // Navigation array for sidebar links
    let navigationArray = [
        { title: 'Introduction', anchor: '#introduction' },
        { title: 'What We Collect', anchor: '#collect' },
        { title: 'How We Use It', anchor: '#how' },
        { title: 'Sharing', anchor: '#sharing' },
        { title: 'Data Security', anchor: '#security' },
        { title: 'Your Rights', anchor: '#rights' },
        { title: 'Retention', anchor: '#retention' },
        { title: 'Updates', anchor: '#updates' },
        { title: 'Contact', anchor: '#contact' },
    ]
</script>

<!-- Privacy Policy Page Layout -->
<DefaultLayout>
    <TopSpacer />
    <HeaderBreadcrumb />
    <section class="pt-2 pb-32">
        <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
                <h2
                    class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
                >
                    Privacy Policy
                    <span
                        class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                    >
                        .
                    </span>
                </h2>
                <p class="font-light text-gray-500 md:text-lg">
                    At Aim Robotics, we prioritize the protection of your
                    personal data and respect your privacy rights.
                </p>
            </div>
            <div class="flex flex-col lg:flex-row w-full pt-8">
                <div class="lg:w-4/5">
                    <main
                        class="mt-6 max-w-5xl w-full text-gray-500 rounded-lg"
                    >
                        <!-- Introduction Section -->
                        <header class="mb-8" id="introduction">
                            <p class="text-lg">
                                This Privacy Policy outlines how Aim Robotics
                                ("we," "us," or "our") collects, uses, and
                                protects personal information obtained through
                                our Customer Relationship Management (CRM)
                                system. By interacting with us and providing
                                your personal information, you consent to the
                                practices described in this policy.
                            </p>
                        </header>

                        <!-- Information We Collect Section -->
                        <section class="mb-8" id="collect">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                1. Information We Collect
                            </h2>
                            <p class="text-lg">
                                We collect several types of information for
                                various purposes to provide and improve our
                                Services to you.
                            </p>
                            <ul class="list-disc list-inside pl-4 space-y-2">
                                <li>
                                    <strong class="text-gray-800">
                                        1.1 Personal Information
                                    </strong>
                                    : We collect personal information that you provide
                                    to us, including but not limited to:
                                    <ul
                                        class="list-disc list-inside pl-4 space-y-2 mt-2"
                                    >
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Phone number</li>
                                        <li>Mailing address</li>
                                        <li>Company name</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong class="text-gray-800">
                                        1.2 Additional Information
                                    </strong>
                                    : We may also collect additional information
                                    relevant to our business relationship, such as:
                                    <ul
                                        class="list-disc list-inside pl-4 space-y-2 mt-2"
                                    >
                                        <li>Communication preferences</li>
                                        <li>Customer support inquiries</li>
                                        <li>Feedback and survey responses</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <!-- How We Use Your Information Section -->
                        <section class="mb-8" id="how">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                2. How We Use Your Information
                            </h2>
                            <p class="text-lg">
                                We use the information collected in our CRM
                                system for the following purposes:
                            </p>
                            <ul class="list-disc list-inside pl-4 space-y-2">
                                <li>
                                    <strong class="text-gray-800">
                                        Customer Relationship Management
                                    </strong>
                                    : To manage and maintain our relationships with
                                    you, including processing orders, providing customer
                                    support, and communicating with you about our
                                    products and services.
                                </li>
                                <li>
                                    <strong class="text-gray-800">
                                        Marketing and Promotions
                                    </strong>
                                    : To send promotional materials, newsletters,
                                    and other communications related to our products
                                    and services, subject to your communication preferences.
                                </li>
                                <li>
                                    <strong class="text-gray-800">
                                        Service Improvement
                                    </strong>
                                    : To improve our products, services, and overall
                                    customer experience based on feedback and interactions.
                                </li>
                                <li>
                                    <strong class="text-gray-800">
                                        Personalization
                                    </strong>
                                    : To tailor our communications and marketing
                                    efforts to your interests and preferences.
                                </li>
                            </ul>
                        </section>

                        <!-- Sharing Your Information Section -->
                        <section class="mb-8" id="sharing">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                3. Sharing Your Information
                            </h2>
                            <p class="text-lg">
                                We do not sell, trade, or otherwise transfer
                                your personal information to outside parties,
                                except in the following circumstances:
                            </p>
                            <ul class="list-disc list-inside pl-4 space-y-2">
                                <li>
                                    <strong class="text-gray-800">
                                        Service Providers
                                    </strong>
                                    : We may share your information with trusted
                                    third-party service providers who assist us in
                                    operating our CRM system, conducting our business,
                                    or providing services to you. These providers
                                    are obligated to keep your information confidential
                                    and use it only for the purposes for which we
                                    disclose it to them.
                                </li>
                                <li>
                                    <strong class="text-gray-800">
                                        Legal Requirements
                                    </strong>
                                    : We may disclose your information when required
                                    by law or in response to legal processes, such
                                    as a court order or subpoena.
                                </li>
                            </ul>
                        </section>

                        <!-- Data Security Section -->
                        <section class="mb-8" id="security">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                4. Data Security
                            </h2>
                            <p class="text-lg">
                                We implement appropriate security measures to
                                protect your personal information stored in our
                                CRM system from unauthorized access, alteration,
                                disclosure, or destruction. These measures
                                include:
                            </p>
                            <ul class="list-disc list-inside pl-4 space-y-2">
                                <li>Encryption</li>
                                <li>Access controls</li>
                                <li>Regular security audits</li>
                            </ul>
                            <p class="text-lg">
                                However, please note that no method of
                                transmission over the internet or electronic
                                storage is completely secure, and we cannot
                                guarantee absolute security.
                            </p>
                        </section>

                        <!-- Your Rights Section -->
                        <section class="mb-8" id="rights">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                5. Your Rights
                            </h2>
                            <p class="text-lg">
                                You have the following rights regarding your
                                personal information:
                            </p>
                            <ul class="list-disc list-inside pl-4 space-y-2">
                                <li>
                                    <strong class="text-gray-800">
                                        Access
                                    </strong>
                                    : You have the right to request access to the
                                    personal information we hold about you.
                                </li>
                                <li>
                                    <strong class="text-gray-800">
                                        Correction
                                    </strong>
                                    : You have the right to request corrections to
                                    any inaccurate or incomplete personal information.
                                </li>
                                <li>
                                    <strong class="text-gray-800">
                                        Deletion
                                    </strong>
                                    : You have the right to request the deletion
                                    of your personal information, subject to certain
                                    legal or contractual obligations.
                                </li>
                                <li>
                                    <strong class="text-gray-800">
                                        Objection
                                    </strong>
                                    : You have the right to object to the processing
                                    of your personal information for direct marketing
                                    purposes.
                                </li>
                                <li>
                                    <strong class="text-gray-800">
                                        Restriction
                                    </strong>
                                    : You have the right to request the restriction
                                    of processing of your personal information under
                                    certain circumstances.
                                </li>
                            </ul>
                            <p class="text-lg">
                                To exercise these rights, please contact us
                                using the contact information provided below.
                            </p>
                        </section>

                        <!-- Retention of Information Section -->
                        <section class="mb-8" id="retention">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                6. Retention of Information
                            </h2>
                            <p class="text-lg">
                                We retain your personal information for as long
                                as necessary to fulfill the purposes outlined in
                                this Privacy Policy, unless a longer retention
                                period is required or permitted by law.
                            </p>
                        </section>

                        <!-- Changes to This Privacy Policy Section -->
                        <section class="mb-8" id="updates">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                7. Changes to This Privacy Policy
                            </h2>
                            <p class="text-lg">
                                We may update this Privacy Policy from time to
                                time to reflect changes in our practices or
                                legal requirements. Any changes will be posted
                                on this page with an updated revision date. We
                                encourage you to review this policy periodically
                                to stay informed about how we are protecting
                                your information.
                            </p>
                        </section>

                        <!-- Contact Us Section -->
                        <section class="mb-8" id="contact">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                8. Contact Us
                            </h2>
                            <p class="text-lg mb-8">
                                If you have any questions or concerns about this
                                Privacy Policy or our data practices, please
                                contact us at:
                            </p>
                            <address class="not-italic">
                                <p class="text-lg font-bold text-gray-800">
                                    Aim Robotics ApS
                                </p>
                                <p class="text-lg">Maskinvej 5, 2860 Søborg</p>
                                <p class="text-lg">Denmark</p>
                                <p class="text-lg">
                                    Mail: sales@aim-robotics.com
                                </p>
                                <p class="text-lg">Phone: +45 31 51 55 11</p>
                                <p class="text-lg">CVR / VAT: 40494197</p>
                                <p class="text-lg">EORI: DK40494197</p>
                            </address>
                        </section>

                        <!-- Footer Section -->
                        <footer class="mt-8">
                            <p class="text-lg">
                                By interacting with us and providing your
                                personal information, you acknowledge that you
                                have read and understood this Privacy Policy and
                                agree to its terms.
                            </p>
                        </footer>
                    </main>
                </div>
                <div
                    class="flex flex-col lg:w-1/5 bg-none mb-4 lg:mb-0 items-end"
                >
                    <!-- Sidebar Navigation -->
                    <NavbarSide links={navigationArray} />
                </div>
            </div>
        </div>
    </section>
</DefaultLayout>
