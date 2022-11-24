<template>
  <div>
    <video autoplay loop muted src="~/assets/bg-video-potrait1.webm" />
    <v-card
      v-if="$vuetify.breakpoint.smOnly"
      class="content"
      flat
      color="transparent"
    >
      <v-img
        max-width="250"
        max-height="250"
        class="mb-10 cursor-pointer mx-auto"
        :src="require(`~/assets/images/logo/logo-ropeg.png`)"
        @click="$router.push('/')"
      />
      <div class="pa-3 white--text font-weight-bold text-h5 text-center mt-10">
        AYO MENGABDI KEPADA NEGARA DENGAN MENDAFTAR SEBAGAI PERSONEL KOMPONEN
        CADANGAN PERTAHANAN NEGARA
      </div>
      <div class="text-center mt-10 mb-10">
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular"
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
      <div class="mt-10 mb-10 container">
        <iframe
          class="responsive-iframe"
          src="https://www.youtube.com/embed/gH19j1BGr7A?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </v-card>
    <v-card
      v-if="$vuetify.breakpoint.xsOnly"
      class="content"
      flat
      color="transparent"
    >
      <v-img
        max-width="250"
        max-height="250"
        class="mb-10 cursor-pointer mx-auto"
        :src="require(`~/assets/images/logo/logo-ropeg.png`)"
        @click="$router.push('/')"
      />
      <div class="pa-3 white--text font-weight-bold text-h6 text-center">
        AYO MENGABDI KEPADA NEGARA DENGAN MENDAFTAR SEBAGAI PERSONEL KOMPONEN
        CADANGAN PERTAHANAN NEGARA
      </div>
      <div class="text-center mt-10">
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular mb-5"
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
      <div class="mt-10 mb-10 container">
        <iframe
          class="responsive-iframe"
          src="https://www.youtube.com/embed/gH19j1BGr7A?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </v-card>
    <v-card
      v-if="$vuetify.breakpoint.lgOnly"
      class="content"
      flat
      color="transparent"
    >
      <v-img
        max-width="250"
        max-height="250"
        class="mb-10 cursor-pointer mx-auto"
        :src="require(`~/assets/images/logo/logo-ropeg.png`)"
        @click="$router.push('/')"
      />
      <div class="pa-3 white--text font-weight-bold text-h3 text-center">
        AYO MENGABDI KEPADA NEGARA DENGAN MENDAFTAR SEBAGAI PERSONEL KOMPONEN
        CADANGAN PERTAHANAN NEGARA
      </div>
      <div class="text-center mt-10">
        <v-btn
          large
          color="orange"
          class="white--text text-capitalize font-weight-regular"
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
      <div class="mt-10 mb-10">
        <iframe
          width="1550"
          height="775"
          src="https://www.youtube.com/embed/gH19j1BGr7A?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </v-card>
  </div>
</template>

<script src="./Pendaftaran.js"></script>

<style scoped>
video {
  width: 2000px;
  height: 1100px;
  object-fit: cover;
  background-size: cover;
  z-index: -1;
}

.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
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

.set1 {
  width: 100%;
  aspect-ratio: 16/7;
  height: 200px;
}
iframe {
  width: 100vw;
  aspect-ratio: 16/7;
  /* height: 50vh; */
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

/* responsive for mobile */

@media screen and (max-width: 320px) and (max-height: 568px) {
  iframe {
    width: 320px;
    height: 180px;
  }
  v-img {
    max-height: 100px;
    max-width: 100px;
    width: 100px;
    height: 100px;
  }
  video {
    width: 2000px;
    height: 1100px;
    object-fit: cover;
    background-size: cover;
    z-index: -1;
  }
}
@media screen and (max-width: 360px) {
  iframe {
    width: 360px;
    height: 180px;
  }
  v-img {
    max-height: 100px;
    max-width: 100px;
    width: 100px;
    height: 100px;
  }
  video {
    width: 2000px;
    height: 1100px;
    object-fit: cover;
    background-size: cover;
    z-index: -1;
  }
}
/* ---------------- */

@media screen and (min-width: 600px) and (max-width: 960px) {
  video {
    width: 2000px;
    height: 1400px;
    object-fit: cover;
    background-size: cover;
    z-index: -1;
  }
  iframe {
  width: 100vw;
  aspect-ratio: 16/7;
  /* height: 50vh; */
}
}

/* @media screen and (min-height: 1200px) {
  video {
    width: 2000px;
    height: 1300px;
    object-fit: cover;
    background-size: cover;
    z-index: -1;
  }
} */

@media screen and (min-width: 1200px) and (max-width: 1900px) {
  video {
    width: 2000px;
    height: 1600px;
    object-fit: cover;
    background-size: cover;
    z-index: -1;
  }
}
</style>
