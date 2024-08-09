<script>
    import { navigate } from 'svelte-routing'

    let considerations = [
        { title: 'Material Viscosity and Flow' },
        { title: 'Bead Size' },
        { title: 'Dispensed Volume' },
        { title: 'Tip Properties' },
        { title: 'Dispensing Speed' },
        { title: 'Pressure Supply' },
    ]
</script>

<div
    class="w-full p-8 bg-white border border-gray-300 rounded-lg shadow-md sm:p-8"
>
    <h5 class="mb-6 text-2xl font-bold tracking-tight text-gray-900">
        Basic Considerations
    </h5>
    <p class="mb-4 font-normal text-gray-500">
        Having decided which Aim Robotics solution that fits your application
        best, you need to consider some fundamentals when it comes to achieving
        the best dispensing result.
    </p>
    <ul role="list" class="space-y-5 my-7">
        {#each considerations as cons, index}
            <li class="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="size-6 text-primary-700"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                </svg>

                <div class="flex flex-col ms-3">
                    <p
                        class="text-base font-normal leading-tight text-gray-900"
                    >
                        {cons.title}
                    </p>
                </div>
            </li>
        {/each}
    </ul>
    <button
        on:click|preventDefault={() => {
            navigate('/knowledge-center/considerations')
        }}
        type="button"
        class="text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-md px-5 py-2.5 inline-flex justify-center w-full text-center"
    >
        Read More
    </button>
</div>
