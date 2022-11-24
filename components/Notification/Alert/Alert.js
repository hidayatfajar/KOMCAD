export default {
  name: 'Alert',
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
