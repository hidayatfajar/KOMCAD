import FileUpload from 'vue-upload-component/dist/vue-upload-component.part.js'
import 'vue-upload-component/dist/vue-upload-component.part.css'
import FieldContainer from '@/components/Field/FieldContainer/FieldContainer.vue'

export default {
  name: 'MediaUploadField',
  components: {
    FileUpload,
    FieldContainer
  },
  async created () {
    await this.loadInitialFile()
  },
  props: {
    value: Object,
    label: String,
    textInside: String,
    placeholder: {
      type: String,
      default: 'Pilih file untuk diupload (jpg, jpeg, png)'
    },
    type: {
      type: Array,
      default: () => (['jpg', 'jpeg', 'png'])
    },
    tile: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: 'mdi-plus'
    },
    errorMessages: Array,
    rules: Array,
    required: {
      type: Boolean,
      default: false
    },
    maxSize: {
      // max size di buat dalam satuan kb
      type: Number,
      default: 0
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showMediaPreview: {
      type: Boolean,
      default: false
    },
    md: {
      type: String | Number,
      default: 9
    }
  },
  data () {
    return {
      flagLoadFile: true,
      error: false,
      file: this.value,
      selected: false,
      loaded: false,
      preview: false,
      fileTypeError: null
    }
  },
  computed: {
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
          case 'video/mp4':
            if (!this.type.includes('mp4')) {
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
            if (!this.type.includes('jpg') || !this.type.includes('jpeg')) {
              this.fileTypeError = errorMessage
            } else {
              this.fileTypeError = null
            }
            break
          default:
            this.fileTypeError = errorMessage
        }

        // max size validasi
        if (parseInt(this.maxSize) > 0) {
          const size = $event.size / 1024
          if (Math.round(size) > Math.round(this.maxSize)) {
            this.fileTypeError = `Foto yang di unggah melebihi batas maksimal yaitu ${Math.round(parseInt(this.maxSize))} KB`
            setTimeout(function () {
              this.fileTypeError = null
            }.bind(this), 3000)
          } else {
            this.fileTypeError = null
          }
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
      this.selected = this.loaded = false
      this.$emit('input', this.file)
    },
    async loadInitialFile () {
      if (this.value && this.flagLoadFile && this.value.url && this.value.url.includes('http') && !this.value.file) {
        try {
          const blob = await this.$axios.$get(this.value.url, {
            responseType: 'blob'
          })

          const splitUrl = this.value.url.split('/')
          this.file = {
            ...this.value,
            file: new File([blob], splitUrl[splitUrl.length - 1]),
            name: splitUrl[splitUrl.length - 1]
          }
          this.flagLoadFile = true
        } catch (e) {
          this.file = {
            ...this.value,
            file: null,
            name: null,
            url: '/images/icon/broken-files.png'
          }
          this.flagLoadFile = false
        }
        this.$emit('input', this.file)
      }
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
