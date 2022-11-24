import { mapActions, mapState } from 'vuex'
export default {
  name: 'SearcBarAutoComplete',
  props: {
    isNavbarUsed: {
      type: Boolean,
      required: false,
      default: false
    },
    isTopbar: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    pencarian: null,
    searchResult: false,
    notFound: false,
    loaderPencarian: false
  }),
  computed: {
    ...mapState({
      hasilPencarian: state => state.Publik.data,
      ribbount: state => state.Publik.ribbount
    })
  },
  methods: {
    // ...mapActions(['setResult']),
    ...mapActions('Publik', ['pencarianMetadata', 'setResult', 'setParams', 'setRibbount']),
    handleCari () {
      this.$router.push({
        name: 'pencarian'
      })
      // await this.cariMetadata(this.pencarian)
    },
    detailHandler (id) {
      this.$router.push({ name: 'publik_search', query: { metadataId: id } })
      this.setResult(true)
    },
    hideSearchResult () {
      if (this.searchResult) {
        this.searchResult = false
      }
      this.notFound = false
      this.setRibbount(false)
    },
    getCancelToken () {
      const cancelToken = this.$axios.CancelToken
      const cancelTokenSource = cancelToken.source()
      this.$store.dispatch('setCancelToken', cancelTokenSource)
      return cancelTokenSource.token
    },
    async cariMetadata (val) {
      this.loaderPencarian = true
      this.$store.dispatch('cancelRequest')
      const cancelToken = this.getCancelToken()
      const response = await this.pencarianMetadata({
        params: { name: val },
        cancelToken
      })
      if (response) {
        this.loaderPencarian = false
        if (response.length !== 0 && this.pencarian !== null && this.pencarian !== '') {
          this.searchResult = true
          this.notFound = false
          this.setResult(false)
          this.setRibbount(true)
        } else {
          this.searchResult = false
          this.notFound = true
          this.setResult(false)
          this.setParams(false)
          this.setRibbount(true)
        }
      } else {
        this.searchResult = false
      }
    }
  },
  watch: {
    async pencarian (val) {
      if (val.length >= 3) {
        await this.cariMetadata(val)
        if (val === null || val === '') {
          this.setParams(true)
        } else {
          this.setParams(false)
        }
      }
    }
  }
}
