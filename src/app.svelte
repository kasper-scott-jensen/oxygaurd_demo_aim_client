<script>
    // @ts-nocheck

    import './css/main.css'
    import './css/tailwind.css'
    import '../node_modules/flowbite/dist/flowbite.min.js'
    import '../node_modules/mapbox-gl/dist/mapbox-gl.css'
    import '../firebase.config.js'
    import { Router, Route, navigate } from 'svelte-routing'
    import { onMount } from 'svelte'
    import {
        fetchPartnersFromApi,
        fetchAllProductsFromApi,
    } from './js/init_api_data.js'
    import CookieBanner from './components/utility/cookie_banner.svelte'
    import Home from './pages/home.svelte'
    import Products from './pages/products.svelte'
    import NotFound from './pages/404.svelte'
    import LoadingScreen from './components/utility/loading_screen.svelte'
    import Contact from './pages/contact.svelte'
    import { SvelteToast } from '@zerodevx/svelte-toast'
    import Support from './pages/support.svelte'
    import Applications from './pages/applications.svelte'
    import KnowledgeCenter from './pages/knowledge_center.svelte'
    import CookiePolicy from './pages/cookie_policy.svelte'
    import PrivacyPolicy from './pages/privacy_policy.svelte'
    import Network from './pages/network.svelte'
    import TermsAndConditions from './pages/terms_and_conditions.svelte'
    import About from './pages/about.svelte'
    import ProductDetailsBase from './pages/product_details_base.svelte'

    // Toast options configuration
    const toastOptions = {
        theme: {
            '--toastPadding': '6px',
            '--toastBorderRadius': '0.5rem',
            '--toastWidth': '20rem',
            '--toastBarBackground': '#00adee',
        },
    }

    // Define application routes
    const routes = [
        { path: '*', component: NotFound },
        { path: '/', component: Home },
        { path: '/products', component: Products },
        { path: '/products/:params', component: Products },
        { path: '/product-details', component: Products },
        { path: '/product-details/:params', component: ProductDetailsBase },
        { path: '/solutions', component: Applications },
        { path: '/solutions/:params', component: Applications },
        { path: '/knowledge-center', component: KnowledgeCenter },
        { path: '/knowledge-center/:params', component: KnowledgeCenter },
        { path: '/about', component: About },
        { path: '/network', component: Network },
        { path: '/network/:params', component: Network },
        { path: '/support', component: Support },
        { path: '/support/:params', component: Support },
        { path: '/contact', component: Contact },
        { path: 'cookie-policy', component: CookiePolicy },
        { path: '/privacy-policy', component: PrivacyPolicy },
        { path: '/terms-and-conditions', component: TermsAndConditions },
    ]

    let isLoading = true

    // Fetch initial data
    onMount(async () => {
        try {
            await fetchPartnersFromApi()
            await fetchAllProductsFromApi()
        } finally {
            isLoading = false
        }
    })
</script>

<SvelteToast options={toastOptions} />

{#if isLoading}
    <LoadingScreen />
{:else}
    <Router>
        {#each routes as { path, component }}
            <Route {path} let:params>
                <svelte:component this={component} {...params} />
            </Route>
        {/each}
    </Router>
{/if}

<CookieBanner />
