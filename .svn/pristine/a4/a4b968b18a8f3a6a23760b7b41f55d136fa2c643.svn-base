<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn
            color="primary"
            rounded
            large
            elevation="0"
            class="text-capitalize ma-12 float-right"
            @click="$router.push({name: 'dashboard-public'})"
          >
            Kembali Ke Halaman Utama
          </v-btn>
        </v-col>
      </v-row>
      <div style="position: fixed; left: 0; right: 0; top: 50%; margin-top: -88px; ">
        <v-row>
          <v-col>
            <h1 class="text-h1 text-center">
              {{ error.statusCode }}
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h1 class="text-h5 text-center grey--text">
              {{ error.message }}
            </h1>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'no-layout',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Halaman Tidak Ditemukan.',
      otherError: 'Halaman Dalam Perbaikan.'
    }
  },
  head () {
    return {
      title: this.error.message
    }
  },
  computed: {
    url () {
      return this.error.statusCode === 404
        ? require('~/assets/images/background/404.jpg')
        : require('~/assets/images/background/500.jpg')
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
