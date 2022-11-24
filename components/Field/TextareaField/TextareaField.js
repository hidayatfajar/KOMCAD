import FieldContainer from '@/components/Field/FieldContainer/FieldContainer.vue'

export default {
  name: 'TextareaField',
  components: {
    FieldContainer
  },
  props: {
    value: String,
    label: String,
    placeholder: String,
    height: String | Number,
    dense: {
      type: Boolean,
      default: true
    },
    mounted () {
      this.inputId = Math.random().toString(36).substring(7)
      this.$watch(() => {
        return {
          hasInput: this.$refs.textareaField.hasInput,
          hasError: this.$refs.textareaField.error
        }
      }, (val) => {
        if (val.hasInput) {
          this.error = val.hasError
        }
      })
    },
    data () {
      return {
        inputId: '0',
        error: false
      }
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    md: {
      type: String | Number,
      default: 5
    },
    rows: {
      type: String | Number,
      default: 5
    }
  },
  data () {
    return {
      error: false
    }
  },
  computed: {
    vTextarea () {
      return {
        value: this.value,
        dense: this.dense,
        height: this.height,
        placeholder: this.placeholder,
        outlined: true,
        backgroundColor: this.disabled ? 'grey lighten-3' : 'white',
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
    blur ($event) {
      if (this.$refs.textareaField) {
        this.error = this.$refs.textareaField.error
      }
      this.$emit('blur', $event)
    }
  }
}
