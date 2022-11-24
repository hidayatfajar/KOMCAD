import { mapGetters } from 'vuex'

export default {
  name: 'TopbarAdmin',
  computed: {
    ...mapGetters({
      moduleInfo: 'getModule',
      auth: 'getAuth',
      tema: 'getWarnaTema'
    })
  },
  created () {
    this.$store.dispatch('fetchAksesLocalStorage')
  },
  data: () => ({
    loading: {
      sandi: false
    },
    jumlahNotif: 0,
    notifOpen: false,
    drawer: false,
    group: 0,
    formUbahSandi: {
      password_lama: null,
      password_baru: null,
      konfirmasi_password_baru: null
    },
    dialog: {
      show: false,
      type: null,
      title: null
    },
    alert: {
      text: '',
      title: '',
      timeout: 2000,
      show: false,
      id: null,
      type: ''
    }
  }),
  methods: {
    openNotif () {
      this.menu = false
    },
    toDashboard () {
      this.$router.push({
        name: 'admin-dashboard'
      })
    },
    async simpanUbahSandi () {
      this.loading.sandi = true

      if (this.$refs.formSandi.validate()) {
        if (this.auth.user_group_id === '01') {
          const { status, message } = await this.$store.dispatch('Admin/UserManagement/simpanUbahSandi', this.formUbahSandi)
          if (!status) {
            setTimeout(() => {
              this.alert.text = message
              this.alert.title = 'Gagal'
              this.alert.show = true
              this.alert.type = 'error'
            }, 100)
          } else {
            setTimeout(() => {
              this.alert.text = message
              this.alert.title = 'Berhasil'
              this.alert.show = true
              this.alert.type = 'success'
            }, 100)
            this.closeDialog()
          }
        } else {
          const { status, message } = await this.$store.dispatch('Operator/UserManagement/simpanUbahSandi', this.formUbahSandi)
          if (!status) {
            setTimeout(() => {
              this.alert.text = message
              this.alert.title = 'Gagal'
              this.alert.show = true
              this.alert.type = 'error'
            }, 100)
          } else {
            setTimeout(() => {
              this.alert.text = message
              this.alert.title = 'Berhasil'
              this.alert.show = true
              this.alert.type = 'success'
            }, 100)
            this.closeDialog()
          }
        }
      }
      this.loading.sandi = false
    },
    openDialogUbahSandi () {
      this.dialog = {
        show: true,
        type: 'sandi',
        title: 'Ubah Kata Sandi'
      }
    },
    closeAlert (val) {
      this.alert.show = val
    },
    closeDialog () {
      this.dialog = {
        show: false,
        type: null,
        title: null
      }
      this.formUbahSandi = {
        password_lama: null,
        password_baru: null,
        konfirmasi_password_baru: null
      }
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  }
}
