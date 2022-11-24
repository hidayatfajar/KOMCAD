<template>
  <v-card
    color="transparent"
    flat
    class="d-inline-block mr-2"
    tile
    @click="onClick"
  >
    <div class="d-flex">
      <div
        class="d-flex align-center justify-center custom-check-project-map-small"
      >
        <v-icon v-if="value" :color="color" size="25">
          icon-check
        </v-icon>
      </div>
      <span v-if="label" :class="`caption ml-2 ${isRed ? 'main-text-color' : 'black--text'}` ">{{ label }}</span>
    </div>
  </v-card>
</template>

<script src="./CheckBoxField.js">
</script>
