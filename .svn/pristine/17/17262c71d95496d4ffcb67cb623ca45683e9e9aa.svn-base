export default {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  SET_AUTH (state, payload) {
    if (payload !== null) {
      state.auth = {
        ...payload
      }
    } else {
      state.auth = null
    }
  },
  SET_CAPTCHA (state, payload) {
    if (payload !== null) {
      state.captcha = payload
    } else {
      state.captcha = null
    }
  },
  SET_TERIMA_NOTIFIKASI (state, payload) {
    state.auth.is_terima_notifikasi = payload
  },
  SET_WARNA_TEMA (state, payload) {
    state.kode_warna_hexa = payload
  },
  SET_TTOKEN (state, payload) {
    if (state.auth) {
      state.auth.ttoken = payload
    }
  },
  LOADING_START (state, payload) {
    const newLoading = {
      ...state.loading
    }
    newLoading[payload] = true
    state.loading = {
      ...newLoading
    }
  },
  LOADING_STOP (state, payload) {
    const newLoading = {
      ...state.loading
    }
    newLoading[payload] = false
    state.loading = {
      ...newLoading
    }
  },
  LOADING_STOP_ALL (state) {
    const newLoading = {
      ...state.loading
    }
    for (const key in newLoading) {
      newLoading[key] = false
    }
    state.loading = {
      ...newLoading
    }
  },
  SET_LOADING (state, payload) {
    state.loading_app = payload
  },
  SET_HAK_AKSES_MODUL (state, payload) {
    state.hak_akses_modul = payload
  },
  SET_HAK_AKSES_FITUR (state, payload) {
    state.hak_akses_fitur = payload
  },
  SET_CANCEL_TOKEN (state, payload) {
    state.cancelToken = payload
  },
  SET_NAMA_MODULE (state, payload) {
    state.module.nama_module = payload
  },
  SET_AKSES_SISTEM (state, payload) {
    state.akses_sistem = payload
  }
}
