export default {
  name: 'BarChartPerMonth',
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
      type: String,
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
    categoryAxis.renderer.grid.template.disabled = true
    categoryAxis.title.text = this.xTitle
    categoryAxis.tooltip.disabled = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.title.text = this.yTitle
    valueAxis.renderer.grid.template.disabled = true
    valueAxis.renderer.labels.template.disabled = true
    valueAxis.min = 0
    valueAxis.tooltip.disabled = true

    let tooltipValue =
      this.xTitle + ': {categoryX}\n' + this.yTitle + ': {valueY}'
    if (this.xTitle === '') {
      tooltipValue = '{categoryX} ({valueY})'
    }

    let arrayData = []
    const tempData = []
    if (this.stackCount > 0) {
      const split = this.yData.split(',')
      tempData.push(split)
    }
    arrayData = tempData[0]

    const series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = arrayData[0]
    series.dataFields.categoryX = this.xData
    series.name = 'Data'
    series.tooltipText = tooltipValue
    series.tooltip.pointerOrientation = 'vertical'
    series.tooltip.background.fillOpacity = 0.5
    series.strokeWidth = 2
    series.fill = '#fdb142'
    series.stroke = '#fdb142'

    if (this.stackCount > 1) {
      const series2 = chart.series.push(new am4charts.ColumnSeries())
      series2.dataFields.valueY = arrayData[1]
      series2.dataFields.categoryX = this.xData
      series2.name = 'Data'
      series2.tooltipText = tooltipValue
      series2.tooltip.pointerOrientation = 'vertical'
      series2.tooltip.background.fillOpacity = 0.5
      series2.strokeWidth = 2
      series2.fill = '#71cfc6'
      series2.stroke = '#71cfc6'
    }

    if (this.stackCount > 2) {
      const series3 = chart.series.push(new am4charts.ColumnSeries())
      series3.dataFields.valueY = arrayData[2]
      series3.dataFields.categoryX = this.xData
      series3.name = 'Data'
      series3.tooltipText = tooltipValue
      series3.tooltip.pointerOrientation = 'vertical'
      series3.tooltip.background.fillOpacity = 0.5
      series3.strokeWidth = 2
      series3.fill = '#71cfc6'
      series3.stroke = '#71cfc6'
    }

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
