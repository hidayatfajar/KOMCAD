export default {
  name: 'CustomAlert',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      default: 'success'
    },
    text: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.tampilkan = this.show
  },
  data: () => ({
    tampilkan: false
  }),
  methods: {
    konfirmasiBtn () {
      this.$emit('confirm')
    }
  },
  watch: {
    tampilkan (val) {
      if (!val) {
        this.$emit('close', val)
      }
    },
    show (val) {
      this.tampilkan = val
    }
  }
}
