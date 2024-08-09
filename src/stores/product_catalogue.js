import { writable } from 'svelte/store'

// Store to manage the category menu state
// Each category object contains:
// - cat: Name of the category
// - state: Boolean to indicate if the category is active
// - color: CSS class for the category color
export const categoryMenu = writable([
    { cat: 'dispensers', state: false, color: 'bg-green-400' },
    { cat: 'controllers', state: false, color: 'bg-amber-300' },
    { cat: 'tools', state: false, color: 'bg-red-600' },
    { cat: 'accessories', state: false, color: 'bg-violet-500' },
    { cat: 'replacement parts', state: false, color: 'bg-blue-400' },
])

// Store to manage the search text input by the user
// Initialized to an empty string
export const searchText = writable('')

// Store to manage the sorting index
export const sortingIndex = writable()

// Store to manage the current product ID
// Initialized to 0
export const currentProduct = writable(0)

// Store to manage the active tab index
// Initialized to 0
export const activeTab = writable(0)

// Store to manage the current AirBox configuration
export const airboxConfig = writable(0)
