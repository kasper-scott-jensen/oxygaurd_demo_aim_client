import { toast } from '@zerodevx/svelte-toast'

// Import environment variables
const env = import.meta.env

// Headers for API requests
const headers = {
    'Content-Type': 'application/json',
    'secret-key': env.VITE_SECRET_KEY,
}

// Function to send contact form data to the API
export async function sendContactFormDataToApi(formData) {
    try {
        const response = await fetch(`${env.VITE_SERVER}/api/forms/contact`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(formData),
        })
        if (!response.ok) {
            console.error('API error:', response)
            return
        }
        sendNotification(0)
    } catch (error) {
        console.error('Error sending contact form data:', error)
        sendNotification(1)
    }
}

// Function to send support form data to the API
export async function sendSupportFormDataToApi(formData) {
    try {
        const response = await fetch(`${env.VITE_SERVER}/api/forms/support`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(formData),
        })
        if (!response.ok) {
            console.error('API error:', response)
            return
        }
        sendNotification(0)
    } catch (error) {
        console.error('Error sending support form data:', error)
        sendNotification(1)
    }
}

// Function to send partner form data to the API
export async function sendPartnerFormDataToApi(formData) {
    try {
        const response = await fetch(`${env.VITE_SERVER}/api/forms/partner`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(formData),
        })
        if (!response.ok) {
            console.error('API error:', response)
            return
        }
        sendNotification(0)
    } catch (error) {
        console.error('Error sending partner form data:', error)
        sendNotification(1)
    }
}

// Function to display notifications
function sendNotification(index) {
    if (index === 0) {
        toast.push(
            'Thank you for contacting us. We will get back to you shortly.',
            {
                theme: {
                    '--toastBackground': '#16a34a',
                },
            },
        )
    } else if (index === 1) {
        toast.push('Woops, something went wrong. Please try again later.', {
            theme: {
                '--toastBackground': '#dc2626',
            },
        })
    }
}
