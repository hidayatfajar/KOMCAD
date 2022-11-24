/**
 * Field untuk memilih rentang tanggal
 * @author Faizal Amiruddin <f.a.faizal.amiruddin@gmail.com>
 */
import FieldContainer from '@/components/Field/FieldContainer/FieldContainer.vue'
export default {
  name: 'DateRangePickerField',
  components: {
    FieldContainer
  },
  props: {
    value: Array,
    type: {
      type: String,
      default: 'date'
    },
    placeholder: String,
    height: String | Number,
    dense: {
      type: Boolean,
      default: true
    },
    label: String,
    errorMessages: Array,
    min: String,
    max: String,
    rules: Array,
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    md: {
      type: String | Number,
      default: 5
    },
    labelMd: {
      type: String | Number,
      default: 3
    }
  },
  mounted () {
    this.$watch(() => {
      return {
        hasInput: this.$refs.textField.hasInput,
        hasError: this.$refs.textField.hasError
      }
    }, (val) => {
      if (val.hasInput) {
        this.error = val.hasError
      } else {
        this.error = false
      }
    })
  },
  data () {
    return {
      display: false,
      error: false,
      date: [],
      picker_date: {
        start: null,
        end: null
      }
    }
  },
  computed: {
    minInputCalendar () {
      if (this.min === 'today') {
        return this.dateChangeFormat(new Date(), 'YYYY-MM-DD')
      } else {
        return this.min
      }
    },
    vMenu () {
      return {
        closeOnContentClick: false,
        transition: 'scale-transition',
        offsetY: true,
        nudgeLeft: 10,
        nudgeBottom: 5
      }
    },
    vTextField () {
      // .join(' - ')
      return {
        value: this.value && this.value.length ? this.dateFormat(this.value).join(' - ') : null,
        dense: this.dense,
        height: this.height,
        placeholder: this.placeholder,
        outlined: true,
        readonly: true,
        clearable: !this.readonly,
        appendIcon: 'icon-calendar',
        backgroundColor: this.disabled ? 'grey lighten-3' : 'white',
        hideDetails: 'auto',
        errorMessages: this.errorMessages,
        rules: this.validationRules,
        required: this.required,
        disabled: this.disabled
      }
    },
    vDatePicker () {
      return {
        locale: 'id',
        noTitle: true,
        type: this.type,
        range: true,
        color: 'primary'
      }
    },
    validationRules () {
      let rules = this.rules ? [...this.rules] : []

      if (this.required) {
        rules = [
          ...rules,
          v => (!!v || v === 0) || (this.label ? this.label + ' harus diisi.' : 'Isian berikut harus diisi.')
        ]
      }

      return rules
    },
    parsePattern () {
      switch (this.type) {
        case 'date':
          return 'YYYY-MM-DD'
        case 'month':
          return 'YYYY-MM'
      }
    },
    formatPattern () {
      switch (this.type) {
        case 'date':
          return 'DD MMM YYYY'
        case 'month':
          return 'MMM YYYY'
      }
    },
    getPickerDate () {
      if (!this.value || !this.value.length) {
        const nextMonth = new Date()
        nextMonth.setMonth(nextMonth.getMonth() + 1)
        return {
          start: this.dateChangeFormat(new Date(), 'YYYY-MM'),
          end: this.dateChangeFormat(nextMonth, 'YYYY-MM')
        }
      } else {
        const tanggalAkhir = new Date(this.value[0])
        tanggalAkhir.setMonth(tanggalAkhir.getMonth() + 1)

        return {
          start: this.value[0],
          end: this.dateChangeFormat(tanggalAkhir, 'YYYY-MM')
        }
      }
    },
    minOfMonth () {
      const startDate = new Date(this.picker_date.start)
      startDate.setMonth(startDate.getMonth() + 1)
      return this.dateChangeFormat(startDate, 'YYYY-MM')
    },
    maxOfMonth () {
      const startDate = new Date(this.picker_date.start)
      startDate.setMonth(startDate.getMonth() + 1)
      startDate.setDate(0)
      return this.dateChangeFormat(startDate, 'YYYY-MM-DD')
    }
  },
  methods: {
    prosesBtnPilih () {
      this.display = false
      this.$emit('pilih')
    },
    dateSelected () {
      this.$emit('input', this.date)
      const date = this.date
      if (date.length === 1) {
        this.$emit('input', this.date)
      } else {
        const start = new Date(this.date[0])
        const end = new Date(this.date[1])

        const reverse = []
        if (end < start) {
          reverse[0] = this.date[1]
          reverse[1] = this.date[0]
          this.$emit('input', reverse)
        } else {
          this.$emit('input', this.date)
        }
      }
    },
    blur ($event) {
      if (this.$refs.textField) {
        this.error = this.$refs.textField.hasError
      }
      this.$emit('blur', $event)
    },
    dateFormat (value) {
      const arrayReturn = []
      value.forEach((item) => {
        const splitDate = item.split('-')
        const d = new Date(splitDate[0], (splitDate[1] - 1), splitDate[2])
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        const localeDate = d.toLocaleDateString('id-ID', options)
        arrayReturn.push(localeDate)
      })

      return arrayReturn
    },
    dateChangeFormat (value, format) {
      const date = new Date(value)
      if (format === 'YYYY-MM-DD') {
        return date.getFullYear() + '-' + ('0' + date.getMonth()).slice(-2) + '-' + date.getDate()
      } else if (format === 'YYYY-MM') {
        return date.getFullYear() + '-' + ('0' + date.getMonth()).slice(-2)
      }
    },
    clear () {
      this.$emit('input', [])
      this.$emit('clear')
    },
    input ($event) {
      if (!$event) {
        this.$emit('input', [])
      }
    },
    updatePickerDate ($event, type) {
      let tanggalAwal = null
      let tanggalAkhir = null
      switch (type) {
        case 'start':
          tanggalAwal = new Date($event)
          tanggalAkhir = new Date($event)
          tanggalAkhir.setMonth(tanggalAkhir.getMonth() + 1)

          this.picker_date = {
            ...this.picker_date,
            start: $event,
            end: this.dateChangeFormat(tanggalAkhir, 'YYYY-MM')
          }
          break
        case 'end':
          tanggalAwal = new Date($event)
          tanggalAkhir = new Date($event)
          tanggalAwal.setMonth(tanggalAwal.getMonth() - 1)

          this.picker_date = {
            ...this.picker_date,
            start: this.dateChangeFormat(tanggalAwal, 'YYYY-MM'),
            end: $event
          }
          break
      }
    }
  },
  watch: {
    display (val) {
      if (val) {
        if (this.value) {
          this.date = this.value
        } else {
          this.date = []
        }

        this.picker_date = {
          ...this.getPickerDate
        }
      }
    }
  }
}
