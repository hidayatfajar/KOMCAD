<template>
  <div>
    <v-dialog v-model="preview" scrollable persistent max-width="250">
      <v-card width="250" max-width="250">
        <v-card-text>
          <image-view v-if="file && file.url" :src="file.url" />
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn class="text-capitalize" text rounded @click="preview = false">
            Tutup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <field-container :label="label" :md="md">
      <template #label>
        <!-- @slot Label field -->
        <slot name="label" v-bind="{ label, required }">
          <div class="mt-2">
            <label :class="{ 'error--text': errors.length }">{{ label }}</label>
            <v-tooltip v-if="required" right>
              <template #activator="{ on }">
                <v-btn
                  icon
                  x-small
                  color="red"
                  v-on="on"
                >
                  <v-icon x-small>
                    mdi-asterisk
                  </v-icon>
                </v-btn>
              </template>
              <span>Wajib diisi.</span>
            </v-tooltip>
          </div>
        </slot>
      </template>

      <div v-if="file && file.url">
        <v-fade-transition hide-on-leave>
          <v-avatar v-if="showMediaPreview" size="100%" :tile="tile">
            <v-img
              v-if="file.url"
              height="200"
              width="100%"
              :src="file.url"
              :gradient="!selected && loaded ? 'to top, rgba(0,0,0,.9), rgba(255,255,255,0) 30%' : ''"
              @load="loaded = true"
            >
              <v-layout v-if="!selected" column justify-space-between justify-center fill-height>
                <v-spacer />
                <div>
                  <v-btn
                    icon
                    outlined
                    small
                    color="white"
                    class="my-1"
                    @click="selected = !selected"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </div>
              </v-layout>
              <v-overlay :value="selected" z-index="2" absolute>
                <file-upload
                  v-if="!readonly"
                  :input-id="Math.random().toString(36).substring(7)"
                  class="v-btn v-btn--depressed v-btn--flat v-btn--icon v-btn--outlined v-btn--round theme--dark v-size--default pa-1"
                  @input-file="input($event)"
                >
                  <v-icon style="padding-top: 10px;">
                    mdi-camera
                  </v-icon>
                </file-upload>
                <v-btn
                  icon
                  outlined
                  @click="preview = true"
                >
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn
                  v-if="!readonly"
                  icon
                  outlined
                  @click="clear()"
                >
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
                <v-layout column justify-space-between justify-center fill-height>
                  <v-spacer />
                  <div>
                    <v-btn
                      icon
                      outlined
                      small
                      color="white"
                      class="my-1"
                      @click="selected = !selected"
                    >
                      <v-icon>mdi-check</v-icon>
                    </v-btn>
                  </div>
                </v-layout>
              </v-overlay>
            </v-img>
          </v-avatar>
          <div v-else>
            <v-btn
              elevation="0"
              color="grey"
              class="square-uploads"
              :tile="tile"
              disabled
            >
              <v-icon color="white">
                mdi-check
              </v-icon><br><font color="#9b9c9f">
                Video Diupload
              </font>
            </v-btn>
          </div>
        </v-fade-transition>
        <p class="mb-1" style="text-align: center" :class="{ 'error--text': errors.length }">
          {{ errors.length ? errors[0] : '' }}
        </p>
      </div>
      <div v-else>
        <v-fade-transition hide-on-leave>
          <client-only v-if="!readonly">
            <file-upload
              :input-id="Math.random().toString(36).substring(7)"
              :multiple="false"
              class="v-btn v-btn--contained elevation-0 v-size--default square-uploads"
              :class="{ 'v-btn--round': !tile }"
              style="background-color: #eaeaeb"
              @input-file="input($event)"
            >
              <v-icon color="#9b9c9f">
                {{ icon }}
              </v-icon> <font color="#9b9c9f" class="text-capitalize">
                {{ textInside }}
              </font>
            </file-upload>
          </client-only>
          <v-btn
            v-else
            elevation="0"
            color="#eaeaeb"
            class="square-uploads-preview"
            :tile="tile"
            disabled
          >
            <v-icon color="#9b9c9f">
              {{ icon }}
            </v-icon> <font color="#9b9c9f" class="text-capitalize">
              {{ textInside }}
            </font>
          </v-btn>
        </v-fade-transition>
        <p class="mb-1" style="text-align: center" :class="{ 'error--text': errors.length }">
          {{ errors.length ? errors[0] : '' }}
        </p>
      </div>
    </field-container>
  </div>
</template>

<script src="./MediaUploadField.js"></script>

<style scoped>
  .square-uploads{
    width: 100%!important;
    height: 300px!important;
  }
  .square-uploads-preview{
    width: 100%!important;
    height: 300px!important;
  }
</style>
