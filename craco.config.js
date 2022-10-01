const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#0396A6',
              '@black': '#565360',
              '@success-color': '#0396A6',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
