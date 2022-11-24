import Vue from 'vue'
import Router from 'vue-router'
import Dokumen from '~/pages/Publik/Dokumen/Dokumen.vue'

import Index from '~/pages/Publik/Index/Index.vue'
import InfoPendaftaran from '~/pages/Publik/InfoPendaftaran/InfoPendaftaran.vue'
import LokasiPendaftaran from '~/pages/Publik/LokasiPendaftaran/LokasiPendaftaran.vue'
import Pendaftaran from '~/pages/Publik/Pendaftaran/Pendaftaran.vue'
import SebelumPendaftaran from '~/pages/Publik/SebelumPendaftaran/SebelumPendaftaran.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/video-pendaftaran-baru',
        name: 'video-pendaftaran-baru',
        component: Pendaftaran
      },
      {
        path: '/lokasi-pendaftaran-baru',
        name: 'lokasi-pendaftaran-baru',
        component: LokasiPendaftaran
      },
      {
        path: '/sebelum-pendaftaran',
        name: 'sebelum-pendaftaran',
        component: SebelumPendaftaran
      },
      {
        path: '/infodaftar',
        name: 'info-pendaftaran',
        component: InfoPendaftaran
      },
      {
        path: '/dokumen',
        name: 'dokumen',
        component: Dokumen
      }
    ],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
  })
}
