import { writable } from 'svelte/store' // Import writable from Svelte's store module

// Store to keep track of the current form index
export const formIndex = writable(0)
