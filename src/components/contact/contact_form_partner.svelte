<script>
    // Importing the function to send form data to the API
    import { sendPartnerFormDataToApi } from '../../js/forms'

    // Function to handle form submission
    function handleSubmitContactForm(event) {
        // Prevent the default form submission
        event.preventDefault()
        // Extracting form data entries
        const formDataEntries = new FormData(event.target).entries()
        // Creating an object from the form data entries
        const data = Object.fromEntries(formDataEntries)
        // Sending the form data to the API
        sendPartnerFormDataToApi(data)
        // Resetting the form fields
        event.target.reset()
    }
</script>

<!-- Partner form with submit event handler -->
<form
    on:submit|preventDefault={() => handleSubmitContactForm(event)}
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
                Phone Number
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
    <!-- Section for company and city -->
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
    <!-- Section for country and state/region -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </div>
    <!-- Section for industry selection -->
    <div>
        <label
            for="industry"
            class="block mb-2 text-xs font-bold uppercase text-white"
        >
            Industry
        </label>
        <select
            id="industry"
            name="industry"
            class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg"
            required
        >
            <option value="Automation / Robotics Equipment distributor">
                Automation / Robotics Equipment Distributor
            </option>
            <option value="Manufacturing / Production or End-user">
                Manufacturing / Production / End User
            </option>
            <option value="Systems Integrator">Systems Integrator</option>
            <option value="Media/Press/Investor">
                Media / Press / Investor
            </option>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
        </select>
    </div>
    <!-- Section for message -->
    <div>
        <label
            for="message"
            class="block mb-2 text-xs font-bold uppercase text-white"
        >
            Message
        </label>
        <textarea
            id="message"
            name="message"
            rows="4"
            class="block w-full p-2.5 text-sm text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg caret"
            placeholder="Leave a comment..."
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
