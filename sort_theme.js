const fs = require('fs');

const themeFilePath = './themes/Shibuya-color-theme.json';

const theme = JSON.parse(fs.readFileSync(themeFilePath).toString());

for (let index = 0; index < theme.tokenColors.length; index++) {
  const element = theme.tokenColors[index];
  const scopes = [];
  for (const scope of element.scope) {
    if (!scopes.includes(scope)) {
      scopes.push(scope);
    }
  }

  scopes.sort();

  theme.tokenColors[index].scope = scopes;
}

fs.writeFileSync(themeFilePath, JSON.stringify(theme));
