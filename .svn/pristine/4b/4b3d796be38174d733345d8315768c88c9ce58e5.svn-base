<template>
  <div>
    <v-dialog v-model="tampilkan" width="400" persistent>
      <!-- Alert Success -->
      <v-card v-show="type === 'success'" flat tile>
        <div
          class="d-flex align-center justify-center pa-3 "
          style="background-color: #38C18F"
        >
          <v-spacer />
          <div class="body-1 text-center white--text font-weight-medium">
            {{ title }}
          </div>
          <v-spacer />
          <div class="d-flex align-center justify-end">
            <v-icon color="white" @click="tampilkan = false">
              icon-close
            </v-icon>
          </div>
        </div>
        <div class="text-sm-body-2 text-center font-weight-regular py-5 px-4 ">
          {{ text }}
        </div>
      </v-card>

      <!-- Alert Info -->
      <v-card v-show="type === 'info'" flat tile>
        <div
          class="d-flex align-center justify-center pa-3 "
          style="background-color: #29B6F6"
        >
          <v-spacer />
          <div class="body-1 text-center white--text font-weight-medium">
            {{ title }}
          </div>
          <v-spacer />
          <div class="d-flex align-center justify-end">
            <v-icon color="white" @click="tampilkan = false">
              icon-close
            </v-icon>
          </div>
        </div>
        <div class="text-sm-body-2 text-center font-weight-regular py-5 px-4 ">
          {{ text }}
        </div>
      </v-card>

      <!-- Alert Error -->
      <v-card v-show="type === 'error'" flat tile>
        <div
          class="d-flex align-center justify-center pa-3 "
          style="background-color: #FF3D00"
        >
          <v-spacer />
          <div class="body-1 text-center white--text font-weight-medium">
            {{ title }}
          </div>
          <v-spacer />
          <div class="d-flex align-center justify-end">
            <v-icon color="white" @click="tampilkan = false">
              icon-close
            </v-icon>
          </div>
        </div>
        <div class="text-sm-body-2 text-center font-weight-regular py-5 px-4 ">
          {{ text }}
        </div>
      </v-card>

      <!-- Alert Warning -->
      <v-card v-show="type === 'warning'" flat tile>
        <div
          class="d-flex align-center justify-center pa-3 "
          style="background-color: #FFC107"
        >
          <v-spacer />
          <div class="body-1 text-center white--text font-weight-medium">
            {{ title }}
          </div>
          <v-spacer />
          <div class="d-flex align-center justify-end">
            <v-icon color="white" @click="tampilkan = false">
              icon-close
            </v-icon>
          </div>
        </div>
        <div class="text-sm-body-2 text-center font-weight-regular py-5 px-4 ">
          {{ text }}
        </div>
        <v-card-actions class="d-flex justify-center">
          <v-btn
            color="#FFC107"
            depressed
            class="text-capitalize font-weight-regular caption white--text rounded-lg"
            width="150"
            tile
            :loading="loading"
            @click="konfirmasiBtn"
          >
            Ya
          </v-btn>
          <v-btn
            color="grey lighten-3"
            depressed
            class="text-capitalize font-weight-regular caption rounded-lg"
            width="150"
            tile
            :disabled="loading"
            @click="tampilkan = false"
          >
            Tidak
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./CustomAlert.js">
</script>
