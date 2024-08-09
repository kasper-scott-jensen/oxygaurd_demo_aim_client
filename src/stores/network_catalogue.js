import { writable } from 'svelte/store'

// Store to manage the cobots menu state
// Each cobot object contains:
// - cobot: Name of the cobot
// - state: Boolean to indicate if the cobot is active or selected
// - logo: Path to the logo image of the cobot
// - query: Query string associated with the cobot
export const cobotsMenu = writable([
    {
        cobot: 'Universal',
        state: false,
        logo: '/logo/cobots/logo_universal.webp',
        query: 'universal',
    },
    {
        cobot: 'Kassow',
        state: false,
        logo: '/logo/cobots/logo_kassow.webp',
        query: 'kassow',
    },
    {
        cobot: 'TM Omron',
        state: false,
        logo: '/logo/cobots/logo_omron.webp',
        query: 'tm_omron',
    },
    {
        cobot: 'ABB',
        state: false,
        logo: '/logo/cobots/logo_abb.webp',
        query: 'abb',
    },
    {
        cobot: 'Fanuc',
        state: false,
        logo: '/logo/cobots/logo_fanuc.webp',
        query: 'fanuc',
    },
    {
        cobot: 'KUKA',
        state: false,
        logo: '/logo/cobots/logo_kuka.webp',
        query: 'kuka',
    },
    {
        cobot: 'Doosan',
        state: false,
        logo: '/logo/cobots/logo_doosan.webp',
        query: 'doosan',
    },
])

// Store to manage the search text input by the user
// Initialized to an empty string
export const searchText = writable('')

// Store to manage the sorting index
// Initialized to '0'
export const sortingIndex = writable('0')

// Store to manage integrator option
// Initialized to 'FALSE'
export const integratorOption = writable('0')
