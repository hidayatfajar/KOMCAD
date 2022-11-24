<template>
  <div>
    <video class="vid1" autoplay loop muted src="~/assets/bg-video-potrait1.webm" />
    <v-card v-if="$vuetify.breakpoint.xsOnly" class="content" flat color="transparent">
      <v-img
        max-width="250"
        max-height="250"
        class="mx-auto mb-10"
        :src="require(`~/assets/images/logo/logo-ropeg.png`)"
      />
      <div class="pa-3 white--text font-weight-bold text-center text-h6">
        AYO MENGABDI KEPADA NEGARA DENGAN MENDAFTAR SEBAGAI KOMPONEN CADANGAN
        PERTAHANAN NEGARA
      </div>
      <div class="pa-3 mt-10 white--text font-weight-reguler text-h6 text-center">
        Nomor layanan Pengaduan : <br> +62 896-1937-0020 (Whatsapp) <br> dengan mengetik
        ‘bantuan’
      </div>
      <div class="text-center mt-10">
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular  mb-5"
          depressed
          @click="
            $router.push({
              name: 'video-pendaftaran-baru',
            })
          "
        >
          Video Cara Mendaftar Komcad
        </v-btn>
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular"
          depressed
          @click="$router.push({ name: 'lokasi-pendaftaran-baru' })"
        >
          Waktu & Lokasi Pendaftaran
        </v-btn>
      </div>
      <div class="text-center mt-5 mr-2">
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular mb-5"
          depressed
          @click="$router.push({ name: 'dokumen' })"
        >
          Contoh Dokumen Pendaftaran
        </v-btn>
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular ml-3"
          depressed
          @click="$router.push({ name: 'sebelum-pendaftaran' })"
        >
          Mulai Pendaftaran
        </v-btn>
      </div>
      <v-card flat color="transparent" class="mt-10">
        <video
          class="vid2"
          controls
          :poster="url"
        >
          <source
            class="vid2"
            src="~/assets/bg-video-new.mp4"
            type="video/mp4"
          >
        </video>
      </v-card>
    </v-card>
    <v-card v-if="$vuetify.breakpoint.smOnly" class="content" flat color="transparent">
      <v-img
        max-width="250"
        max-height="250"
        class="mx-auto mb-10"
        :src="require(`~/assets/images/logo/logo-ropeg.png`)"
      />
      <div class="white--text font-weight-bold text-center text-h5 mt-10">
        AYO MENGABDI KEPADA NEGARA DENGAN MENDAFTAR SEBAGAI KOMPONEN CADANGAN
        PERTAHANAN NEGARA
      </div>
      <div class="mt-10 white--text font-weight-reguler text-h4 text-center text-sm-h6">
        Nomor layanan Pengaduan : <br> +62 896-1937-0020 (Whatsapp) dengan mengetik
        ‘bantuan’
      </div>
      <div class="d-inline-flex mt-10">
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular"
          depressed
          @click="
            $router.push({
              name: 'video-pendaftaran-baru',
            })
          "
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
          Waktu & Lokasi Pendaftaran
        </v-btn>
      </div>
      <div class="text-center mt-5 mr-2 mb-10">
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular ml-3"
          depressed
          @click="$router.push({ name: 'dokumen' })"
        >
          Contoh Dokumen Pendaftaran
        </v-btn>
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular ml-3"
          depressed
          @click="$router.push({ name: 'sebelum-pendaftaran' })"
        >
          Mulai Pendaftaran
        </v-btn>
      </div>
      <v-card flat color="transparent" class="mt-10">
        <video
          class="vid2"
          controls
          :poster="url"
        >
          <source
            class="vid2"
            src="~/assets/bg-video-new.mp4"
            type="video/mp4"
          >
        </video>
      </v-card>
    </v-card>
    <v-card v-if="$vuetify.breakpoint.lgOnly" class="content" flat color="transparent">
      <v-img
        max-width="250"
        max-height="250"
        class="mx-auto mb-10"
        :src="require(`~/assets/images/logo/logo-ropeg.png`)"
      />
      <div class="white--text font-weight-bold text-center text-h3">
        AYO MENGABDI KEPADA NEGARA DENGAN MENDAFTAR SEBAGAI KOMPONEN CADANGAN
        PERTAHANAN NEGARA
      </div>
      <div class="mt-10 white--text font-weight-reguler text-h4 text-center">
        Nomor layanan Pengaduan : +62 896-1937-0020 (Whatsapp) dengan mengetik
        ‘bantuan’
      </div>
      <div class="d-inline-flex mt-10">
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular"
          depressed
          @click="
            $router.push({
              name: 'video-pendaftaran-baru',
            })
          "
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
          Waktu & Lokasi Pendaftaran
        </v-btn>
      </div>
      <div class="text-center mt-5 mr-2">
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular ml-3"
          depressed
          @click="$router.push({ name: 'dokumen' })"
        >
          Contoh Dokumen Pendaftaran
        </v-btn>
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular ml-3"
          depressed
          @click="$router.push({ name: 'sebelum-pendaftaran' })"
        >
          Mulai Pendaftaran
        </v-btn>
      </div>
      <v-card flat color="transparent" class="mt-10">
        <video
          class="vid2"
          controls
          :poster="url"
        >
          <source
            class="vid2"
            src="~/assets/bg-video-new.mp4"
            type="video/mp4"
          >
        </video>
      </v-card>
    </v-card>
  </div>
</template>

<script src="./Index.js"></script>

<style scoped>
.vid1 {
  width: 2000px;
  height: 1400px;
  object-fit: cover;
  background-size: cover;
  z-index: -1;
}

.vid2{
  width: 100%;
  height: 100%;
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

/* @media screen and (min-width: 600px ) and (min-height: 800px) {
  .vid1 {
  width: 2000px;
  height: 1200px;
  object-fit: cover;
  background-size: cover;
  z-index: -1;
}
}

@media screen and (min-height: 1200px ) {
  .vid1 {
  width: 2000px;
  height: 1300px;
  object-fit: cover;
  background-size: cover;
  z-index: -1;
}
}

@media screen and (min-width: 1200px )  and (max-width: 1900px) {
  .vid1 {
  width: 2000px;
  height: 1600px;
  object-fit: cover;
  background-size: cover;
  z-index: -1;
}
} */
</style>
