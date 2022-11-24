export default {
  name: 'Confirmation',
  props: {
    show: {
      type: Boolean,
      default: false
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
