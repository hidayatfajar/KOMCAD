/**
 * Field untuk memilih tanggal
 * @author Faizal Amiruddin <f.a.faizal.amiruddin@gmail.com>
 */
import FieldContainer from '@/components/Field/FieldContainer/FieldContainer.vue'
export default {
  name: 'DatePickerField',
  components: {
    FieldContainer
  },
  props: {
    value: String,
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
    min: {
      type: String,
      default: undefined
    },
    max: {
      type: String,
      default: undefined
    },
    md: {
      type: String | Number,
      default: 5
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
      }
    })
  },
  data () {
    return {
      display: false,
      error: false,
      dayOfWeekNames: [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu'
      ],
      dayOfWeekNamesNamesShort: ['Mg', 'Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sa'],
      monthNames: [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
      ],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Agu',
        'Sep',
        'Okt',
        'Nov',
        'Des'
      ]
    }
  },
  computed: {
    vMenu () {
      return {
        closeOnContentClick: false,
        transition: 'scale-transition',
        offsetY: true,
        nudgeLeft: 10,
        nudgeBottom: 5,
        maxWidth: 290,
        minWidth: 290
      }
    },
    vTextField () {
      return {
        value: this.value ? this.dateFormat(this.value) : null,
        dense: this.dense,
        height: this.height,
        placeholder: this.placeholder,
        outlined: true,
        readonly: true,
        clearable: !this.readonly,
        appendIcon: 'icon-date',
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
        min: this.min,
        max: this.max,
        type: this.type
      }
    },
    validationRules () {
      let rules = this.rules ? [...this.rules] : []

      if (this.required) {
        rules = [
          ...rules,
          v => !!v || (this.label ? this.label + ' harus diisi.' : 'Isian berikut harus diisi.')
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
    }
  },
  methods: {
    dateSelected ($event) {
      this.$emit('input', $event)
      this.display = false
    },
    dateFormat (value) {
      const splitDate = value.split('-')
      const d = new Date(splitDate[0], (splitDate[1] - 1), splitDate[2])
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      const localeDate = d.toLocaleDateString('id-ID', options)
      return localeDate
    },
    clear () {
      this.$emit('input', null)
    },
    input ($event) {
      if (!$event) {
        this.$emit('input', null)
      }
    },
    blur ($event) {
      if (this.$refs.textField) {
        this.error = this.$refs.textField.hasError
      }
      this.$emit('blur', $event)
    }
  }
}
