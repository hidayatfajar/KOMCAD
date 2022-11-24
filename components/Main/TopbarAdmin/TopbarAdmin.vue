<template>
  <v-app-bar
    flat
    :color="tema"
    class="app-bar-admin"
    height="100"
    style="margin-top: -10px"
  >
    <custom-alert
      :text="alert.text"
      :title="alert.title"
      :timeout="alert.timeout"
      :show="alert.show"
      :type="alert.type"
      @close="closeAlert"
    />
    <div class="d-flex align-center" style="cursor: pointer;" @click="toDashboard">
      <div class="ml-2">
        <div class="body-1 font-weight-medium main-text-color topbar-title">
          <v-img :src="require('~/assets/images/background/a01b_Header.png')" height="100" contain>
            <div>
              <v-img :src="require('~/assets/images/logo/00Logo1.png')" width="120" class="mt-10" />
            </div>
          </v-img>
        </div>
      </div>
    </div>
    <v-spacer />
    <div class="d-flex align-center flex-wrap">
      <div class="mr-4 font-weight-medium white--text text-modul">
        <i>{{
          moduleInfo.nama_module === "Dashboard" ? "" : moduleInfo.nama_module
        }}</i>
      </div>
      <v-menu offset-y>
        <template #[`activator`]="{ attrs, on }">
          <v-avatar v-bind="attrs" size="35" v-on="on">
            <v-img src="/default1.png" />
          </v-avatar>
        </template>
        <v-list dense class="pa-0">
          <v-list-item>
            <v-list-item-title v-if="auth">
              <span class="caption">Anda login sebagai : {{ auth.nama }}</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="openDialogUbahSandi()">
            <v-list-item-title>Ubah Kata Sandi </v-list-item-title>
          </v-list-item>
          <v-list-item @click="$store.dispatch('logout')">
            <v-list-item-title> Logout </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-dialog v-model="dialog.show" width="500" scrollable persistent>
      <v-card flat>
        <v-card-title class="grey--text mb-3 d-flex justify-space-between">
          <span>{{ dialog.title }}</span>
          <v-btn icon depressed @click="closeDialog">
            <v-icon>
              icon-close
            </v-icon>
          </v-btn>
        </v-card-title>
        <div class="px-5 pb-5">
          <v-form ref="formSandi">
            <v-row class="mt-n6">
              <v-col cols="12">
                <div>
                  <v-subheader> Password Lama </v-subheader>
                  <v-card color="transparent" flat width="100%">
                    <v-text-field
                      v-model="formUbahSandi.password_lama"
                      type="password"
                      required
                      outlined
                      dense
                      class="rounded-0"
                      hide-details="true"
                    />
                  </v-card>
                </div>
              </v-col>
            </v-row>
            <v-row class="mt-n6">
              <v-col cols="12">
                <div>
                  <v-subheader> Password Baru </v-subheader>
                  <v-card color="transparent" flat width="100%">
                    <v-text-field
                      v-model="formUbahSandi.password_baru"
                      type="password"
                      required
                      outlined
                      dense
                      class="rounded-0"
                      hide-details="true"
                    />
                  </v-card>
                </div>
              </v-col>
            </v-row>
            <v-row class="mt-n6">
              <v-col cols="12">
                <div>
                  <v-subheader> Konfirmasi Password Baru </v-subheader>
                  <v-card color="transparent" flat width="100%">
                    <v-text-field
                      v-model="formUbahSandi.konfirmasi_password_baru"
                      type="password"
                      required
                      outlined
                      dense
                      class="rounded-0"
                      hide-details="true"
                    />
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-form>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-center">
              <v-btn
                text
                depressed
                color="grey"
                class="mr-2 text-capitalize"
                width="150"
                @click="closeDialog"
              >
                Batal
              </v-btn>
              <v-btn
                depressed
                :color="tema"
                :loading="loading.sandi"
                class="white--text text-capitalize"
                width="150"
                @click="simpanUbahSandi"
              >
                Simpan
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script src="./TopbarAdmin.js"></script>

<style scoped>
@media screen and (max-width: 414px) {
  /*Galaxy S5*/
  .topbar-title {
    font-size: 13px !important;
  }

  .topbar-subtitle {
    font-size: 10px !important;
  }
}

@media screen and (max-width: 320px) {
  /*Iphone 5*/
  .topbar-title {
    font-size: 11px !important;
  }

  .topbar-subtitle {
    font-size: 8px !important;
  }
}

.arrow-up {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid white;
  position: absolute;
  right: 50px;
  z-index: 37;
}
</style>
