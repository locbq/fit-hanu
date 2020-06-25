module.exports = {
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  },
  "env": {
    "browser": true,
    "es2020": true,
    "node": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": 0,
    'no-console': 'off',
    "import/prefer-default-export": "off",
    "import/no-unresolved": [2, {commonjs: true, amd: true}],
    'max-len': 0
  }
};
