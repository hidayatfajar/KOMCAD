const path = require('path')
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source => readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .map(name => name.split('\\')[1])

const getSection = () => {
    const names = getDirectories('./components')
    const sections = []

    for (const name of names) {
        sections.push({
            name,
            components: './components/' + name + '/**/[A-Z]*.vue'
        })
    }

    return sections
}

module.exports = {
    sections: getSection(),
    template: {
        head: {
            links: [
                // {
                //     href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
                //     rel: 'stylesheet'
                // },
                // {
                //     href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
                //     rel: 'stylesheet'
                // },
                // {
                //     href: 'https://fonts.googleapis.com/css?family=Material+Icons',
                //     rel: 'stylesheet'
                // },
                // {
                //     href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css',
                //     rel: 'stylesheet'
                // },
                // {
                //     href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css',
                //     rel: 'stylesheet'
                // }
            ]
        }
    },
    require: [
        path.join(__dirname, 'styleguide/global.requires.js'),
        path.join(__dirname, 'assets/css/main.scss'),
        path.join(__dirname, 'assets/css/icons/icons.scss')
    ],
    renderRootJsx: path.join(__dirname, 'styleguide/styleguide.root.js'),
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            scss: ['vue-style-loader', 'css-loader', 'sass-loader']
                        }
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        modules: false
                                    }
                                ]
                            ],
                            plugins: [
                                '@babel/plugin-transform-runtime',
                                '@babel/plugin-syntax-dynamic-import',
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-proposal-object-rest-spread'
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['vue-style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.s(c|a)ss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass'),
                                sassOptions: {
                                    fiber: require('fibers')
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 1000,
                                mimetype: 'application/font-woff'
                            }
                        }

                    ]
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file-loader'
                }
            ]
        },
        plugins: [new VueLoaderPlugin()],
        resolve: {
            alias: {
                // Relative path to your root dir (adjust accordingly)
                '@': path.resolve(__dirname, './'),
                '~': path.resolve(__dirname, './'),
                'vue$': 'vue/dist/vue.esm.js'
            },
            extensions: ['*', '.js', '.vue', '.json']
        }
    },
    usageMode: 'expand',
    styleguideDir: 'docs/components'
}
