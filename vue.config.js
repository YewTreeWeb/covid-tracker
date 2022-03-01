module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "./src/styles/helpers/functions";
        @import "./src/styles/helpers/variables";
        @import "./src/styles/helpers/mixins";
        `
      }
    }
  }
}
