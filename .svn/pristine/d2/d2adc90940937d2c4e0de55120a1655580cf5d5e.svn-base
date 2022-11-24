import { mapGetters } from 'vuex'
import th from '~/assets/images/thumbnail-vid.png'
export default {
  name: 'Index',
  components: {
    //
  },
  head () {
    return {
      title: 'Komponen Cadangan'
    }
  },
  watch: {
    // tabModel (val) {
    //   if (val === 'faq') {
    //     this.tabModelfaq = 'daftar'
    //   }
    // }
  },
  computed: {
    ...mapGetters({
      //
    })

  },
  created () {
    this.$store.dispatch('fetchAksesLocalStorage')
    this.$store.dispatch('fetchCookie')
  },
  methods: {
    //
  },
  data: () => ({
    url: th
  })
}
