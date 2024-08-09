// @ts-nocheck
import {
    cobotsMenu,
    searchText,
    integratorOption,
} from '../stores/network_catalogue.js'

// Function to clear the search text
export function clearSearchText() {
    searchText.set('')
}

// Function to set all cobots menu states to false
export function setCobotsMenuToFalse() {
    cobotsMenu.update((cobots) =>
        cobots.map((cobot) => ({ ...cobot, state: false })),
    )
}

// Function to handle cobots menu click
export function handleCobotsClick(index) {
    cobotsMenu.update((cobots) =>
        cobots.map((cobot, i) =>
            i === index ? { ...cobot, state: !cobot.state } : cobot,
        ),
    )
}

// Function to handle integrator option click
export function handleIntegratorOptionClick() {
    integratorOption.update((value) => !value)
}

// Function to set integrator option to false
export function setIntegratorOptionToFalse() {
    integratorOption.set('0')
}
