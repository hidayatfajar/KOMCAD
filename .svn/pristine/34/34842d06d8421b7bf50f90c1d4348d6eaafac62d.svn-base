<template>
  <div>
    <div class="mt-n5">
      <v-card class="rounded-0 full-width" height="250" color="#3c2213">
        <v-card-text
          class="d-inline-flex px-5 px-md-10 justify-space-between align-center"
          style="height: 100%"
        >
          <div class="d-inline-flex align-center">
            <iframe
              class="hidden-sm-and-down"
              :src="`https://maps.google.co.id/maps?q=${getDataKontak.nama_institusi}&output=embed`"
              width="200"
              height="150"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <div class="ml-md-8">
              <div class="text-h6 white--text mb-2 mt-2">
                {{ getDataKontak.nama_institusi }}
              </div>
              <div
                :class="`white--text mb-2 mt-2 ${
                  $vuetify.breakpoint.smAndDown ? '' : 'text-caption'
                }`"
                :style="`${
                  $vuetify.breakpoint.smAndDown
                    ? 'max-width: 250px;'
                    : 'max-width: 400px;'
                } font-size: 11px`"
              >
                {{ getDataKontak.alamat }}
                <div
                  :class="`white--text mb-2 mt-2 ${
                    $vuetify.breakpoint.smAndDown ? '' : 'text-caption'
                  }`"
                  style="font-size: 11px"
                >
                  {{ getDataKontak.email }}
                </div>
                <div
                  :class="`white--text mb-2 ${
                    $vuetify.breakpoint.smAndDown ? '' : 'text-caption'
                  }`"
                  style="font-size: 11px"
                >
                  {{ getDataKontak.nomor_telepon }}
                </div>
              </div>
            </div>
          </div>
          <div class="d-inline-flex align-center">
            <v-icon class="white--text mr-3" size="35">
              mdi-phone-classic
            </v-icon>
            <div>
              <div
                :class="`${
                  $vuetify.breakpoint.smAndDown ? '' : 'text-caption'
                } mb-n2 white--text font-weight-light`"
                style="font-size: 11px"
              >
                Call Center
              </div>
              <div class="text-md-h6 white--text font-weight-regular">
                {{ getDataKontak.nomor_call_center }}
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script src="./FooterPublik.js" />
