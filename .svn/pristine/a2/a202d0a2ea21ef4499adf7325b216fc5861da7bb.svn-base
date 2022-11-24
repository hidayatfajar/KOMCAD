export default {
  name: 'LineChart',
  props: {
    itemsData: {
      type: Object,
      required: true
    },
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
    yData: {
      type: Array,
      required: true
    },
    xData: {
      type: String,
      required: true
    },
    yTitle: {
      type: String,
      required: false,
      default: ''
    },
    xTitle: {
      type: String,
      required: false,
      default: ''
    },
    stackCount: {
      type: Number,
      required: false,
      default: 1
    },
    withScroll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted () {
    const { am4core, am4charts } = this.$am4core()
    const chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
    if (chart.logo) {
      chart.logo.disabled = true
    }

    chart.paddingRight = 20

    chart.data = this.itemsData

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = this.xData
    categoryAxis.title.text = this.xTitle
    categoryAxis.renderer.grid.template.strokeOpacity = 0
    categoryAxis.tooltip.disabled = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.title.disabled = true
    valueAxis.renderer.labels.template.disabled = true
    valueAxis.renderer.grid.template.strokeOpacity = 0
    valueAxis.tooltip.disabled = true

    let tooltipValue =
      // this.xTitle + ': {categoryX}\n' + this.yTitle + ': {valueY}'
      '{name}\n' + this.yTitle + ': {valueY}'
    if (this.xTitle === '') {
      tooltipValue = '{categoryX} ({valueY})'
    }

    this.yData.forEach((item) => {
      const color = '#' + Math.floor(Math.random() * 16777215).toString(16)
      const series = chart.series.push(new am4charts.LineSeries())
      series.dataFields.valueY = item
      series.dataFields.categoryX = this.xData
      series.name = item
      series.tooltipText = tooltipValue
      series.tooltip.pointerOrientation = 'vertical'
      series.tooltip.background.fillOpacity = 0.5
      series.strokeWidth = 2
      series.fill = color
      series.stroke = color

      const bullet = series.bullets.push(new am4charts.CircleBullet())
      bullet.circle.fill = am4core.color(color)
      bullet.circle.stroke = am4core.color(color)
      bullet.circle.strokeWidth = 2
    })

    chart.cursor = new am4charts.XYCursor()

    if (this.withScroll) {
      chart.scrollbarX = new am4core.Scrollbar()
      chart.scrollbarX.showSystemTooltip = false
      chart.scrollbarX.thumb.showSystemTooltip = false
      chart.scrollbarX.startGrip.showSystemTooltip = false
      chart.scrollbarX.endGrip.showSystemTooltip = false
      chart.scrollbarX.marginBottom = 20
    }

    this.chart = chart
  },
  beforeDestroy () {
    if (this.chart) {
      this.chart.dispose()
    }
  }
}
