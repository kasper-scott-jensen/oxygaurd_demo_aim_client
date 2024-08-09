import { writable } from 'svelte/store'

// Store for product support alert visibility
export const productSupportAlert = writable(true)

// Store for product interface alert visibility
export const productInterfaceAlert = writable(true)

// Store for cookie banner visibility
export const cookieBanner = writable(true)
