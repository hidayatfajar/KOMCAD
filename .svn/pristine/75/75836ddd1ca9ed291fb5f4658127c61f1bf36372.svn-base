/**
 * Komponen untuk menampilkan gambar dengan handling gambar gagal di load
 * @author Faizal Amiruddin <f.a.faizal.amiruddin@gmail.com>
 */
export default {
  name: 'ImageView',
  props: {
    src: String,
    alt: String,
    contain: {
      type: Boolean,
      default: false
    },
    width: String | Number,
    height: String | Number,
    brokenImage: {
      type: String,
      default: '/images/icon/default1.png'
    }
  },
  data: () => ({
    error: false,
    loaded: false
  }),
  computed: {
    image () {
      return !this.loaded && (this.error || !this.src) ? this.brokenImage : this.src
    },
    vImg () {
      return {
        src: this.image,
        alt: this.alt,
        contain: this.contain,
        width: this.width,
        height: this.height
      }
    }
  },
  methods: {
    setError (error) {
      if (this.image !== this.brokenImage) {
        this.error = error
        if (!error) {
          this.loaded = true
        }
      }
    }
  }
}
