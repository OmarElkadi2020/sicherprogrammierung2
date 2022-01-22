<template>
 <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  <div class="container ">
    <!-- <button v-on:click="getlCases(CoronaHisDeg.data['09271'].history)">Get Corona Data</button> -->
    <div class="btn-group d-flex justify-content-around p-3 mx-5 mt-5">
      </div>
      <!-- Card body -->
      <div class="card-body ">
        <div class="chart">
          <vue3-chart-js
            :id="linechart.id"
            :type="linechart.type"
            ref="chartRef"
            :data="linechart.data"
            :options="linechart.options"
          />
        </div>
      </div>
    </div>
</template>

<script language="typescript">
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import zoomPlugin from 'chartjs-plugin-zoom'
import dataLabels from 'chartjs-plugin-datalabels'
import { onBeforeMount, ref } from 'vue'
import mqtt from 'mqtt'

// globally registered and available for all charts
Vue3ChartJs.registerGlobalPlugins([zoomPlugin])

export default {
  name: 'DynamicData',
  components: {
    Vue3ChartJs
  },
  setup () {
    const host = '80.140.95.185'
    const port = '9001'
    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
    const connectUrl = `mqtt://${host}:${port}`
    const client = mqtt.connect(connectUrl, {
      clientId,
      clean: true,
      connectTimeout: 4000,
      reconnectPeriod: 1000
    })
    const chartRef = ref(0) // ref(0)
    var samplePeriod = 0.300 // sample period of 300 ns depends on telemetry provider
    var time = 0 // at start of Program set time to null
    const linechart = {
      id: 'line',
      type: 'line',
      // locally registered and available for this chart
      plugins: [dataLabels],
      data: {
        labels: ['', '2', '3'],
        datasets: [
          {
            label: 'Telemetries',
            data: [0, 0, 1],
            borderColor: ['Blue'],
            backgroundColor: 'Blue',
            borderWidth: 2,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            backgroundColor: function (context) {
              return context.dataset.backgroundColor
            },
            borderRadius: 4,
            color: 'white',
            font: {
              weight: 'bold'
            },
            formatter: Math.round,
            padding: 6
          }
        },
        scales: {
          x: {
            display: true,
            titel: {
              display: true,
              text: 'Time in sec',
              color: '#911',
              font: {
                family: 'Comic Sans MS',
                size: 20,
                weight: 'bold',
                lineHeight: 1.2
              },
              padding: { top: 20, left: 0, right: 0, bottom: 0 }
            },
            min: 0,
            max: 500
          }
        }
      }
    }
    onBeforeMount(async () => {
      console.log('Starting connection to MQTTs Broker')
      const topic = 'test'
      client.on('connect', () => {
        console.log('Connected')
        client.subscribe([topic], () => {
          console.log(`Subscribe to topic '${topic}'`)
        })
      })
      client.on('message', (topic, payload) => {
        console.log(payload)
        var read = Number(payload)
        console.log(read)
        linechart.data.datasets[0].data.push(read)
        linechart.data.labels.push(Math.fround(time).toFixed(2))
        time += samplePeriod
        if (time > 7) {
          linechart.options.scales.x.min++
        }
        chartRef.value.update()
      })
    })
    return {
      linechart,
      chartRef
    }
  }
}
</script>
