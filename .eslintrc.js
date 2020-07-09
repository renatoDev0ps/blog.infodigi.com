{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["plugin:react/recommended", "airbnb"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "no-console": "off",
    "arrow-parens": ["error", "as-needed"],
    "radix": ["error", "as-needed"],
    "react/jsx-filename-extension": [
      0,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "import/prefer-default-export": 0,
    "react/require-default-props": 0
  }
}