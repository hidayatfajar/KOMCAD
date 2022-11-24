<template>
  <field-container :label="label" :md="md">
    <template #label>
      <!-- @slot Label field -->
      <slot
        name="label"
        v-bind="{ label, required, error: error || !!errorMessages }"
      >
        <div class="mt-2">
          <label :class="{ 'error--text': error || !!errorMessages }">{{
            label
          }}</label>
          <v-tooltip v-if="required" right>
            <template #activator="{ on }">
              <v-btn icon x-small color="red" v-on="on">
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

    <v-text-field
      ref="textField"
      :style="{
        borderRadius: tile ? '0px' : '',
        letterSpacing: '.025rem',
        fontSize: '.75rem'
      }"
      v-bind="vTextField"
      :loading="loading"
      color="#009688"
      v-on="von"
      @input="input($event)"
      @keydown="keydown($event)"
      @click:append="appendHandler($event)"
      @keydown.enter="enter($event)"
      @blur="blur($event)"
      @click="click($event)"
      @change="change($event)"
    >
      <template v-if="append" #append>
        <p class="caption mt-1 mb-0">
          {{ append }}
        </p>
      </template>

      <template v-if="appendOuter" #append-outer>
        <span class="caption mt-1 mb-0">
          {{ appendOuter }}
        </span>
      </template>

      <template v-if="prependOuter" #prepend>
        <div>
          <p v-if="prependOuter">
            {{ prependOuter }}
          </p>
        </div>
        <p class="caption mt-1 mb-0" />
      </template>

      <template #prepend-inner>
        <p
          v-if="prepend"
          :class="{ 'caption mt-1 mb-0': !height }"
          :style="{ color }"
        >
          {{ prepend }}
        </p>
      </template>
    </v-text-field>

    <template #append-after>
      <!-- @slot komponen untuk ditampilkan setelah field -->
      <slot name="append-after" />
    </template>
  </field-container>
</template>

<script src="./TextField.js"></script>

<style scoped>
</style>
