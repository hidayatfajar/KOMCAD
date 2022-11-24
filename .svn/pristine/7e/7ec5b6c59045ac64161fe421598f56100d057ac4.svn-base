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
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Default',
  components: {
    //
  },
  data: () => ({
    //
  }),
  head () {
    return {
      bodyAttrs: {
        id: 'layout-default'
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
