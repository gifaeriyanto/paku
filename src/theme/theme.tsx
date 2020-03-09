const fs = require('fs');
const path = require('path');

let customTheme = {};

try {
  if (fs.existsSync(path.join(__dirname, '../../../../paku.config.js'))) {
    customTheme = require('../../../../paku.config.js').theme;
  }
} catch (err) {
  console.warn(err);
}

const theme: any = customTheme;

export default theme;
