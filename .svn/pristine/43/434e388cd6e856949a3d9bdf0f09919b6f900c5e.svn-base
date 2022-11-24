import CryptoJS from 'crypto-js'
// import Cookie from 'js-cookie'

export default {
  setAuth ({ commit }, payload) {
    commit('SET_AUTH', payload)
  },
  setHakAkses ({ commit }, payload) {
    commit('SET_AKSES_SISTEM', payload)
  },
  fetchHakAkses ({ dispatch }) {
    const cookieku = this.$cookies.get('auth_helpdesk_pwni')
    let akses = {}
    if (cookieku) {
      akses = cookieku.hak_akses
    } else {
      akses = {}
    }
    // console.log(akses)
    dispatch('setHakAkses', akses)
  },
  fetchCookie ({ dispatch }) {
    const cookieku = this.$cookies.get('auth_helpdesk_pwni')
    let auth = null
    if (cookieku) {
      auth = cookieku
    } else {
      auth = null
    }
    dispatch('setAuth', auth)
  },
  async login ({ dispatch, commit }, payload) {
    try {
      const res = await this.$axios.$post('login/validasi', payload)

      if (res.code === 200) {
        const data = res.data
        localStorage.setItem('tema', data.kode_warna_hexa)
        commit('SET_WARNA_TEMA', data.kode_warna_hexa)
        // * MANAGE TTOKEN
        const ttoken = data.token
        // const hakAkses = data.hak_akses
        this.$axios.setHeader('ttoken', ttoken)
        this.$axios.setHeader('Access-Control-Allow-Origin', '*')
        const encryptToken = CryptoJS.AES.encrypt(ttoken, 'ttoken').toString()
        localStorage.setItem('ttoken', encryptToken)

        // * Manage Data To Cookie
        const dataLogin = data
        // dataLogin.hak_akses = hakAkses.split(',')
        delete dataLogin.ttoken
        this.$cookies.set('auth_helpdesk_pwni', JSON.stringify(dataLogin))

        // * Store Data To State
        dataLogin.ttoken = ttoken
        dispatch('setAuth', dataLogin)
        dispatch('setHakAkses', dataLogin.hak_akses)
        return {
          status: true,
          message: 'Berhasil Login',
          data
        }
      } else {
        return {
          status: false,
          message: res.message
        }
      }
    } catch (e) {
      dispatch('setAuth', null)
      if (e.message.toLowerCase().includes('network')) {
        return {
          status: false,
          message:
                        'Koneksi bermasalah, silakan cek koneksi internet.'
        }
      } else {
        const { errors, message } = e.response.data
        return {
          status: false,
          errors,
          message
        }
      }
    }
  },
  setLoading ({ commit, dispatch }, payload) {
    commit('SET_LOADING', payload)
  },
  fetchAksesLocalStorage ({ commit, dispatch }) {
    try {
      const warna = localStorage.getItem('tema')
      commit('SET_WARNA_TEMA', warna)
      const ttoken = CryptoJS.AES.decrypt(
        localStorage.getItem('ttoken'),
        'ttoken'
      ).toString(CryptoJS.enc.Utf8)
      commit('SET_TTOKEN', ttoken)
    } catch (error) {
      // dispatch('logout')
    }
  },
  setWarnaTema ({ commit }, payload) {
    localStorage.setItem('tema', payload)
    commit('SET_WARNA_TEMA', payload)
  },
  logout ({ dispatch }) {
    try {
      localStorage.clear()
      this.$cookies.remove('auth_helpdesk_pwni')
      window.location.replace('/')

      return {
        status: true,
        message: 'Berhasil logout'
      }
    } catch (e) {
      dispatch('setAuth', null)
      this.$cookies.remove('auth_helpdesk_pwni')

      if (e.message.toLowerCase().includes('network')) {
        return {
          status: false,
          message:
                        'Koneksi bermasalah, silakan cek koneksi internet.'
        }
      } else {
        const { errors, message } = e.response.data
        return {
          status: false,
          errors,
          message
        }
      }
    }
  },
  setCancelToken ({ commit, dispatch }, payload) {
    commit('SET_CANCEL_TOKEN', payload)
  },
  cancelRequest ({ state }) {
    if (state.cancelToken !== null) {
      if (typeof state.cancelToken.cancel === 'function') {
        state.cancelToken.cancel('Membatalkan Request')
      }
    }
  },
  setNamaModule ({ commit }, payload) {
    commit('SET_NAMA_MODULE', payload)
  },
  setBuatSurat ({ commit }, payload) {
    commit('SET_BUAT_SURAT', payload)
  },
  setTerimaNotifikasi ({ commit }, payload) {
    commit('SET_TERIMA_NOTIFIKASI', payload)
  },
  async kirimEmail ({ commit }, payload) {
    try {
      const req = await this.$axios.$post('lupa-password/kirim-email', payload)
      return {
        status: true,
        message: 'Data berhasil didapat',
        data: req.data
      }
    } catch (e) {
      if (e.message.toLowerCase().includes('network')) {
        return {
          status: false,
          message: 'Koneksi bermasalah, silakan cek koneksi internet.'
        }
      } else {
        const {
          errors,
          message
        } = e.response.data
        return {
          status: false,
          errors,
          message
        }
      }
    }
  },
  async simpanPassword ({ commit }, payload) {
    try {
      const req = await this.$axios.$post('lupa-password/simpan-password-baru', payload)
      return {
        status: true,
        message: 'Berhasil menyimpan data',
        data: req.data
      }
    } catch (e) {
      if (e.message.toLowerCase().includes('network')) {
        return {
          status: false,
          message: 'Koneksi bermasalah, silakan cek koneksi internet.'
        }
      } else {
        const {
          errors,
          message
        } = e.response.data
        return {
          status: false,
          errors,
          message
        }
      }
    }
  },
  async getCaptcha ({ commit }, payload) {
    try {
      const req = await this.$axios.$get('lupa-password/get-captcha')
      commit('SET_CAPTCHA', req.data)
      return {
        status: true,
        message: 'Data berhasil didapat',
        data: req.data
      }
    } catch (e) {
      if (e.message.toLowerCase().includes('network')) {
        return {
          status: false,
          message: 'Koneksi bermasalah, silakan cek koneksi internet.'
        }
      } else {
        const {
          errors,
          message
        } = e.response.data
        return {
          status: false,
          errors,
          message
        }
      }
    }
  }
}
