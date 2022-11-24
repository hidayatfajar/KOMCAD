<template>
  <div>
    <v-alert
      v-model="tampilkan"
      dismissible
      class="caption"
      close-icon="icon-close"
      :color="type"
      dark
      tile
    >
      {{ text }}
    </v-alert>
  </div>
</template>

<script src="./Alert.js">
</script>
