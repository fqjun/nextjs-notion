// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

// module.exports = withBundleAnalyzer({
//   images: {
//     domains: ['']
//   }
// })

module.exports = {
  // time in seconds of no pages generating during static
  // generation before timing out
  staticPageGenerationTimeout: 600,
}