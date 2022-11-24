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
    <v-autocomplete
      v-bind="vAutocomplete"
      ref="autocompleteField"
      :return-object="returnObject"
      style="font-size: .75rem; letter-spacing: .025rem; border-radius: 0;"
      color="#009688"
      :multiple="multiple"
      :small-chips="smallChips"
      :clearable="clearable"
      clear-icon="icon-close"
      :loading="loading"
      @input="input($event)"
      @keydown.enter="enter($event)"
      @focus="icon = 'mdi-magnify'"
      @blur="blur($event)"
      @update:error="e => (error = e)"
    />
  </field-container>
</template>

<script src="./AutocompleteField.js"></script>

<style scoped>
</style>
