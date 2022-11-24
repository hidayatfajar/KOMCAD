export default function ({
  $axios,
  store,
  redirect
}) {
  $axios.onRequest((config) => {
    const auth = store.state.auth

    if (auth) {
      $axios.setHeader('ttoken', auth.ttoken)
    }

    config.https = (process.env.NODE_ENV === 'production')

    if (config.url) {
      if (config.url.search('data:image') + 1) {
        config.baseURL = ''
      } else {
        config.baseURL = process.env.BASE_URL
      }
    }
  })

  $axios.onError((error) => {
    if (!error.response) {
      error.response = {
        data: {
          code: 500,
          message: 'Server dalam perbaikan.',
          data: null,
          errors: null
        }
      }
      return Promise.reject(error)
    }

    if (error.message.toLowerCase().includes('network')) {
      store.commit('LOADING_STOP_ALL')
    } else {
      const code = parseInt(error.response && error.response.status)

      switch (code) {
        case 401:
          store.dispatch('logout')
          break
        case 502:
          error.response.data = {
            ...error.response.data,
            code: 502,
            message: 'Aplikasi sedang tidak terkoneksi ke server.',
            data: null,
            errors: null
          }
          break
        case 413:
          error.response.data = {
            ...error.response.data,
            code: 413,
            message: 'File gagal diunggah.',
            data: null,
            errors: null
          }
          break
        case 500:
          error.response.data = {
            ...error.response.data,
            code: 500,
            message: 'Server dalam perbaikan.',
            data: null,
            errors: null
          }
          break
      }

      return Promise.reject(error)
    }
  })
}
