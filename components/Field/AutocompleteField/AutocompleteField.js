/**
 * Field dropdown autocomplete sehingga bisa di searching dengan mengetikkan beberapa huruf
 * Field ini cocok digunakan untuk pilihan yang banyak
 * @author Faizal Amiruddin <f.a.faizal.amiruddin@gmail.com>
 */
import FieldContainer from '@/components/Field/FieldContainer/FieldContainer.vue'
export default {
  name: 'AutocompleteField',
  props: {
    items: Array,
    itemText: String,
    itemValue: String,
    value: String | Object,
    placeholder: String,
    height: String | Number,
    dense: {
      type: Boolean,
      default: true
    },
    returnObject: {
      type: Boolean,
      default: false
    },
    smallChips: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
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
    md: {
      type: String | Number,
      default: 5
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    FieldContainer
  },
  mounted () {
    this.inputId = Math.random().toString(36).substring(7)
    this.$watch(() => {
      return {
        hasInput: document.getElementById(this.inputId) === null ? false : (document.getElementById(this.inputId).value.length > 0), // this.$refs.autocompleteField.hasInput,
        hasError: this.$refs.autocompleteField.error
      }
    }, (val) => {
      if (val.hasInput) {
        this.error = val.error
      }
    })
  },
  data () {
    return {
      inputId: '0',
      error: false,
      icon: undefined
    }
  },
  computed: {
    vAutocomplete () {
      return {
        items: this.items,
        itemText: this.itemText,
        itemValue: this.itemValue,
        value: this.value,
        dense: this.dense,
        height: this.height,
        placeholder: this.placeholder,
        prependInnerIcon: this.icon,
        outlined: true,
        backgroundColor: this.disabled ? 'grey lighten-3' : 'white',
        menuProps: {
          maxHeight: '200px'
        },
        noDataText: 'Data Kosong.',
        autocomplete: 'off',
        hideDetails: 'auto',
        errorMessages: this.errorMessages,
        rules: this.validationRules,
        required: this.required,
        disabled: this.disabled,
        readonly: this.readonly
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
    }
  },
  methods: {
    input ($event) {
      this.$emit('input', $event)
    },
    enter ($event) {
      this.$emit('enter', $event)
    },
    blur ($event) {
      this.icon = undefined
      if (this.$refs.autocompleteField) {
        this.error = this.$refs.autocompleteField.error
      }
      this.$emit('blur', $event)
    }
  }
}
