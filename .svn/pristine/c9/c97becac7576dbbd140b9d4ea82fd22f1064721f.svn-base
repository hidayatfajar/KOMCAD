import { mapGetters } from 'vuex'

export default {
  name: 'TopbarMenu',
  computed: {
    ...mapGetters({
      moduleInfo: 'getModule',
      auth: 'getAuth'
    }),
    cekModul () {
      if (this.moduleInfo.nama_module.split('|')[0] === 'Data Monitoring') {
        return this.moduleInfo.nama_module.split('|')[0] === 'Data Monitoring'
      }
    }
  },
  created () {
  },
  data: () => ({
    jumlahNotif: 0,
    notifOpen: false,
    drawer: false,
    group: 0
  }),
  methods: {
    openNotif () {
      this.menu = false
    },
    toDashboard () {
      this.$router.push({
        name: 'dashboard-admin'
      })
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  }
}
