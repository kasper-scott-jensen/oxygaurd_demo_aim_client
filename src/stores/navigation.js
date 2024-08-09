import { writable } from 'svelte/store'

// Store to keep track of which mega menu is open
export const megaMenuStates = writable([false, false, false, false, false])

// Store to keep track of the breadcrumb navigation section
export const breadcrumb = writable([])
