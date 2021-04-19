const path = require('path')
module.exports = function override(config, env) {
   // New config, e.g. config.plugins.push...
   return {
      ...config,
      resolve: {
         alias: {
            '@components': path.resolve(__dirname, './src/components/'),
            '@store': path.resolve(__dirname, './src/store'),
            '@actions': path.resolve(__dirname, './src/actions/'),
            '@styles': path.resolve(__dirname, './src/styles/'),
            '@constants': path.resolve(__dirname, './src/constants/'),
            '@httpClient': path.resolve(__dirname, './src/httpClient/'),
            '@pages': path.resolve(__dirname, './src/pages/'),
            '@services': path.resolve(__dirname, './src/services/'),
            '@utils': path.resolve(__dirname, './src/utils/')

         }
      }

   }
}