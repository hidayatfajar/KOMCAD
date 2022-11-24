<template>
  <div>
    <video autoplay loop muted src="~/assets/bg-video-potrait1.webm" />
    <v-card v-if="$vuetify.breakpoint.lgOnly" class="content" flat color="transparent">
      <div class="align-center text-center mx-auto">
        <v-img
          max-width="250"
          max-height="250"
          class="mb-10 mx-auto cursor-pointer"
          :src="require(`~/assets/images/logo/logo-ropeg.png`)"
          @click="$router.push('/')"
        />
        <div
          class="white--text font-weight-bold text-h3 mx-auto"
          style="max-width: 100%; width: 75%"
        >
          JADWAL SELEKSI DAN LOKASI PANDA PEMBENTUKAN KOMPONEN CADANGAN TA.
          2022
        </div>
      </div>
      <v-card
        flat
        color="white"
        class="mt-10 align-center justify-center mx-auto pa-5"
        style="width: 100%"
      >
        <v-container
          class="align-center justify-center mx-auto"
          style="width: 80%"
        >
          <div class="font-weight-bold text-h5">
            Jadwal Seleksi
          </div>
          <div class="mt-5 mb-3">
            Calon Pembentukan Komponen Cadangan TA. 2022 mendatangi lokasi
            Panda untuk Menyerahkan Administrasi secara fisik pada tanggal :
          </div>
          <div>&#x2022; 9 - 11 Mei 2022 Seleksi Administratif</div>
          <div>&#x2022; 12 - 27 Mei 2022 Seleksi Kompetensi (Satdik)</div>
          <div class="font-weight-bold text-h5 mt-5 mb-10">
            Lokasi Panda :
          </div>
          <v-card flat style="height: 465px; width: 100%; overflow: auto">
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN DARAT
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsDarat"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN LAUT
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsLaut"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN UDARA
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsUdara"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
          </v-card>
          <div
            class="text-center mt-15 mb-10"
            style="width: 100%;"
          >
            <v-btn
              large
              color="orange"
              class="white--text text-capitalize font-weight-regular"
              depressed
              @click="$router.push({ name: 'video-pendaftaran-baru' })"
            >
              Video Cara Mendaftar Komcad
            </v-btn>
            <v-btn
              large
              color="orange"
              class="white--text text-capitalize font-weight-regular ml-3"
              depressed
            >
              <a
                style="text-decoration: none; color: white"
                href="https://komcad.kemhan.go.id/komcad/login"
              >
                Cek Status Pendaftaran
              </a>
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-card>
    <v-card v-if="$vuetify.breakpoint.mdOnly" class="content" flat color="transparent">
      <div class="align-center text-center mx-auto">
        <v-img
          max-width="250"
          max-height="250"
          class="mb-10 mx-auto cursor-pointer"
          :src="require(`~/assets/images/logo/logo-ropeg.png`)"
          @click="$router.push('/')"
        />
        <div
          class="white--text font-weight-bold text-h3 mx-auto"
          style="max-width: 100%; width: 75%"
        >
          JADWAL SELEKSI DAN LOKASI PANDA PEMBENTUKAN KOMPONEN CADANGAN TA.
          2022
        </div>
      </div>
      <v-card
        flat
        color="white"
        class="mt-10 align-center justify-center mx-auto pa-5"
        style="width: 100%"
      >
        <v-container
          class="align-center justify-center mx-auto"
          style="width: 80%"
        >
          <div class="font-weight-bold text-h5">
            Jadwal Seleksi
          </div>
          <div class="mt-5 mb-3">
            Calon Pembentukan Komponen Cadangan TA. 2022 mendatangi lokasi
            Panda untuk Menyerahkan Administrasi secara fisik pada tanggal :
          </div>
          <div>&#x2022; 9 - 11 Mei 2022 Seleksi Administratif</div>
          <div>&#x2022; 12 - 27 Mei 2022 Seleksi Kompetensi (Satdik)</div>
          <div class="font-weight-bold text-h5 mt-5 mb-10">
            Lokasi Panda :
          </div>
          <v-card flat style="height: 465px; width: 100%; overflow: auto">
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN DARAT
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsDarat"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN LAUT
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsLaut"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN UDARA
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsUdara"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
          </v-card>
          <div
            class="text-center mt-15 mb-10"
            style="width: 100%;"
          >
            <v-btn
              large
              color="orange"
              class="white--text text-capitalize font-weight-regular"
              depressed
              @click="$router.push({ name: 'video-pendaftaran-baru' })"
            >
              Video Cara Mendaftar Komcad
            </v-btn>
            <v-btn
              large
              color="orange"
              class="white--text text-capitalize font-weight-regular ml-3"
              depressed
            >
              <a
                style="text-decoration: none; color: white"
                href="https://komcad.kemhan.go.id/komcad/login"
              >
                Cek Status Pendaftaran
              </a>
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-card>
    <v-card v-if="$vuetify.breakpoint.smOnly" class="content" flat color="transparent">
      <div class="align-center text-center mx-auto">
        <v-img
          max-width="250"
          max-height="250"
          class="mb-10 mx-auto cursor-pointer"
          :src="require(`~/assets/images/logo/logo-ropeg.png`)"
          @click="$router.push('/')"
        />
        <div
          class="white--text font-weight-bold text-h5 mt-10 mx-auto"
          style="max-width: 100%; width: 75%"
        >
          JADWAL SELEKSI DAN LOKASI PANDA PEMBENTUKAN KOMPONEN CADANGAN TA.
          2022
        </div>
      </div>
      <v-card
        flat
        color="white"
        class="mt-10 align-center justify-center mx-auto pa-5"
        style="width: 100%"
      >
        <v-container
          class="align-center justify-center mx-auto"
          style="width: 80%"
        >
          <div class="font-weight-bold text-h5">
            Jadwal Seleksi
          </div>
          <div class="mt-5 mb-3">
            Calon Pembentukan Komponen Cadangan TA. 2022 mendatangi lokasi
            Panda untuk Menyerahkan Administrasi secara fisik pada tanggal :
          </div>
          <div>&#x2022; 9 - 11 Mei 2022 Seleksi Administratif</div>
          <div>&#x2022; 12 - 27 Mei 2022 Seleksi Kompetensi (Satdik)</div>
          <div class="font-weight-bold text-h5 mt-5 mb-10">
            Lokasi Panda :
          </div>
          <v-card flat style="height: 465px; width: 100%; overflow: auto">
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN DARAT
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsDarat"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN LAUT
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsLaut"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN UDARA
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsUdara"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
          </v-card>
          <div
            class="text-center mt-15 mb-10"
            style="width: 100%;"
          >
            <v-btn
              large
              color="orange"
              class="white--text text-capitalize font-weight-regular"
              depressed
              @click="$router.push({ name: 'video-pendaftaran-baru' })"
            >
              Video Cara Mendaftar Komcad
            </v-btn>
            <v-btn
              large
              color="orange"
              class="white--text text-capitalize font-weight-regular ml-3"
              depressed
            >
              <a
                style="text-decoration: none; color: white"
                href="https://komcad.kemhan.go.id/komcad/login"
              >
                Cek Status Pendaftaran
              </a>
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-card>
    <v-card v-if="$vuetify.breakpoint.xsOnly" class="content mt-16" flat color="transparent">
      <div class="align-center text-center mx-auto mt-16">
        <v-img
          max-width="200"
          max-height="200"
          class="mb-10 mx-auto cursor-pointer"
          :src="require(`~/assets/images/logo/logo-ropeg.png`)"
          @click="$router.push('/')"
        />
        <div
          class="white--text font-weight-bold text-h6 mt-10 mx-auto"
          style="max-width: 100%; width: 75%"
        >
          JADWAL SELEKSI DAN LOKASI PANDA PEMBENTUKAN KOMPONEN CADANGAN TA.
          2022
        </div>
      </div>
      <v-card
        flat
        color="white"
        class="mt-10 align-center justify-center mx-auto pa-5"
        style="width: 100%"
      >
        <v-container
          class="align-center justify-center mx-auto"
          style="width: 100%"
        >
          <div class="font-weight-bold text-h5">
            Jadwal Seleksi
          </div>
          <div class="mt-5 mb-3">
            Calon Pembentukan Komponen Cadangan TA. 2022 mendatangi lokasi
            Panda untuk Menyerahkan Administrasi secara fisik pada tanggal :
          </div>
          <div>&#x2022; 9 - 11 Mei 2022 Seleksi Administratif</div>
          <div>&#x2022; 12 - 27 Mei 2022 Seleksi Kompetensi (Satdik)</div>
          <div class="font-weight-bold text-h5 mt-5 mb-10">
            Lokasi Panda :
          </div>
          <v-card flat class="mb-10" style="height: 465px; width: 100%; overflow: auto">
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN DARAT
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsDarat"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN LAUT
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsLaut"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
            <div
              class="font-weight-bold mt-1 white--text pa-3"
              style="background-color: grey"
            >
              ANGKATAN UDARA
            </div>
            <v-data-table
              :headers="headers"
              :items="itemsUdara"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
          </v-card>
          <v-card class="mt-10" flat style="height: 465px; width: 100%; overflow: auto">
            <v-data-table
              :headers="headersMobile"
              :items="itemsMobile"
              hide-default-footer
              class="elevation-1"
            >
              <template #[`item.no`]="{ index }">
                <div>
                  {{ index + 1 }}
                </div>
              </template>
            </v-data-table>
          </v-card>
          <div
            class="text-center mt-15 mb-10"
          >
            <v-btn
              large
              color="orange"
              class="white--text text-capitalize font-weight-regular mb-5"
              depressed
              @click="$router.push({ name: 'video-pendaftaran-baru' })"
            >
              Video Cara Mendaftar Komcad
            </v-btn>
            <v-btn
              large
              color="orange"
              class="white--text text-capitalize font-weight-regular"
              depressed
            >
              <a
                style="text-decoration: none; color: white"
                href="https://komcad.kemhan.go.id/komcad/login"
              >
                Cek Status Pendaftaran
              </a>
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-card>
  </div>
</template>

<script src="./LokasiPendaftaran.js"></script>

<style scoped>
video {
  width: 2000px;
  height: 1500px;
  object-fit: cover;
  background-size: cover;
  z-index: -1;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

@media screen and (max-width: 320px) and (max-height: 568px) {
  video {
    width: 2000px;
    height: 2000px;
    object-fit: cover;
    background-size: cover;
    z-index: -1;
  }
}
@media screen and (min-width: 360px) and (max-width: 568px) {
  video {
    width: 2000px;
    height: 2000px;
    object-fit: cover;
    background-size: cover;
    z-index: -1;
  }
}

/* responsive laptop ( MD ) */
@media screen and (min-width: 960px) and (max-width: 1264px) {
  video {
    width: 2000px;
    height: 1600px;
    object-fit: cover;
    background-size: cover;
    z-index: -1;
  }
}
</style>
