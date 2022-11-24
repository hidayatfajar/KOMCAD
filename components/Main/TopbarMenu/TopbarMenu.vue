<template>
  <div>
    <v-app-bar flat app :src="require('~/assets/images/background/a01.png')">
      <div class="d-flex align-center" style="cursor: pointer;" @click="toDashboard">
        <div class="ml-2">
          <div class="body-1 font-weight-medium main-text-color topbar-title">
            <v-img :src="require('~/assets/images/logo/00c.png')" width="150" contain />
          </div>
        </div>
      </div>
      <v-spacer />
      <div class="d-flex align-center flex-wrap">
        <div class="mr-4 font-weight-medium orange--text text-modul">
          <i>{{ moduleInfo.nama_module }}</i>
        </div>
        <v-menu offset-y>
          <template #[`activator`]="{attrs, on}">
            <v-avatar v-bind="attrs" size="35" v-on="on">
              <v-img src="/default1.png" />
            </v-avatar>
          </template>
          <v-list dense class="pa-0">
            <!-- <v-list-item @click="$store.dispatch('logout')"> -->
            <v-list-item>
              <v-list-item-title v-if="auth">
                <span class="caption">Anda login sebagai : {{ auth.nama }}</span>
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="$store.dispatch('logout')">
              <v-list-item-title>
                Logout
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script src="./TopbarMenu.js"></script>

<style scoped>
@media screen and (max-width: 414px) { /*Galaxy S5*/
  .topbar-title {
    font-size: 13px !important;
  }

  .topbar-subtitle {
    font-size: 10px !important;
  }
}

@media screen and (max-width: 320px) { /*Iphone 5*/
  .topbar-title {
    font-size: 11px !important;
  }

  .topbar-subtitle {
    font-size: 8px !important;
  }
}
</style>
