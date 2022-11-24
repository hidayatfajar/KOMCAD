import FileUpload from 'vue-upload-component/dist/vue-upload-component.part.js'
import 'vue-upload-component/dist/vue-upload-component.part.css'
import FieldContainer from '@/components/Field/FieldContainer/FieldContainer.vue'
/**
 * Field untuk upload satu file menggunakan vue-upload-component
 * @author Faizal Amiruddin <f.a.faizal.amiruddin@gmail.com>
 */

export default {
  name: 'SingleUploadField',
  components: {
    FileUpload,
    FieldContainer
  },
  props: {
    value: Object,
    placeholder: {
      type: String,
      default: 'Pilih file untuk diupload (pdf)'
    },
    type: {
      type: Array,
      default: () => (['pdf'])
    },
    height: String | Number,
    dense: {
      type: Boolean,
      default: true
    },
    label: String,
    color: {
      type: String,
      default: 'light-grey grey--text'
    },
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
    md: {
      type: String | Number,
      default: 5
    }
  },
  async created () {
    await this.loadInitialFile()
  },
  mounted () {
    this.inputId = Math.random().toString(36).substring(7)
    this.$watch(() => {
      return {
        hasInput: document.getElementById(this.inputId) === null ? false : (document.getElementById(this.inputId).value.length > 0), // this.$refs.textField.hasInput,
        hasError: this.$refs.textField.error
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
      flagLoadFile: true,
      error: false,
      file: this.value,
      name: null,
      fileTypeError: null
    }
  },
  computed: {
    fileName () {
      return this.file ? this.file.name : null
    },
    vTextField () {
      return {
        value: this.fileName,
        dense: this.dense,
        height: this.height,
        // placeholder: this.placeholder,
        outlined: true,
        backgroundColor: 'white',
        readonly: true,
        hideDetails: 'auto',
        errorMessages: this.errors,
        rules: this.validationRules,
        required: this.required,
        appendIcon: 'icon-search'
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
    errors () {
      let errors = this.errorMessages ? [...this.errorMessages] : []

      if (this.fileTypeError) {
        errors = [
          ...errors,
          this.fileTypeError
        ]
      }

      return errors
    }
  },
  methods: {
    input ($event) {
      if ($event) {
        const errorMessage = 'File harus bertipe ' + this.type.join(', ')
        switch ($event.type) {
          case 'application/pdf':
            if (!this.type.includes('pdf')) {
              this.fileTypeError = errorMessage
            } else {
              this.fileTypeError = null
            }
            break
          case 'image/png':
            if (!this.type.includes('png')) {
              this.fileTypeError = errorMessage
            } else {
              this.fileTypeError = null
            }
            break
          case 'image/jpeg':
            if (!this.type.includes('jpg') && !this.type.includes('jpeg')) {
              this.fileTypeError = errorMessage
            } else {
              this.fileTypeError = null
            }
            break
          case 'application/msword':
            if (!this.type.includes('doc')) {
              this.fileTypeError = errorMessage
            } else {
              this.fileTypeError = null
            }
            break
          case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            if (!this.type.includes('docx')) {
              this.fileTypeError = errorMessage
            } else {
              this.fileTypeError = null
            }
            break
          case 'application/vnd.ms-excel':
            if (!this.type.includes('xls')) {
              this.fileTypeError = errorMessage
            } else {
              this.fileTypeError = null
            }
            break
          case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            if (!this.type.includes('xlsx')) {
              this.fileTypeError = errorMessage
            } else {
              this.fileTypeError = null
            }
            break
          default:
            this.fileTypeError = errorMessage
        }

        if (!this.fileTypeError) {
          this.flagLoadFile = false
          this.file = $event
          this.file = {
            ...this.file,
            url: URL.createObjectURL(this.file.file)
          }
          this.$emit('input', this.file)
        }
      }
    },
    clear () {
      this.file = {
        file: null,
        name: null,
        url: null
      }
      this.fileTypeError = null
      this.$emit('input', this.file)
    },
    async loadInitialFile () {
      if (this.value && this.flagLoadFile && this.value.url && !this.value.file) {
        try {
          const blob = await fetch(this.value.url, {
            responseType: 'blob'
          })

          const splitUrl = this.value.url.split('/')
          this.file = {
            ...this.value,
            file: new File([blob], splitUrl[splitUrl.length - 1]),
            name: this.value.name ? this.value.name : splitUrl[splitUrl.length - 1]
          }
          this.flagLoadFile = true
        } catch (e) {
          const splitUrl = this.value.url.split('/')
          this.file = {
            ...this.value,
            file: null,
            name: this.value.name ? this.value.name : splitUrl[splitUrl.length - 1]
          }
          this.flagLoadFile = false
        }
        this.$emit('input', this.file)
      }
    },
    blur ($event) {
      if (this.$refs.textField) {
        this.error = this.$refs.textField.error
      }
      this.$emit('blur', $event)
    }
  },
  watch: {
    async value (val, old) {
      if (val.url) {
        if (!old || val.url !== old.url) {
          this.flagLoadFile = true
        }

        await this.loadInitialFile()
      } else {
        this.file = {
          file: null,
          name: null,
          url: null
        }
        this.flagLoadFile = false
      }
    }
  }
}
