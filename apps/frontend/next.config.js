const path = require('path')
const { StatsWriterPlugin } = require("webpack-stats-plugin");
const Visualizer = require('webpack-visualizer-plugin2');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {


    const analyzeBundles = process.env.ANALYZE_BUNDLE

    if (analyzeBundles) {
      const timestamp = Date.now()

      config.plugins.push(
        new StatsWriterPlugin({
          filename: path.join('..', 'stats', `${timestamp}.json`),
          fields: null,
          stats: { chunkModules: true },
        })
      )

      config.plugins.push(
        new Visualizer({
          filename: path.join('..', 'stats', `${timestamp}.html`),
        })
      )



    }

    // if (process.env.WEBPACK_BUNDLE) {
    //   config.plugins.push(new BundleAnalyzerPlugin({
    //     analyzerPort : 3020
    //   }))
    // }

    return config
  },
  i18n,
  reactStrictMode: false,
}

module.exports = nextConfig
