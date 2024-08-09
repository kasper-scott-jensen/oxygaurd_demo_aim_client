// @ts-nocheck
import { categoryMenu, searchText } from '../stores/product_catalogue'

// Function to set all categories menu states to false
export function setCategoriesMenuToFalse() {
    categoryMenu.update((categories) =>
        categories.map((cat) => ({ ...cat, state: false })),
    )
}

// Function to clear the search text
export function clearSearchText() {
    searchText.set('')
}

// Function to handle category click
export function handleCategoryClick(index) {
    categoryMenu.update((categories) =>
        categories.map((cat, i) =>
            i === index ? { ...cat, state: !cat.state } : cat,
        ),
    )
}
