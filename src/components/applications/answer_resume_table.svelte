<script>
    import {
        answerResume,
        combinationErrorAirSupply,
    } from '../../stores/applications'

    $: console.log($combinationErrorAirSupply)
</script>

<div class="w-full h-full overflow-x-auto mt-4">
    <table class="w-full h-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase border-b">
            <tr>
                <th scope="col" class="px-2 py-1">Step</th>
                <th scope="col" class="px-2 py-1">Answer</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b">
                <td class="px-2 text-xs">Precision / Volume</td>
                <td class="px-2 text-xs">{$answerResume[0] || 'N/A'}</td>
            </tr>
            <tr class="bg-white border-b">
                <td class="px-2 py-2 text-xs">Manoeuvrability</td>
                <td class="px-2 py-2 text-xs">{$answerResume[1] || 'N/A'}</td>
            </tr>
            <tr class="bg-white border-b">
                <td
                    class={`px-2 text-xs ${
                        $combinationErrorAirSupply
                            ? 'text-red-500 font-semibold'
                            : ''
                    }`}
                >
                    Material Container
                </td>
                <td
                    class={`px-2 text-xs ${
                        $combinationErrorAirSupply
                            ? 'text-red-500 font-semibold'
                            : ''
                    }`}
                >
                    {$answerResume[2] || 'N/A'}
                </td>
            </tr>
            <tr class="bg-white border-b">
                <td
                    class={`px-2 text-xs ${
                        $combinationErrorAirSupply
                            ? 'text-red-500 font-semibold'
                            : ''
                    }`}
                >
                    Air Supply
                </td>
                <td
                    class={`px-2 text-xs ${
                        $combinationErrorAirSupply
                            ? 'text-red-500 font-semibold'
                            : ''
                    }`}
                >
                    {$answerResume[3] || 'N/A'}
                </td>
            </tr>
            <tr class="bg-white">
                <td class="px-2 text-xs">Viscosity</td>
                <td class="px-2 text-xs">{$answerResume[4] || 'N/A'}</td>
            </tr>
        </tbody>
    </table>
</div>
