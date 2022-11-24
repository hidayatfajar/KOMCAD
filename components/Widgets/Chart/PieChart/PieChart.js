export default {
  name: 'PieChart',
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
    color: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    stackCount: {
      type: Number,
      required: false,
      default: 1
    },
    slicedCenter: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted () {
    const { am4core, am4charts } = this.$am4core()
    const chart = am4core.create(this.$refs.chartdiv, am4charts.PieChart)
    if (chart.logo) {
      chart.logo.disabled = true
    }

    chart.paddingRight = 20

    chart.data = this.itemsData

    const series = chart.series.push(new am4charts.PieSeries())
    series.dataFields.value = this.value
    series.dataFields.category = this.category
    series.labels.template.disabled = true
    series.slices.template.propertyFields.fill = this.color

    if (this.slicedCenter) {
      series.slices.template.tooltipText = ''
    }

    this.chart = chart
  },
  beforeDestroy () {
    if (this.chart) {
      this.chart.dispose()
    }
  }
}
