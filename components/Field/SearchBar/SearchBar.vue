<template>
  <div class="wrapper-pencarian">
    <div class="wrapper-pencarian__field">
      <v-text-field
        v-model="pencarian"
        background-color="white"
        placeholder="Ketikkan Sesuatu..."
        rounded
        dense
        height="40"
        class="mt-4"
        @keyup.enter="handleCari"
      />
      <v-icon size="50">
        icon-search
      </v-icon>
      <v-progress-circular
        v-show="loaderPencarian"
        indeterminate
        color="#4584C2"
      />
    </div>
  </div>
</template>

<script src="./SearchBar.js"></script>

<style scoped>
.wrapper-pencarian {
  position: relative;
}

.wrapper-pencarian__field {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  border: 1px black solid;
  background-color: #fff;
}
</style>
