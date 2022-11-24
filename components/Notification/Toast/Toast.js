export default {
  name: 'Toast',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    timeout: {
      type: Number,
      default: 2000
    }
  },
  data: () => ({
    tampilkan: false
  }),
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
