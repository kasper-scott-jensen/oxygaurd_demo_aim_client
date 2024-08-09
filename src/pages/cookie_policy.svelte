<script>
    // Import necessary functions and components
    import { onMount } from 'svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import HeaderBreadcrumb from '../components/header/header_breadcrumb.svelte'
    import { breadcrumb } from '../stores/navigation'
    import NavbarSide from '../components/header/navbar_side.svelte'

    // Set breadcrumb on component mount
    onMount(() => {
        breadcrumb.set([{ title: 'Cookie Policy', link: '/' }])
    })

    // Navigation array for sidebar links
    let navigationArray = [
        { title: 'Introduction', anchor: '#introduction' },
        { title: 'What Are Cookies?', anchor: '#what' },
        { title: 'Types We Use', anchor: '#types' },
        { title: 'How We Use Them', anchor: '#how' },
        { title: 'Third Party Cookies', anchor: '#thirdparty' },
        { title: 'Managing Cookies', anchor: '#managing' },
        { title: 'Browser Settings', anchor: '#settings' },
        { title: 'Opt-Out Tools', anchor: '#tools' },
        { title: 'Updates', anchor: '#updates' },
        { title: 'Contact Us', anchor: '#contact' },
    ]
</script>

<!-- Cookie Policy Page Layout -->
<DefaultLayout>
    <TopSpacer />
    <HeaderBreadcrumb />
    <section class="pt-2 pb-32">
        <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
                <h2
                    class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
                >
                    Cookie Policy
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
                        <header class="mb-8" id="introduction">
                            <p class="text-lg">
                                This Cookie Policy explains how Aim Robotics
                                ("we," "us," or "our") uses cookies and similar
                                tracking technologies on our website and
                                services ("Services"). By using our Services,
                                you consent to the use of cookies and tracking
                                technologies as described in this policy.
                            </p>
                        </header>

                        <!-- Section: What Are Cookies -->
                        <section class="mb-8" id="what">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                1. What Are Cookies?
                            </h2>
                            <p class="text-lg">
                                Cookies are small text files that are placed on
                                your device by websites you visit. They are
                                widely used to make websites work more
                                efficiently, as well as to provide information
                                to the site owners.
                            </p>
                        </section>

                        <!-- Section: Types of Cookies We Use -->
                        <section class="mb-8" id="types">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                2. Types of Cookies We Use
                            </h2>
                            <ul class="list-disc list-inside pl-4 space-y-2">
                                <li>
                                    <strong class="text-gray-800">
                                        2.1 Essential Cookies
                                    </strong>
                                    : These cookies are necessary for the website
                                    to function properly and cannot be switched off
                                    in our systems. They are usually set in response
                                    to actions made by you, such as setting your
                                    privacy preferences, logging in, or filling out
                                    forms.
                                </li>
                                <li>
                                    <strong class="text-gray-800">
                                        2.2 Performance Cookies
                                    </strong>
                                    : These cookies collect information about how
                                    visitors use our website, such as which pages
                                    are visited most often and if they receive error
                                    messages from web pages. This information is
                                    aggregated and anonymized, and it helps us improve
                                    the performance of our website.
                                </li>
                                <li>
                                    <strong class="text-gray-800">
                                        2.3 Functional Cookies
                                    </strong>
                                    : These cookies allow our website to remember
                                    choices you make (such as your username, language,
                                    or the region you are in) and provide enhanced,
                                    more personalized features. They may also be
                                    used to provide services you have asked for,
                                    such as watching a video or commenting on a blog.
                                </li>
                            </ul>
                        </section>

                        <!-- Section: How We Use Cookies -->
                        <section class="mb-8" id="how">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                3. How We Use Cookies
                            </h2>
                            <p class="text-lg mb-4">We use cookies to:</p>
                            <ul class="list-disc list-inside pl-4 space-y-2">
                                <li>
                                    Enhance your user experience by remembering
                                    your preferences and settings.
                                </li>
                                <li>
                                    Analyze website traffic and usage to improve
                                    our website's functionality and performance.
                                </li>
                            </ul>
                        </section>

                        <!-- Section: Third-Party Cookies -->
                        <section class="mb-8" id="thirdparty">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                4. Third-Party Cookies
                            </h2>
                            <p class="text-lg">
                                We do not use third-party cookies to report
                                usage statistics, deliver advertisements, nor
                                improve our marketing efforts. These third-party
                                cookies are subject to the respective privacy
                                policies of these external services, and
                                therefore not in the best interest of our users.
                            </p>
                        </section>

                        <!-- Section: Managing Cookies -->
                        <section class="mb-8" id="managing">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                5. Managing Cookies
                            </h2>
                            <p class="text-lg mb-4">
                                You have the right to decide whether to accept
                                or reject cookies. You can set your web browser
                                to refuse cookies, delete cookies, or alert you
                                when cookies are being sent. However, if you
                                choose to disable cookies, some parts of our
                                website may not function properly.
                            </p>
                            <h3
                                class="text-lg font-semibold mb-4 text-gray-800"
                                id="settings"
                            >
                                5.1 Browser Settings
                            </h3>
                            <p class="text-lg mb-4">
                                Most web browsers allow you to manage your
                                cookie preferences through the browser settings.
                                You can usually find these settings in the
                                "Options" or "Preferences" menu of your browser.
                                For more information on how to manage cookies in
                                popular browsers, please visit:
                            </p>
                            <ul
                                class="list-disc list-inside pl-4 space-y-2 mb-4"
                            >
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://support.google.com/chrome/answer/95647"
                                        class="text-blue-500 hover:underline"
                                    >
                                        Google Chrome
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                                        class="text-blue-500 hover:underline"
                                    >
                                        Mozilla Firefox
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                                        class="text-blue-500 hover:underline"
                                    >
                                        Apple Safari
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://support.microsoft.com/en-us/microsoft-edge"
                                        class="text-blue-500 hover:underline"
                                    >
                                        Microsoft Edge
                                    </a>
                                </li>
                            </ul>
                            <h3
                                class="text-lg font-semibold mb-4 text-gray-800"
                                id="tools"
                            >
                                5.2 Opt-Out Tools
                            </h3>
                            <p class="text-lg mb-4">
                                You can opt out of interest-based advertising by
                                visiting the following links:
                            </p>
                            <ul class="list-disc list-inside pl-4 space-y-2">
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://optout.networkadvertising.org/"
                                        class="text-blue-500 hover:underline"
                                    >
                                        Network Advertising Initiative
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://optout.aboutads.info/"
                                        class="text-blue-500 hover:underline"
                                    >
                                        Digital Advertising Alliance
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.youronlinechoices.com/"
                                        class="text-blue-500 hover:underline"
                                    >
                                        European Interactive Digital Advertising
                                        Alliance
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <!-- Section: Changes to This Cookie Policy -->
                        <section class="mb-8" id="updates">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                6. Changes to This Cookie Policy
                            </h2>
                            <p class="text-lg">
                                We may update this Cookie Policy from time to
                                time to reflect changes in our practices or for
                                other operational, legal, or regulatory reasons.
                                Any changes will be posted on this page with an
                                updated revision date. We encourage you to
                                review this policy periodically to stay informed
                                about our use of cookies.
                            </p>
                        </section>

                        <!-- Section: Contact Us -->
                        <section class="mb-8" id="contact">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                7. Contact Us
                            </h2>
                            <p class="text-lg mb-8">
                                If you have any questions or concerns about this
                                Cookie Policy or our data practices, please
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

                        <footer class="mt-8">
                            <p class="text-lg">
                                By using our Services, you acknowledge that you
                                have read and understood this Cookie Policy and
                                agree to its terms.
                            </p>
                        </footer>
                    </main>
                </div>

                <!-- Sidebar Navigation -->
                <div
                    class="flex flex-col lg:w-1/5 bg-none mb-4 lg:mb-0 items-end"
                >
                    <NavbarSide links={navigationArray} />
                </div>
            </div>
        </div>
    </section>
</DefaultLayout>
