/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const path = require('path');
const fs = require('fs');

const assetPath = path.dirname(require.resolve('material-design-iconfont/package.json'));

module.exports = {
  name: 'ember-material-icons',

  treeForVendor() {
    return new Funnel(assetPath, {
      destDir: 'material-icons',
      include: ['css/*', 'fonts/*']
    });
  },

  included(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    this.importMaterialIcons(app);
  },

  importMaterialIcons(app) {
    const cssPath = 'vendor/material-icons/css';
    const fontsPath = 'vendor/material-icons/fonts';
    const absoluteFontsPath = path.join(assetPath, 'fonts');
    const fontsToImport = fs.readdirSync(absoluteFontsPath);

    fontsToImport.forEach((fontFilename) => {
      app.import(
        path.join(fontsPath, fontFilename),
        { destDir: '/assets' }
      );
    });

    app.import(path.join(cssPath, 'material-icons.css'));
  }
};
