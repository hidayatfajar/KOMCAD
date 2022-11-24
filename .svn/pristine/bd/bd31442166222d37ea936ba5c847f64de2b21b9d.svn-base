import { mapGetters } from 'vuex'
import ImagesUploadField from '~/components/Field/ImagesUploadField/ImagesUploadField.vue'
export default {
  name: 'dokumen',
  components: {
    ImagesUploadField
  },
  head () {
    return {
      title: 'Dokumen'
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
    setIconLampiran (namaFile) {
      const ext = namaFile.split('.')

      switch (ext[1]) {
        case 'pdf':
          return 'mdi-file-pdf-box'
        case 'png':
          return 'mdi-file-png-box'
        default:
          return 'mdi-file-jpg-box'
      }
    },
    openPreview (item) {
      this.preview = true
      this.preview_name = item.name
      this.preview_url = this.url + '/' + item.value
      this.preview_type = this.getFileType(item.value)
    },
    getFileType (nama) {
      const ext = nama.split('.')
      return ext[1]
    }
  },
  data: () => ({
    url: process.env.URL_PATH,
    preview: false,
    preview_name: null,
    preview_type: null,
    preview_url: null,
    itemsDocument: [
      {
        id: 1,
        name: 'Daftar Riwayat Hidup v2',
        value: '08.pdf'
      },
      {
        id: 2,
        name: 'Surat Lamaran v2',
        value: '09.pdf'
      },
      {
        id: 3,
        name: 'Surat Persetujuan',
        value: '10.pdf'
      },
      {
        id: 4,
        name: 'Surat mengikuti Latsarmil v2',
        value: '11.pdf'
      }
    ]
  })
}
