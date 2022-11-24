<template>
  <div>
    <v-dialog v-model="preview" scrollable persistent max-width="750">
      <v-card width="750" max-width="750">
        <v-card-subtitle v-if="preview_name" class="py-3 white--text font-weight-medium" style="background-color: #1976D2">
          {{ preview_name ? preview_name : null }} {{ }}
        </v-card-subtitle>
        <v-card-text v-if="preview_url" class="mt-6" style="height: 450px;">
          <div v-if="preview_type === 'application/pdf'">
            <embed :src="preview_url" style="width: 100%;height: 470px;">
          </div>
          <div v-if="preview_type === 'image/png' || preview_type === 'image/jpeg'">
            <image-view :src="preview_url" />
          </div>
        </v-card-text>
        <v-divider />
        <v-card-actions class="justify-center">
          <v-btn class="text-capitalize white--text rounded-lg" width="150" color="#1976D2" depressed @click="preview = false">
            Tutup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <field-container :label="label" :md="md" :label-md="labelMd">
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

      <v-item-group v-model="selected">
        <v-row v-if="errors.length">
          <v-col>
            <div :class="[{ 'error--text': errors.length }]">
              {{ errors.length ? errors[0] : placeholder }}
            </div>
          </v-col>
        </v-row>
        <v-row :justify="justifyCards">
          <v-item v-for="(item, index) in files" :key="index" v-slot="{ active }" class="mx-2 mb-2">
            <v-slide-x-transition>
              <v-card
                class="portrait mx-2 mb-2"
                :height="height"
                :width="width"
                :color="active ? 'primary' : ''"
                flat
                outlined
                @click="setSelected(index)"
              >
                <v-img
                  v-if="item.url"
                  class="upload-image-preview"
                  :height="height"
                  :src="item.url"
                  :gradient="!active ? '217deg, rgba(0,0,0,.8), rgba(255,255,255,0) 30%' : ''"
                >
                  <v-layout column justify-space-between fill-height class="white--text">
                    <v-layout v-if="!active">
                      <v-spacer />
                      <v-btn icon outlined small color="white" class="ma-1">
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </v-layout>
                    <v-spacer />
                    <v-card-title class="title-gradient">
                      <div class="caption text-truncate">
                        {{ item.name ? item.name : null }}
                      </div>
                    </v-card-title>
                  </v-layout>
                </v-img>
                <v-overlay :value="active" z-index="2" absolute>
                  <file-upload
                    v-if="!readonly"
                    :input-id="Math.random().toString(36).substring(7)"
                    :class="editClass"
                    @input-file="update($event, index)"
                  >
                    <v-icon>mdi-file-upload</v-icon>
                  </file-upload>
                  <v-btn
                    v-if="item.type === 'image/png' || item.type === 'image/jpeg' || item.type === 'application/pdf'"
                    icon
                    outlined
                    @click="showPreview(item.url, item.name, item.type)"
                  >
                    <v-icon>mdi-eye</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="!readonly"
                    icon
                    outlined
                    @click="remove(index)"
                  >
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="!readonly"
                    icon
                    outlined
                    @click="setSelected(null)"
                  >
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </v-overlay>
              </v-card>
            </v-slide-x-transition>
          </v-item>

          <file-upload
            v-if="(!max || parseInt(max) < value.length) && !readonly"
            v-model="files"
            :input-id="Math.random().toString(36).substring(7)"
            multiple
            :class="buttonClass"
            :style="{minWidth: '0 !important', 'width': width + 'px !important', height: height + 'px !important'}"
            @input="input($event)"
          >
            <v-icon color="grey" size="80">
              mdi-plus
            </v-icon>
          </file-upload>
          <v-btn
            v-if="(!value || !value.length) && readonly"
            fab
            elevation="0"
            color="grey"
            class="square-uploads px-0 mx-2"
            tile
            disabled
          >
            <v-icon color="white">
              mdi-camera-plus
            </v-icon>
          </v-btn>
        </v-row>
      </v-item-group>
    </field-container>
  </div>
</template>

<script src="./ImagesUploadField.js"></script>

<style scoped>

</style>

<docs>
    Tampilan standard
    ```vue
    <images-upload-field label="Images" />
    ```

    Tampilan required
    ```vue
    <images-upload-field label="Images" required />
    ```

    Tampilan tanpa label
    ```vue
    <images-upload-field />
    ```
</docs>
