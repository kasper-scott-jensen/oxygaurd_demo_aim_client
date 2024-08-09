<script>
    // Import necessary functions, stores, and components
    import { onMount } from 'svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import NavbarSide from '../components/header/navbar_side.svelte'
    import HeaderBreadcrumb from '../components/header/header_breadcrumb.svelte'
    import { breadcrumb } from '../stores/navigation'

    // Set breadcrumb on component mount
    onMount(() => {
        breadcrumb.set([{ title: 'Terms and Conditions', link: '/' }])
    })

    // Navigation array for sidebar
    let navigationArray = [
        { title: 'Introduction', anchor: '#introduction' },
        { title: 'Orders and Acceptance', anchor: '#orders' },
        { title: 'Prices and Payment', anchor: '#prices' },
        { title: 'Shipping and Delivery', anchor: '#shipping' },
        {
            title: 'Inspection and Acceptance of Products',
            anchor: '#inspection',
        },
        { title: 'Returns and Warranty', anchor: '#returns' },
        { title: 'Limitation of Liability', anchor: '#liability' },
        { title: 'Governing Law and Jurisdiction', anchor: '#governing' },
        { title: 'Miscellaneous', anchor: '#miscellaneous' },
        { title: 'Contact Us', anchor: '#contact' },
    ]
</script>

