<template>
  <div>
    <v-dialog v-model="preview" scrollable persistent max-width="750">
      <v-card width="750" max-width="750">
        <v-card-subtitle
          v-if="preview_name"
          class="py-3 white--text font-weight-medium"
          style="background-color: #1976d2"
        >
          {{ preview_name ? preview_name : null }}
        </v-card-subtitle>
        <v-card-text
          v-if="preview_url !== '-'"
          class="mt-6"
          style="height: 450px"
        >
          <div v-if="preview_type === 'pdf'">
            <embed :src="preview_url" style="width: 100%; height: 470px">
          </div>
          <div v-else>
            <image-view :src="preview_url" />
          </div>
        </v-card-text>
        <v-card-text
          v-if="preview_url === '-'"
          class="mt-6"
          style="height: 450px"
        >
          <div class="text-center text-h3">
            File Tidak Ditemukan di Server
          </div>
        </v-card-text>
        <v-divider />
        <v-card-actions class="justify-center">
          <v-btn
            class="text-capitalize white--text rounded-lg"
            width="150"
            color="#1976D2"
            depressed
            @click="preview = false"
          >
            Tutup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <video autoplay loop muted src="~/assets/bg-video-potrait1.webm" />
    <v-card class="content" flat color="transparent">
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
          CONTOH DOKUMEN PENDAFTARAN ANGGOTA KOMPONEN CADANGAN
        </div>
      </div>
      <v-card
        flat
        color="white"
        class="mt-10 align-center justify-center mx-auto pa-5"
        style="width: 100%"
        height="400"
      >
        <v-container
          class="align-center justify-center mx-auto"
          style="width: 80%"
        >
          <v-card flat style="height: 465px; width: 100%; overflow: auto">
            <v-row>
              <v-col cols="12">
                <div
                  class="d-flex text-center mt-10 flex-row"
                  style="width: 100%;"
                >
                  <v-card
                    v-for="val in itemsDocument"
                    :key="val.id"
                    color="transparent"
                    flat
                    class="flex-row text-center mx-auto"
                    width="200"

                    @click="openPreview(val)"
                  >
                    <v-icon size="200" color="#ff0000">
                      {{ setIconLampiran(val.value) }}
                    </v-icon>
                    <div class="grey--text mt-n2" style="font-size: 10px">
                      {{ val.value }}
                    </div>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-card>
      <v-card
        flat
        color="#f4f4f4"
        style="height: 465px; width: 100%; overflow: auto"
      >
        <v-container
          class="align-center justify-center mx-auto"
          style="width: 80%"
        >
          <div class="mt-10 mb-5 text-h6 font-weight-bold">
            Download Contoh Dokumen :
          </div>
          <div v-for="items in itemsDocument" :key="items.id" class="mb-2">
            <a
              :href="`${url}/${items.value}`"
              target="_blank"
              rel="noopener"
              class="blue--text font-weight-regular"
            >{{ items.name }}</a>
          </div>
          <div class="text-center mt-15 mb-5" style="width: 100%">
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
              @click="$router.push({ name: 'lokasi-pendaftaran-baru' })"
            >
              Lokasi Pendaftaran Komcad
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
  </div>
</template>

<script src="./Dokumen.js"></script>

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

</style>
