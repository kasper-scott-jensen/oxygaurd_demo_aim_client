import { writable } from 'svelte/store'

// Store to manage the current set of products
// Initialized with an empty array
export const currentProducts = writable([])

// Store to manage the complete list of all products
// Initialized with an empty array
export const allProducts = writable([])

// Store to manage the product relations
// Initialized with an empty array
export const relations = writable([])