<!-- Terms and Conditions Page Layout -->
<DefaultLayout>
    <TopSpacer />
    <HeaderBreadcrumb />
    <section class="pt-2 pb-32">
        <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
                <h2
                    class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
                >
                    General Sales and Delivery Terms and Conditions
                    <span
                        class="text-primary-700 font-extrabold text-5xl hidden lg:inline"
                    >
                        .
                    </span>
                </h2>
                <p class="font-light text-gray-500 md:text-lg">
                    These terms govern the sale and delivery of products and
                    services by Aim Robotics.
                </p>
            </div>
            <div class="flex flex-col lg:flex-row w-full pt-8">
                <!-- Main Content Section -->
                <div class="lg:w-4/5">
                    <main
                        class="mt-6 max-w-5xl w-full text-gray-500 rounded-lg"
                    >
                        <!-- Introduction Section -->
                        <header class="mb-8" id="introduction">
                            <p class="text-lg">
                                These General Sales and Delivery Terms
                                (hereinafter referred to as the "Terms") govern
                                the sale and delivery of products and services
                                by Aim Robotics (hereinafter referred to as the
                                "Seller"). By placing an order, the customer
                                (hereinafter referred to as the "Buyer") agrees
                                to be bound by these Terms. The Buyer
                                acknowledges that they have read, understood,
                                and agreed to these General Sales and Delivery
                                Terms.
                            </p>
                        </header>

                        <!-- Orders and Acceptance Section -->
                        <section class="mb-8" id="orders">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                1. Orders and Acceptance
                            </h2>
                            <p class="text-lg">
                                1.1 All orders submitted by the Buyer are
                                subject to acceptance by the Seller.
                                <br />
                                1.2 The Seller reserves the right to accept or reject
                                any order, in whole or in part, at its sole discretion.
                                <br />
                                1.3 An order is considered accepted when the Seller
                                issues a written order confirmation to the Buyer.
                            </p>
                        </section>

                        <!-- Prices and Payment Section -->
                        <section class="mb-8" id="prices">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                2. Prices and Payment
                            </h2>
                            <p class="text-lg">
                                2.1 Prices for products and services are as
                                listed in the Seller's current price list or as
                                quoted in writing by the Seller.
                                <br />
                                2.2 Prices are exclusive of VAT, customs duties,
                                and other applicable taxes, which are the responsibility
                                of the Buyer unless otherwise agreed in writing.
                                <br />
                                2.3 Payment terms are as specified in the Seller's
                                invoice. Unless otherwise agreed, payment is due
                                within 30 days from the date of the invoice.
                            </p>
                        </section>

                        <!-- Shipping and Delivery Section -->
                        <section class="mb-8" id="shipping">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                3. Shipping and Delivery
                            </h2>
                            <p class="text-lg">
                                3.1 Shipping Methods: The Seller will ship the
                                Products using the method selected by the Buyer
                                at the time of order.
                                <br />
                                3.2 Shipping Costs: Shipping costs are calculated
                                at the time of purchase and are the responsibility
                                of the Buyer unless otherwise agreed.
                                <br />
                                3.3 Delivery times are estimates and are not guaranteed.
                                The Seller will make reasonable efforts to deliver
                                products and services within the estimated delivery
                                time.
                                <br />
                                3.4 The Seller is not liable for any delays in delivery
                                caused by circumstances beyond its reasonable control,
                                including but not limited to acts of God, war, strikes,
                                or transportation issues.
                                <br />
                                3.5 Risk of loss or damage to the products passes
                                to the Buyer upon delivery.
                            </p>
                        </section>

                        <!-- Inspection and Acceptance of Products Section -->
                        <section class="mb-8" id="inspection">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                4. Inspection and Acceptance of Products
                            </h2>
                            <p class="text-lg">
                                4.1 The Buyer must inspect the products upon
                                delivery and notify the Seller of any defects or
                                discrepancies within 7 days of receipt.
                                <br />
                                4.2 If the Buyer fails to notify the Seller within
                                the specified period, the products will be deemed
                                accepted.
                            </p>
                        </section>

                        <!-- Returns and Warranty Section -->
                        <section class="mb-8" id="returns">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                5. Returns and Warranty
                            </h2>
                            <p class="text-lg">
                                5.1 The Seller warrants that the products will
                                be free from defects in material and workmanship
                                for a period of 15 months from the date of
                                delivery.
                                <br />
                                5.2 The Seller's liability under this warranty is
                                limited to repairing or replacing the defective products
                                at its discretion.
                                <br />
                                5.3 Returns are subject to the Seller's return policy,
                                which may include restocking fees and other conditions.
                            </p>
                        </section>

                        <!-- Limitation of Liability Section -->
                        <section class="mb-8" id="liability">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                6. Limitation of Liability
                            </h2>
                            <p class="text-lg">
                                6.1 The Seller's liability for any claim arising
                                out of or related to these Terms is limited to
                                the amount paid by the Buyer for the products or
                                services giving rise to the claim.
                                <br />
                                6.2 The Seller is not liable for any indirect, incidental,
                                or consequential damages, including but not limited
                                to loss of profits or business interruption.
                            </p>
                        </section>

                        <!-- Governing Law and Jurisdiction Section -->
                        <section class="mb-8" id="governing">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                7. Governing Law and Jurisdiction
                            </h2>
                            <p class="text-lg">
                                7.1 These Terms are governed by and construed in
                                accordance with the laws of Denmark.
                                <br />
                                7.2 Any disputes arising out of or related to this
                                Agreement will be resolved through binding arbitration
                                in accordance with the rules of Voldgiftsinstituttet
                                - The Danish Institute of Arbitration.
                                <br />
                                7.3 The arbitration will be conducted in Copenhagen,
                                Denmark.
                            </p>
                        </section>

                        <!-- Miscellaneous Section -->
                        <section class="mb-8" id="miscellaneous">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                8. Miscellaneous
                            </h2>
                            <p class="text-lg">
                                8.1 These Terms constitute the entire agreement
                                between the Seller and the Buyer and supersede
                                all prior agreements and understandings.
                                <br />
                                8.2 Any modifications to these Terms must be in writing
                                and signed by both parties.
                                <br />
                                8.3 If any provision of these Terms is found to be
                                invalid or unenforceable, the remaining provisions
                                will continue in full force and effect.
                            </p>
                        </section>

                        <!-- Contact Us Section -->
                        <section class="mb-8" id="contact">
                            <h2
                                class="text-xl font-semibold mb-4 text-gray-800"
                            >
                                9. Contact Us
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

                <!-- Sidebar Navigation Section -->
                <div
                    class="flex flex-col lg:w-1/5 bg-none mb-4 lg:mb-0 items-end"
                >
                    <NavbarSide links={navigationArray} />
                </div>
            </div>
        </div>
    </section>
</DefaultLayout>
