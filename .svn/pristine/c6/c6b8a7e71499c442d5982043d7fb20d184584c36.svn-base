<template>
  <div class="wrapper-pencarian">
    <div class="wrapper-pencarian__field">
      <v-text-field
        v-model="pencarian"
        background-color="white"
        :outlined="isTopbar"
        rounded
        dense
        height="40"
        :class="{'mt-4': !isTopbar, 'rounded-lg mt-7': isTopbar}"
        @input="handleCari"
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
    <!-- <div class="d-flex justify-center mt-3">
      <v-btn
        depressed
        color="#4584C2"
        class="btn--cari rounded-lg white--text text-capitalize font-weight-normal ml-4"
        tile
        height="45"
        @click="handleCari"
      >
        Cari Sekarang
      </v-btn>

      <v-btn
        depressed
        color="yellow"
        class="btn--cari rounded-lg grey--text text-capitalize font-weight-normal ml-4"
        tile
        height="45"
        @click="handleCari"
      >
        Reset Pencarian
      </v-btn>
    </div> -->
    <div
      v-if="searchResult && hasilPencarian.length !== 0 && ribbount"
      ref="wrapper-result"
      class="wrapper-result d-flex flex-column py-3"
      :class="{ 'mt-n1': isNavbarUsed, 'mt-4': !isNavbarUsed }"
    >
      <a
        v-for="(itemHasil, idxHasil) in hasilPencarian"
        :key="idxHasil"
        class="wrapper-result__item text-subtitle-1 font-weight-bold px-8 py-2"
        @click="detailHandler(itemHasil.metadata_id)"
      >
        {{ itemHasil.nama_data }}
      </a>
    </div>
    <div
      v-if="notFound && ribbount"
      ref="wrapper-result"
      class="wrapper-result d-flex flex-column py-3"
      :class="{ 'mt-n1': isNavbarUsed, 'mt-4': !isNavbarUsed }"
    >
      <div class="text-center text-h6">
        Data Tidak Ditemukan
      </div>
    </div>
  </div>
</template>

<script src="./SearchBarAutocomplete"></script>

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
  /* box-shadow: 5px 3px 8px 0 rgba(179, 179, 179, 0.5); */
  background-color: #fff;
}

.wrapper-result {
  position: absolute;
  width: 100%;
  background-color: #fff;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 5px 3px 5px 0 rgba(179, 179, 179, 0.5);
}

.wrapper-result a:not(:last-child) {
  margin-bottom: 10px;
}

.wrapper-result a {
  text-decoration: none;
}

.wrapper-result a:focus {
  background-color: #e2e9f3;
}
.wrapper-result a:hover {
  background-color: #e2e9f3;
}

.wrapper-result__item {
  color: #4584c2;
}

.btn--cari {
  font-size: 18px !important;
}
</style>
