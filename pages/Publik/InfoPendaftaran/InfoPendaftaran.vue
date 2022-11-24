<template>
  <div>
    <video autoplay loop muted src="~/assets/bg-video-potrait1.webm" />
    <v-card class="content" flat color="transparent">
      <div class="align-center text-center mx-auto">
        <v-img
          max-width="250"
          max-height="250"
          class="mb-10 mx-auto cursor-pointer"
          :src="require(`~/assets/images/logo/logo-ropeg.png`)"
          style="margin-top: 700px;"
          @click="$router.push('/')"
        />
      </div>
      <v-card
        flat
        color="#980808"
        class="mt-10 mx-auto pa-5"
        style="width: 100%; height: 700px; display: block;"
      >
        <v-container
          class="align-center justify-center mx-auto"
          style="width: 80%"
        >
          <div class="white--text text-center font-weight-bold text-h5">
            PENDAFTARAN ONLINE KOMCAD TA 2022 SUDAH DITUTUP
          </div>
          <div class="text-center mt-15">
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
                Status Pendaftaran
              </a>
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-card>
  </div>
</template>

<script src="./InfoPendaftaran.js"></script>

<style scoped>
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  position: fixed;
  z-index: -1;
}

.main {
  width: 100%;
  height: 100vh;
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
