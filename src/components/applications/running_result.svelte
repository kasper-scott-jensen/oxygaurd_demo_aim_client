<script>
    // @ts-nocheck

    import { derived } from 'svelte/store'
    import {
        awardedPointsQ1,
        awardedPointsQ2,
        awardedPointsQ3,
        awardedPointsQ4,
        awardedPointsQ5,
        totalPoints,
        answerResume,
    } from '../../stores/applications'
    import { currentProducts } from '../../stores/rackbeat'
    import SolutionChartRunning from './solution_chart_running.svelte'
    import { get } from 'svelte/store'
    import AnswerResumeTable from './answer_resume_table.svelte'
</script>

<div class="flex flex-col p-6 w-full">
    <div class="flex w-full h-1/3">
        <SolutionChartRunning
            scores={$totalPoints}
            chartOnly={true}
            fontSize={'text-xs'}
        />
    </div>
    <div class="flex h-2/3 w-full text-xs text-gray-500">
        <AnswerResumeTable />
    </div>
</div>
