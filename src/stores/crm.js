import { writable } from 'svelte/store'

// Store to keep track of the current imported partners
export const partners = writable([])
