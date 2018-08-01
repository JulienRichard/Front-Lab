const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const BrowserSync = require('browser-sync')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// -- CONFIG PATHS
const devPath = 'http://localhost:8080/'
const buildPath = '/Front-Lab/wp-content/themes/front-lab/dist/'

// -- WEBPACK
module.exports = env => {
  const config = {
    devServer: {
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    entry: {
      vendor: [
        'vue', './src/vendor.scss'
      ],
      app: ['./src/app.js']
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, 'dist/')
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'sass-loader']
          }))
        },
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint-friendly-formatter'),
            failOnError: false,
            failOnWarning: false
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules/foundation-sites')
          ]
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: {
            loader: 'vue-loader',
            options: {
              loaders: {
                scss: [
                  'vue-style-loader',
                  'css-loader',
                  'postcss-loader',
                  'sass-loader', {
                    loader: 'sass-resources-loader',
                    options: {
                      resources: [
                        path.resolve(__dirname, 'src/_global.scss') // global include settings & tools
                      ]
                    }
                  }
                ]
              }
            }
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'img/[name].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name].[ext]'
          }
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'masonry': 'masonry-layout',
        'isotope': 'isotope-layout'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
      new ProgressBarPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin({names: ['vendor']}),
      new webpack.HotModuleReplacementPlugin(),
      new StyleLintPlugin({
        configFile: '.stylelintrc'
      }),
      new ExtractTextPlugin('css/[name].css')
    ]
  }

  // Switch publicPath (Dev & Build)
  if (env.server) {
    config.output.publicPath = devPath
  } else {
    config.output.publicPath = buildPath
  }

  // Bundle Analyser
  if (env.server) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerHost: 'localhost',
        analyzerPort: 4000
      })
    )
  }

  // Uglify Js
  if (env.prod) {
    config.plugins.push(
      new UglifyJSPlugin()
    )
  }

  // BrowserSync server
  if (env.browserSync) {
    BrowserSync({
      proxy: 'http://localhost:8888/',
      port: 3000,
      files: ['**/*.php'],
      ghostMode: {
        clicks: false,
        location: false,
        forms: false,
        scroll: false
      },
      injectChanges: true,
      logFileChanges: true,
      logLevel: 'info',
      logPrefix: 'browserSync',
      notify: false,
      reloadDelay: 0
    })
  }

  return config
}
