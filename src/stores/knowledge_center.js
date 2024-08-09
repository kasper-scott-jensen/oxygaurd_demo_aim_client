import { writable } from 'svelte/store'

// Store to keep track of active tab in How They Work
export const howActiveTab = writable(0)

// Store to keep track of active considerations image
export const activeConsImage = writable(0)

// Store to keep track of active config tab
export const activeConfigTab = writable(0)

// Store to keep track of image in SD config
export const activeSDConfigImage = writable('')
