import { partners } from '../stores/crm.js'
import { allProducts, currentProducts, relations } from '../stores/rackbeat.js'

// Import environment variables
const env = import.meta.env

// Headers for API requests
const headers = {
    'secret-key': env.VITE_SECRET_KEY,
}

// Function to fetch partners from the API
export async function fetchPartnersFromApi() {
    try {
        const response = await fetch(`${env.VITE_SERVER}/api/partners/all`, {
            headers: headers,
        })
        if (!response.ok) {
            console.error('API error:', response)
            return
        }
        const data = await response.json()
        partners.set(data.partners)
        console.log(data.partners)
    } catch (error) {
        console.error('Error fetching partners:', error)
    }
}

// Function to fetch current products from the API
export async function fetchCurrentProductsFromApi() {
    try {
        const response = await fetch(
            `${env.VITE_SERVER}/api/products/current`,
            {
                headers: headers,
            },
        )
        if (!response.ok) {
            console.error('API error:', response)
            return
        }
        const data = await response.json()
        currentProducts.set(data.products)
    } catch (error) {
        console.error('Error fetching current products:', error)
    }
}

// Function to fetch all products from the API
export async function fetchAllProductsFromApi() {
    try {
        const response = await fetch(`${env.VITE_SERVER}/api/products/all`, {
            headers: headers,
        })
        if (!response.ok) {
            console.error('API error:', response)
            return
        }
        const data = await response.json()
        allProducts.set(data.products)
        currentProducts.set(
            data.products.filter((item) => item.is_current === 1),
        )
        console.log(data.products)
    } catch (error) {
        console.error('Error fetching all products:', error)
    }
}
