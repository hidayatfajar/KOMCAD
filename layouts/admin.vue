<template>
  <v-app>
    <v-overlay :value="loading_app" color="#F8FCFF" opacity=".7">
      <div>
        <v-progress-circular
          indeterminate
          size="40"
          color="primary"
        />
      </div>
    </v-overlay>
    <TopbarAdmin />
    <v-main class="container-helpdesk pa-0" style="background-color: #f3f8fc; margin-top: -15px; z-index: 6">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import TopbarAdmin from '~/components/Main/TopbarAdmin/TopbarAdmin.vue'

export default {
  name: 'User',
  components: {
    TopbarAdmin
  },
  data: () => ({
    //
  }),
  head () {
    return {
      bodyAttrs: {
        id: 'layout-user'
      }
    }
  },
  computed: {
    ...mapGetters({
      loading_app: 'getLoadingApp',
      auth: 'getAuth'
    })
  },
  created () {
    this.$store.dispatch('fetchCookie')
    this.$store.dispatch('fetchAksesLocalStorage')
  }

}
</script>
