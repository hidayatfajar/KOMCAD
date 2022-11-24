import { mapGetters } from 'vuex'

export default {
  name: 'FooterPublik',
  computed: {
    ...mapGetters({
      getDataKontak: 'Public/Kontak/getDataKontak'
    })
  },
  async created () {
    await this.LOAD_KONTAK()
  },
  methods: {
    LOAD_KONTAK () {
      this.$store.dispatch('Public/Kontak/LOAD_DATA_KONTAK')
    }
  }
}
