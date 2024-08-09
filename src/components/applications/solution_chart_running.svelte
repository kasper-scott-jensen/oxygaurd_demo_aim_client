<script>
    import { onMount, onDestroy } from 'svelte'
    import { totalPoints } from '../../stores/applications'
    import ApexCharts from 'apexcharts'

    export let chartOnly = false
    export let fontSize = 'text-sm'

    let chart

    const options = {
        chart: {
            height: '100%',
            maxWidth: '100%',
            type: 'area',
            fontFamily: 'Helvetica, sans-serif',
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
            x: {
                show: false,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: '#00ADEE',
                gradientToColors: ['#00ADEE'],
            },
        },
        dataLabels: {
            enabled: true,
        },
        stroke: {
            width: 5,
        },
        grid: {
            show: false,
            strokeDashArray: 1,
            padding: {
                left: 30,
                right: 5,
                top: 0,
            },
        },
        series: [
            {
                name: 'AFI',
                data: $totalPoints, // Initial data
                color: '#00ADEE',
            },
        ],
        xaxis: {
            show: true,
            categories: ['SD 30/55', 'FD HighV', 'FD 310', 'FD 400', 'AirBox'],
            labels: {
                show: true,
                style: {
                    cssClass: `text-gray-900 ${fontSize}`,
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: true,
            },
        },
        yaxis: {
            show: false,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
    }

    const updateChart = (newScores) => {
        if (chart) {
            chart.updateSeries([
                {
                    name: 'AFI',
                    data: newScores,
                },
            ])
        }
    }

    const unsubscribe = totalPoints.subscribe(updateChart)

    onMount(() => {
        chart = new ApexCharts(document.getElementById('area-chart'), options)
        chart.render()
    })

    onDestroy(() => {
        chart.destroy()
        unsubscribe()
    })
</script>

<div class="w-full bg-white rounded-lg">
    {#if !chartOnly}
        <div class="flex justify-between">
            <div class="">
                <h5 class="leading-none text-3xl font-bold text-gray-900 pb-4">
                    Application Fit Index
                </h5>
                <p
                    class="max-w-screen-md text-base font-normal text-gray-500 pb-12"
                >
                    The score is based on your answers and the compatibility of
                    the solution to your application.
                </p>
            </div>
        </div>
    {/if}
    <div id="area-chart" class=""></div>
</div>
