export default {
  name: 'DataTable',
  props: {
    loading: {
      required: false,
      type: Boolean
    },
    tableTitle: {
      required: true,
      type: String
    },
    tableItem: {
      required: true,
      type: Array
    },
    tableTotalItem: {
      required: false,
      type: Number
    },
    tableHeaders: {
      required: true,
      type: Array
    },
    height: {
      required: false,
      type: Number,
      default: 300
    },
    pagination: {
      required: false,
      type: Boolean,
      default: false
    },
    // kustomisasi
    tableAction: {
      type: Boolean,
      required: false,
      default: false
    },
    editAction: {
      type: Boolean,
      required: false,
      default: false
    },
    editType: {
      type: Object,
      required: false,
      default: () => ({ type: 'event' })
    },
    deleteAction: {
      type: Boolean,
      required: false,
      default: false
    },
    detailAction: {
      type: Boolean,
      required: false,
      default: false
    },
    detailType: {
      type: Object,
      required: false,
      default: () => ({ type: 'event' })
    },
    search: {
      type: String,
      required: false,
      default: ''
    },
    formatNumber: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: () => ({
    statusSwitch: true,
    tableOptions: {
      page: 1,
      itemsPerPage: 10
    }
  }),
  watch: {
    tableOptions: {
      deep: true,
      handler (val) {
        this.$emit('changeTableOptions', val)
      }
    }
  },
  computed: {
    arrHeaders () {
      return this.tableHeaders.map(item => item.value)
    },
    tableItemData () {
      return this.tableItem.map((item, index) => {
        item.no =
          (this.tableOptions.page - 1) * this.tableOptions.itemsPerPage +
          index +
          1
        return item
      })
    }
  },
  methods: {
    editActionClicked (item) {
      this.$emit('editActionEvent', item)
    },
    deleteActionClicked (item) {
      this.$emit('deleteActionEvent', item)
    },
    detailActionClicked (item) {
      this.$emit('detailActionEvent', item)
    },
    statusActionClicked (item, state) {
      this.$emit('statusActionEvent', { ...item, state })
    },
    statusLockActionClicked (item, state) {
      this.$emit('statusLockActionEvent', { ...item, state })
    },
    resetPaswordClicked (item) {
      this.$emit('resetPaswordActionEvent', item)
    },
    settingActionClicked (item) {
      this.$emit('settingActionEvent', item)
    },
    dateFormatted (data) {
      if (data !== null) {
        const mydate = new Date(data)
        let date = mydate.getDate().toString()
        let month = (mydate.getMonth() + 1).toString()
        const year = mydate.getFullYear().toString()
        const time = data.substring(10, data.length)

        if (date.length === 1) {
          date = '0' + date
        }

        if (month.length === 1) {
          month = '0' + month
        }

        return date + '/' + month + '/' + year + ' ' + time
      } else {
        return null
      }
    }
  }
}
