export default {
  name: 'GaugeChart',
  props: {
    height: {
      type: String,
      required: false,
      default: '50vh'
    },
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    value: {
      type: String,
      required: true
    }
  },
  mounted () {
    const { am4core, am4charts } = this.$am4core()
    const chart = am4core.create(this.$refs.chartdiv, am4charts.GaugeChart)
    if (chart.logo) {
      chart.logo.disabled = true
    }

    chart.paddingRight = 20
    chart.innerRadius = -20

    chart.data = this.itemsData

    const axis = chart.xAxes.push(new am4charts.ValueAxis())
    axis.min = 0
    axis.max = 100

    // const range = axis.axisRanges.create()
    // range.value = 0
    // range.endValue = 20
    // range.axisFill.fillOpacity = 1
    // range.axisFill.fill = am4core.color('#DE8F6E')
    // range.axisFill.zIndex = -1

    // const range2 = axis.axisRanges.create()
    // range2.value = 20
    // range2.endValue = 90
    // range2.axisFill.fillOpacity = 1
    // range2.axisFill.fill = am4core.color('#DBD56E')
    // range2.axisFill.zIndex = -1

    // const range3 = axis.axisRanges.create()
    // range3.value = 90
    // range3.endValue = 100
    // range3.axisFill.fillOpacity = 1
    // range3.axisFill.fill = am4core.color('#88AB75')
    // range3.axisFill.zIndex = -1

    const gradient = new am4core.LinearGradient()
    gradient.stops.push({ color: am4core.color('red') })
    gradient.stops.push({ color: am4core.color('yellow') })
    gradient.stops.push({ color: am4core.color('green') })

    axis.renderer.line.stroke = gradient
    axis.renderer.line.strokeWidth = 15
    axis.renderer.line.strokeLinecap = 'round'
    axis.renderer.line.strokeOpacity = 1

    axis.renderer.grid.template.disabled = true

    const hand = chart.hands.push(new am4charts.ClockHand())
    hand.value = this.value
    hand.innerRadius = am4core.percent(50)
    hand.radius = am4core.percent(80)
    hand.startWidth = 15

    this.chart = chart
  },
  beforeDestroy () {
    if (this.chart) {
      this.chart.dispose()
    }
  }
}
