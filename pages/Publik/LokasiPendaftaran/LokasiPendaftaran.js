import { mapGetters } from 'vuex'

export default {
  name: 'lokasi-pendaftaran-baru',
  components: {
    //
  },
  head () {
    return {
      title: 'Lokasi Pendaftaran'
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
    headers: [

      { text: 'No', value: 'no' },
      { text: 'Nama', value: 'nama' },
      { text: 'Lokasi', value: 'lokasi' }

    ],
    headersMobile: [

      { text: 'No', value: 'no', style: 'bold' },
      { text: 'Kodam', value: 'kodam' },
      { text: 'Markas', value: 'markas' },
      { text: 'Wilayah Pertahanan', value: 'wilayah' },
      { text: 'Alamat Markas', value: 'alamat' }

    ],
    itemsMobile: [
      {
        id: 1,
        kodam: 'Kodam Jaya/Jayakarta',
        markas: 'Jakarta',
        wilayah: 'DKI Jakarta, Bekasi, Depok, Tangerang',
        alamat: 'Jl. Mayjen Sutoyo No.05, Cililitan, Kramat Jati, RT.7/RW.7, Cawang, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13630'
      },
      {
        id: 2,
        kodam: 'Kodam III/Siliwangi',
        markas: 'Bandung',
        wilayah: 'Banten (kecuali Kota Tangerang, Kabupaten Tangerang, dan Kota Tangerang Selatan), Jawa Barat (kecuali Kota Depok, Kabupaten Bekasi, dan Kota Bekasi)',
        alamat: 'Jl. Aceh No. 69 Kota Bandung, Provinsi Jawa Barat.'
      },
      {
        id: 3,
        kodam: 'Kodam IV/Diponegoro',
        markas: 'Semarang',
        wilayah: 'Jawa Tengah,Daerah Istimewa Yogyakarta',
        alamat: 'Jl. Perintis Kemerdekaan Watugong, Banyumanik, Semarang, Jawa Tengah'
      },
      {
        id: 4,
        kodam: 'Kodam IV/Diponegoro',
        markas: 'Surabaya',
        wilayah: 'Jawa Timur,Pulau Madura',
        alamat: 'Jl. Raden Wijaya No.1, Sawunggaling, Kec. Wonokromo, Kota Surabaya, Jawa Timur 60242'
      }
    ],
    itemsDarat: [
      {
        id: 1,
        nama: 'Kodam II/SWJ',
        lokasi: 'Palembang'
      },
      {
        id: 2,
        nama: 'Kodam VI/MLW',
        lokasi: 'Balikpapan'
      },
      {
        id: 3,
        nama: 'Kodam XIV/HSN',
        lokasi: 'Makassar'
      }
    ],
    itemsLaut: [
      {
        id: 1,
        nama: 'Lanal Yogyakarta',
        lokasi: 'Yogyakarta'
      },
      {
        id: 2,
        nama: 'Lanal Tegal',
        lokasi: 'Tegal'
      },
      {
        id: 3,
        nama: 'Lanal Malang',
        lokasi: 'Malang'
      },
      {
        id: 4,
        nama: 'Lanal Banyuwangi',
        lokasi: 'Banyuwangi'
      },
      {
        id: 5,
        nama: 'Lanal Batuporon (madura)',
        lokasi: 'Madura'
      }
    ],
    itemsUdara: [
      {
        id: 1,
        nama: 'Lanud Halim Perdanakusuma',
        lokasi: 'Jakarta'
      },
      {
        id: 2,
        nama: 'Lanud Atang Sendjaja',
        lokasi: 'Bogor'
      },
      {
        id: 3,
        nama: 'Lanud Suryadama',
        lokasi: 'Subang'
      },
      {
        id: 4,
        nama: 'Lanud Sulaiman',
        lokasi: 'Bandung'
      },
      {
        id: 5,
        nama: 'Lanud Wiriadinata',
        lokasi: 'Tasik Malaya'
      },
      {
        id: 6,
        nama: 'Lanud Adisutjipto',
        lokasi: 'DI Yogyakarta'
      },
      {
        id: 7,
        nama: 'Lanud Adi Soemarmo',
        lokasi: 'Surakarta'
      },
      {
        id: 8,
        nama: 'Lanud Iswahjudi',
        lokasi: 'Magetan'
      },
      {
        id: 9,
        nama: 'Lanud Muljono',
        lokasi: 'Surabaya'
      },
      {
        id: 10,
        nama: 'Lanud ABD Saleh',
        lokasi: 'Malang'
      }
    ]
  })
}
