import { writable } from 'svelte/store'

// Store to keep track of the parameter in the url
export const urlParams = writable()
