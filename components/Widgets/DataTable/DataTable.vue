<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-2">
      <p class="text-h6 secondary-text font-weight-light">
        {{ tableTitle }}
      </p>
      <div>
        <slot name="table-header" />
      </div>
    </div>
    <v-data-table
      :headers="tableHeaders"
      fixed-header
      :height="height"
      :items="tableItemData"
      :hide-default-footer="!pagination"
      :loading="loading"
      :search="search"
      :options.sync="tableOptions"
      :server-items-length="tableTotalItem"
    >
      <template
        v-for="(key, i) in arrHeaders"
        #[`item.${key}`]="{ item }"
      >
        <div
          :key="i + 1"
          class="main-text-color font-weight-regular"
          :class="{ 'primary--text': key === 'nama' }"
        >
          {{
            typeof item[key] === 'number' && formatNumber
              ? item[key].toLocaleString('id-ID')
              : item[key]
          }}
        </div>
      </template>
      <!-- Tambahan dari kolom-kolom pada tabel -->

      <!-- User Management -->
      <!-- # Status Lock -->
      <template #[`item.status_lock`]="{ item }">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              @click="statusLockActionClicked(item, !item.is_active)"
              v-on="on"
            >
              <v-icon :color="item.is_active === 1 ? 'success' : 'error'">
                {{
                  item.is_active === 1
                    ? 'mdi-lock-open-variant'
                    : 'mdi-lock-alert'
                }}
              </v-icon>
            </v-btn>
          </template>
          <span>{{ item.is_active === 1 ? 'Lock User' : 'Unlock User' }}</span>
        </v-tooltip>
      </template>
      <!-- # Reset Password  -->
      <template #[`item.reset_password`]="{ item }">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              @click="resetPaswordClicked(item)"
              v-on="on"
            >
              <v-icon>mdi-lock-reset</v-icon>
            </v-btn>
          </template>
          <span>Reset Password</span>
        </v-tooltip>
      </template>
      <!-- End User Mangement -->

      <!-- Authorization User -->
      <!-- # Setting Otorisasi API -->
      <template #[`item.setting_quota_user_api`]="{ item }">
        <v-btn
          width="60%"
          color="primary"
          depressed
          :to="{
            name: 'quota_management_user_setting_quota_user_api',
            params: { user_id: item.user_id },
          }"
          @click="$store.dispatch('setLoading', true)"
        >
          <!-- Setting User API -->
          <v-icon small>
            mdi-wrench
          </v-icon>
          <v-icon>mdi-api</v-icon>
        </v-btn>
      </template>
      <!-- End Authorization User -->

      <!-- Authorization Device   -->
      <!-- # Detail Authorize Device -->
      <template #[`item.setting`]="{ item }">
        <v-btn icon @click="settingActionClicked(item)">
          <v-icon>mdi-wrench</v-icon>
        </v-btn>
      </template>
      <!-- # Allowed IP Authorize Device -->
      <template #[`item.allowed_ip`]="{ item }">
        <p v-if="item.allowed_ip === '@'">
          {{ item.allowed_ip }}
        </p>
        <div
          v-else
          class="py-2"
          style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 5px"
        >
          <div
            v-for="(itemIp, index) in item.allowed_ip"
            :key="index + 1"
            class="py-1 px-2 primary white--text"
            style="border-radius: 5px; width: 100%"
          >
            {{ itemIp }}
          </div>
        </div>
      </template>
      <!-- End Authorization Device -->

      <!-- # Format Date Indonesia -->
      <template #[`item.diakses_pada`]="{ item }">
        <p>
          {{ dateFormatted(item.diakses_pada) }}
        </p>
      </template>

      <template #[`item.waktu_akses`]="{ item }">
        <p>
          {{ dateFormatted(item.waktu_akses) }}
        </p>
      </template>
      <!-- End Format Date Indonesia -->

      <!-- User Management & API Management  -->
      <template #[`item.status_enable`]="{ item }">
        <div v-if="item.is_enable === 'admin'">
          -
        </div>
        <v-switch
          v-else
          class="pl-4"
          color="success"
          value
          :input-value="item.is_enable === 1 ? true : false"
          inset
          @change="statusActionClicked(item, !item.is_enable)"
        />
      </template>
      <!-- End User Management & API Management -->

      <!-- General Opsi -->
      <template v-if="tableAction" #[`item.opsi`]="{ item }">
        <div class="d-flex justify-center align-center">
          <div v-if="editAction">
            <v-btn
              v-if="editType.type === 'link'"
              icon
              :to="{ name: editType.route, params: item.user }"
              @click="$store.dispatch('setLoading', true)"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              v-if="editType.type === 'event'"
              icon
              @click="editActionClicked(item)"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>
          <div v-if="deleteAction">
            <v-btn icon @click="deleteActionClicked(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
          <!-- <div v-if="manageKuotaAction">
            <v-btn
              v-if="manageKuotaType.type === 'link'"
              depressed
              icon
              :to="{
                name: manageKuotaType.route,
                params: { user_id: item.user_id },
              }"
              @click="$store.dispatch('setLoading', true)"
            >
              <v-icon>mdi-signal-variant</v-icon>
            </v-btn>
            <v-btn
              v-if="manageKuotaType.type === 'event'"
              icon
              @click="manageKuotaActionClicked"
            >
              <v-icon>mdi-signal-variant</v-icon>
            </v-btn>
          </div> -->
          <div v-if="detailAction">
            <v-btn
              v-if="detailType.type === 'link'"
              width="100%"
              color="primary"
              depressed
              :to="{
                name: detailType.route,
                params: { [detailType.key]: item[detailType.key] },
              }"
              @click="$store.dispatch('setLoading', true)"
            >
              Detail
            </v-btn>
            <v-btn
              v-if="detailType.type === 'event'"
              @click="detailActionClicked"
            >
              Detail
            </v-btn>
          </div>
        </div>
      </template>
      <!-- End General Opsi -->
    </v-data-table>
  </div>
</template>

<script src="./DataTable.js"></script>
