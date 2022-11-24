import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Vue2Filters from 'vue2-filters'

import VueFilterDateFormat from 'vue-filter-date-format'

import VueFilterDateParse from 'vue-filter-date-parse'

Vue.use(Vuetify, {
    theme: {
        light: true,
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: {
                    base: '#367FC2',
                    lighten1: '#8ac463',
                    lighten2: '#a6d289',
                    lighten3: '#c2e0ae',
                    lighten4: '#deeed3',
                    lighten5: '#fafcf8',
                    darken1: '#588d35',
                    darken2: '#416827',
                    darken3: '#2a4319',
                    darken4: '#131e0b'
                },
                accent: {
                    base: '#4a9d8e',
                    lighten1: '#64b6a7',
                    lighten2: '#87c6bb',
                    lighten3: '#a9d7ce',
                    lighten4: '#cce7e2',
                    lighten5: '#eff7f6',
                    darken1: '#3a7a6f',
                    darken2: '#29584f',
                    darken3: '#193530',
                    darken4: '#091211'
                },
                secondary: {
                    base: '#2A5529',
                    lighten1: '#3b773a',
                    lighten2: '#4c9a4a',
                    lighten3: '#65b463',
                    lighten4: '#87c486',
                    lighten5: '#a9d5a8',
                    darken1: '#214421',
                    darken2: '#193318',
                    darken3: '#102110',
                    darken4: '#081008'
                },
                blue: {
                    base: '#3271A8',
                    lighten1: '#367FC2',
                    darken1: '#3368AC'
                }
            }
        }
    }
})

const Vue2FiltersConfig = {
    currency: {
        symbol: 'IDR',
        decimalDigits: 0,
        thousandsSeparator: '.',
        decimalSeparator: ',',
        symbolOnLeft: true,
        spaceBetweenAmountAndSymbol: true
    }
}

const VueFilterDateFormatConfig = {
    dayOfWeekNames: [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu'
    ],
    dayOfWeekNamesNamesShort: ['Mg', 'Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sa'],
    monthNames: [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
    ],
    monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Agu',
        'Sep',
        'Okt',
        'Nov',
        'Des'
    ]
}

Vue.use(Vue2Filters, Vue2FiltersConfig)

Vue.use(VueFilterDateFormat, VueFilterDateFormatConfig)

Vue.use(VueFilterDateParse)
