import { mapGetters } from 'vuex'

export default {
  name: 'info-pendaftaran',
  title: 'INFO',
  components: {
    //
  },
  head () {
    return {
      title: 'Info Daftar'
    }
  },
  watch: {
    //
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
    //
  })
}
