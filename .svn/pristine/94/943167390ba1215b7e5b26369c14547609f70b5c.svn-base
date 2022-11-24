<template>
  <div>
    <v-dialog v-model="tampilkan" width="400" persistent>
      <v-card flat tile>
        <div class="body-1 text-center font-weight-regular py-5 px-4 ">
          {{ text }}
        </div>
        <v-card-actions class="d-flex justify-center">
          <v-btn
            color="grey lighten-3"
            depressed
            class="text-capitalize font-weight-regular caption rounded-lg"
            width="150"
            tile
            :disabled="loading"
            @click="tampilkan = false"
          >
            Batal
          </v-btn>
          <v-btn
            color="#0e76bd"
            depressed
            class="text-capitalize font-weight-regular caption white--text rounded-lg"
            width="150"
            tile
            :loading="loading"
            @click="konfirmasiBtn"
          >
            Konfirmasi
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./Confirmation.js">
</script>
