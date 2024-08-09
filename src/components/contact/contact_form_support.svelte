<script>
    // Importing the function to send form data to the API
    import { sendSupportFormDataToApi } from '../../js/forms'

    // Function to handle form submission
    function handleSubmitSupportForm(event) {
        // Prevent the default form submission
        event.preventDefault()
        // Extracting form data entries
        const formDataEntries = new FormData(event.target).entries()
        // Creating an object from the form data entries
        const data = Object.fromEntries(formDataEntries)
        // Logging the data to the console
        console.log(data)
        // Sending the form data to the API
        sendSupportFormDataToApi(data)
        // Resetting the form fields
        event.target.reset()
    }
</script>

<!-- Support form with submit event handler -->
<form
    on:submit|preventDefault={() => handleSubmitSupportForm(event)}
    class="space-y-4 w-full"
>
    <!-- Section for first and last name -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label
                for="firstName"
                class="block mb-2 text-xs font-bold uppercase text-white"
            >
                First Name
            </label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg caret"
                placeholder="First Name"
                required
            />
        </div>
        <div>
            <label
                for="lastName"
                class="block mb-2 text-xs font-bold uppercase text-white"
            >
                Last Name
            </label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg caret"
                placeholder="Last Name"
                required
            />
        </div>
    </div>
    <!-- Section for email and phone number -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label
                for="email"
                class="block mb-2 text-xs font-bold uppercase text-white"
            >
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg caret"
                placeholder="Email"
                required
            />
        </div>
        <div>
            <label
                for="phone"
                class="block mb-2 text-xs font-bold uppercase text-white"
            >
                Phone number
            </label>
            <div class="flex">
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg caret"
                    placeholder="Phone number"
                    required
                />
            </div>
        </div>
    </div>
    <!-- Section for company and country -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label
                for="company"
                class="block mb-2 text-xs font-bold uppercase text-white"
            >
                Company
            </label>
            <input
                type="text"
                id="company"
                name="company"
                class="block w-full p-2.5 text-sm text-gray-900 hover:bg-gray-50 bg-white border border-gray-300 rounded-lg caret"
                placeholder="Company"
                required
            />
        </div>
        <div>
            <label
                for="country"
                class="block mb-2 text-xs font-bold uppercase text-white"
            >
                Country
            </label>
            <input
                type="text"
                id="country"
                name="country"
                class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg caret"
                placeholder="Country"
                required
            />
        </div>
    </div>
    <!-- Section for state/region and city -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label
                for="state"
                class="block mb-2 text-xs font-bold uppercase text-white"
            >
                State / Region
            </label>
            <input
                type="text"
                id="state"
                name="state"
                class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg caret"
                placeholder="State/Region"
                required
            />
        </div>
        <div>
            <label
                for="city"
                class="block mb-2 text-xs font-bold uppercase text-white"
            >
                City
            </label>
            <input
                type="text"
                id="city"
                name="city"
                class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg caret"
                placeholder="City"
                required
            />
        </div>
    </div>
    <!-- Section for product and ticket topic -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label
                for="product"
                class="block mb-2 text-xs font-bold uppercase text-white"
            >
                Product
            </label>
            <select
                id="product"
                name="product"
                class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg"
                required
            >
                <option value="SD30/55">SD 30/55</option>
                <option value="FDHighV">FD HighV</option>
                <option value="FD400">FD 400</option>
                <option value="FD310">FD 310</option>
                <option value="AirBox">AirBox</option>
                <option value="TCP">TCP Calibration Tool</option>
                <option value="AimPath">AimPath</option>
            </select>
        </div>
        <div>
            <label
                for="topic"
                class="block mb-2 text-xs font-bold uppercase text-white"
            >
                Ticket Topic
            </label>
            <input
                type="text"
                id="topic"
                name="topic"
                class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg caret"
                placeholder="Topic"
                required
            />
        </div>
    </div>
    <!-- Section for ticket message -->
    <div>
        <label
            for="message"
            class="block mb-2 text-xs font-bold uppercase text-white"
        >
            Ticket Message
        </label>
        <textarea
            id="message"
            name="message"
            rows="4"
            class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg caret"
            placeholder="Describe the issue..."
            required
        ></textarea>
    </div>
    <!-- Submit button -->
    <div class="text-center">
        <button
            type="submit"
            class="w-full max-w-96 py-3 px-5 text-md font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 shadow-md mt-4"
        >
            Submit
        </button>
    </div>
    <!-- Note about required fields -->
    <p class="text-gray-900 text-xs font-normal">
        * These fields are required.
    </p>
</form>
