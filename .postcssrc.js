module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue (args) {
        const { file } = args
        // console.log('rootValue -> file', file)
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}