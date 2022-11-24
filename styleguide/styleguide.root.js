import vuetify from './vuetify-plugin'

export default (previewComponent) => {
    return {
        vuetify,
        render (createElement) {
            return createElement(
                'v-app',
                {
                    props: {
                        id: 'v-app'
                    }
                },
                [createElement(Object.assign(previewComponent))]
            )
        }
    }
}
