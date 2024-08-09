import { navigate } from 'svelte-routing'
import { megaMenuStates } from '../stores/navigation'
import {
    activeTab,
    categoryMenu,
    currentProduct,
} from '../stores/product_catalogue'
import { currentArticle, currentIndustry } from '../stores/applications'
import { activeConfigTab } from '../stores/knowledge_center'

// Function to close all mega menus
export function closeAllMegaMenus() {
    megaMenuStates.update((states) => states.map(() => false))
}

// Function to navigate to catalogue with a specific category
export function navigateToCatalogueWithCategory(index) {
    closeAllMegaMenus()
    categoryMenu.update((categories) =>
        categories.map((cat, i) =>
            i === index ? { ...cat, state: true } : { ...cat, state: false },
        ),
    )
    navigate(`/products/catalogue?cat=${index}`)
}

// Function to navigate to catalogue without a specific category
export function navigateToCatalogueWithoutCategory() {
    closeAllMegaMenus()
    categoryMenu.update((categories) =>
        categories.map((cat, i) => ({
            ...cat,
            state: false,
        })),
    )
    navigate('/products/catalogue')
}

// Function to navigate to industry details page
export function navigateToIndustryDetails(desc) {
    closeAllMegaMenus()
    currentIndustry.set(desc)
    navigate(`/applications/industry-details?desc=${desc}`)
}

// Function to navigate to article details page
export function navigateToArticleDetails(desc) {
    closeAllMegaMenus()
    currentArticle.set(desc)
    navigate(`/applications/article-details?desc=${desc}`)
}

// Function to smooth scroll to a specific anchor on the page
export function smoothScrollToAnchor(event, anchor) {
    event.preventDefault()
    const targetElement = document.querySelector(anchor)
    if (targetElement) {
        const offset = 110
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        })
    }
}

// Function to navigate to a specific configurator
export function navigateToConfigurator(id) {
    closeAllMegaMenus()
    switch (id.toString()) {
        case '9410':
            activeConfigTab.set(1)
            break
        case '9027':
            activeConfigTab.set(2)
            break
        case '9000':
            activeConfigTab.set(3)
            break
        case '9044':
            activeConfigTab.set(4)
            break
        case '9302':
            activeConfigTab.set(5)
            break
        default:
            activeConfigTab.set(0)
    }
    navigate('/knowledge-center/configurator')
}
